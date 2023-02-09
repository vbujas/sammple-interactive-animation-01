# Project Title

Secure Your Branch Interactive Infographic  

## Getting Started

 package contains  uncompressed source files in the following folders:
 bower_componenets
 app/images
 app/scripts
 app/styles
 app/views
 The main application file is app/index.html

 Fonts folder is removed following the request of the client.
 See about font paths configuration in the "configuring" section.

All the dependencies and their versions can be found in the bower.json

dependencies for installing and running gulp are found in package.json

to install gulp and all the dependencies needed to compile and  copy production files to the "minified" folder, 
just run "npm install"

 Script that minifies, concatenates and copies the source files to the "minified" 
folder is  called gulpfile.js and can be found in the root folder. 

 compressed app files ready for deployment on the production site are found in the folder named "minified"

 source files are compiled and copied to minified folder with gulp. 

After  making chnages to any of  html, css or js  files in the project, please run "gulp".

new version od compiled files along with all the assets will be copied to the  folder named "minified"


### Installing

in the "minified" folder,there is  a compressed and minified version of the app ready for the deployment. 
Just copy all the files from there and put them in a folder on your Web server.


## Configuring

 configuration is done in 2 files:
 1.  /app/scripts/app.js  
 2. gulpfile.js


The following parameters are configured in app.js

Tracking: 
Project abbreviaton, and project name can be configured in the following variables:
 $rootScope.assetName ;
 $rootScope.abbreviation  ; 
on lines 29 and 30 of /app/scripts/app.js.

The names of each view as well as the name of it's state can be chnaged from lines 86 through 160

just change the values of the following json properties for each state (each slide):
view-state-name
dynamic-asset-name


IMAGE paths (only for images in HTML)
To configure path for images, just chnage the  value of the variable  globalVars.imgpath  on line 14;

 view paths: globalVars.viewpath  on line 14



FONTS: (ONLY for preaload script in javascript)
currently, all the fonts paths are set to  "...". 
This should work on   site, but due to the CORS  restrictions, if run from any other location,
 fonts and some of the icons won't be visible and  will look borken.
to configure font paths: change paths in url('...') sections from line 1 to line 51 in /app/styles/main.css file



Javascript paths:
Some of the fonts and images are preloaded. 
The paths for preloaded assetes can be configured in the /app/scripts/app.js file.
lines 37-48


The following parameters are configured in gulpfile.js

on lines 15 - 20 in gulpfile.js you can set the following parameters

1.  PATHS for background images in css
    just change the value of  cssimgpath
2.  PATHS for fonts in css
    just change the value of  cssfontspath
3. Location of stylesheets
    just change the value of  csssourcepath
4. location of  scruipts    
   just change the value of   jssourcepath

  

IMPORTANT: 

After  change  to  any of the  files and before deploying the code to the server  you should do:,

       1. gulp prepare
       2. gulp build
       3. gulp copy
and deploy the code that is found in the folder named "minified"


## Versioning

 V 1.0.0

## Authors

***Vladan Bujas** -   
 

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

 
