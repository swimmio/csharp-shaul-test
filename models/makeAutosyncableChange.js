"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var child_process = require("child_process");
var uuid_1 = require("uuid");
var _a = process.argv.slice(2), fileName = _a[0], stringToReplace = _a[1], _b = _a[2], mainBranchName = _b === void 0 ? 'main' : _b;
if (!fileName || !stringToReplace) {
    console.error('Usage: node script.js fileName stringToReplace [mainBranchName]');
    process.exit(1);
}
try {
    var fileContents = fs.readFileSync(fileName, 'utf-8');
    if (!fileContents.includes(stringToReplace)) {
        throw new Error("String '".concat(stringToReplace, "' not found in the file."));
    }
    var replacedContents = fileContents.replace(new RegExp(stringToReplace, 'g'), "".concat(stringToReplace, "-").concat((0, uuid_1.v4)()));
    fs.writeFileSync(fileName, replacedContents);
    var uuid = (0, uuid_1.v4)();
    var dateOfToday = new Date().toISOString().slice(0, 19).replace(/[-T:/]/g, '-');
    // Step 0
    child_process.execSync("git checkout ".concat(mainBranchName));
    // Step 1
    child_process.execSync("git checkout -b temp-autosync-branch-".concat(dateOfToday, "-").concat(uuid));
    // Step 2
    child_process.execSync("git add ".concat(fileName));
    child_process.execSync("git commit -m \"Auto sync: Replaced ".concat(stringToReplace, "\""));
    // Step 3
    child_process.execSync("git push origin temp-autosync-branch-".concat(dateOfToday, "-").concat(uuid));
    // Step 4
    var pullRequestName = "temp-autosync-branch-".concat(dateOfToday, "-").concat(uuid);
    child_process.execSync("gh pr create --base ".concat(mainBranchName, " --head ").concat(pullRequestName, " --title ").concat(pullRequestName, " --body \"Auto-generated pull request\""));
    // Step 5
    child_process.execSync("git checkout ".concat(mainBranchName));
    // Step 6
    child_process.execSync("git pull");
    // Step 7
    console.log("Pull request created: https://github.com/your-username/your-repo/pull/new/".concat(mainBranchName, "...").concat(pullRequestName));
}
catch (error) {
    console.error(error.message);
    process.exit(1);
}
