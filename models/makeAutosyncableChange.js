"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var child_process = require("child_process");
function replaceString(fileName, stringToReplace, mainBranchName) {
    if (mainBranchName === void 0) { mainBranchName = 'main'; }
    var content = fs.readFileSync(fileName, 'utf-8');
    var regex = new RegExp("".concat(stringToReplace, "(\\d+)"), 'g');
    var matches = content.match(regex);
    if (!matches) {
        throw new Error("String \"".concat(stringToReplace, "\" not found in the file."));
    }
    var maxNumber = 0;
    matches.forEach(function (match) {
        var num = parseInt(match.replace(stringToReplace, ''), 10);
        if (!isNaN(num) && num > maxNumber) {
            maxNumber = num;
        }
    });
    var replacementNumber = maxNumber + 1;
    var updatedContent = content.replace(regex, "".concat(stringToReplace).concat(replacementNumber));
    fs.writeFileSync(fileName, updatedContent, 'utf-8');
    console.log("String \"".concat(stringToReplace, "\" replaced successfully."));
    // Remember replacementNumber for later use
    return replacementNumber;
}
function executeCommand(command) {
    var result = child_process.execSync(command, { encoding: 'utf-8' });
    console.log(result);
}
var fileName = process.argv[2];
var stringToReplace = process.argv[3];
var mainBranchName = process.argv[4] || 'main';
if (!fileName || !stringToReplace) {
    console.error('Please provide both fileName and stringToReplace as arguments.');
    process.exit(1);
}
try {
    var replacementNumber = replaceString(fileName, stringToReplace, mainBranchName);
    // Checkout to main branch
    executeCommand("git checkout ".concat(mainBranchName));
    // Get today's date in the format yyyy-mm-dd
    var today = new Date().toISOString().slice(0, 10);
    // Create and checkout a new branch
    var newBranchName = "temp-autosync-branch-".concat(today, "-").concat(replacementNumber);
    executeCommand("git checkout -b ".concat(newBranchName));
    // Commit changes to the new branch
    executeCommand("git add .");
    executeCommand("git commit -m \"Auto-synced ".concat(stringToReplace, "\""));
    // Push changes to origin
    executeCommand("git push origin ".concat(newBranchName));
    // Switch back to main branch and pull
    executeCommand("git checkout ".concat(mainBranchName));
    executeCommand("git pull");
}
catch (error) {
    console.error(error.message);
    process.exit(1);
}
