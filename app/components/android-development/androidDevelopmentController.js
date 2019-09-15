var ceoApp = angular.module('ceoApp');

ceoApp.controller('androidDevelopmentController', function($scope, $sce) {
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

	$scope.gistImgurRestClient = $sce.trustAsHtml("<code data-gist-id='itstheceo/7dace8cfbd40d6931499'></code>");
	$scope.gistImgurRestClientService = $sce.trustAsHtml("<code data-gist-id='itstheceo/4fc4d0e76daa12a7785c'></code>");
});