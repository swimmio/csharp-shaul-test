import * as fs from 'fs';

function replaceString(fileName: string, stringToReplace: string): void {
    // Check if the file exists
    if (!fs.existsSync(fileName)) {
        console.error(`Error: File '${fileName}' not found.`);
        return;
    }

    // Get the current time in milliseconds
    const currentTime = new Date().getTime();

    // Read the file content
    let content = fs.readFileSync(fileName, 'utf8');

    // Replace the string
    content = content.replace(new RegExp(stringToReplace, 'g'), `${stringToReplace}${currentTime}`);

    // Write the updated content back to the file
    fs.writeFileSync(fileName, content);

    console.log(`String '${stringToReplace}' replaced with '${stringToReplace}${currentTime}' in '${fileName}'.`);
}

const fileName = process.argv[2];
const stringToReplace = process.argv[3];

if (!fileName || !stringToReplace) {
    console.error("Usage: node replace_string.ts <fileName> <stringToReplace>");
    process.exit(1);
}

replaceString(fileName, stringToReplace);
