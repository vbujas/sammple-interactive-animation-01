'use strict';

/**
 * @ngdoc function
 * @name secureYourBranchApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the secureYourBranchApp
 */
secureYourBranchApp.controller('MainCtrl', function ($rootScope, $scope, GetPaloAltoData) {

  $scope.commonFunctions = {}
  //$scope.projectVars = {}
  $scope.projectVars.animations = [];
  $scope.projectVars.subanimations = [];



  var queue = new createjs.LoadQueue();
  queue.on("complete", handleComplete, this);
  queue.on("progress", handleProgress);
  queue.on("error", handleError);

  if (window.location.protocol == 'file:') {

    setTimeout(function () {
      handleComplete();
    }, 2000);

  } else { 
    /* alert('NOT FILE'); */
    queue.loadManifest($rootScope.projectVars.manifest, true);
  }

  function handleComplete() {
    var loaderTansition = new TimelineMax()
		.fromTo('.loader-hidden', 1, { scale:0 	}, {  scale:1, transformOrigin: "50% 50%" }, 0)
    .fromTo('.loader', 1, { scale:1 	}, {  scale:0.2 }, 1)
    .fromTo('.igw-loader', 1, { opacity:1 }, {  opacity:0,   onComplete: function() {
    
      $scope.commonFunctions.changeslide('home');
    } }, 2)
    .to('.igw-loader', 0.1, { display:'none' }, 3)
    .pause(0)  
     loaderTansition.play();	 
  }

  function handleError(e) {
    console.log('preload error occured but never mind')
  }

  function handleProgress(event) {
    var pct = event.loaded * 100;
    pct = Math.round(pct);
    var  vw = pct / 4;
  }
});
