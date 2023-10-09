import * as fs from 'fs';
import { execSync } from 'child_process';
import { v4 as uuidv4 } from 'uuid';

const [fileName, stringToReplace, mainBranchName = 'main'] = process.argv.slice(2);

if (!fileName || !stringToReplace) {
  console.error('Usage: node script.js <fileName> <stringToReplace> [mainBranchName]');
  process.exit(1);
}

const content = fs.readFileSync(fileName, 'utf-8');

if (!content.includes(stringToReplace)) {
  console.error(`Error: String '${stringToReplace}' not found in file.`);
  process.exit(1);
}

const replacedContent = content.replace(new RegExp(`${stringToReplace}-[0-9a-f-]+`, 'g'), `${stringToReplace}-${uuidv4()}`);
fs.writeFileSync(fileName, replacedContent, 'utf-8');

try {
  execSync(`git checkout ${mainBranchName}`);
  const dateOfToday = new Date().toISOString().slice(0, 16).replace(/[-T:]/g, '-');
  const tempBranchName = `temp-autosync-branch-${dateOfToday}-${uuidv4()}`;
  execSync(`git checkout -b ${tempBranchName}`);
  execSync(`git add ${fileName}`);
  execSync(`git commit -m "Auto-sync: Replace ${stringToReplace} with ${stringToReplace}-<uuid>"`);
  execSync(`git push origin ${tempBranchName}`);
  execSync(`git checkout ${mainBranchName}`);
  execSync(`git pull`);
} catch (error) {
  console.error(`Error: ${error.message}`);
  process.exit(1);
}
