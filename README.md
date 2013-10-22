#RPX Predictive Analytics Platform(POC)



## About

   This app is a POC of RPX Predictive Analytics Platform.
   It's built with angularJS and HTML5 and also yeoman(http://yeoman.io) for the development workflow
   
   
## Setup

  Follow these directions to run the app in development mode. Documention for production deployment
 can be found in the [Deployment](#deployment) section below
### Install Dependencies.

  1. Install [NodeJs](http://nodejs.org/download/)
  2. Install [Git] (http://git-scm.com/downloads)

### Clone the Repo

  Clone this repo to your workspace.
  
        git clone https://github.com/aneeshep/rpxAnalytics.git
        
        
### Configure the app
 
  Install the dependencies and tools required to run this app
  
        cd rpxAnalytics
        npm install  # This step may fail at first time. Never mind run it again it will succeed
        bower install
  
  
### Run the app
 
 Now app is ready to run in development mode
 
        grunt server
      
 This will start an inbuilt webserver and the app will be deployed in that. A browser will open with app loaded in it.
 

## Deployment

<a id="deployment" name="deployment">

Follow these instructions to deploy the app in production enviornment.

1.  Build the app
        
        grunt

This command will build the app and the result will be stored in a folder called `dist` inside the `rpxAnalytics' folder. 
Now you can host the 'dist' folder in your webserver.

Note: A premade build is also available [here](https://github.com/aneeshep/rpxAnalytics/tree/master/build). You can use this if you are not making any changes to the source code.
This build will be upadated frequently


##Issues and Workarounds
 
1. Cross Origin Request Policy (CORS)
      
      There is a good article at mozilla developer network that explains the pblm and solutions. 
      https://developer.mozilla.org/en/docs/HTTP/Access_control_CORS
       

      There is a quick work around for this pblm ( for development purpose only) . We can disable the websecurity in google chrome
      so that it will not show any error for the Cross Origin Requests. 
      
   * Disable web security in chrome on Windows/Mac : http://documentumcookbook.wordpress.com/2012/03/13/disable-cross-domain-javascript-security-in-chrome-for-development/
   * Disable web security in chrome on Linux :  run this command from a terminal : `google-chrome --disable-web-security`
      




