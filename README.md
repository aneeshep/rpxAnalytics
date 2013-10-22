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

Note: A premade build is also available [here](). You can use this if you are not making any changes to the source code.
This build will be upadated frequently


##Issues and Workarounds
 
1. Cross Origin Request Policy




