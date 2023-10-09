"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var child_process_1 = require("child_process");
var fs = require("fs");
var uuid_1 = require("uuid");
var fileName = process.argv[2];
var stringToReplace = process.argv[3];
var mainBranchName = process.argv[4] || 'main';
if (!fileName || !stringToReplace) {
    console.error('Usage: node script.js <fileName> <stringToReplace> [<mainBranchName>]');
    process.exit(1);
}
try {
    var fileContent = fs.readFileSync(fileName, 'utf8');
    if (!fileContent.includes(stringToReplace)) {
        throw new Error("String \"".concat(stringToReplace, "\" not found in the file."));
    }
    var uuidValue = (0, uuid_1.v4)();
    var replacedContent = fileContent.replace(new RegExp(stringToReplace, 'g'), "".concat(stringToReplace, "-").concat(uuidValue));
    fs.writeFileSync(fileName, replacedContent, 'utf8');
    var tempBranchName = "temp-autosync-branch-".concat((new Date()).toISOString().split('T')[0].replace(/-/g, ''), "-").concat(uuidValue);
    (0, child_process_1.execSync)("git checkout ".concat(mainBranchName));
    (0, child_process_1.execSync)("git checkout -b ".concat(tempBranchName));
    (0, child_process_1.execSync)("git add ".concat(fileName));
    (0, child_process_1.execSync)("git commit -m \"Auto sync changes\"");
    (0, child_process_1.execSync)("git push origin ".concat(tempBranchName));
    (0, child_process_1.execSync)("git checkout ".concat(mainBranchName));
    (0, child_process_1.execSync)("git pull");
    console.log('Script executed successfully.');
}
catch (error) {
    console.error(error.message);
    process.exit(1);
}
