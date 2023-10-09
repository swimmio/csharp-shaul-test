import * as fs from 'fs';
import * as child_process from 'child_process';

function replaceString(
  fileName: string,
  stringToReplace: string,
  mainBranchName: string = 'main'
) {
  const content = fs.readFileSync(fileName, 'utf-8');
  const regex = new RegExp(`${stringToReplace}(\\d+)`, 'g');
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

  // Remember replacementNumber for later use
  return replacementNumber;
}

function executeCommand(command: string): void {
  const result = child_process.execSync(command, { encoding: 'utf-8' });
  console.log(result);
}

const fileName = process.argv[2];
const stringToReplace = process.argv[3];
const mainBranchName = process.argv[4] || 'main';

if (!fileName || !stringToReplace) {
  console.error('Please provide both fileName and stringToReplace as arguments.');
  process.exit(1);
}

try {
  const replacementNumber = replaceString(fileName, stringToReplace, mainBranchName);

  // Checkout to main branch
  executeCommand(`git checkout ${mainBranchName}`);

  // Get today's date in the format yyyy-mm-dd
  const today = new Date().toISOString().slice(0, 10);

  // Create and checkout a new branch
  const newBranchName = `temp-autosync-branch-${today}-${replacementNumber}`;
  executeCommand(`git checkout -b ${newBranchName}`);

  // Commit changes to the new branch
  executeCommand(`git add .`);
  executeCommand(`git commit -m "Auto-synced ${stringToReplace}"`);

  // Push changes to origin
  executeCommand(`git push origin ${newBranchName}`);

  // Switch back to main branch and pull
  executeCommand(`git checkout ${mainBranchName}`);
  executeCommand(`git pull`);
} catch (error) {
  console.error(error.message);
  process.exit(1);
}
