var ceoApp = angular.module('ceoApp');

ceoApp.controller('gameArtController', function($scope) {
	$scope.pager = "templates/pager.html";
	$scope.prevPage = "#android-development";
	$scope.homePage = "#work";
	$scope.nextPage = "#seng-group-project";
	$scope.prevDisabled = "";
	$scope.nextDisabled = "";

	$scope.gaGallery00Turn = "http://gfycat.com/LimitedTestyKodiakbear";

	$scope.gallery = [
		{
			image: 'http://i.imgur.com/aq47o5L.jpg',
			thumb: 'http://i.imgur.com/aq47o5Lb.jpg',
			title: 'Diffuse + displacement + normal + ambient occlusion.'
		},
		{
			image: 'http://i.imgur.com/4lLzLHf.jpg',
			thumb: 'http://i.imgur.com/4lLzLHfb.jpg',
			title: 'Diffuse + displacement + normal + ambient occlusion.'
		},
		{
			image: 'http://i.imgur.com/JwLxWDd.jpg',
			thumb: 'http://i.imgur.com/JwLxWDdb.jpg',
			title: 'No displacement mapping.'
		},
		{
			image: 'http://i.imgur.com/ZVELbAG.jpg',
			thumb: 'http://i.imgur.com/ZVELbAGb.jpg',
			title: 'Diffuse.'
		},
		{
			image: 'http://i.imgur.com/mxsjQM0.jpg',
			thumb: 'http://i.imgur.com/mxsjQM0b.jpg',
			title: 'Normal.'
		},
		{
			image: 'http://i.imgur.com/OBXPwyG.jpg',
			thumb: 'http://i.imgur.com/OBXPwyGb.jpg',
			title: 'Displacement.'
		},
		{
			image: 'http://i.imgur.com/wm43x5u.jpg',
			thumb: 'http://i.imgur.com/wm43x5ub.jpg',
			title: 'Ambient occlusion.'
		},
		{
			image: 'http://i.imgur.com/W4Ob469.jpg',
			thumb: 'http://i.imgur.com/W4Ob469b.jpg',
			title: 'High poly sculpt, approximately 900k polygons.'
		},
	];
});