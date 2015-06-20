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
	$scope.segpPrev = "#";
	$scope.segpNext = "#ux-group-project";
	
	$scope.uxgp = "uxgp";
	$scope.uxgpThumb = "img/work/uxgp-thumb.jpg";
	$scope.uxgpPrev = "#seng-group-project";
	$scope.uxgpNext = "#single-page-app";

	$scope.spa = "spa";
	$scope.spaThumb = "img/work/spa-thumb.jpg";
	$scope.spaPrev = "#ux-group-project";
	$scope.spaNext = "#ray-tracing";

	$scope.rt = "rt";
	$scope.rtThumb = "img/work/rt-thumb.jpg";
	$scope.rtPrev = "#single-page-app";
	$scope.rtNext = "#3d-design";

	$scope.threedd = "3dd";
	$scope.threeddThumb = "img/work/3dd-thumb.jpg";
	$scope.threeddPrev = "#ray-tracing";
	$scope.threeddNext = "#art-design-portfolio";

	$scope.adp = "adp";
	$scope.adpThumb = "img/work/adp-thumb.jpg";
	$scope.adpPrev = "#3d-design";
});