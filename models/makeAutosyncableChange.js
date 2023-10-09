"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var child_process = require("child_process");
function replaceString(fileName, stringToReplace) {
    var content = fs.readFileSync(fileName, 'utf-8');
    var regex = new RegExp("".concat(stringToReplace, "(\\d*)"), 'g');
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
    return replacementNumber;
}
function executeCommand(command) {
    var result = child_process.spawnSync(command, {
        shell: true,
        stdio: 'inherit'
    });
    if (result.status !== 0) {
        throw new Error("Error executing command: ".concat(command));
    }
}
function main() {
    var fileName = process.argv[2];
    var stringToReplace = process.argv[3];
    var mainBranchName = process.argv[4] || 'main';
    if (!fileName || !stringToReplace) {
        console.error('Please provide both fileName and stringToReplace as arguments.');
        process.exit(1);
    }
    try {
        var replacementNumber = replaceString(fileName, stringToReplace);
        // Step 0
        executeCommand("git checkout ".concat(mainBranchName));
        // Step 1
        var tempBranchName = "temp-autosync-branch-".concat(replacementNumber);
        executeCommand("git checkout -b ".concat(tempBranchName));
        // Step 2
        executeCommand("git add ".concat(fileName));
        executeCommand("git commit -m \"Automated commit: Replace ".concat(stringToReplace, "\""));
        // Step 3
        executeCommand("git push origin ".concat(tempBranchName));
        // Step 4
        executeCommand("git checkout ".concat(mainBranchName));
        // Step 5
        executeCommand("git pull");
        console.log('Operation completed successfully.');
    }
    catch (error) {
        console.error(error.message);
        process.exit(1);
    }
}
main();
