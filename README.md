# OWASP 1-Liner
by [@johnwilander](https://twitter.com/johnwilander)

OWASP 1-Liner is a deliberately vulnerable Java- and JavaScript-based chat application where users communicate via so called one-liners. A one-liner is a short text message sent  into cyberspace, open to read for anyone accessing the system. The app is intended for demos and training in application security.

IMPORTANT:
 * OWASP 1-Liner contains several serious security holes intended for demonstrations and application security training. Do not trust it with any kind of sensitive information such as usernames or passwords you use for regular sites and systems.
 * OWASP 1-Liner is an official OWASP project, originally released at OWASP AppSec Research 2012 in Athens.


## Contents

 A. License and Attribution
 B. Quick Start
 C. Purpose
 D. Project Structure
 E. Build and Deploy
 F. Contributors


## A. Licence and Attribution

If you use the OWASP 1-Liner you should attribute its original author John Wilander and the OWASP Foundation. Thank you!

OWASP 1-Liner is released under the Creative Commons Attribution-ShareAlike 3.0 Unported license. Full details can be found in the LICENSE_CC3.txt file in this project.

Other licensed software bundled in:
 * Ext JS 4 from Sencha which is under the GNU General Public License (GPLv3), please see LICENSE_GPL3.txt.
 * jQuery and the jQuery Cookie plugin which are under the MIT license, please see LICENSE_MIT.txt.
 * jQuery encoder by Chris Schmidt. Please see LICENSE_JQUERY_ENCODER.txt.
 * OWASP AntiSamy which is licensed under BSD 2. The project refers to the template which is available in LICENSE_BSD_2.txt.
 * One slightly modified file from BeEF, namely hook.js with a setTimeout call to beef_init(). BeEF is licensed under the Apache License, version 2.0. Please see LICENSE_APACHE_2.0.txt.
 * Several Java libraries and of course Java itself. All of these dependencies are found in the build.gradle file and their respective licenses can be found at each project's site.


## B. Quick Start

OWASP 1-Liner is deployed on your own machine. This is the quickest way to get going:
 * Clone https://github.com/johnwilander/owasp-1-liner (this repo if you're on GitHub right now) using Git
 * Enter '127.0.0.1 local.1-liner.org' and '127.0.0.1 attackr.se' in your hosts file 
 * Make sure you have [Gradle](http://www.gradle.org/) installed 
 * Go to the root folder of your cloned OWASP 1-Liner in a shell
 * Execute 'gradle jettyRun'
 * Surf to [https://local.1-liner.org:8444](https://local.1-liner.org:8444)
 * Check out the OWASP_1-Liner_Demos.txt file for demo inspiration

## C. Purpose

The purpose of the OWASP 1-Liner Project is to provide the application security community with a modern (at least as per 2012 :) Java- and JavaScript-based web application suited for both demonstrations and training.


## D. Project Structure

OWASP 1-Liner is built up of two implementations:
 * OWASP 1-Liner Vulnerable – the deliberately insecure version of the app
 * OWASP 1-Liner Securish –  a more secure version of the same app


## E. Build and Deploy

OWASP 1-Liner is a [Gradle](http://www.gradle.org/) application. You download the source, build, and deploy on your own machine. The intention is to allow for live coding and patching. The suggested IDE is Jetbrains' IntelliJ.


### Clone the Repository

Go to [https://github.com/johnwilander/owasp-1-liner] (https://github.com/johnwilander/owasp-1-liner) and clone the repo to your local machine using Git.


### Install Gradle

#### On Mac OS X

If you're on Mac OS X and use Homebrew you can just run 'brew install gradle' in a shell.


#### On Windows 7

 1. Go to [http://www.gradle.org/](http://www.gradle.org/), download and unzip Gradle
 2. Add the environment variable 'GRADLE_HOME' and then add 'GRADLE_HOME\bin' to the Path variable


#### On Linux

 1. Go to [http://www.gradle.org/](http://www.gradle.org/), download and unzip Gradle
 2. Edit the PATH in the environment file, e.g. $ sudo nano /etc/environment
 3. Add the following to the environment file:
    * PATH = "... :$GRADLE_HOME/bin"
    * GRADLE_HOME="gradle_directory".
 4. Reload environment variables: $ source /etc/environment
 5. Add symbolic links to the usr/bin folder: $ sudo ln -sf /gradle_directory/bin/* /usr/bin/.


### Configuring local domain names 

You have to access the apps through proper URLs (not IP numbers or "localhost") so you need to set up fake domain names in your hosts file.

#### On Mac OS X

 1. Open /etc/hosts as root in an editor, e.g sudo emacs /etc/hosts
 2. Add these lines:
    * 127.0.0.1 local.1-liner.org
    * 127.0.0.1 attackr.se


#### On Windows 7

 1. Run an editor (e.g. Notepad) as administrator
 2. Open C:\Windows\System32\drivers\etc\hosts in the editor
 3. Add these lines:
    * '127.0.0.1 local.1-liner.org'
    * '127.0.0.1 attackr.se'


#### On Linux

 1. Open and edit as root the file /etc/hosts, e.g. $ sudo gedit /etc/hosts
 2. Add these lines:
    * '127.0.0.1 local.1-liner.org'
    * '127.0.0.1 attackr.se'


### Build and run on Jetty

OWASP 1-Liner uses the Jetty plugin for Gradle to run the apps.
 * Go to the root folder of the cloned  in a shell, for instance /opt/workspace/owasp_1-liner/
 * gradle jettyRun

Now the app should be up and ready for business on [https://local.1-liner.org:8444](https://local.1-liner.org:8444)


### Dependencies

Check the build.gradle file for dependencies.


### How to set up trusted SSL 


#### On Mac OS X

Below are instructions on how to get browsers without their own trusted CAs list (i e Chrome and Safari) to accept your applications self-signed SSL cert for https://local.1-liner.org:8444.

 1. Open a shell and cd to the app root dir (that's where you'll see the keystore file)
 2. If the supplied certificate has expired or you want to replace it for some other reason, run Java's keytool like
    this (the password is always '1-liner' without single-quotes):
    * keytool -delete -alias jetty -keystore keystore
    * keytool -keystore keystore -alias jetty -genkey -keyalg RSA
    * Be sure to enter local.1-liner-org as CN (stated as first and last name in the creation process).
    * Enter the password '1-liner' without single-quotes for both passwords
    * keytool -export -keystore keystore -alias jetty -file jetty-ssl.keystore.cer
 3. Open you keychain manager and select the "System" keychain
 4. Archive -> Import, select your new .cer file, enter OS X admin password
 5. Double click the newly imported cert, expand trust, mark for SSL – Always trust
 6. Reload the page in your browser and now it should be accepted


#### On Windows 7

 1. Click Start button and enter "certmgr.msc" in the search box.
 2. Go to 'Trusted Root Certification Authorities'
    * Right click
    * Pick "All tasks" -> Import -> Next -> Browse
    * Find the location of the OWASP 1-Liner certificate in the source root
    * Next -> Finish -> Yes -> OK

If the supplied certificate has expired or you want to replace it for some other reason, follow steps 1 and 2 under "On Mac OS X" in a Powershell.

Note, we seem to have some problems running the application in IE. Bug reports are welcome.

#### On Linux

If the supplied certificate has expired or you want to replace it for some other reason, follow steps 1 and 2 under "On Mac OS X" in a shell.

There is no central management for SSL certificates so you have to determine the validity of the certificate on each application.

##### Firefox
Hit https://local.1-liner.org:8444 and then select 'I understand the risks' -> 'Add Exception' -> 'Get Certificate' -> 'Confirm security exception'.

##### Chromium
It does not have a SSL certificate manager. So, the certificate has to be added to the NSS Shared DB with the use of lbnss3-tools, which has to be installed. Use Firefox to export the certificate to a file as PEM. Then type in a shell

$ certutil -d sql:$HOME/.pki/nssdb -A -t TC -n "Give_a_name" -i "the_extracted_certificate"

## F. Contributors

Original and main developer is John Wilander.

Further contributors in alphabetical order:
* Paraskevi "Vicky" Simita