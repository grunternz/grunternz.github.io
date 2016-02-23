var ceoApp = angular.module('ceoApp', ['ngRoute', 'ngSanitize', 'gist-embed']);

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

		.when('/android-development', {
			templateUrl : 'pages/android.html',
			controller : 'androidController'
		})

		.when('/game-art', {
			templateUrl : 'pages/ga.html',
			controller : 'gaController'
		})

		.when('/seng-group-project', {
			templateUrl : 'pages/segp.html',
			controller  : 'segpController'
		})

		.when('/ux-group-project', {
			templateUrl : 'pages/uxgp.html',
			controller  : 'uxgpController'
		})

		.when('/single-page-app', {
			templateUrl : 'pages/spa.html',
			controller  : 'spaController'
		})

		.when('/ray-tracing', {
			templateUrl : 'pages/rt.html',
			controller  : 'rtController'
		})

		.when('/3d-design', {
			templateUrl : 'pages/3dd.html',
			controller  : '3ddController'
		})

		.when('/art-design-portfolio', {
			templateUrl : 'pages/art.html',
			controller  : 'artController'
		})

		.when('/misc-art', {
			templateUrl : 'pages/ma.html',
			controller  : 'maController'
		})

		.otherwise({
			redirectTo: '/'
		});
});

ceoApp.controller('workController', function($scope) {
	$scope.adThumb = "img/work/ad-thumb.jpg";
	$scope.gaThumb = "img/work/ga-thumb.jpg";
	$scope.segpThumb = "img/work/segp-thumb.jpg";
	$scope.uxgpThumb = "img/work/uxgp-thumb.jpg";
	$scope.spaThumb = "img/work/spa-thumb-uc.jpg";
	$scope.rtThumb = "img/work/rt-thumb.jpg";
	$scope.threeddThumb = "img/work/3dd-thumb-uc.jpg";
	$scope.adpThumb = "img/work/adp-thumb.jpg";
	$scope.maThumb = "img/work/ma-thumb.jpg";
	
});

ceoApp.controller('androidController', function($scope, $sce) {
	$scope.pager = "templates/pager.html";
	$scope.prevPage = "";
	$scope.homePage = "#work";
	$scope.nextPage = "#game-art";
	$scope.prevDisabled = "disabled";
	$scope.nextDisabled = "";

	$scope.catnapp00 = "http://i.imgur.com/XvZZHbp.png";
	$scope.catnapp00Thumb = "http://i.imgur.com/XvZZHbpm.png";
	$scope.catnapp00Title = "Prototype startup screen.";
	$scope.catnapp01 = "http://i.imgur.com/kBIW0bd.png";
	$scope.catnapp01Thumb = "http://i.imgur.com/kBIW0bdm.png";
	$scope.catnapp01Title = "Prototype, rudimentary main screen (will be reworked soon).";

	$scope.gistImgurRestClient = $sce.trustAsHtml("<code data-gist-id='grunternz/7dace8cfbd40d6931499'></code>");
	$scope.gistImgurRestClientService = $sce.trustAsHtml("<code data-gist-id='grunternz/4fc4d0e76daa12a7785c'></code>");
});

