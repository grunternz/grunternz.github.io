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

		.when('/jade-pc-builder', {
			templateUrl : 'pages/jpcb.html',
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

		.otherwise({
			redirectTo: '/'
		});
});

ceoApp.controller('workController', function($scope) {
	$scope.segp = "segp";
	$scope.segpThumb = "img/work/segp-thumb.jpg";
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
	$scope.segpPrev = "#work";
	$scope.segpNext = "#ux-group-project";
	
	$scope.uxgp = "uxgp";
	$scope.uxgpThumb = "img/work/uxgp-thumb-uc.jpg";
	$scope.uxgpPrev = "#seng-group-project";
	$scope.uxgpNext = "#single-page-app";

	$scope.spa = "spa";
	$scope.spaThumb = "img/work/spa-thumb-uc.jpg";
	$scope.spaPrev = "#ux-group-project";
	$scope.spaNext = "#ray-tracing";

	$scope.rt = "rt";
	$scope.rtThumb = "img/work/rt-thumb-uc.jpg";
	$scope.rtPrev = "#single-page-app";
	$scope.rtNext = "#3d-design";

	$scope.threedd = "3dd";
	$scope.threeddThumb = "img/work/3dd-thumb-uc.jpg";
	$scope.threeddPrev = "#ray-tracing";
	$scope.threeddNext = "#art-design-portfolio";

	$scope.adp = "adp";
	$scope.adpThumb = "img/work/adp-thumb-uc.jpg";
	$scope.adpPrev = "#3d-design";
});