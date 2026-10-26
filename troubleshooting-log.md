# Jenkins Pipeline Troubleshooting Log

Project: Jenkins Pipeline Debugging Exercise

Repository: <GitHub repository URL>

Operating System: Windows

Jenkins Version: <actual version>

Node.js Version: <actual version>

npm Version: <actual version>

Git Version: <actual version>

## Bug 1 - Environment Keyword Typo

Problem:
The environment keyword was misspelled.

Console Output:
<Paste the actual error message here>

Fix:
Changed enviroment to environment.

Commit:
Fix bug 1 - environment keyword

## Bug 2 - Invalid Repository URL

Problem:
The Checkout stage used an invalid repository URL.

Console Output:
<Paste the actual error message here>

Fix:
Replaced the invalid URL with the actual GitHub repository URL.

Commit:
Fix bug 2 - repository URL

## Bug 3 - Build Command Typo

Problem:
The build command used the incorrect npm script name.

Console Output:
<Paste the actual error message here>

Fix:
Changed npm run biuld to npm run build.

Commit:
Fix bug 3 - build command

## Bug 4 - Password Exposure

Problem:
The Jenkinsfile printed the DB_PASSWORD environment variable.

Evidence:
<Record what appeared in Console Output, without including any real secret>

Fix:
Removed the command that printed the password.

Commit:
Fix bug 4 - remove password output

## Bug 5 - Missing Post Block

Problem:
The pipeline had no post block to report failures.

Fix:
Added success, failure and always post conditions.

Commit:
Fix bug 5 - add post block

## Final Verification

Checkout: <Pass/Fail>
Build: <Pass/Fail>
Test: <Pass/Fail>
Deploy to Production: <Pass/Fail/Skipped>

Post failure handling tested: <Yes/No>

Final build number: <build number>

Screenshot: <screenshot filename>