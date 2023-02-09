'use strict';

/**
 * @ngdoc function
 * @name secureYourBranchApp.controller:contentCtrl
 * @description
 * # contentCtrl
 * Controller of the secureYourBranchApp
 */
secureYourBranchApp.controller('perinCtrl', function ($rootScope, $scope, GetPaloAltoData) {
   /* Define animations  */   
 
 
/*   SLIDE  SD-WAN  */   
   
 var slideSdwanStart =  new TimelineMax()
	.staggerFromTo('.igw-sdwan-balls', 0.5, { scale:0 }, {  scale:1},0.2, 0)
	.fromTo("#igw-sdwan-cls-1-mask",1.5, {  attr:{x:"-100%"}}, {attr:{x:"0%"}},0.5)
    .fromTo("#igw-sdwan-cls-2-mask",1.5, {  attr:{x:"100%"}}, {attr:{x:"0%"}},0.5)
	.fromTo("#igw-sdwan-cls-3-mask",1, {  attr:{y:"-100%"}}, {attr:{y:"0%"}},0.5)
    .fromTo("#igw-sdwan-cls-4-mask",1, {  attr:{y:"100%"}}, {attr:{y:"0%"}},0.5)
   .to(".igw-sdwan-balls",0,{onComplete:function(){slideSdwanStart.pause() }},3)

.staggerFromTo('.igw-sdwan-grayball', 0.5, {top: "41%"}, {top: "38%"}, 3.1)
.fromTo(".igw-sdwan-svg01-circle circle, .igw-sdwan-svg01-arrows",0.7, { scale:0,transformOrigin:"50% 50%" }, {  scale:1},3.5)
.staggerFromTo('.igw-sdwan-lockball', 0.5, { scale:0 }, {  scale:1},0.2,4)
.staggerFromTo('.igw-sdwan-textblock', 0.5, { scale:0 }, {  scale:1},0.2,4)
 .fromTo(".igw-sdwan-svg01-arrows", 1, { rotation: "0"},{ rotation: "180",ease: Power3.easeOut},4.5)  

.pause(0)  

$scope.clickSdwan01 =  function(e) { 
 		slideSdwanStart.play(3.1);
 }
 
 
 
 
 
 
 //  ACTIVE MODAL Secure Your Branch Offices
 
     $scope.clickModalSecure =  function(e) { 
	 
	 clickModalSecureAnim.reversed() ? clickModalSecureAnim.play() : clickModalSecureAnim.reverse();
	 
 }
   var clickModalSecureAnim =  new TimelineMax({paused:true, reversed:true})
   .fromTo(".igw-info-board, .igw-sdwan-animation-scene",0.2, {autoAlpha:1}, {autoAlpha:0},0)
   .fromTo(".igw-modal",0.3, {autoAlpha:0}, {autoAlpha:1},0.3)
   
   .pause(0)
   
   
   
   
   
    var slideMplsStart =  new TimelineMax()
	.set(".igw-mpls-bg-container",{scale:1.3},0)
	.fromTo(".igw-info-board01",0.3, {height:'0vh'}, {height:'20.5vh'},0.5)
	.fromTo(".igw-mpls-bg-left",0.7, {left:'-50%'}, {left:'0%',ease: Power2.easeOut},0.1)
	.fromTo(".igw-mpls-bg-right",0.7, {right:'-50%'}, {right:'0%',ease: Power2.easeOut},0.1)
    .fromTo(".igw-mpls-bg-bottom",0.7, {bottom:'-60%'}, {bottom:'0%',ease: Power2.easeOut},0.1)
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
.fromTo(".mpls-button01",0.3, {scale:0}, {scale:1},3)



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
	.fromTo(".mpls-button02",0.3, {scale:0}, {scale:1,onComplete:function(){
		
		}},1)
	.fromTo(".mpls-sheet-01",4, {left: '28.5%',top: '27%'}, {left: '34.5%',top: '38%',repeat:-1,yoyo: true,ease: Power0.easeNone},1)
	.fromTo(".mpls-sheet-02",4, {left: '45.5%',top: '34%'}, {left: '40%',top: '25%',repeat:-1,yoyo: true,ease: Power0.easeNone},1)
	.fromTo(".mpls-sheet-03",4, {left:'42.5%',top: '23%'}, {left:  '62.5%',top: '32%',repeat:-1,yoyo: true,ease: Power0.easeNone},1)
	.fromTo(".mpls-sheet-04",4, {left: '62.5%',top: '19%'}, {left:'45.5%',top: '14%' ,repeat:-1,yoyo: true,ease: Power0.easeNone},1)
		 .staggerFromTo('.mpls-dollarsign ', 0.3, {opacity:0,scale:0}, {opacity:1,scale:1},0.1, 1)

 .pause(0)




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

   $scope.commonFunctions.changeslide = function(slide)
   {  }
  

	
	
	

})


