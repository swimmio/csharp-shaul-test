"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
function replaceString(fileName, stringToReplace) {
    // Check if the file exists
    if (!fs.existsSync(fileName)) {
        console.error("Error: File '".concat(fileName, "' not found."));
        return;
    }
    // Get the current time in milliseconds
    var currentTime = new Date().getTime();
    // Read the file content
    var content = fs.readFileSync(fileName, 'utf8');
    // Replace the string
    content = content.replace(new RegExp(stringToReplace, 'g'), "".concat(stringToReplace).concat(currentTime));
    // Write the updated content back to the file
    fs.writeFileSync(fileName, content);
    console.log("String '".concat(stringToReplace, "' replaced with '").concat(stringToReplace).concat(currentTime, "' in '").concat(fileName, "'."));
}
var fileName = process.argv[2];
var stringToReplace = process.argv[3];
if (!fileName || !stringToReplace) {
    console.error("Usage: node replace_string.ts <fileName> <stringToReplace>");
    process.exit(1);
}
replaceString(fileName, stringToReplace);