ceoApp.controller('gaController', function($scope) {
	$scope.pager = "templates/pager.html";
	$scope.prevPage = "#android-development";
	$scope.homePage = "#work";
	$scope.nextPage = "#seng-group-project";
	$scope.prevDisabled = "";
	$scope.nextDisabled = "";

	$scope.gaGallery00Turn = "http://gfycat.com/LimitedTestyKodiakbear";
	$scope.gaGallery00 = "http://i.imgur.com/aq47o5L.jpg";
	$scope.gaGallery00Thumb = "http://i.imgur.com/aq47o5Lb.jpg";
	$scope.gaGallery00Title = "Diffuse + displacement + normal + ambient occlusion.";
	$scope.gaGallery01 = "http://i.imgur.com/4lLzLHf.jpg";
	$scope.gaGallery01Thumb = "http://i.imgur.com/4lLzLHfb.jpg";
	$scope.gaGallery01Title = "Diffuse + displacement + normal + ambient occlusion.";
	$scope.gaGallery02 = "http://i.imgur.com/JwLxWDd.jpg";
	$scope.gaGallery02Thumb = "http://i.imgur.com/JwLxWDdb.jpg";
	$scope.gaGallery02Title = "No displacement mapping.";
	$scope.gaGallery03 = "http://i.imgur.com/ZVELbAG.jpg";
	$scope.gaGallery03Thumb = "http://i.imgur.com/ZVELbAGb.jpg";
	$scope.gaGallery03Title = "Diffuse.";
	$scope.gaGallery04 = "http://i.imgur.com/mxsjQM0.jpg";
	$scope.gaGallery04Thumb = "http://i.imgur.com/mxsjQM0b.jpg";
	$scope.gaGallery04Title = "Normal."
	$scope.gaGallery05 = "http://i.imgur.com/OBXPwyG.jpg";
	$scope.gaGallery05Thumb = "http://i.imgur.com/OBXPwyGb.jpg";
	$scope.gaGallery05Title ="displacement."
	$scope.gaGallery06 = "http://i.imgur.com/wm43x5u.jpg";
	$scope.gaGallery06Thumb = "http://i.imgur.com/wm43x5ub.jpg";
	$scope.gaGallery06Title ="Ambient occlusion."
	$scope.gaGallery07 = "http://i.imgur.com/W4Ob469.jpg";
	$scope.gaGallery07Thumb = "http://i.imgur.com/W4Ob469b.jpg";
	$scope.gaGallery07Title = "High poly sculpt, approximately 900k polygons."
	
});

ceoApp.controller('segpController', function($scope) {
	$scope.pager = "templates/pager.html";
	$scope.prevPage = "#game-art";
	$scope.homePage = "#work";
	$scope.nextPage = "#ux-group-project";
	$scope.prevDisabled = "";
	$scope.nextDisabled = "";

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
});

ceoApp.controller('uxgpController', function($scope) {
	$scope.pager = "templates/pager.html";
	$scope.prevPage = "#seng-group-project";
	$scope.homePage = "#work";
	$scope.nextPage = "#ray-tracing";
	$scope.nextDisabled = "";
	$scope.prevDisabled = "";

	$scope.uxgpLogo00 = "http://i.imgur.com/3QWsWVQ.jpg";
	$scope.uxgpLogo00Thumb = "http://i.imgur.com/F8fWgiJ.png";
	$scope.uxgpLogo00Title = "Draft of Ryde logo.";
	$scope.uxgpLogo01 = "http://i.imgur.com/oIkLThu.png";
	$scope.uxgpLogo01Thumb = "http://i.imgur.com/YAD0zD1.png";
	$scope.uxgpLogo01Title = "Final Ryde logo.";
	$scope.uxgpLogo02 = "http://i.imgur.com/gshSA6Q.jpg";
	$scope.uxgpLogo02Thumb = "http://i.imgur.com/gshSA6Qm.jpg";
	$scope.uxgpLogo02Title = "Draft of a potential icon for Ryde.";
	$scope.uxgpLogo03 = "http://i.imgur.com/p0Jht70.jpg";
	$scope.uxgpLogo03Thumb = "http://i.imgur.com/p0Jht70m.jpg";
	$scope.uxgpLogo03Title = "Draft of another potential icon for Ryde.";
	$scope.uxgpLogo04 = "http://i.imgur.com/8lvnskK.png";
	$scope.uxgpLogo04Thumb = "http://i.imgur.com/xvvasqT.png";
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
});

ceoApp.controller('spaController', function($scope) {
	$scope.pager = "templates/pager.html";
	$scope.prevPage = "#ux-group-project";
	$scope.homePage = "#work";
	$scope.nextPage = "#ray-tracing";
	$scope.nextDisabled = "";
	$scope.prevDisabled = "";
});

