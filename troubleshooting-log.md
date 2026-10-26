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