"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var child_process_1 = require("child_process");
function replaceString(fileName, stringToReplace, mainBranchName) {
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
    if (mainBranchName) {
        try {
            (0, child_process_1.execSync)("git checkout -b temp-autosync-branch-".concat(replacementNumber));
            (0, child_process_1.execSync)('git add .');
            (0, child_process_1.execSync)("git commit -m \"Auto-sync: Replaced ".concat(stringToReplace, " with ").concat(stringToReplace).concat(replacementNumber, "\""));
            (0, child_process_1.execSync)('git push origin HEAD');
            (0, child_process_1.execSync)("git checkout ".concat(mainBranchName));
            (0, child_process_1.execSync)("git pull origin ".concat(mainBranchName));
        }
        catch (error) {
            console.error('Error in Git operations:', error.message);
            process.exit(1);
        }
    }
}
var fileName = process.argv[2];
var stringToReplace = process.argv[3];
var mainBranchName = process.argv[4];
if (!fileName || !stringToReplace) {
    console.error('Please provide both fileName and stringToReplace as arguments.');
    process.exit(1);
}
replaceString(fileName, stringToReplace, mainBranchName);