ceoApp.controller('rtController', function($scope) {
	$scope.pager = "templates/pager.html";
	$scope.prevPage = "#ux-group-project";
	$scope.homePage = "#work";
	$scope.nextPage = "#art-design-portfolio";
	$scope.nextDisabled = "";
	$scope.prevDisabled = "";

	$scope.rtGallery00 = "http://i.imgur.com/oLoflk7.png";
	$scope.rtGallery00Thumb = "http://i.imgur.com/oLoflk7m.png";
	$scope.rtGallery00Title = "Anti-aliasing disabled. Render time: 4.6 seconds on the university lab computers.";
	$scope.rtGallery01 = "http://i.imgur.com/dZXXgyr.png";
	$scope.rtGallery01Thumb = "http://i.imgur.com/dZXXgyrm.png";
	$scope.rtGallery01Title = "Anti-aliasing enabled. Render time: 18.2 seconds on the university lab computers.";
});

ceoApp.controller('3ddController', function($scope) {
	$scope.pager = "templates/pager.html";
	$scope.prevPage = "#ray-tracing";
	$scope.homePage = "#work";
	$scope.nextPage = "#art-design-portfolio";
	$scope.nextDisabled = "";
	$scope.prevDisabled = "";
});

ceoApp.controller('artController', function($scope) {
	$scope.pager = "templates/pager.html";
	$scope.prevPage = "#ray-tracing";
	$scope.homePage = "#work";
	$scope.nextPage = "#misc-art";
	$scope.nextDisabled = "";
	$scope.prevDisabled = "";

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
});

ceoApp.controller('maController', function($scope) {
	$scope.pager = "templates/pager.html";
	$scope.prevPage = "#art-design-portfolio";
	$scope.homePage = "#work";
	$scope.nextPage = "";
	$scope.nextDisabled = "disabled";
	$scope.prevDisabled = "";

	$scope.gallery = [
		{
			image: 'http://i.imgur.com/tU8m64X.jpg',
			thumb: 'http://i.imgur.com/p0sRbBHm.jpg',
			title: '14/01/2016 - Photoshop CS5. Concept login screen for a mobile application idea of mine.'
		},
		{
			image: 'http://i.imgur.com/qimGX9r.jpg',
			thumb: 'http://i.imgur.com/qimGX9rm.jpg',
			title: '22/10/2013 - After Effects CS5 & Photoshop CS5. Made with particles using Particular. Each layer was going to be radially sound-reactive on varying frequencies however I never got around to finishing it.'
		},
		{
			image: 'http://i.imgur.com/tL3OQ8P.jpg',
			thumb: 'http://i.imgur.com/tL3OQ8Pm.jpg',
			title: '06/10/2011 - Cinema 4D R11.5 & Photoshop CS5.'
		},
		{
			image: 'http://i.imgur.com/P8e3pj6.jpg',
			thumb: 'http://i.imgur.com/P8e3pj6m.jpg',
			title: '05/05/2011 - Illustrator CS5, Cinema 4D R11.5 & Photoshop CS5.'
		},
		{
			image: 'http://i.imgur.com/9wNyEhr.jpg',
			thumb: 'http://i.imgur.com/9wNyEhrm.jpg',
			title: '24/06/2010 - Illustrator CS4, Cinema 4D R11.5 & Photoshop CS4.'
		},
		{
			image: 'http://i.imgur.com/c6ufr4N.jpg',
			thumb: 'http://i.imgur.com/c6ufr4Nm.jpg',
			title: '01/06/2010 - Photoshop CS4.'
		},
		{
			image: 'http://i.imgur.com/N65sWLp.jpg',
			thumb: 'http://i.imgur.com/swqHcGEm.jpg',
			title: '03/03/2010 - Photoshop CS4.'
		},
		{
			image: 'http://i.imgur.com/iryTrGi.jpg',
			thumb: 'http://i.imgur.com/iryTrGim.jpg',
			title: '~2009 - Photoshop CS4.'
		}
	];
	
});