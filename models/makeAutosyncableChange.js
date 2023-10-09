"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var child_process_1 = require("child_process");
var fs = require("fs");
var path = require("path");
var uuid_1 = require("uuid");
var fileName = process.argv[2];
var stringToReplace = process.argv[3];
var mainBranchName = process.argv[4] || "main";
if (!fileName || !stringToReplace) {
    console.error("Usage: node script.js <fileName> <stringToReplace> [mainBranchName]");
    process.exit(1);
}
var filePath = path.resolve(__dirname, fileName);
if (!fs.existsSync(filePath)) {
    console.error("File ".concat(fileName, " not found."));
    process.exit(1);
}
var fileContents = fs.readFileSync(filePath, 'utf-8');
if (!fileContents.includes(stringToReplace)) {
    console.error("String '".concat(stringToReplace, "' not found in file."));
    process.exit(1);
}
var uuid = (0, uuid_1.v4)();
var updatedContents = fileContents.replace(new RegExp(stringToReplace, 'g'), "".concat(stringToReplace, "-").concat(uuid));
fs.writeFileSync(filePath, updatedContents);
try {
    (0, child_process_1.execSync)("git checkout ".concat(mainBranchName));
    var dateOfToday = new Date().toISOString().slice(0, 16).replace(/[-T:]/g, '-');
    (0, child_process_1.execSync)("git checkout -b temp-autosync-branch-".concat(dateOfToday, "-").concat(uuid));
    (0, child_process_1.execSync)('git add .');
    (0, child_process_1.execSync)('git commit -m "Auto-sync changes"');
    (0, child_process_1.execSync)("git push origin temp-autosync-branch-".concat(dateOfToday, "-").concat(uuid));
    (0, child_process_1.execSync)("gh pr create --base ".concat(mainBranchName, " --head temp-autosync-branch-").concat(dateOfToday, "-").concat(uuid, " --title \"Auto-sync changes\" --body \"Automatically synced changes\""));
    (0, child_process_1.execSync)("git checkout ".concat(mainBranchName));
    (0, child_process_1.execSync)('git pull');
    console.log("Pull request created: https://github.com/<username>/<repository>/pulls");
}
catch (error) {
    console.error("Error: ".concat(error.message));
    process.exit(1);
}
