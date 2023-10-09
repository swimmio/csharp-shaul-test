import * as fs from 'fs';
import * as child_process from 'child_process';
import { v4 as uuidv4 } from 'uuid';

const [fileName, stringToReplace, mainBranchName = 'main'] = process.argv.slice(2);

if (!fileName || !stringToReplace) {
  console.error('Usage: node script.js fileName stringToReplace [mainBranchName]');
  process.exit(1);
}

try {
  const fileContents = fs.readFileSync(fileName, 'utf-8');
  if (!fileContents.includes(stringToReplace)) {
    throw new Error(`String '${stringToReplace}' not found in the file.`);
  }

  const replacedContents = fileContents.replace(
    new RegExp(stringToReplace, 'g'),
    `${stringToReplace}-${uuidv4()}`
  );

  fs.writeFileSync(fileName, replacedContents);

  const uuid = uuidv4();
  const dateOfToday = new Date().toISOString().slice(0, 19).replace(/[-T:/]/g, '-');

  // Step 0
  child_process.execSync(`git checkout ${mainBranchName}`);

  // Step 1
  child_process.execSync(`git checkout -b temp-autosync-branch-${dateOfToday}-${uuid}`);

  // Step 2
  child_process.execSync(`git add ${fileName}`);
  child_process.execSync(`git commit -m "Auto sync: Replaced ${stringToReplace}"`);

  // Step 3
  child_process.execSync(`git push origin temp-autosync-branch-${dateOfToday}-${uuid}`);

  // Step 4
  const pullRequestName = `temp-autosync-branch-${dateOfToday}-${uuid}`;
  child_process.execSync(`gh pr create --base ${mainBranchName} --head ${pullRequestName} --title ${pullRequestName}`);

  // Step 5
  child_process.execSync(`git checkout ${mainBranchName}`);

  // Step 6
  child_process.execSync(`git pull`);

  // Step 7
  console.log(`Pull request created: https://github.com/your-username/your-repo/pull/new/${mainBranchName}...${pullRequestName}`);
} catch (error) {
  console.error(error.message);
  process.exit(1);
}
