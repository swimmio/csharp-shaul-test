"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var child_process_1 = require("child_process");
var uuid_1 = require("uuid");
var _a = process.argv.slice(2), fileName = _a[0], stringToReplace = _a[1], _b = _a[2], mainBranchName = _b === void 0 ? 'main' : _b;
if (!fileName || !stringToReplace) {
    console.error('Usage: node script.js <fileName> <stringToReplace> [mainBranchName]');
    process.exit(1);
}
var content = fs.readFileSync(fileName, 'utf-8');
if (!content.includes(stringToReplace)) {
    console.error("Error: String '".concat(stringToReplace, "' not found in file."));
    process.exit(1);
}
var replacedContent = content.replace(new RegExp("".concat(stringToReplace, "-[0-9a-f-]+"), 'g'), "".concat(stringToReplace, "-").concat((0, uuid_1.v4)()));
fs.writeFileSync(fileName, replacedContent, 'utf-8');
try {
    (0, child_process_1.execSync)("git checkout ".concat(mainBranchName));
    var dateOfToday = new Date().toISOString().slice(0, 16).replace(/[-T:]/g, '-');
    var tempBranchName = "temp-autosync-branch-".concat(dateOfToday, "-").concat((0, uuid_1.v4)());
    (0, child_process_1.execSync)("git checkout -b ".concat(tempBranchName));
    (0, child_process_1.execSync)("git add ".concat(fileName));
    (0, child_process_1.execSync)("git commit -m \"Auto-sync: Replace ".concat(stringToReplace, " with ").concat(stringToReplace, "-<uuid>\""));
    (0, child_process_1.execSync)("git push origin ".concat(tempBranchName));
    (0, child_process_1.execSync)("git checkout ".concat(mainBranchName));
    (0, child_process_1.execSync)("git pull");
}
catch (error) {
    console.error("Error: ".concat(error.message));
    process.exit(1);
}
