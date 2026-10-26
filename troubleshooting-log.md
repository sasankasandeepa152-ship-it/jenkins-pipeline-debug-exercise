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
<Branch indexing
 > git.exe rev-parse --resolve-git-dir C:\Users\U S E R\AppData\Local\Jenkins\.jenkins\caches\git-97c5d962b734107237c3e473e23b9cc9\.git # timeout=10
Setting origin to https://github.com/sasankasandeepa152-ship-it/jenkins-pipeline-debug-exercise.git
 > git.exe config remote.origin.url https://github.com/sasankasandeepa152-ship-it/jenkins-pipeline-debug-exercise.git # timeout=10
Fetching origin...
Fetching upstream changes from origin
 > git.exe --version # timeout=10
 > git --version # 'git version 2.55.0.windows.5'
 > git.exe config --get remote.origin.url # timeout=10
 > git.exe fetch --no-tags --force --progress -- origin +refs/heads/*:refs/remotes/origin/* # timeout=10
Seen branch in repository origin/main
Seen 1 remote branch
Obtained Jenkinsfile from e372e6a1a3a84546217cf11ccfa97dacedf7a438
org.codehaus.groovy.control.MultipleCompilationErrorsException: startup failed:
WorkflowScript: 4: Undefined section "enviroment" @ line 4, column 5.
       enviroment {
       ^

1 error

	at org.codehaus.groovy.control.ErrorCollector.failIfErrors(ErrorCollector.java:309)
	at org.codehaus.groovy.control.CompilationUnit.applyToPrimaryClassNodes(CompilationUnit.java:1107)
	at org.codehaus.groovy.control.CompilationUnit.doPhaseOperation(CompilationUnit.java:624)
	at org.codehaus.groovy.control.CompilationUnit.processPhaseOperations(CompilationUnit.java:602)
	at org.codehaus.groovy.control.CompilationUnit.compile(CompilationUnit.java:579)
	at groovy.lang.GroovyClassLoader.doParseClass(GroovyClassLoader.java:323)
	at groovy.lang.GroovyClassLoader.parseClass(GroovyClassLoader.java:293)
	at PluginClassLoader for script-security//org.jenkinsci.plugins.scriptsecurity.sandbox.groovy.GroovySandbox$Scope.parse(GroovySandbox.java:162)
	at PluginClassLoader for workflow-cps//org.jenkinsci.plugins.workflow.cps.CpsGroovyShell.doParse(CpsGroovyShell.java:202)
	at PluginClassLoader for workflow-cps//org.jenkinsci.plugins.workflow.cps.CpsGroovyShell.reparse(CpsGroovyShell.java:186)
	at PluginClassLoader for workflow-cps//org.jenkinsci.plugins.workflow.cps.CpsFlowExecution.parseScript(CpsFlowExecution.java:670)
	at PluginClassLoader for workflow-cps//org.jenkinsci.plugins.workflow.cps.CpsFlowExecution.start(CpsFlowExecution.java:616)
	at PluginClassLoader for workflow-job//org.jenkinsci.plugins.workflow.job.WorkflowRun.run(WorkflowRun.java:368)
	at hudson.model.ResourceController.execute(ResourceController.java:97)
	at hudson.model.Executor.run(Executor.java:456)
Finished: FAILURE>

Fix:
Changed enviroment to environment.

Commit:
Fix bug 1 - environment keyword

## Bug 2 - Invalid Repository URL

Problem:
The Checkout stage used an invalid repository URL.

Console Output:
<Started by user Tharindu Sasanka Sandeepa Abeygunawardhana
 > git.exe rev-parse --resolve-git-dir C:\Users\U S E R\AppData\Local\Jenkins\.jenkins\caches\git-97c5d962b734107237c3e473e23b9cc9\.git # timeout=10
Setting origin to https://github.com/sasankasandeepa152-ship-it/jenkins-pipeline-debug-exercise.git
 > git.exe config remote.origin.url https://github.com/sasankasandeepa152-ship-it/jenkins-pipeline-debug-exercise.git # timeout=10
Fetching origin...
Fetching upstream changes from origin
 > git.exe --version # timeout=10
 > git --version # 'git version 2.55.0.windows.5'
 > git.exe config --get remote.origin.url # timeout=10
 > git.exe fetch --no-tags --force --progress -- origin +refs/heads/*:refs/remotes/origin/* # timeout=10
Seen branch in repository origin/main
Seen 1 remote branch
Obtained Jenkinsfile from b111e36a14b3c91a43aec300e45f34505de88b9a
[Pipeline] Start of Pipeline
[Pipeline] node
Running on Jenkins in C:\Users\U S E R\AppData\Local\Jenkins\.jenkins\workspace\ins-pipeline-debug-exercise_main
[Pipeline] {
[Pipeline] stage
[Pipeline] { (Declarative: Checkout SCM)
[Pipeline] checkout
Selected Git installation does not exist. Using Default
The recommended git tool is: NONE
No credentials specified
Cloning the remote Git repository
Cloning with configured refspecs honoured and without tags
Cloning repository https://github.com/sasankasandeepa152-ship-it/jenkins-pipeline-debug-exercise.git
 > git.exe init C:\Users\U S E R\AppData\Local\Jenkins\.jenkins\workspace\ins-pipeline-debug-exercise_main # timeout=10
Fetching upstream changes from https://github.com/sasankasandeepa152-ship-it/jenkins-pipeline-debug-exercise.git
 > git.exe --version # timeout=10
 > git --version # 'git version 2.55.0.windows.5'
 > git.exe fetch --no-tags --force --progress -- https://github.com/sasankasandeepa152-ship-it/jenkins-pipeline-debug-exercise.git +refs/heads/*:refs/remotes/origin/* # timeout=10
 > git.exe config remote.origin.url https://github.com/sasankasandeepa152-ship-it/jenkins-pipeline-debug-exercise.git # timeout=10
 > git.exe config --add remote.origin.fetch +refs/heads/*:refs/remotes/origin/* # timeout=10
Avoid second fetch
Checking out Revision b111e36a14b3c91a43aec300e45f34505de88b9a (main)
 > git.exe config core.sparsecheckout # timeout=10
 > git.exe checkout -f b111e36a14b3c91a43aec300e45f34505de88b9a # timeout=10
Commit message: "Fix bug 1 - environment keyword"
First time build. Skipping changelog.
[Pipeline] }
[Pipeline] // stage
[Pipeline] withEnv
[Pipeline] {
[Pipeline] withEnv
[Pipeline] {
[Pipeline] stage
[Pipeline] { (Checkout)
[Pipeline] git
The recommended git tool is: NONE
No credentials specified
 > git.exe rev-parse --resolve-git-dir C:\Users\U S E R\AppData\Local\Jenkins\.jenkins\workspace\ins-pipeline-debug-exercise_main\.git # timeout=10
Fetching changes from the remote Git repository
 > git.exe config remote.origin.url https://github.com/username/nonexistent-repo.git # timeout=10
Fetching upstream changes from https://github.com/username/nonexistent-repo.git
 > git.exe --version # timeout=10
 > git --version # 'git version 2.55.0.windows.5'
 > git.exe fetch --tags --force --progress -- https://github.com/username/nonexistent-repo.git +refs/heads/*:refs/remotes/origin/* # timeout=10
ERROR: Error fetching remote repo 'origin'
hudson.plugins.git.GitException: Failed to fetch from https://github.com/username/nonexistent-repo.git
	at PluginClassLoader for git//hudson.plugins.git.GitSCM.fetchFrom(GitSCM.java:998)
	at PluginClassLoader for git//hudson.plugins.git.GitSCM.retrieveChanges(GitSCM.java:1239)
	at PluginClassLoader for git//hudson.plugins.git.GitSCM._checkout(GitSCM.java:1310)
	at PluginClassLoader for git//hudson.plugins.git.GitSCM.checkout(GitSCM.java:1277)
	at PluginClassLoader for workflow-scm-step//org.jenkinsci.plugins.workflow.steps.scm.SCMStep.checkout(SCMStep.java:136)
	at PluginClassLoader for workflow-scm-step//org.jenkinsci.plugins.workflow.steps.scm.SCMStep$StepExecutionImpl.run(SCMStep.java:101)
	at PluginClassLoader for workflow-scm-step//org.jenkinsci.plugins.workflow.steps.scm.SCMStep$StepExecutionImpl.run(SCMStep.java:88)
	at PluginClassLoader for workflow-step-api//org.jenkinsci.plugins.workflow.steps.SynchronousNonBlockingStepExecution.lambda$start$0(SynchronousNonBlockingStepExecution.java:49)
	at java.base/java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:572)
	at java.base/java.util.concurrent.FutureTask.run(FutureTask.java:317)
	at java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1144)
	at java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:642)
	at java.base/java.lang.Thread.run(Thread.java:1583)
Caused by: hudson.plugins.git.GitException: Command "git.exe fetch --tags --force --progress -- https://github.com/username/nonexistent-repo.git +refs/heads/*:refs/remotes/origin/*" returned status code 128:
stdout: 
stderr: remote: Repository not found.
fatal: repository 'https://github.com/username/nonexistent-repo.git/' not found

	at PluginClassLoader for git-client//org.jenkinsci.plugins.gitclient.CliGitAPIImpl.launchCommandIn(CliGitAPIImpl.java:2852)
	at PluginClassLoader for git-client//org.jenkinsci.plugins.gitclient.CliGitAPIImpl.launchCommandWithCredentials(CliGitAPIImpl.java:2193)
	at PluginClassLoader for git-client//org.jenkinsci.plugins.gitclient.CliGitAPIImpl$1.execute(CliGitAPIImpl.java:638)
	at PluginClassLoader for git//hudson.plugins.git.GitSCM.fetchFrom(GitSCM.java:996)
	... 12 more
ERROR: Error fetching remote repo 'origin'
ERROR: Maximum checkout retry attempts reached, aborting
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (Build)
Stage "Build" skipped due to earlier failure(s)
[Pipeline] getContext
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (Test)
Stage "Test" skipped due to earlier failure(s)
[Pipeline] getContext
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (Deploy to Production)
Stage "Deploy to Production" skipped due to earlier failure(s)
[Pipeline] getContext
[Pipeline] }
[Pipeline] // stage
[Pipeline] }
[Pipeline] // withEnv
[Pipeline] }
[Pipeline] // withEnv
[Pipeline] }
[Pipeline] // node
[Pipeline] End of Pipeline
ERROR: Error fetching remote repo 'origin'
Finished: FAILURE>

Fix:
Replaced the invalid URL with the actual GitHub repository URL.

Commit:
Fix bug 2 - repository URL

## Bug 3 - Build Command Typo

Problem:
The build command used the incorrect npm script name.

Console Output:
<Branch indexing
 > git.exe rev-parse --resolve-git-dir C:\Users\U S E R\AppData\Local\Jenkins\.jenkins\caches\git-97c5d962b734107237c3e473e23b9cc9\.git # timeout=10
Setting origin to https://github.com/sasankasandeepa152-ship-it/jenkins-pipeline-debug-exercise.git
 > git.exe config remote.origin.url https://github.com/sasankasandeepa152-ship-it/jenkins-pipeline-debug-exercise.git # timeout=10
Fetching origin...
Fetching upstream changes from origin
 > git.exe --version # timeout=10
 > git --version # 'git version 2.55.0.windows.5'
 > git.exe config --get remote.origin.url # timeout=10
 > git.exe fetch --no-tags --force --progress -- origin +refs/heads/*:refs/remotes/origin/* # timeout=10
Seen branch in repository origin/main
Seen 1 remote branch
Obtained Jenkinsfile from 1ada0fca268cd2a74c336d8711f47903850df5b9
[Pipeline] Start of Pipeline
[Pipeline] node
Running on Jenkins in C:\Users\U S E R\AppData\Local\Jenkins\.jenkins\workspace\ins-pipeline-debug-exercise_main
[Pipeline] {
[Pipeline] stage
[Pipeline] { (Declarative: Checkout SCM)
[Pipeline] checkout
Selected Git installation does not exist. Using Default
The recommended git tool is: NONE
No credentials specified
 > git.exe rev-parse --resolve-git-dir C:\Users\U S E R\AppData\Local\Jenkins\.jenkins\workspace\ins-pipeline-debug-exercise_main\.git # timeout=10
Fetching changes from the remote Git repository
 > git.exe config remote.origin.url https://github.com/sasankasandeepa152-ship-it/jenkins-pipeline-debug-exercise.git # timeout=10
Fetching without tags
Fetching upstream changes from https://github.com/sasankasandeepa152-ship-it/jenkins-pipeline-debug-exercise.git
 > git.exe --version # timeout=10
 > git --version # 'git version 2.55.0.windows.5'
 > git.exe fetch --no-tags --force --progress -- https://github.com/sasankasandeepa152-ship-it/jenkins-pipeline-debug-exercise.git +refs/heads/*:refs/remotes/origin/* # timeout=10
Checking out Revision 1ada0fca268cd2a74c336d8711f47903850df5b9 (main)
 > git.exe config core.sparsecheckout # timeout=10
 > git.exe checkout -f 1ada0fca268cd2a74c336d8711f47903850df5b9 # timeout=10
Commit message: "Fix Jenkinsfile syntax"
 > git.exe rev-list --no-walk 53dd9a7008bd2b6e1e4139a155fad5299b637164 # timeout=10
[Pipeline] }
[Pipeline] // stage
[Pipeline] withEnv
[Pipeline] {
[Pipeline] withEnv
[Pipeline] {
[Pipeline] stage
[Pipeline] { (Checkout)
[Pipeline] git
Selected Git installation does not exist. Using Default
The recommended git tool is: NONE
No credentials specified
 > git.exe rev-parse --resolve-git-dir C:\Users\U S E R\AppData\Local\Jenkins\.jenkins\workspace\ins-pipeline-debug-exercise_main\.git # timeout=10
Fetching changes from the remote Git repository
 > git.exe config remote.origin.url https://github.com/sasankasandeepa152-ship-it/jenkins-pipeline-debug-exercise.git # timeout=10
Fetching upstream changes from https://github.com/sasankasandeepa152-ship-it/jenkins-pipeline-debug-exercise.git
 > git.exe --version # timeout=10
 > git --version # 'git version 2.55.0.windows.5'
 > git.exe fetch --tags --force --progress -- https://github.com/sasankasandeepa152-ship-it/jenkins-pipeline-debug-exercise.git +refs/heads/*:refs/remotes/origin/* # timeout=10
 > git.exe rev-parse "refs/remotes/origin/main^{commit}" # timeout=10
Checking out Revision 1ada0fca268cd2a74c336d8711f47903850df5b9 (refs/remotes/origin/main)
 > git.exe config core.sparsecheckout # timeout=10
 > git.exe checkout -f 1ada0fca268cd2a74c336d8711f47903850df5b9 # timeout=10
 > git.exe branch -a -v --no-abbrev # timeout=10
 > git.exe checkout -b main 1ada0fca268cd2a74c336d8711f47903850df5b9 # timeout=10
Commit message: "Fix Jenkinsfile syntax"
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (Build)
[Pipeline] bat

C:\Users\U S E R\AppData\Local\Jenkins\.jenkins\workspace\ins-pipeline-debug-exercise_main>npm install 

up to date, audited 1 package in 234ms

found 0 vulnerabilities
[Pipeline] bat

C:\Users\U S E R\AppData\Local\Jenkins\.jenkins\workspace\ins-pipeline-debug-exercise_main>npm run biuld 
npm error Missing script: "biuld"
npm error
npm error To see a list of scripts, run:
npm error   npm run
npm error A complete log of this run can be found in: C:\Users\U S E R\AppData\Local\npm-cache\_logs\2026-10-26T20_11_18_536Z-debug-0.log
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (Test)
Stage "Test" skipped due to earlier failure(s)
[Pipeline] getContext
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (Deploy to Production)
Stage "Deploy to Production" skipped due to earlier failure(s)
[Pipeline] getContext
[Pipeline] }
[Pipeline] // stage
[Pipeline] }
[Pipeline] // withEnv
[Pipeline] }
[Pipeline] // withEnv
[Pipeline] }
[Pipeline] // node
[Pipeline] End of Pipeline
ERROR: script returned exit code 1
Finished: FAILURE>

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