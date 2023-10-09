import * as fs from 'fs';
import * as child_process from 'child_process';

function replaceString(fileName: string, stringToReplace: string) {
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

    return replacementNumber;
}

function executeCommand(command: string) {
    const result = child_process.spawnSync(command, {
        shell: true,
        stdio: 'inherit'
    });

    if (result.status !== 0) {
        throw new Error(`Error executing command: ${command}`);
    }
}

function main() {
    const fileName = process.argv[2];
    const stringToReplace = process.argv[3];
    const mainBranchName = process.argv[4] || 'main';

    if (!fileName || !stringToReplace) {
        console.error('Please provide both fileName and stringToReplace as arguments.');
        process.exit(1);
    }

    try {
        const replacementNumber = replaceString(fileName, stringToReplace);

        // Step 0
        executeCommand(`git checkout ${mainBranchName}`);

        // Step 1
        const tempBranchName = `temp-autosync-branch-${replacementNumber}`;
        executeCommand(`git checkout -b ${tempBranchName}`);

        // Step 2
        executeCommand(`git add ${fileName}`);
        executeCommand(`git commit -m "Automated commit: Replace ${stringToReplace}"`);

        // Step 3
        executeCommand(`git push origin ${tempBranchName}`);

        // Step 4
        executeCommand(`git checkout ${mainBranchName}`);

        // Step 5
        executeCommand(`git pull`);

        console.log('Operation completed successfully.');
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
}

main();
