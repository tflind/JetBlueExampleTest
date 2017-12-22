# JetBlueExampleTest

Protractor is a Node.js program.  To run, you will need to have Node.js installed.  

Testing was done using a local standalone Selenium Server to control browsers.  You will need to have the Java Development Kit (JDK) installed to run the standalone Selenium Server.  Check this by running java -version from the command line.

Setup

Use npm install Protractor in the command line with:
  npm install -g protractor

This will install two command tools, protractor and webdriver-manager.  

Start up a Selenium server from the command line with:  webdriver-manager start

The Protractor tests will send requests to this server to control a local browser.  Leave this server running and you can see the status of the server at http://localhost:4444/wd/hub

