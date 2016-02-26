var ceoApp = angular.module('ceoApp');

ceoApp.controller('rayTracingController', function($scope) {
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