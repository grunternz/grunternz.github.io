var ceoApp = angular.module('ceoApp', ['ngRoute']);

ceoApp.config(function($routeProvider) {
	$routeProvider

		.when('/', {
			templateUrl : 'pages/work.html',
			controller  : 'workController'
		})

		.when('/work', {
			templateUrl : 'pages/work.html',
			controller  : 'workController'
		})

		.when('/seng-group-project', {
			templateUrl : 'pages/segp.html',
			controller  : 'workController'
		})

		.when('/ux-group-project', {
			templateUrl : 'pages/uxgp.html',
			controller  : 'workController'
		})

		.when('/single-page-app', {
			templateUrl : 'pages/spa.html',
			controller  : 'workController'
		})

		.when('/ray-tracing', {
			templateUrl : 'pages/rt.html',
			controller  : 'workController'
		})

		.when('/3d-design', {
			templateUrl : 'pages/3dd.html',
			controller  : 'workController'
		})

		.when('/art-design-portfolio', {
			templateUrl : 'pages/adp.html',
			controller  : 'workController'
		})

		.when('/misc-art', {
			templateUrl : 'pages/ma.html',
			controller  : 'workController'
		})

		.otherwise({
			redirectTo: '/'
		});
});

ceoApp.controller('workController', function($scope) {
	// ******************* SEGP *******************
	$scope.segpThumb = "img/work/segp-thumb.jpg";
	$scope.segpPrev = "#work";
	$scope.segpNext = "#ux-group-project";

	$scope.segpGallery00 = "http://i.imgur.com/Bb2XcG2.jpg";
	$scope.segpGallery00Title = "Some plot elements and the scratch pad.";
	$scope.segpGallery01 = "http://i.imgur.com/cihVTQ0.jpg";
	$scope.segpGallery01Title = "A plot element associated with a plotnode."
	$scope.segpGallery02 = "http://i.imgur.com/kVYVEzq.jpg";
	$scope.segpGallery02Title = "A sequence of plotnodes."
	$scope.segpGallery03 = "http://i.imgur.com/HJHLEaX.jpg";
	$scope.segpGallery03Title = "The sequence browser."
	$scope.segpGallery04 = "http://i.imgur.com/5qp9wLR.jpg";
	$scope.segpGallery04Title = "File menu."
	$scope.segpGallery05 = "http://i.imgur.com/OxWPV4w.jpg";
	$scope.segpGallery05Title = "Recycling bin."
	$scope.segpGallery06 = "http://i.imgur.com/hGmd8Li.jpg";
	$scope.segpGallery06Title = "Macro creation."
	$scope.segpGallery07 = "http://i.imgur.com/pjksA0m.jpg";
	$scope.segpGallery07Title = "Graphical perspective."
	$scope.segpGallery08 = "http://i.imgur.com/PNFKdPU.jpg";
	$scope.segpGallery08Title = "Zoom functionality; stepped or mouse wheel controlled."

	// ******************* UXGP *******************
	$scope.uxgpThumb = "img/work/uxgp-thumb.jpg";
	$scope.uxgpPrev = "#seng-group-project";
	$scope.uxgpNext = "#ray-tracing";

	$scope.uxgpLogo00 = "http://i.imgur.com/3QWsWVQ.jpg";
	$scope.uxgpLogo00Title = "Draft of Ryde logo.";
	$scope.uxgpLogo01 = "http://i.imgur.com/oIkLThu.png";
	$scope.uxgpLogo01Title = "Final Ryde logo.";
	$scope.uxgpLogo02 = "http://i.imgur.com/gshSA6Q.jpg";
	$scope.uxgpLogo02Title = "Draft of a potential icon for Ryde.";
	$scope.uxgpLogo03 = "http://i.imgur.com/p0Jht70.jpg";
	$scope.uxgpLogo03Title = "Draft of another potential icon for Ryde.";
	$scope.uxgpLogo04 = "http://i.imgur.com/8lvnskK.png";
	$scope.uxgpLogo04Title = "Final Ryde icon.";

	$scope.uxgpLowFid00 = "http://i.imgur.com/rgC1zKu.png";
	$scope.uxgpLowFid00Title = "Low fidelity slide-out menu prototype.";
	$scope.uxgpLowFid01 = "http://i.imgur.com/xQ8rQ4e.png";
	$scope.uxgpLowFid01Title = "Low fidelity event page prototype."
	$scope.uxgpLowFid02 = "http://i.imgur.com/Piry6hk.png";
	$scope.uxgpLowFid02Title = "Low fidelity prototype of the form for listing a car in an event."

	$scope.uxgpHighFid00 = "http://i.imgur.com/Flzzyz5.png";
	$scope.uxgpHighFid00Title = "Events screen.";
	$scope.uxgpHighFid01 = "http://i.imgur.com/R2I4ufF.png";
	$scope.uxgpHighFid01Title = "Slide-out navigation menu.";
	$scope.uxgpHighFid02 = "http://i.imgur.com/gl4xkdb.png";
	$scope.uxgpHighFid02Title = "COSC Paintball event screen.";
	$scope.uxgpHighFid03 = "http://i.imgur.com/UJA4GqE.png";
	$scope.uxgpHighFid03Title = "Offer Vehicle form.";
	
	$scope.uxgpHighFidChanges00 = "http://i.imgur.com/R7HpmON.png";
	$scope.uxgpHighFidChanges00Title = "Updated Offer Vehicle form, with distinctly grouped buttons.";
	$scope.uxgpHighFidChanges01 = "http://i.imgur.com/ArLv4dd.png";
	$scope.uxgpHighFidChanges01Title = "Revised Offer Vehicle form, with question mark buttons.";
	$scope.uxgpHighFidChanges02 = "http://i.imgur.com/AfA43FR.png";
	$scope.uxgpHighFidChanges02Title = "The 'Help' dialog that appears when the question mark button to the right of the Pickup button is pressed.";

	// ******************* SPA *******************
	$scope.spaThumb = "img/work/spa-thumb-uc.jpg";
	$scope.spaPrev = "#ux-group-project";
	$scope.spaNext = "#ray-tracing";

	// ******************* RT *******************
	$scope.rtThumb = "img/work/rt-thumb.jpg";
	$scope.rtPrev = "#ux-group-project";
	$scope.rtNext = "#3d-design";

	$scope.rtGallery00 = "http://i.imgur.com/oLoflk7.png";
	$scope.rtGallery00Title = "Anti-aliasing disabled. Render time: 4.6 seconds on the university lab computers.";
	$scope.rtGallery01 = "http://i.imgur.com/dZXXgyr.png";
	$scope.rtGallery01Title = "Anti-aliasing enabled. Render time: 18.2 seconds on the university lab computers.";

	// ******************* 3DD *******************
	$scope.threeddThumb = "img/work/3dd-thumb-uc.jpg";
	$scope.threeddPrev = "#ray-tracing";
	$scope.threeddNext = "#art-design-portfolio";

	// ******************* ADP *******************
	$scope.adpThumb = "img/work/adp-thumb-uc.jpg";
	$scope.adpNext = "#misc-art";
	$scope.adpPrev = "#3d-design";

	// ******************* MA *******************
	$scope.maThumb = "img/work/ma-thumb.jpg";
	$scope.maNext = "#";
	$scope.maPrev = "#art-design-portfolio";
});