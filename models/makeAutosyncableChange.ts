import { execSync } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';
import { v4 as uuidv4 } from 'uuid';

const fileName = process.argv[2];
const stringToReplace = process.argv[3];
const mainBranchName = process.argv[4] || 'main';

if (!fileName || !stringToReplace) {
  console.error('Usage: node script.js <fileName> <stringToReplace> [<mainBranchName>]');
  process.exit(1);
}

try {
  const fileContent = fs.readFileSync(fileName, 'utf8');
  if (!fileContent.includes(stringToReplace)) {
    throw new Error(`String "${stringToReplace}" not found in the file.`);
  }

  const uuidValue = uuidv4();
  const replacedContent = fileContent.replace(new RegExp(stringToReplace, 'g'), `${stringToReplace}-${uuidValue}`);
  fs.writeFileSync(fileName, replacedContent, 'utf8');

  const tempBranchName = `temp-autosync-branch-${(new Date()).toISOString().split('T')[0].replace(/-/g, '')}-${uuidValue}`;
  execSync(`git checkout ${mainBranchName}`);
  execSync(`git checkout -b ${tempBranchName}`);
  execSync(`git add ${fileName}`);
  execSync(`git commit -m "Auto sync changes"`);
  execSync(`git push origin ${tempBranchName}`);
  execSync(`git checkout ${mainBranchName}`);
  execSync(`git pull`);

  console.log('Script executed successfully.');
} catch (error) {
  console.error(error.message);
  process.exit(1);
}
