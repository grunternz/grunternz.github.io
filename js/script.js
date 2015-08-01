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
	$scope.segpGallery00Thumb = "http://i.imgur.com/Bb2XcG2t.jpg";
	$scope.segpGallery00Title = "Some plot elements and the scratch pad.";

	$scope.segpGallery01 = "http://i.imgur.com/cihVTQ0.jpg";
	$scope.segpGallery01Thumb = "http://i.imgur.com/cihVTQ0t.jpg";
	$scope.segpGallery01Title = "A plot element associated with a plotnode."

	$scope.segpGallery02 = "http://i.imgur.com/kVYVEzq.jpg";
	$scope.segpGallery02Thumb = "http://i.imgur.com/kVYVEzqt.jpg";
	$scope.segpGallery02Title = "A sequence of plotnodes."

	$scope.segpGallery03 = "http://i.imgur.com/HJHLEaX.jpg";
	$scope.segpGallery03Thumb = "http://i.imgur.com/HJHLEaXt.jpg";
	$scope.segpGallery03Title = "The sequence browser."

	$scope.segpGallery04 = "http://i.imgur.com/5qp9wLR.jpg";
	$scope.segpGallery04Thumb = "http://i.imgur.com/5qp9wLRt.jpg";
	$scope.segpGallery04Title = "File menu."

	$scope.segpGallery05 = "http://i.imgur.com/OxWPV4w.jpg";
	$scope.segpGallery05Thumb = "http://i.imgur.com/OxWPV4wt.jpg";
	$scope.segpGallery05Title = "Recycling bin."

	$scope.segpGallery06 = "http://i.imgur.com/hGmd8Li.jpg";
	$scope.segpGallery06Thumb = "http://i.imgur.com/hGmd8Lit.jpg";
	$scope.segpGallery06Title = "Macro creation."

	$scope.segpGallery07 = "http://i.imgur.com/pjksA0m.jpg";
	$scope.segpGallery07Thumb = "http://i.imgur.com/pjksA0mt.jpg";
	$scope.segpGallery07Title = "Graphical perspective."

	$scope.segpGallery08 = "http://i.imgur.com/PNFKdPU.jpg";
	$scope.segpGallery08Thumb = "http://i.imgur.com/PNFKdPUt.jpg";
	$scope.segpGallery08Title = "Zoom functionality; stepped or mouse wheel controlled."

	// ******************* UXGP *******************
	$scope.uxgpThumb = "img/work/uxgp-thumb.jpg";
	$scope.uxgpPrev = "#seng-group-project";
	$scope.uxgpNext = "#ray-tracing";

	$scope.uxgpLogo00 = "http://i.imgur.com/3QWsWVQ.jpg";
	$scope.uxgpLogo00Thumb = "http://i.imgur.com/3QWsWVQm.jpg";
	$scope.uxgpLogo00Title = "Draft of Ryde logo.";
	$scope.uxgpLogo01 = "http://i.imgur.com/oIkLThu.png";
	$scope.uxgpLogo01Thumb = "http://i.imgur.com/oIkLThum.png";
	$scope.uxgpLogo01Title = "Final Ryde logo.";
	$scope.uxgpLogo02 = "http://i.imgur.com/gshSA6Q.jpg";
	$scope.uxgpLogo02Thumb = "http://i.imgur.com/gshSA6Qm.jpg";
	$scope.uxgpLogo02Title = "Draft of a potential icon for Ryde.";
	$scope.uxgpLogo03 = "http://i.imgur.com/p0Jht70.jpg";
	$scope.uxgpLogo03Thumb = "http://i.imgur.com/p0Jht70m.jpg";
	$scope.uxgpLogo03Title = "Draft of another potential icon for Ryde.";
	$scope.uxgpLogo04 = "http://i.imgur.com/8lvnskK.png";
	$scope.uxgpLogo04Thumb = "http://i.imgur.com/8lvnskKm.png";
	$scope.uxgpLogo04Title = "Final Ryde icon.";

	$scope.uxgpLowFid00 = "http://i.imgur.com/rgC1zKu.png";
	$scope.uxgpLowFid00Thumb = "http://i.imgur.com/rgC1zKum.png";
	$scope.uxgpLowFid00Title = "Low fidelity slide-out menu prototype.";
	$scope.uxgpLowFid01 = "http://i.imgur.com/xQ8rQ4e.png";
	$scope.uxgpLowFid01Thumb = "http://i.imgur.com/xQ8rQ4em.png";
	$scope.uxgpLowFid01Title = "Low fidelity event page prototype."
	$scope.uxgpLowFid02 = "http://i.imgur.com/Piry6hk.png";
	$scope.uxgpLowFid02Thumb = "http://i.imgur.com/Piry6hkm.png";
	$scope.uxgpLowFid02Title = "Low fidelity prototype of the form for listing a car in an event."

	$scope.uxgpHighFid00 = "http://i.imgur.com/Flzzyz5.png";
	$scope.uxgpHighFid00Thumb = "http://i.imgur.com/Flzzyz5m.png";
	$scope.uxgpHighFid00Title = "Events screen.";
	$scope.uxgpHighFid01 = "http://i.imgur.com/R2I4ufF.png";
	$scope.uxgpHighFid01Thumb = "http://i.imgur.com/R2I4ufFm.png";
	$scope.uxgpHighFid01Title = "Slide-out navigation menu.";
	$scope.uxgpHighFid02 = "http://i.imgur.com/gl4xkdb.png";
	$scope.uxgpHighFid02Thumb = "http://i.imgur.com/gl4xkdbm.png";
	$scope.uxgpHighFid02Title = "COSC Paintball event screen.";
	$scope.uxgpHighFid03 = "http://i.imgur.com/UJA4GqE.png";
	$scope.uxgpHighFid03Thumb = "http://i.imgur.com/UJA4GqEm.png";
	$scope.uxgpHighFid03Title = "Offer Vehicle form.";
	
	$scope.uxgpHighFidChanges00 = "http://i.imgur.com/R7HpmON.png";
	$scope.uxgpHighFidChanges00Thumb = "http://i.imgur.com/R7HpmONm.png";
	$scope.uxgpHighFidChanges00Title = "Updated Offer Vehicle form, with distinctly grouped buttons.";
	$scope.uxgpHighFidChanges01 = "http://i.imgur.com/ArLv4dd.png";
	$scope.uxgpHighFidChanges01Thumb = "http://i.imgur.com/ArLv4ddm.png";
	$scope.uxgpHighFidChanges01Title = "Revised Offer Vehicle form, with question mark buttons.";
	$scope.uxgpHighFidChanges02 = "http://i.imgur.com/AfA43FR.png";
	$scope.uxgpHighFidChanges02Thumb = "http://i.imgur.com/AfA43FRm.png";
	$scope.uxgpHighFidChanges02Title = "The 'Help' dialog that appears when the question mark button to the right of the Pickup button is pressed.";

	// ******************* SPA *******************
	$scope.spaThumb = "img/work/spa-thumb-uc.jpg";
	$scope.spaPrev = "#ux-group-project";
	$scope.spaNext = "#ray-tracing";

	// ******************* RT *******************
	$scope.rtThumb = "img/work/rt-thumb.jpg";
	$scope.rtPrev = "#ux-group-project";
	$scope.rtNext = "#art-design-portfolio";

	$scope.rtGallery00 = "http://i.imgur.com/oLoflk7.png";
	$scope.rtGallery00Title = "Anti-aliasing disabled. Render time: 4.6 seconds on the university lab computers.";
	$scope.rtGallery01 = "http://i.imgur.com/dZXXgyr.png";
	$scope.rtGallery01Title = "Anti-aliasing enabled. Render time: 18.2 seconds on the university lab computers.";

	// ******************* 3DD *******************
	$scope.threeddThumb = "img/work/3dd-thumb-uc.jpg";
	$scope.threeddPrev = "#ray-tracing";
	$scope.threeddNext = "#art-design-portfolio";

	// ******************* ADP *******************
	$scope.adpThumb = "img/work/adp-thumb.jpg";
	$scope.adpNext = "#misc-art";
	$scope.adpPrev = "#ray-tracing";

	$scope.adpGallery00 = "http://i.imgur.com/Z8gsseD.jpg";
	$scope.adpGallery00Thumb = "http://i.imgur.com/Z8gsseDm.jpg";
	$scope.adpGallery00Title = "Panel 1.1: Cover development.";

	$scope.adpGallery01 = "http://i.imgur.com/6PCy6NI.jpg";
	$scope.adpGallery01Thumb = "http://i.imgur.com/6PCy6NIm.jpg";
	$scope.adpGallery01Title = "Panel 1.2: Logo development.";

	$scope.adpGallery02 = "http://i.imgur.com/k907HbJ.jpg";
	$scope.adpGallery02Thumb = "http://i.imgur.com/k907HbJm.jpg";
	$scope.adpGallery02Title = "Panel 1.3: Cover development continued.";

	$scope.adpGallery03 = "http://i.imgur.com/rtnYwIu.jpg";
	$scope.adpGallery03Thumb = "http://i.imgur.com/rtnYwIum.jpg";
	$scope.adpGallery03Title = "Panel 1.4: Final cover.";

	$scope.adpGallery04 = "http://i.imgur.com/PgI8ve2.jpg";
	$scope.adpGallery04Thumb = "http://i.imgur.com/PgI8ve2m.jpg";
	$scope.adpGallery04Title = "Panel 2.1: Deck, wheel & double page spread development.";

	$scope.adpGallery05 = "http://i.imgur.com/QOMYBJq.jpg";
	$scope.adpGallery05Thumb = "http://i.imgur.com/QOMYBJqm.jpg";
	$scope.adpGallery05Title = "Panel 2.2: Contents page development.";

	$scope.adpGallery06 = "http://i.imgur.com/4prO65I.jpg";
	$scope.adpGallery06Thumb = "http://i.imgur.com/4prO65Im.jpg";
	$scope.adpGallery06Title = "Panel 2.3: Double page spread & gallery development.";

	$scope.adpGallery07 = "http://i.imgur.com/v9nT2Re.jpg";
	$scope.adpGallery07Thumb = "http://i.imgur.com/v9nT2Rem.jpg";
	$scope.adpGallery07Title = "Panel 2.4: Final double page spread & gallery.";

	$scope.adpGallery08 = "http://i.imgur.com/wGFYE6A.jpg";
	$scope.adpGallery08Thumb = "http://i.imgur.com/wGFYE6Am.jpg";
	$scope.adpGallery08Title = "Panel 3.1: Deck promotional poster development.";

	$scope.adpGallery09 = "http://i.imgur.com/giFgQun.jpg";
	$scope.adpGallery09Thumb = "http://i.imgur.com/giFgQunm.jpg";
	$scope.adpGallery09Title = "Panel 3.2: Final promotional poster.";

	$scope.adpGallery10 = "http://i.imgur.com/kza0iGx.jpg";
	$scope.adpGallery10Thumb = "http://i.imgur.com/kza0iGxm.jpg";
	$scope.adpGallery10Title = "Panel 3.3: Event promotional poster development.";

	$scope.adpGallery11 = "http://i.imgur.com/vGncRk3.jpg";
	$scope.adpGallery11Thumb = "http://i.imgur.com/vGncRk3m.jpg";
	$scope.adpGallery11Title = "Panel 3.4: Final event promotional poster.";

	$scope.adpGallery12 = "http://i.imgur.com/UkJwc2M.jpg";
	$scope.adpGallery12Thumb = "http://i.imgur.com/UkJwc2Mh.jpg";
	$scope.adpGallery12Title = "Template folder layout.";

	// ******************* MA *******************
	$scope.maThumb = "img/work/ma-thumb.jpg";
	$scope.maNext = "#work";
	$scope.maPrev = "#art-design-portfolio";

	$scope.maGallery00 = "http://i.imgur.com/qimGX9r.jpg";
	$scope.maGallery00Thumb = "http://i.imgur.com/qimGX9rm.jpg";
	$scope.maGallery00Title = "22/10/2013 - After Effects CS5 & Photoshop CS5";

	$scope.maGallery01 = "http://i.imgur.com/tL3OQ8P.jpg";
	$scope.maGallery01Thumb = "http://i.imgur.com/tL3OQ8Pm.jpg";
	$scope.maGallery01Title = "06/10/2011 - Cinema 4D R11.5 & Photoshop CS5";

	$scope.maGallery02 = "http://i.imgur.com/P8e3pj6.jpg";
	$scope.maGallery02Thumb = "http://i.imgur.com/P8e3pj6m.jpg";
	$scope.maGallery02Title = "05/05/2011 - Illustrator CS5, Cinema 4D R11.5 & Photoshop CS5";

	$scope.maGallery03 = "http://i.imgur.com/9wNyEhr.jpg";
	$scope.maGallery03Thumb = "http://i.imgur.com/9wNyEhrm.jpg";
	$scope.maGallery03Title = "24/06/2010 - Illustrator CS4, Cinema 4D R11.5 & Photoshop CS4";

	$scope.maGallery04 = "http://i.imgur.com/c6ufr4N.jpg";
	$scope.maGallery04Thumb = "http://i.imgur.com/c6ufr4Nm.jpg";
	$scope.maGallery04Title = "01/06/2010 - Photoshop CS4";

	$scope.maGallery05 = "http://i.imgur.com/N65sWLp.jpg";
	$scope.maGallery05Thumb = "http://i.imgur.com/swqHcGEm.jpg";
	$scope.maGallery05Title = "03/03/2010 - Photoshop CS4";

	$scope.maGallery06 = "http://i.imgur.com/iryTrGi.jpg";
	$scope.maGallery06Thumb ="http://i.imgur.com/iryTrGim.jpg";
	$scope.maGallery06Title = "~2009 - Photoshop CS4"	
});