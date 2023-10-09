import { execSync } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';
import { v4 as uuidv4 } from 'uuid';

const fileName = process.argv[2];
const stringToReplace = process.argv[3];
const mainBranchName = process.argv[4] || "main";

if (!fileName || !stringToReplace) {
  console.error("Usage: node script.js <fileName> <stringToReplace> [mainBranchName]");
  process.exit(1);
}

const filePath = path.resolve(__dirname, fileName);

if (!fs.existsSync(filePath)) {
  console.error(`File ${fileName} not found.`);
  process.exit(1);
}

const fileContents = fs.readFileSync(filePath, 'utf-8');

if (!fileContents.includes(stringToReplace)) {
  console.error(`String '${stringToReplace}' not found in file.`);
  process.exit(1);
}

const uuid = uuidv4();

const updatedContents = fileContents.replace(new RegExp(stringToReplace, 'g'), `${stringToReplace}-${uuid}`);

fs.writeFileSync(filePath, updatedContents);

try {
  execSync(`git checkout ${mainBranchName}`);
  const dateOfToday = new Date().toISOString().slice(0, 16).replace(/[-T:]/g, '-');
  execSync(`git checkout -b temp-autosync-branch-${dateOfToday}-${uuid}`);
  execSync('git add .');
  execSync('git commit -m "Auto-sync changes"');
  execSync(`git push origin temp-autosync-branch-${dateOfToday}-${uuid}`);
  execSync(`gh pr create --base ${mainBranchName} --head temp-autosync-branch-${dateOfToday}-${uuid} --title "Auto-sync changes" --body "Automatically synced changes"`);
  execSync(`git checkout ${mainBranchName}`);
  execSync('git pull');
  console.log(`Pull request created: https://github.com/<username>/<repository>/pulls`);
} catch (error) {
  console.error(`Error: ${error.message}`);
  process.exit(1);
}
