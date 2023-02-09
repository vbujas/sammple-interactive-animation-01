'use strict';

 
/**
 * @ngdoc function
 * @name secureYourBranchApp.controller:contentCtrl
 * @description
 * # contentCtrl
 * Controller of the secureYourBranchApp
 */
secureYourBranchApp.controller('contentCtrl', function ($rootScope, $scope, GetPaloAltoData) {
   /* Define animations  */   
  var  slideOneIntro =  new TimelineMax()
    
    .fromTo('.igw-home-yeelow-container-white-point', 1, 
     { backgroundColor: 'rgba(255, 255, 255, 1)', width: '6vh', height: '6vh', marginTop:'-3vh', marginLeft:'-3vh'}, 
     {  backgroundColor: 'rgba(255, 194, 13, 0.5)', width: '25vh', height: '25vh', marginTop:'-12.5vh', marginLeft:'-12.5vh', transformOrigin: "50% 50%" }, 0)
    .fromTo('.igw-home-yeelow-container', 1, { opacity:1}, {  opacity:0}, 0)
    .fromTo('.igw-home-enter-here',0.5, {scale:0, opacity:0.8}, {scale:1, opacity:1}, 1)
    .fromTo('.igw-landing-logo', 1, { right:'-25%'}, {  right:'4%'}, 0)
    .fromTo('.landing-social-div', 1, { left:'-16%'}, {  left:'5%'}, 0)
    .fromTo('.igw-title-container', 1.8, { top:'-22%'}, {  top:'4%'}, 0)
    .fromTo('.igw-title-normal', 0.5, { opacity:0}, {  opacity:1}, 1)
    .fromTo('.igw-title-bold', 0.7, { opacity:0 }, { opacity:1 }, 0.5)
    .fromTo('.igw-home-orange-container', 1, { opacity:0}, {  opacity:0.8}, 0.5)
    .pause(0); 
   $rootScope.projectVars.animations['slideOneIntro'] = slideOneIntro;
   
   
   var  slideTwoEnter =    new TimelineMax()
   
   .fromTo('.igw-home-slide', 1, { opacity:1}, {  opacity:0.6}, 0)
   .fromTo('.igw-home-slide', 0.01, { display:'block'}, {  display:'none'}, 1)
   .fromTo('.igw-network-yellow-blend-container', 0.5, { opacity:0}, {  opacity:0.9}, 1) 
   .fromTo('.igw-network-slide-green-container', 0.5, { opacity:0.7}, {  opacity:0}, 1)
   .fromTo('.igw-network-title-container', 0.2, { top:'-22%'}, {  top:'4%'}, 0)
   .fromTo('.igw-title-normal', 0.2, { opacity:0}, {  opacity:1}, 0)
   .fromTo('.igw-title-bold', 0.2, { opacity:0 }, { opacity:1 }, 0)
   .fromTo('.igw-network-submenu', 0.9, { bottom:'-23vh'}, {  bottom:'3vh'}, 0)
   .fromTo('.igw-network-logo', 0.9, { scale: 0}, {  scale:1}, 0)
   .staggerFromTo('.igw-invisible', 0.1, { opacity:0 }, { opacity:1 }, 0.5, 0.2)
  
   .fromTo('.igw-network-white-point', 0.5,  { backgroundColor: 'rgba(255, 255, 255, 1)', width: '6vh', height: '6vh', marginTop:'-3vh', marginLeft:'-3vh', top:'48%', left:'50%'}, 
    {  backgroundColor: 'rgba(0, 0, 0, 0.5)', width: '70vh', height: '70vh', marginTop:'-17.5vh', marginLeft:'-17.5vh',  top:'26%', left:'64%', transformOrigin: "50% 50%" }, 1)
   .staggerFromTo('.igw-pin-first', 0.05, { scale:0 }, {  scale:1, onComplete: function() { 

    $rootScope.projectVars.animations['movepinsAnim'].play()

   }}, 0.1) 
   .pause(0); 
   $rootScope.projectVars.animations['slideTwoEnter'] = slideTwoEnter;
 

 
var  movepinsAnim =    new TimelineMax()
 .fromTo('.igw-world-map-pins, .igw-world-map-img-div', 12, { left:'-150%'}, { left:'-330%', onUpdate:function(){
   var a = 0;
  var currPos = parseInt(this.target[0].style.left)
  var dummy
  currPos < -165 && !angular.element('.igw-pin-india').hasClass('shrink-pin-anim') ? angular.element('.igw-pin-india').toggleClass('shrink-pin-anim', true) : a = 1;
  currPos < -168 && !angular.element('.igw-pin-china').hasClass('shrink-pin-anim') ? angular.element('.igw-pin-china').toggleClass('shrink-pin-anim', true) : a=1;
  currPos < -174 && !angular.element('.igw-pin-indonesia').hasClass('shrink-pin-anim') ? angular.element('.igw-pin-indonesia').toggleClass('shrink-pin-anim', true) : a=1;
  currPos < -184 && !angular.element('.igw-pin-australia').hasClass('shrink-pin-anim') ? angular.element('.igw-pin-australia').toggleClass('shrink-pin-anim', true) : a=1;
  currPos < -200 && !angular.element('.igw-pin-california').hasClass('shrink-pin-anim') ? angular.element('.igw-pin-california').toggleClass('shrink-pin-anim', true) : a=1;
  currPos < -203 && !angular.element('.igw-pin-panama').hasClass('shrink-pin-anim') ? angular.element('.igw-pin-panama').toggleClass('shrink-pin-anim', true) : a=1;
  currPos < -172 && !angular.element('.igw-pin-brasil').hasClass('enter-pin-anim') ? angular.element('.igw-pin-brasil').toggleClass('enter-pin-anim', true) : a=1;
  currPos < -205 && !angular.element('.igw-pin-italy').hasClass('enter-pin-anim') ? angular.element('.igw-pin-italy').toggleClass('enter-pin-anim', true) : a=1;
  currPos < -210 && !angular.element('.igw-pin-south-africa').hasClass('enter-pin-anim') ? angular.element('.igw-pin-south-africa').toggleClass('enter-pin-anim', true) : a=1;
  currPos < -218 && !angular.element('.igw-pin-iraq').hasClass('enter-pin-anim') ? angular.element('.igw-pin-iraq').toggleClass('enter-pin-anim', true) : a=1;
  currPos < -225 && !angular.element('.igw-pin-india-two').hasClass('enter-pin-anim') ? angular.element('.igw-pin-india-two').toggleClass('enter-pin-anim', true) : a=1;
  currPos < -228 && !angular.element('.igw-pin-china-two').hasClass('enter-pin-anim') ? angular.element('.igw-pin-china-two').toggleClass('enter-pin-anim', true) : a=1;
  currPos < -234 && !angular.element('.igw-pin-indonesia-two').hasClass('enter-pin-anim') ? angular.element('.igw-pin-indonesia-two').toggleClass('enter-pin-anim', true) : a=1;
  currPos < -244 && !angular.element('.igw-pin-australia-two').hasClass('enter-pin-anim') ? angular.element('.igw-pin-australia-two').toggleClass('enter-pin-anim', true) : a=1;
  
 if  (currPos > -229 && !angular.element('.igw-pin-brasil').hasClass('shrink-pin-anim') )
  {   
     angular.element('.igw-pin-brasil').toggleClass('enter-pin-anim', false) 
     angular.element('.igw-pin-brasil').toggleClass('shrink-pin-anim', true) 
 }
  
  if(currPos < -208) { 

     var hqleft = 28.8  +  ( currPos * -1 - 208)/7.7;  
     angular.element('.igw-hq-pin').css('left',  "" + hqleft + "%")

     
 }
 
 if(currPos < -228) { 
  var itleft = 35.5  +  ( currPos * -1 - 228)/9;  
  var saleft = 37.4  +  ( currPos * -1 - 228)/9;   
  angular.element('.igw-pin-italy').css('left',  "" + itleft + "%")
  angular.element('.igw-pin-south-africa').css('left',  "" + saleft + "%")

}


if(currPos < -268) { 
  var chleft = 43.4  +  ( currPos * -1 - 268)/9;  
  var inleft = 42  +  ( currPos * -1 - 268)/9;   
  var indleft = 43.8  +  ( currPos * -1 - 268)/9; 
  angular.element('.igw-pin-china-two').css('left',  "" + chleft + "%")
  angular.element('.igw-pin-india-two').css('left',  "" + inleft + "%")
  angular.element('.igw-pin-indonesia-two').css('left',  "" + indleft + "%")

}

}, ease: Power0.easeNone }, 0)
 .pause();
$rootScope.projectVars.animations['movepinsAnim'] = movepinsAnim


var  internetEnterAnim =  new TimelineMax()
.to('.content-social-div', 0.5,  { right:"7vh",ease: Power0.easeNone, onComplete: function(){
  $rootScope.projectVars.subanimations['internetAnimFirstScene'].play()
}},0)

.pause()
$rootScope.projectVars.animations['interntEnterAnim'] = internetEnterAnim
  

var  navButtonsAnimation =  new TimelineMax()
.fromTo('.igw-home-icon,.igw-next-icon', 0.5, {bottom:"-6vh"}, {bottom:"2vh"},0)
.fromTo('.igw-previous-icon', 0.5, {top:"-6vh"}, {top:"2vh"},0)
.pause()



$rootScope.projectVars.animations['navButtonsAnimation'] = navButtonsAnimation


var  internetAnimFirstScene =  new TimelineMax()
.fromTo('.igw-internet-blue-cloud, .igw-internet-branch-ball-pink', 0.5, {scale:0}, {scale:1, transformOrigin:"50% 50%"},0)
.fromTo('.igw-internet-shield, .igw-bubble-switch-internet-anim-one', 0.5, {scale:0}, {scale:1,  transformOrigin:"50% 50%"},0.3)
.fromTo('.igw-internet-line-up, .igw-internet-line-down, .arrow-anim-one', 0.3, { opacity:0}, {opacity:0.8,ease: Power0.easeNone, immediateRender:false},0)
.pause()
$rootScope.projectVars.subanimations['internetAnimFirstScene'] =  internetAnimFirstScene;

var  internetAnimSecondScene =  new TimelineMax()
.fromTo('.igw-internet-animation-two-scene', 0.01, {display: 'none'}, {display:'block'}, 0)
.staggerFromTo('.igw-internet-blue-ball-virus-two', 0.5, {scale:0}, {scale:1, transformOrigin:"50% 50%"},0.02)
.fromTo('.igw-internet-blue-ball-virus, .igw-bubble-switch-internet-anim-two, .igw-internet-shield-anim-two, .igw-internet-branch-ball-pink-anim-two', 0.5, {scale:0}, {scale:1, transformOrigin:"50% 50%"},0)
.fromTo('.igw-internet-line-two-up, .igw-internet-line-two-down, .arrow-anim-two ', 0.3, {  opacity:0}, { opacity:0.8,ease: Power0.easeNone, onComplete:function(){ 
  floatanim.play()
}},0)
.pause()
$rootScope.projectVars.subanimations['internetAnimSecondScene'] =  internetAnimSecondScene;

 
 
var	delaytime = 0.3
  var floatanim = new TimelineMax().staggerTo('.igw-internet-blue-ball-virus-two', 1.2, {
    delay: delaytime,
    y: "-=8px",
    yoyo:true,
    repeat:-1,
    ease: Power2.easeOut },0.2,0.2)
    .pause()
 



var  internetAnimThirdScene =  new TimelineMax()
.fromTo('.igw-internet-animation-three-scene', 0.01, {display: 'none'}, {display:'block'}, 0)
.fromTo('.igw-internet-animation-three-hacker, .igw-internet-animation-three-circle', 0.01, {opacity:0 }, {opacity:1 }, 0 )
.fromTo('.igw-internet-star-center-div', 0.4, {opacity:0 }, {opacity:1 }, 0 )
.fromTo('.igw-internet-animation-three-star', 0.5, {scale:0 }, {scale:1, transformOrigin: "50% 50%", ease: Elastic.easeOut.config(1, 0.3) }, 0.4 )
.fromTo('.igw-internet-star-small-circle-div', 0.4, {scale:0 }, {scale:1 }, 0.9 ) 
.fromTo('.igw-internet-star-big-circle-div', 0.4,  {scale:0 }, {scale:1 }, 1.1 )
.to('.igw-internet-animation-three-circle', 1.4,    {scale:0.3,  transformOrigin: "50% 5%" }, 0.4 )
.to('.igw-internet-animation-three-circle', 0.3,   {opacity:0 }, 1.2 )
.to('.igw-internet-star-big-circle-div', 0.4,    {scale:1.3, borderWidth: '4px' }, 1.7 )
.to('.igw-internet-star-small-circle-div', 0.4,    {scale:1.3, borderWidth: '5px' }, 1.7 )
.fromTo('.igw-internet-animation-three-intermediate-circle', 0.1,   {opacity:0 },  {opacity:1 }, 1.4 )
.fromTo('.igw-internet-animation-three-intermediate-circle', 0.9,   {scale:1 },  {scale:0.4 }, 1.5 )
.to('.igw-internet-animation-three-intermediate-circle', 0.2,  {opacity:0 },  2.4 )
.fromTo('.igw-internet-animation-three-hacker', 0.4,  {top: '1%' }, {top:'6%' }, 0.6 )
.fromTo('.igw-internet-animation-stolen-identity', 0.2, {opacity:0 }, {opacity:1 },1.3 )   
.fromTo('.igw-internet-animation-stolen-identity > img:first-of-type', 0.1, {opacity:0 }, {opacity:1 },2.3 )
.fromTo('.igw-internet-animation-stolen-identity > img:nth-of-type(2)', 0.1, {opacity:1 }, {opacity:0 },2.3 )    
.fromTo('.igw-internet-animation-stolen-identity', 0.4, {top:'44%' }, {top:'23%' },2.3 ) 
.fromTo('.igw-internet-animation-three-final-circle', 0.2, {opacity:0 }, {opacity:1 }, 2.4 )
.pause()

$rootScope.projectVars.subanimations['internetAnimThirdScene'] =  internetAnimThirdScene;

var  internetAnimFourthScene =  new TimelineMax()
.fromTo('.igw-internet-animation-hacker-red-div', 0.3, {opacity:0 }, {opacity:1 }, 0 ) 
.fromTo('.igw-internet-animation-three-final-circle, .igw-internet-animation-three-hacker, .igw-internet-animation-stolen-identity', 0.3, {scale:1},  {scale:0 }, 0)
.fromTo('.igw-internet-animation-hacker-red-div', 0.8,  {scale: 1}, {scale: 0,  transformOrigin: "50% 50%" },0.6 ) 
.fromTo('.igw-internet-animation-three-star-wrapper', 0.8,  {scale: 1}, {scale: 0,  transformOrigin: "10% 50%" }, 0.6 ) 
.pause()

$rootScope.projectVars.subanimations['internetAnimFourthScene'] =  internetAnimFourthScene;

var  toggleSubMenu =  new TimelineMax()
.fromTo('.content-social-div', 0.5, {  right:"-25vh"}, { right:"7vh",ease: Power0.easeNone},0 )
.to('.igw-common-submenu-wrapper', 0.8, { bottom:"0vw"}, 0)
.pause()

$rootScope.projectVars.subanimations['toggleSubMenu'] = toggleSubMenu;
/* End define animations */ 
 $scope.commonFunctions.changeHeader = function(slideData) {    
  angular.element('.igw-title-normal').html(slideData['title-normal']);
  angular.element('.igw-title-bold').html(slideData['title-bold']);

  }


 
  $scope.commonFunctions.changeSubAnimation = function(sense) {
      
    if ($rootScope.activeSubScene == 0 && sense == 'back') return;
     
    var senseindex = 1
    sense == 'back' ? senseindex = -1 : senseindex = 1
    $scope.commonFunctions.closeAllBubbles()
    var slideData = GetPaloAltoData.getData()[$rootScope.activescene];   
     if( $rootScope.activeSubScene >= slideData['subanimations'].length )  return;  
     
     if( !slideData['subanimations'][$rootScope.activeSubScene + senseindex] ) { 
      $rootScope.activeSubScene += senseindex;
      $scope.commonFunctions.switchInfoBoard(slideData)
      return;
     }
     
     if( sense == 'back'  &&   $rootScope.activescene == 'internet' &&  $rootScope.activeSubScene > 2 ) { 

      $rootScope.projectVars.subanimations[slideData['subanimations'][$rootScope.activeSubScene]].tweenTo(0);  
      $rootScope.activeSubScene += senseindex;
      
     }
    
     else if( sense == 'back'  &&   $rootScope.activescene == 'sdwan' ) { 

      $rootScope.projectVars.subanimations[slideData['subanimations'][$rootScope.activeSubScene]].tweenTo(0);  
      $rootScope.activeSubScene += senseindex; 
      
     }

     else  if( sense == 'back') { 
      $rootScope.projectVars.subanimations[slideData['subanimations'][$rootScope.activeSubScene]].tweenTo(0); 
      $rootScope.projectVars.subanimations[slideData['subanimations'][$rootScope.activeSubScene + senseindex]].play();   
     $rootScope.activeSubScene += senseindex;
     $scope.commonFunctions.switchInfoBoard(slideData)

     }

     console.log('subnaimation to play>' + slideData['subanimations'][$rootScope.activeSubScene +senseindex])
     
     if( sense == 'forward'  &&   $rootScope.activescene == 'internet' &&  $rootScope.activeSubScene < 2  ) { 
      $rootScope.projectVars.subanimations[slideData['subanimations'][$rootScope.activeSubScene]].tweenTo(0);   
     }
     if( sense == 'forward' ) { 
     $rootScope.projectVars.subanimations[slideData['subanimations'][$rootScope.activeSubScene + senseindex]].play();   
     $rootScope.activeSubScene += senseindex;
     $scope.commonFunctions.switchInfoBoard(slideData)
     }
   }

   $scope.exitSubMenu = function() {
    $rootScope.projectVars.subanimations['toggleSubMenu'].tweenTo(0)
   }

   $scope.enterSubMenu = function() {
    $rootScope.projectVars.subanimations['toggleSubMenu'].play()
   }
//  special = 'default'
   $scope.tileslides = function(nextslide, currentslide, special) { 
    $rootScope.transitionslide = currentslide;
  if(special != 'back') {  angular.element('.igw-home-slide').css('z-index', 20) }
 

    console.log( 'tileslides-function-->' +nextslide + ' current ' + currentslide )

    var slideData = GetPaloAltoData.getData()[currentslide];
    var animations = slideData.animations
    var subanimations = slideData.subanimations
        $rootScope.mplsAnimations = slideData.animations
        $rootScope.mplsSubAnimations = slideData.subanimations 
    angular.element('.igw-'+nextslide+'-slide').toggleClass('otherslide', false)
    angular.element('.igw-'+nextslide+'-slide').toggleClass('nextslide', true)
   
    
    /* NORMAL TRANSITION */
   var  tileSlidesAnim =  new TimelineMax()
   .to('.igw-'+nextslide+'-slide', 0.01, {opacity:1}, 0)
   .to('.igw-'+currentslide+'-slide', 0.4, {opacity:0, onComplete: function(){

   if (special == 'back') { 
     
     angular.element('.igw-slide').toggleClass('otherslide', false); 
     angular.element('.igw-slide').toggleClass('nextslide', false); 
     angular.element('.igw-slide').toggleClass('currentslide', false); 
     angular.element('.igw-home-slide').css('z-index', '')
   


   } else { 

    angular.element('.igw-'+currentslide+'-slide').toggleClass('currentslide', false)
    angular.element('.igw-'+currentslide+'-slide').toggleClass('otherslide', true)
    angular.element('.igw-'+nextslide+'-slide').toggleClass('currentslide', true)
    angular.element('.igw-'+nextslide+'-slide').toggleClass('nextslide', false)
   }
    if(animations.length > 0) { 
      for(var i=0;i< animations.length; i++) { 
      $rootScope.projectVars.animations[animations[i]].pause(0);
      }
    }
    if(subanimations.length > 0) { 
      for(var i=0;i< subanimations.length; i++) { 
        console.log(subanimations[i]);
        $rootScope.projectVars.subanimations[subanimations[i]].pause(0);
      }
    }


   }, onCompleteParams:[nextslide, currentslide, animations, subanimations, special]}, 0)
   .pause()


    /* IF NEXT SLIDE  IS MPLS WE DO NOT FADE OUT */

    var  mplsTrnasitionAnim =  new TimelineMax()
   .to('.igw-'+nextslide+'-slide', 0.01, {opacity:1, onComplete: function(){
    angular.element('.igw-'+nextslide+'-slide').toggleClass('nextslide', false);
    angular.element('.igw-'+nextslide+'-slide').toggleClass('mplsslide', true);
   
   }}, 0)
   .pause()
 
      

  if (nextslide == 'mpls') mplsTrnasitionAnim.play()

   else tileSlidesAnim.play()
 
   }


$scope.commonFunctions.changeslide = function(slide)

 {    
  $rootScope.nextScene = slide; 
  $rootScope.activeSubScene = 0;
    angular.element('.arrow-right-submenu').css('display', 'none');
    angular.element('.igw-common-submenu-item').toggleClass('igw-common-submenu-item-active', false)
    angular.element('.igw-network-submenu-item').toggleClass('igw-common-submenu-item-active', false)
  
    angular.element('.igw-'+slide).toggleClass('igw-common-submenu-item-active', true)
  var slideData = GetPaloAltoData.getData()[slide];
  var  assetTopic = slideData['dynamic-asset-name']
	var  viewstatte =  slideData['view-state-name']
 
  $rootScope.setWebResourceObject($rootScope.projectAbreviation+':' +viewstatte, $rootScope.assetName, assetTopic);
  
  if(slide == 'home') {  
 
    if($rootScope.activescene == 'home') {
      $scope.commonFunctions.changeHeader(slideData) 
    $rootScope.projectVars.animations['slideOneIntro'].play()
    $scope.exitSubMenu()
    $rootScope.activescene = slide
    $rootScope.projectVars.animations['navButtonsAnimation'].tweenTo(0)
  }

    else { 
       
      console.log('ELSE >>>>> HOME SLIDE >>>' + slide);
      
      $scope.commonFunctions.switchInfoBoard(slideData);
      $scope.tileslides(slide, $rootScope.activescene,  'back' );
      $scope.commonFunctions.changeHeader(slideData)  
      $rootScope.projectVars.animations['slideOneIntro'].play()
      $scope.exitSubMenu()
      $rootScope.activescene = slide
      $rootScope.projectVars.animations['navButtonsAnimation'].tweenTo(0)
      $scope.commonFunctions.changeHeader(slideData)  
       
      $rootScope.projectVars.animations.forEach(function (animation, i) {
        console.log('%d: %s', i, animation);
    })  
    }
  }

  else if(slide == 'network') { 
    
    angular.element('.igw-common-submenu-item').toggleClass('igw-common-submenu-item-active', false)
    angular.element('.igw-network-submenu-item').toggleClass('igw-common-submenu-item-active', false)
    
    if($rootScope.activescene !="home") { 
    $scope.tileslides(slide, $rootScope.activescene, 'back');
    $scope.commonFunctions.switchInfoBoard(slideData);
    }
    angular.element('.igw-network-slide').css('opacity', '1');
    $rootScope.projectVars.animations['slideOneIntro'].tweenTo(0, {onComplete:function(){ 
    $scope.commonFunctions.changeHeader(slideData)
    $rootScope.projectVars.animations['slideTwoEnter'].play()
    } , onCompleteParams:[slideData, slide, $rootScope]
  })
  $scope.exitSubMenu()
  $rootScope.activescene = slide
  $rootScope.projectVars.animations['navButtonsAnimation'].tweenTo(0)
  }

 else if(slide== 'internet') { 
 
  $scope.tileslides(slide, $rootScope.activescene );
  $rootScope.activescene = slide
   angular.element('a.landing-social-div-text').css('background-color', slideData['social-bg-color'] );   
   angular.element('.igw-common-submenu-options').css('background-color', slideData['options-bg-color'] )
   angular.element('a.landing-social-div-text').toggleClass('internet-social-div', true );   
   angular.element('a.landing-social-div-text').toggleClass('mpls-social-div', false );   
   angular.element('a.landing-social-div-text').toggleClass('sdwan-social-div', false );   
   angular.element('.igw-previous-icon, .igw-next-icon').css('background-color', slideData['social-bg-color'] );   
   angular.element('.igw-previous-icon, .igw-next-icon').css('color', '#fff' );   
   angular.element('.igw-next-arrow').css('border-top-color',  '#fff' );  
   angular.element('.igw-previous-arrow').css('border-bottom-color',  '#fff' );   
   angular.element('.igw-common-submenu-options').css('color', '#fff' )
   angular.element('.igw-common-submenu-options-hoverable').css('display', 'none');
   $scope.commonFunctions.switchInfoBoard(slideData);
   $rootScope.projectVars.subanimations['internetAnimFirstScene'].play()
   $rootScope.projectVars.animations['navButtonsAnimation'].play()
   $scope.enterSubMenu()
   
 }

 else if(slide== 'mpls') { 
  console.log( 'changeslide-function-->' +slide )
  $scope.tileslides(slide, $rootScope.activescene);
  $rootScope.activescene = slide
  angular.element('a.landing-social-div-text').css('background-color', slideData['social-bg-color'] );
  angular.element('.igw-common-submenu-options').css('background-color', slideData['options-bg-color'] )
  angular.element('a.landing-social-div-text').toggleClass('mpls-social-div', true );   
  angular.element('a.landing-social-div-text').toggleClass('internet-social-div', false );   
  angular.element('a.landing-social-div-text').toggleClass('sdwan-social-div', false );   
  angular.element('.igw-previous-icon, .igw-next-icon').css('background-color',  '#dae025' );   
  angular.element('.igw-previous-icon, .igw-next-icon').css('color', '#4A535B' );  
  angular.element('.igw-next-arrow').css('border-top-color',  '#4A535B' );  
  angular.element('.igw-previous-arrow').css('border-bottom-color',  '#4A535B' );     

  angular.element('.igw-common-submenu-options').css('color', '#fff' )
  angular.element('.igw-common-submenu-options-hoverable').css('display', 'none');
  $rootScope.projectVars.subanimations['slideMplsStart'].play();
  $rootScope.projectVars.animations['navButtonsAnimation'].play()
  $scope.commonFunctions.switchInfoBoard(slideData);
  $scope.enterSubMenu()
  
}

else if(slide== 'sdwan') { 
  
  $scope.tileslides(slide, $rootScope.activescene); 
  $rootScope.activescene = slide 
  angular.element('a.landing-social-div-text').css('background-color', slideData['social-bg-color'] );
  angular.element('.igw-common-submenu-options').css('background-color', slideData['options-bg-color'] );
  angular.element('a.landing-social-div-text').toggleClass('sdwan-social-div', true );   
  angular.element('a.landing-social-div-text').toggleClass('internet-social-div', false );   
  angular.element('a.landing-social-div-text').toggleClass('mpls-social-div', false );  
  angular.element('.igw-common-submenu-options').css('color', '#fff' );
  angular.element('.igw-previous-icon, .igw-next-icon').css('background-color', '#ffc62a' );   
  angular.element('.igw-previous-icon, .igw-next-icon').css('color', '#4a525b' ); 
  angular.element('.igw-next-arrow').css('border-top-color',  '#4a525b' );  
  angular.element('.igw-previous-arrow').css('border-bottom-color',  '#4a525b' );   


  angular.element('.igw-common-submenu-options-hoverable').css('display', 'block');
  $rootScope.projectVars.subanimations['slideSdwanStart'].play()
  $rootScope.projectVars.animations['navButtonsAnimation'].play()
  $scope.commonFunctions.switchInfoBoard(slideData);
  $scope.enterSubMenu()
  
}

 }


 $scope.commonFunctions.homeClick = function() { 
  console.log('home click!');
  $scope.commonFunctions.changeslide('home');
 }

$scope.commonFunctions.getNextSlide = function() { 

  var nextslideindex = $rootScope.slideorder.indexOf($rootScope.activescene)
  if (nextslideindex < $rootScope.slideorder.length) nextslideindex +=1

  var nextslide = $rootScope.slideorder[nextslideindex]

  return nextslide;

}

$scope.commonFunctions.getPreviousSlide = function() { 
  var nextslideindex = $rootScope.slideorder.indexOf($rootScope.activescene)
  if (nextslideindex > 0) nextslideindex -=1

  var nextslide = $rootScope.slideorder[nextslideindex]
 return nextslide;
}

 
 $scope.commonFunctions.previousClick = function() { 

  var slideData = GetPaloAltoData.getData()[$rootScope.activescene];
  var nextslide = $scope.commonFunctions.getPreviousSlide(); 
  if( $rootScope.activeSubScene > 0 ) $scope.commonFunctions.changeSubAnimation('back')
  else ( $scope.commonFunctions.changeslide(nextslide)) 
 
  console.log($rootScope.activeSubScene + " >>>>> " + nextslide )

  }

  
 $scope.commonFunctions.nextClick = function() { 
  var slideData = GetPaloAltoData.getData()[$rootScope.activescene];
  var lgth = slideData.subanimations.length

  

  var nextslide = $scope.commonFunctions.getNextSlide()

  if( $rootScope.activeSubScene < lgth -1  ) $scope.commonFunctions.changeSubAnimation('forward')
  else ( $scope.commonFunctions.changeslide(nextslide))
  }


 $scope.commonFunctions.closeAllBubbles = function() { 

  angular.element('.plus').css('z-index', 1);
  angular.element('.minus').css('z-index', 0);
  angular.element('.igw-bubble-switch').toggleClass('active', false);
  angular.element('.igw-bubble-switch').toggleClass('pulse', true);
    
    var  bubbleShrink=    new TimelineMax()
       .to( '.igw-bubble', 0.3, { scale:0, ease: Elastic.easeOut.config(1, 0.3), transformOrigin:"0% 50%"}, 0)
       .pause();
       bubbleShrink.play()
  
 }

 $scope.commonFunctions.toggleBubble = function($event) { 
   
 var targetEl = angular.element($event.currentTarget);
 var bubble =  targetEl.parent().find('.igw-bubble');
     
  
     
   if(targetEl.hasClass('active')) { 
    console.log('active');
    targetEl.find('.plus').css('z-index', 1);
    targetEl.find('.minus').css('z-index', 0);
    targetEl.toggleClass('active', false);
    targetEl.toggleClass('pulse', true);

         var  bubbleShrink=    new TimelineMax()
         .to( bubble, 0.2, { scale:0, transformOrigin:"0% 50%"}, 0)
         .pause();
         bubbleShrink.play()
   }
   else { 
    console.log('not-active');
    
    angular.element('.plus').css('z-index',1);
    angular.element('.minus').css('z-index', 0); 
    angular.element('.igw-bubble-switch').toggleClass('active', false);
    angular.element('.igw-bubble-switch').toggleClass('pulse', true);  

    angular.element(targetEl).find('.plus').css('z-index', 0);
    angular.element(targetEl).find('.minus').css('z-index', 1); 
    angular.element(targetEl).toggleClass('active', true);
    angular.element(targetEl).toggleClass('pulse', false);

    var  bubbleExpand =    new TimelineMax()
    .to( '.igw-bubble', 0.2,  { scale:0, transformOrigin:"0% 50%" }, 0)
    .to( bubble , 0.6, { scale:1, ease: Elastic.easeOut.config(1, 0.3), transformOrigin:"0% 50%", onComplete:function() {
    
    }, onCompleteParams:[targetEl] }, 0)
    .pause();
    bubbleExpand.play();
   }
  }

  $scope.commonFunctions.switchInfoBoard = function(slideData) { 
    
    var activesubscene = $rootScope.activeSubScene
     console.log( 'switchinfoboard>>' + activesubscene + '  scene->' + $rootScope.activescene );
    var noanims = slideData['info-board-data'].length;
    var textdata = slideData['info-board-data'][$rootScope.activeSubScene];
    var boxheight = slideData['info-board-data-height'][$rootScope.activeSubScene];
    var method =  slideData['info-board-data-method'][$rootScope.activeSubScene];
     angular.element('.arrow-right').css('display', 'none');

    if( method =='expand')  {

      var animInfoboard =  new TimelineMax() 
      .to('.igw-info-board', 0.6,  { height:boxheight, onComplete:function(){ 
      angular.element('.igw-info-board-text-wrapper').html(slideData['info-board-data'][$rootScope.activeSubScene])
       if(noanims - 1 > activesubscene) angular.element('.arrow-right').css('display', 'block');
       else angular.element('.arrow-right').css('display', 'none');
       
      
      }  },0.6)

     }
    else { 
    var animInfoboard =  new TimelineMax() 
     .to('.igw-info-board', 0.6, { height:"0vh", onComplete:function() { 
      angular.element('.igw-info-board-text-wrapper').html(slideData['info-board-data'][$rootScope.activeSubScene])
     }, onCompleteParams:[textdata, noanims, activesubscene ]},0)
     .to('.igw-info-board', 0.6,  { height:boxheight, onComplete:function(){ 
    
      if(noanims - 1 > activesubscene) angular.element('.arrow-right').css('display', 'block');
     }  },0.6)
    }  

 
    if($rootScope.activeSubScene  == noanims-1  ) { 

    var nxtslide = $scope.commonFunctions.getNextSlide()
    angular.element('.arrow-right-submenu').css('display', 'none');
    angular.element('.igw-'+nxtslide+' .arrow-right-submenu').css('display', 'block');

    }

  }


  $scope.commonFunctions.submenuClick = function(element) { 
    var nextslide =  angular.element(element).attr('data-item');
    if( nextslide == $rootScope.activescene) return;

    angular.element('.igw-common-submenu-item').toggleClass('igw-common-submenu-item-active', false)
    angular.element('.igw-network-submenu-item').toggleClass('igw-common-submenu-item-active', false)
    
    angular.element(element).toggleClass('igw-common-submenu-item-active', true)
    
    angular.element('.igw-'+nextslide).toggleClass('igw-common-submenu-item-active', true)
   
    console.log('submenuclick finction -->' + nextslide)

    $scope.commonFunctions.changeslide(nextslide);

   } 


   /* BEGIN SD - WAN LOGIC  */
 
  var slideSdwanStart =  new TimelineMax()
	.staggerFromTo('.igw-sdwan-balls', 0.5, { scale:0 }, {  scale:1},0.2, 0)
	.fromTo("#igw-sdwan-cls-1-mask",1.5, {  attr:{x:"-100%"}}, {attr:{x:"0%"}},0.5)
  .fromTo("#igw-sdwan-cls-2-mask",1.5, {  attr:{x:"100%"}}, {attr:{x:"0%"}},0.5)
	.fromTo("#igw-sdwan-cls-3-mask",1, {  attr:{y:"-100%"}}, {attr:{y:"0%"}},0.5)
  .fromTo("#igw-sdwan-cls-4-mask",1, {  attr:{y:"100%"}}, {attr:{y:"0%"}},0.5)
  

  .to(".igw-sdwan-balls",0,{onComplete:function(){ var a = 1 }},3)
  .pause()
  $rootScope.projectVars.subanimations['slideSdwanStart'] = slideSdwanStart ;

 
  var slideSdwanStartTwo =  new TimelineMax()
.staggerFromTo('.igw-sdwan-grayball', 0.5, {top: "41%"}, {top: "38%"}, 0)
.fromTo(".igw-sdwan-svg01-circle circle, .igw-sdwan-svg01-arrows",0.7, { scale:0,transformOrigin:"50% 50%" }, {  scale:1},0.4)
.staggerFromTo('.igw-sdwan-lockball', 0.5, { scale:0 }, {  scale:1},0.2,0.9)
.staggerFromTo('.igw-sdwan-textblock', 0.5, { scale:0 }, {  scale:1},0.2,0.9)
 .fromTo(".igw-sdwan-svg01-arrows", 1, { rotation: "0"},{ rotation: "180",ease: Power3.easeOut},1.4)
 .fromTo(".igw-start-over-button",0.01, {  display:'none'}, {display:'block'},0.5)
  .fromTo(".igw-start-over-button",1, { opacity: 0}, {opacity:1},0.5)
 .fromTo(".igw-next-icon",1, { opacity: 1}, {opacity:0},0)
 .pause()  
 $rootScope.projectVars.subanimations['slideSdwanStartTwo'] = slideSdwanStartTwo ;
    
 
  
 
 
 
 
 
 

 
     $scope.clickModalSecure =  function(e) { 
	 
	 clickModalSecureAnim.reversed() ? clickModalSecureAnim.play() : clickModalSecureAnim.reverse();
	 
 }
   var clickModalSecureAnim =  new TimelineMax({paused:true, reversed:true})
   .fromTo(".igw-info-board, .igw-sdwan-animation-scene",0.2, {autoAlpha:1}, {autoAlpha:0},0)
   .fromTo(".igw-modal",0.3, {autoAlpha:0}, {autoAlpha:1},0.3)
   
   .pause(0)
   

    $scope.modalhover = function(element) { 
     
     var source = angular.element(element).attr('ng-data-nothover')
     angular.element(element).prev().attr('src',   $scope.projectVars.imgpath +''+ source + '-hover.png')

     }

    $scope.modalout = function(element) { 
    
      var source = angular.element(element).attr('ng-data-nothover')
      angular.element(element).prev().attr('src',   $scope.projectVars.imgpath +''+ source + '.png')

    }
   
   /* END SD - WAN LOGIC  */



/* BEGIN MPLS LOGIC  */
   var slideMplsStart =  new TimelineMax()
   .set(".igw-mpls-bg-container",{scale:1.3},0)
   .fromTo(".igw-info-board01",0.3, {height:'0vh'}, {height:'20.5vh'},0.5)
   .fromTo(".igw-mpls-bg-left",0.7, {left:'-50%'}, {left:'0%',ease: Power2.easeOut},0.1)
   .fromTo(".igw-mpls-bg-right",0.7, {right:'-50%'}, {right:'0%',ease: Power2.easeOut},0.1)
     .fromTo(".igw-mpls-bg-bottom",0.7, {bottom:'-60%'}, {bottom:'0%',ease: Power2.easeOut, onComplete:function() { 
  
   
    angular.element('.igw-'+$rootScope.transitionslide+'-slide').toggleClass('currentslide', false)    
    angular.element('.igw-mpls-slide').toggleClass('currentslide', true)
    angular.element('.igw-mpls-slide').toggleClass('mplsslide', false)
    angular.element('.igw-'+$rootScope.transitionslide+'-slide').toggleClass('otherslide', true)
    if($rootScope.mplsAnimations.length > 0) { 
      for(var i=0;i< $rootScope.mplsAnimations.length; i++) { 
      $rootScope.projectVars.animations[ $rootScope.mplsAnimations[i]].pause(0);

     if( $rootScope.mplsAnimations[i]== 'movepinsAnim') { 
        
         angular.element('.shrink-pin-anim').css('transform', ' matrix(0,0,0,0,0,0)')
         angular.element('.igw-world-map-pin').toggleClass('enter-pin-anim', false)
         angular.element('.igw-world-map-pin').toggleClass('shrink-pin-anim', false)
         angular.element('.igw-world-map-pin').css('left', '')


     }

      
      }
    }
    if( $rootScope.mplsSubAnimations.length > 0) { 
      for(var i=0;i<  $rootScope.mplsSubAnimations.length; i++) { 
        console.log( $rootScope.mplsSubAnimations);
        $rootScope.projectVars.subanimations[$rootScope.mplsSubAnimations[i]].pause(0);

         

      }
    }
  
   }, onCompleteParams:[ $rootScope.transitionslide, $rootScope.activescene, $rootScope.mplsAnimations, $rootScope.mplsSubAnimations]},0.1)
   .fromTo(".igw-blue-platform-content",1, {top:'-100vh'}, {top:'8vh',ease: Power2.easeOut},0.5)
   .fromTo(".igw-blue-platform-shadow",0.7, {opacity:0}, {opacity:0.4},0.5)
     .fromTo(".igw-red-ball-branch.ball-one",0.3, {scale:0}, {scale:1,ease: Back.easeOut},1.3)
     .fromTo(".igw-red-ball-branch.ball-two",0.3, {scale:0}, {scale:1,ease: Back.easeOut},1.5)
     .fromTo(".igw-yellow-ball-hq",0.3, {scale:0}, {scale:1,ease: Back.easeOut},1.7)
     .fromTo(".igw-mlps-svg01 .arrow-a1",0.5, {opacity:0,y:'5vh',x:'1vh'}, {opacity:1,y:'0vh',x:'0vh'},2)
     .fromTo(".igw-mlps-svg01 .arrow-b1",0.5, {opacity:0,y:'1vh',x:'5vh'}, {opacity:1,y:'0vh',x:'0vh'},2)
 .fromTo(".mpls-blue-circle-dashed",1, {scale:0}, {scale:1,ease: Back.easeOut},2.5)
 .staggerFromTo('.mpls-sheet', 0.3, {scale:0}, {scale:1},0.2, 2)
 .fromTo(".mpls-bricks",0.3, {scale:0}, {scale:1},2.7)
 .fromTo(".igw-bubble-switch-mpls-anim-four",0.3, {scale:0}, {scale:1},3)
 .pause()
 $rootScope.projectVars.subanimations['slideMplsStart'] = slideMplsStart;
 
 
 $scope.clickMpls01 =  function(e) { 
      slideMplsStart01.play(0);
  }
 
  var slideMplsStart01 =  new TimelineMax()
  .fromTo(".igw-blue-platform-content",1, {top:'8vh'}, {top:'25vh',ease: Power2.easeOut},0)
   .fromTo(".igw-mpls-bg-container",1, {top:'0vh'}, {top:'10vh',ease: Power2.easeOut},0)
   .fromTo(".igw-blue-platform-shadow",1, {top:'45%'}, {top:'55%',ease: Power2.easeOut},0)  
    .to(".igw-info-board01",0.3,  {height:'34.5vh'},0.5) 
    .fromTo(".arrow-right.arrow01",1, {autoAlpha:1}, {autoAlpha:0},0) 
      
     .fromTo(".igw-mlps-svg01 .arrow-a2",0.5, {opacity:0,y:'-5vh',x:'-1vh'}, {opacity:1,y:'0vh',x:'0vh'},0.5)
     .fromTo(".igw-mlps-svg01 .arrow-b2",0.5, {opacity:0,y:'-1vh',x:'-5vh'}, {opacity:1,y:'0vh',x:'0vh'},0.5)
     .fromTo(".igw-mlps-svg01 .arrow-c2",0.5, {opacity:0,y:'3vh'}, {opacity:1,y:'0vh'},1) 
     .fromTo(".igw-mlps-svg01 .arrow-c1",0.5, {opacity:0,y:'-3vh'}, {opacity:1,y:'0vh'},1) 
   .fromTo(".mpls-greenball01",1, {scale:0}, {scale:1,ease: Back.easeOut},0.5)		
   .fromTo(".igw-bubble-switch-mpls-anim-five",0.3, {scale:0}, {scale:1,onComplete:function(){
     
     }},1)
   .fromTo(".mpls-sheet-01",4, {left: '28.5%',top: '27%'}, {left: '34.5%',top: '38%',repeat:-1,yoyo: true,ease: Power0.easeNone},1)
   .fromTo(".mpls-sheet-02",4, {left: '45.5%',top: '34%'}, {left: '40%',top: '25%',repeat:-1,yoyo: true,ease: Power0.easeNone},1)
   .fromTo(".mpls-sheet-03",4, {left:'42.5%',top: '23%'}, {left:  '62.5%',top: '32%',repeat:-1,yoyo: true,ease: Power0.easeNone},1)
   .fromTo(".mpls-sheet-04",4, {left: '62.5%',top: '19%'}, {left:'45.5%',top: '14%' ,repeat:-1,yoyo: true,ease: Power0.easeNone},1)
      .staggerFromTo('.mpls-dollarsign ', 0.3, {opacity:0,scale:0}, {opacity:1,scale:1},0.1, 1)
 
  .pause(0)
 
  $rootScope.projectVars.subanimations['slideMplsStart01'] = slideMplsStart01;
 
 
 $scope.clickMpls02 =  function(e) { 
      slideMplsStart02.play(0);
  }
 
 
  var slideMplsStart02 =  new TimelineMax()
 .to(".igw-mpls-bg-container",1, {top:'0vh',scale:1,ease: Power2.easeOut},0)
 .to(".igw-info-board01",0.3,  {height:'0vh'},0.5)
 .fromTo(".igw-info-board02",0.3,{height:'0vh'},{height:'25vh'},1)
 .fromTo(".igw-blue-platform-content",1, {top:'25vh',scale:1}, {top:'-19vh',scale:0.8,ease: Power2.easeOut},0)
 .fromTo(".igw-green-platform",0.2, {opacity:0}, {opacity:1},0)
 .fromTo(".igw-green-platform",1, {top:'25vh',scale:1}, {top:'22vh',scale:0.8,ease: Power2.easeOut},0)
 .fromTo(".platform-only-green-shadow",1, {opacity:1}, {opacity:0.3,ease: Power2.easeOut},0)
   .to(".igw-blue-platform-shadow",1, {top:'45%',scale:0.8,ease: Power2.easeOut},0)  
 .fromTo(".igw-red-ball-branch.ball-three",0.3, {scale:0}, {scale:1,ease: Back.easeOut},1)
 .fromTo(".igw-red-ball-branch.ball-four",0.3, {scale:0}, {scale:1,ease: Back.easeOut},1.2)
 .fromTo(".igw-yellow-ball-hq-two",0.3, {scale:0}, {scale:1,ease: Back.easeOut},1.4)
 .fromTo(".igw-mpls-cloud02",0.3, {scale:0}, {scale:1,ease: Back.easeOut},1.6)
 .fromTo(".igw-mpls-green-ball02",0.3, {scale:0,x:'5vh',y:'5vh'}, {scale:1,x:'0vh',y:'0vh',ease: Back.easeOut},1.8)
  .fromTo(".igw-pls-bluearrow",0.3, {opacity:0,x:'10vh',y:'10vh'}, {opacity:1,x:'0vh',y:'0vh',ease: Back.easeOut},1.6)
  .fromTo(".igw-mlps-svg02 .arrow-a2",0.5, {opacity:0,y:'-2vh',x:'-10vh'}, {opacity:1,y:'0vh',x:'0vh'},1.5)
  .fromTo(".igw-mlps-svg02 .arrow-b2",0.5, {opacity:0,y:'-10vh',x:'-2vh'}, {opacity:1,y:'0vh',x:'0vh'},1.5)
  .fromTo(".igw-mlps-svg02 .arrow-a1",0.5, {opacity:0,y:'2vh',x:'10vh'}, {opacity:1,y:'0vh',x:'0vh'},1.5)
  .fromTo(".igw-mlps-svg02 .arrow-b1",0.5, {opacity:0,y:'10vh',x:'2vh'}, {opacity:1,y:'0vh',x:'0vh'},1.5) 
  .pause(0)
  
  $rootScope.projectVars.subanimations['slideMplsStart02'] = slideMplsStart02;
  
 
 $scope.clickMplsButton01 =  function(e) {  
       clickMplsContent02.timeScale(2).reverse();
       clickMplsContent01.reversed() ? clickMplsContent01.play() : clickMplsContent01.timeScale(2).reverse();			
 
 }
 $scope.clickMplsButton02 =  function(e) {  
       clickMplsContent01.timeScale(2).reverse();
       clickMplsContent02.reversed() ? clickMplsContent02.play() : clickMplsContent02.timeScale(2).reverse();			
 
 }
 
   var clickMplsContent01 =   new TimelineMax({paused:true, reversed:true})
 .fromTo(".mpls-button01 .mpls-button-content",0.4, {autoAlpha:0,scale:0}, {autoAlpha:1,scale:1,transformOrigin:'0% 15%',ease: Back.easeOut},0)
 .fromTo(".mpls-button01 .mpls-button",0.1, {backgroundPosition:'top center'}, {backgroundPosition:'bottom center',ease: SteppedEase.config(1)},0.1)
 .pause(0)
   var clickMplsContent02 =   new TimelineMax({paused:true, reversed:true})
 .fromTo(".mpls-button02 .mpls-button-content",0.4, {autoAlpha:0,scale:0}, {autoAlpha:1,scale:1,transformOrigin:'0% 0%',ease: Back.easeOut},0)
 .fromTo(".mpls-button02 .mpls-button",0.1, {backgroundPosition:'top center'}, {backgroundPosition:'bottom center',ease: SteppedEase.config(1)},0.1)
 .pause(0)


/* END MPLS LOGIC  */



})


