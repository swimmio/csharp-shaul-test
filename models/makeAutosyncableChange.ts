import { execSync } from 'child_process';
import * as fs from 'fs';

const fileName = process.argv[2];
const stringToReplace = process.argv[3];
const mainBranchName = process.argv[4] || 'main';

if (!fileName || !stringToReplace) {
  throw new Error('Usage: node script.ts <fileName> <stringToReplace> [mainBranchName]');
}

const dateOfToday = new Date().toISOString().replace(/[^0-9]/g, '').slice(0, 14);

const filePath = `./${fileName}`;

if (!fs.existsSync(filePath)) {
  throw new Error(`File ${fileName} does not exist.`);
}

const fileContent = fs.readFileSync(filePath, 'utf-8');

if (!fileContent.includes(stringToReplace)) {
  throw new Error(`String ${stringToReplace} not found in ${fileName}.`);
}

const updatedContent = fileContent.replace(
  new RegExp(stringToReplace, 'g'),
  `${stringToReplace}${dateOfToday}`
);

fs.writeFileSync(filePath, updatedContent, 'utf-8');

try {
  execSync('git pull --rebase');
  execSync(`git checkout ${mainBranchName}`);
  execSync(`git checkout -b temp-autosync-branch-${dateOfToday}`);
  execSync(`git add ${fileName}`);
  execSync(`git commit -m "Auto sync ${stringToReplace}"`);
  execSync(`git push origin temp-autosync-branch-${dateOfToday}`);
  execSync(`gh pr create --base ${mainBranchName} --head temp-autosync-branch-${dateOfToday} --title "Auto Sync ${stringToReplace}" --body "Auto Sync ${stringToReplace}"`);
  execSync(`git checkout ${mainBranchName}`);
  execSync('git pull');
  console.log(`Pull request created: https://github.com/user/repository/pull/new/temp-autosync-branch-${dateOfToday}`);
} catch (error) {
  console.error(error);
  process.exit(1);
}