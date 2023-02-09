'use strict';

/**
 * @ngdoc overview
 * @name secureYourBranchApp
 * @description
 * # secureYourBranchApp
 *
 * Main module of the application.
 */
var  globalVars = { }
// BEGIN CONFIGURABLE PATHS
  /* PLEASE RUN gulp AFTER YOU CHANGE ANY OF THE BELOW PATHS */

// HERE YOU CAN CONFIGURE IMAGE PATH
globalVars.imgpath = '/app/images/';

// CONFIGURE VIEWS PATH HERE
globalVars.viewpath = 'views/';

var secureYourBranchApp = angular
  .module('secureYourBranchApp', [
    'ngAnimate',
    'ui.router',
    'ngTouch'
  ]).run(function ($rootScope, GetPaloAltoData) {
   
    /* SYB :  Secure Your Branch Interactive */
    $rootScope.projectVars = {};

    // Please configure the image path on line 13 above
    $rootScope.projectVars.imgpath = globalVars.imgpath;
   
    // this path is only used for assets preloading - lines 37-48 below. 
    //  to change  font paths in css go to gulpfile.js  
        $rootScope.projectVars.fontspath =   'http://www.paloaltonetworks.com/etc/clientlibs/pan/fonts/'
    
   // '/test/fonts/';

   
    // tracking variables
    $rootScope.projectVars.dynamicAssetState = 'landing-page'
    $rootScope.dynamicAssetState = 'landing-page'; 
    $rootScope.projectAbreviation = 'SYB';
    $rootScope.assetName = 'Secure Your Branch Interactive';
    
     // END CONFIGURABLE 



    // PLEASE DO NOT CHANGE 
    // set paths for the assets that are preloaded
    $rootScope.projectVars.manifest = [ 
    {src: $rootScope.projectVars.fontspath+"lato/lato-thin/lato-thin.woff", id: "font1"},
    {src: $rootScope.projectVars.fontspath+"lato/lato-thin/lato-thin.ttf", id: "font1"},
    {src: $rootScope.projectVars.fontspath+"lato/lato-bold/lato-bold.ttf", id: "font2"},
    {src: $rootScope.projectVars.fontspath+"lato/lato-bold/lato-bold.woff", id: "font3"},
    {src: $rootScope.projectVars.fontspath+"lato/lato-heavy/lato-heavy.ttf", id: "font4"},
    {src: $rootScope.projectVars.fontspath+"lato/lato-heavy/lato-heavy.woff", id: "font5"},
    {src: $rootScope.projectVars.fontspath+"lato/lato-normal/lato-normal.woff", id: "font6"},
    {src: $rootScope.projectVars.fontspath+"lato/lato-normal/lato-normal.ttf", id: "font7"},
    {src: $rootScope.projectVars.fontspath+"font-awesome/fontawesome-webfont.ttf", id: "font11"},
    {src: $rootScope.projectVars.fontspath+"font-awesome/fontawesome-webfont.woff", id: "font12"}
    ]  

  
    $rootScope.activescene = 'home'; 
    $rootScope.slideorder = [ 'network', 'mpls','internet', 'sdwan']; 
    $rootScope.mplsAnimations = [];
    $rootScope.mplsSubAnimations = []; 
    $rootScope.nextscene = 'none';
    $rootScope.transitionslide = 'none';
    $rootScope.subanimations = [];
    $rootScope.activeSubScene = 0;
    $rootScope.nextTab = '';
    $rootScope.projectVars.dynamicAssetState = 'landing-page'
    $rootScope.progresspoint = 0;
    $rootScope.resetAnimPoint = 0;


    $rootScope.setWebResourceObject = function (viewStateName, assetName, assetTopic) {
      var webresourceDataArray = {};
      webresourceDataArray['dynamicResource'] = {};
      webresourceDataArray['dynamicResource']['language'] = 'en_us';
      webresourceDataArray['event'] = 'dra-view';
      webresourceDataArray['dynamicResource']['viewStateName'] = viewStateName;
      webresourceDataArray['category'] = {};
      webresourceDataArray['category']['assetType'] = "dynamic resource asset";
      webresourceDataArray['category']['assetName'] = assetName;
      webresourceDataArray['category']['assetTopic'] = assetTopic;
      var webresourceDataJSON = JSON.stringify(webresourceDataArray);
      window.webresourceData = webresourceDataArray;
      $rootScope.projectVars.dynamicAssetState = viewStateName ;
      // console.log($rootScope.dynamicAssetState)
    }
    $rootScope.setWebResourceObject($rootScope.projectAbreviation+':landing-page', $rootScope.assetName, 'landing-page');
  })


  .service('GetPaloAltoData', function ($rootScope) {
    this.jsondata = {
      "home": {
        "title-normal": "How to secure",
        "title-bold": "your branch",
        "dynamic-asset-name" :  "landing-page",
        "view-state-name" :  "landing-page",
        "subanimations" : [  'slideTwoEnter'],
        "animations" : [ ],
        "info-board-data" : [' '],
        "info-board-data-height": ['0vh'], 
        "info-board-data-method" : ['expand']
      },
      
      "network": {
        "title-normal": '<span class="igw-invisible">How</span> <span class="igw-invisible">do you</span><span class="igw-invisible"> network</span>',
        "title-bold": '<span class="igw-invisible">your</span>  <span class="igw-invisible">branch</span> <span class="igw-invisible">offices?</span>',
        "dynamic-asset-name" :  "network",
        "dynamic-asset-name" :  "network",
        "subanimations" : [  ],
        "animations" : [ 'slideTwoEnter', 'movepinsAnim' ],
        "info-board-data" : [' '],
        "info-board-data-height": ['0vh'], 
        "info-board-data-method" : ['expand']  
        
      },
      "mpls": {
        "title-normal": "MPLS",
        "title-bold": "",
        "dynamic-asset-name" :  "mpls",
        "view-state-name" :  "mpls",
        "info-board-data" : ['<div class="igw-info-board-top"> There is shift happening in branch networking strategies. </div> <div class="igw-info-board-line"></div><div class="igw-info-board-text">Before, all traffic from the branch offices would be backhauled to HQ and secured by an on-premise firewall. This made sense when the data center was at HQ.</div>',
                              '<div class="igw-info-board-top"> There is shift happening in branch networking strategies. </div> <div class="igw-info-board-line"></div><div class="igw-info-board-text">Before, all traffic from the branch offices would be backhauled to HQ and secured by an on-premise firewall. This made sense when the data center was at HQ.</div><div class="igw-info-board-line"></div><div class="igw-info-board-red">   What happens when you need to access cloud applications? </div><div class="igw-info-board-text">  Traffic goes from branch to HQ to the Internet, and back again. This is inefficient. </div>',
                              '<div class="igw-info-board-top"> Fast forward to today, SaaS and cloud has fundamentally changed the way we use and access data </div><div class="igw-info-board-line"></div><div class="igw-info-board-text">Apps that used to reside in HQ are moving to the cloud, and your branch networking strategies are changing as a result. </div>' ],
        "info-board-data-height": ['20vh', '34vh', '21vh'], 
        "info-board-data-method" : ['replace', 'expand', 'replace'],
        "social-bg-color" : "#009ACF",
        "options-bg-color": "#8AD3DE",
        "subanimations" : [ 'slideMplsStart', 'slideMplsStart01', 'slideMplsStart02'],
        "animations" : [  ]  
      },
      "internet": {
        "title-normal": "Direct to Internet",
        "title-bold": "",
        "dynamic-asset-name" :  "internet",
        "view-state-name" :  "internet",
        "info-board-data" : [ 
          '<div class="igw-info-board-top"> It’s tempting to route branch traffic directly to the internet, but  </div><div class="igw-info-board-red"> how can you do it safely and provide the same levels of security that you expect for all of your users? </div>',
          '<div class="igw-info-board-text">Using internet connections at the branch is not a new concept. The problem is that most of the options on the market water down the security or do not provide security at all. Don’t make compromises on branch security, expect more. </div>',
          '<div class="igw-info-board-red">What happens when security is inconsistent? </div><div class="igw-info-board-text">Attackers use the weakest link to get inside the network. It’s hard to stop the attack, it’s hard to prevent a compromised host from accessing more systems, and it’s hard to prevent the attacker from going after the rest of the enterprise later.</div>',
          '<div class="igw-info-board-text" style="text-align:left;">In addition, managing several security enforcement points is difficult and requires significant manpower. Most enterprises have two options:</div><div class="igw-info-board-text"><div class="igw-info-board-text-icon"><img  class="igw-img-full-width" src="'+ globalVars.imgpath +'internet-step-four-lock.png" /></div><div  class="igw-info-board-text-text">either don’t secure the branch at all or</div></div> <div class="igw-info-board-text"><div class="igw-info-board-text-icon"><img  class="igw-img-full-width" src="'+ globalVars.imgpath +'/internet-step-four-shield.png" /></div><div  class="igw-info-board-text-text">secure it with a variety of ad hoc products that create more administrative challenges and high operational expenditures</div> </div><div class="igw-info-board-red igw-info-board-red-big"> Neither is an effective business option.</div>'],   
        "info-board-data-height": ['17vh', '15vh', '20vh', '38vh'],
        "info-board-data-method" : ['replace', 'replace', 'replace', 'replace'],
        "social-bg-color" : "#F3723B", 
        "options-bg-color": "#F3723B",
        "subanimations" : [  'internetAnimFirstScene', 'internetAnimSecondScene','internetAnimThirdScene', 'internetAnimFourthScene'],
        "animations" : [ 'interntEnterAnim' ] 
      },

      "sdwan": {
        "title-normal": "SD-WAN",
        "title-bold": "",
        "dynamic-asset-name" :  "sdwan",
        "view-state-name" :  "sdwan",
        "info-board-data" : ['<div class="igw-info-board-top">Many organizations are considering SD-WAN as an alternative to MPLS, as a way to more efficiently use Internet connections.</div> ',
         '<div class="igw-info-board-text">Many organizations are considering SD-WAN as an alternative to MPLS, as a way to more efficiently use Internet connections.</div><div class="igw-info-board-line"></div><div class="igw-info-board-red">SD-WAN enables organizations to network their branch office, but how do you secure the connection?  </div>',
         '<div class="igw-info-board-text">Many organizations are considering SD-WAN as an alternative to MPLS, as a way to more efficiently use Internet connections.</div><div class="igw-info-board-line"></div><div class="igw-info-board-red">SD-WAN enables organizations to network their branch office, but how do you secure the connection?  </div><div class="igw-info-board-line"></div><div class="igw-info-board-text">Some organizations prefer a firewall on premise to handle local network segmentation, and other organizations want to reduce the IT footprint at the branch. Some organizations need both options, depending on the location</div>' ],
        "info-board-data-height": ['17vh', '22vh', '34vh'], 
        "info-board-data-method" : ['expand', 'expand', 'expand'],
        "social-bg-color" : "#D9E026",
        "options-bg-color": "#FFC62A",
        "subanimations" : [ 'slideSdwanStart', 'slideSdwanStartTwo'],
        "animations" : [] 
      },
    }
    
   
    this.getData = function () {
      return this.jsondata;
    }
    $rootScope.paloaltodata = this.jsondata;

  })
  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider.state('home' , { url:"/home",
       params: {  next:' next' },
         views: { 
       'main-app-div': { 
         templateUrl: globalVars.viewpath + 'content.html',
        controller: 'contentCtrl'
       },
   /*    'perin-app-div': { 
        templateUrl: 'views/perincontent.html',
       controller: 'perinCtrl'
      },
      'perin-app-div-dva': { 
        templateUrl: 'views/perincontent2.html',
       controller: 'perinCtrl'
      } */
    }
  }) 

   $urlRouterProvider.otherwise('/home');  

  }) //END CONFIG
