List:

* foo
* bar

This is an H1
=============

This is an H2
-------------

```java
@AfterMethod(alwaysRun = true)
public void shutDownDriver(ITestResult result) throws IOException {
}@AfterMethod(alwaysRun = true)
public void shutDownDriver(ITestResult result) throws IOException {
    
    // Update SauceLabs result
    if(testbed.equals("saucelab")) {
        String jobID = ((RemoteWebDriver)driver).getSessionId().toString();
        SauceREST client = new SauceREST("username", "key");
        Map<String, Object>sauceJob = new HashMap<String, Object>();
        sauceJob.put("name", "Test method: "+result.getMethod().getMethodName());
        if(result.isSuccess()) {
            client.jobPassed(jobID);
        } else {
            client.jobFailed(jobID);
        }
        client.updateJobInfo(jobID, sauceJob);            
    }
    driver.manage().deleteAllCookies();
    driver.quit();
}
```