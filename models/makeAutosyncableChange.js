"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var child_process_1 = require("child_process");
var fs = require("fs");
var fileName = process.argv[2];
var stringToReplace = process.argv[3];
var mainBranchName = process.argv[4] || 'main';
if (!fileName || !stringToReplace) {
    throw new Error('Usage: node script.ts <fileName> <stringToReplace> [mainBranchName]');
}
var dateOfToday = new Date().toISOString().replace(/[^0-9]/g, '').slice(0, 14);
var filePath = "./".concat(fileName);
if (!fs.existsSync(filePath)) {
    throw new Error("File ".concat(fileName, " does not exist."));
}
var fileContent = fs.readFileSync(filePath, 'utf-8');
if (!fileContent.includes(stringToReplace)) {
    throw new Error("String ".concat(stringToReplace, " not found in ").concat(fileName, "."));
}
var updatedContent = fileContent.replace(new RegExp(stringToReplace, 'g'), "".concat(stringToReplace).concat(dateOfToday));
fs.writeFileSync(filePath, updatedContent, 'utf-8');
try {
    (0, child_process_1.execSync)('git pull --rebase');
    (0, child_process_1.execSync)("git checkout ".concat(mainBranchName));
    (0, child_process_1.execSync)("git checkout -b temp-autosync-branch-".concat(dateOfToday));
    (0, child_process_1.execSync)("git add ".concat(fileName));
    (0, child_process_1.execSync)("git commit -m \"Auto sync ".concat(stringToReplace, "\""));
    (0, child_process_1.execSync)("git push origin temp-autosync-branch-".concat(dateOfToday));
    (0, child_process_1.execSync)("gh pr create --base ".concat(mainBranchName, " --head temp-autosync-branch-").concat(dateOfToday, " --title \"Auto Sync ").concat(stringToReplace, "\" --body \"Auto Sync ").concat(stringToReplace, "\""));
    (0, child_process_1.execSync)("git checkout ".concat(mainBranchName));
    (0, child_process_1.execSync)('git pull');
    console.log("Pull request created: https://github.com/user/repository/pull/new/temp-autosync-branch-".concat(dateOfToday));
}
catch (error) {
    console.error(error);
    process.exit(1);
}
