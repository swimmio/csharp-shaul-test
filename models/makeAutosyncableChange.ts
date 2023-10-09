import * as fs from 'fs';
import { execSync } from 'child_process';

function replaceString(fileName: string, stringToReplace: string, mainBranchName?: string) {
    const content = fs.readFileSync(fileName, 'utf-8');
    const regex = new RegExp(`${stringToReplace}(\\d*)`, 'g');
    const matches = content.match(regex);

    if (!matches) {
        throw new Error(`String "${stringToReplace}" not found in the file.`);
    }

    let maxNumber = 0;
    matches.forEach(match => {
        const num = parseInt(match.replace(stringToReplace, ''), 10);
        if (!isNaN(num) && num > maxNumber) {
            maxNumber = num;
        }
    });

    const replacementNumber = maxNumber + 1;

    const updatedContent = content.replace(
        regex,
        `${stringToReplace}${replacementNumber}`
    );

    fs.writeFileSync(fileName, updatedContent, 'utf-8');
    console.log(`String "${stringToReplace}" replaced successfully.`);

    if (mainBranchName) {
        try {
            execSync(`git checkout -b temp-autosync-branch-${replacementNumber}`);
            execSync('git add .');
            execSync(`git commit -m "Auto-sync: Replaced ${stringToReplace} with ${stringToReplace}${replacementNumber}"`);
            execSync('git push origin HEAD');
            execSync(`git checkout ${mainBranchName}`);
            execSync(`git pull origin ${mainBranchName}`);
        } catch (error) {
            console.error('Error in Git operations:', error.message);
            process.exit(1);
        }
    }
}

const fileName = process.argv[2];
const stringToReplace = process.argv[3];
const mainBranchName = process.argv[4];

if (!fileName || !stringToReplace) {
    console.error('Please provide both fileName and stringToReplace as arguments.');
    process.exit(1);
}

replaceString(fileName, stringToReplace, mainBranchName);
