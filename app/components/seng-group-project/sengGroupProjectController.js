var ceoApp = angular.module('ceoApp');

ceoApp.controller('sengGroupProjectController', function($scope) {
	$scope.pager = "templates/pager.html";
	$scope.prevPage = "#game-art";
	$scope.homePage = "#work";
	$scope.nextPage = "#ux-group-project";
	$scope.prevDisabled = "";
	$scope.nextDisabled = "";

	$scope.gallery = [
		{
			image: 'http://i.imgur.com/Bb2XcG2.jpg',
			thumb: 'http://i.imgur.com/Bb2XcG2t.jpg',
			title: 'Some plot elements and the scratch pad.'
		},
		{
			image: 'http://i.imgur.com/cihVTQ0.jpg',
			thumb: 'http://i.imgur.com/cihVTQ0t.jpg',
			title: 'A plot element associated with a plotnode.'
		},
		{
			image: 'http://i.imgur.com/kVYVEzq.jpg',
			thumb: 'http://i.imgur.com/kVYVEzqt.jpg',
			title: 'A sequence of plotnodes.'
		},
		{
			image: 'http://i.imgur.com/HJHLEaX.jpg',
			thumb: 'http://i.imgur.com/HJHLEaXt.jpg',
			title: 'The sequence browser.'
		},
		{
			image: 'http://i.imgur.com/5qp9wLR.jpg',
			thumb: 'http://i.imgur.com/5qp9wLRt.jpg',
			title: 'File menu.'
		},
		{
			image: 'http://i.imgur.com/OxWPV4w.jpg',
			thumb: 'http://i.imgur.com/OxWPV4wt.jpg',
			title: 'Recycling bin.'
		},
		{
			image: 'http://i.imgur.com/hGmd8Li.jpg',
			thumb: 'http://i.imgur.com/hGmd8Lit.jpg',
			title: 'Macro creation.'
		},
		{
			image: 'http://i.imgur.com/pjksA0m.jpg',
			thumb: 'http://i.imgur.com/pjksA0mt.jpg',
			title: 'Graphical perspective.'
		},
		{
			image: 'http://i.imgur.com/PNFKdPU.jpg',
			thumb: 'http://i.imgur.com/PNFKdPUt.jpg',
			title: 'Zoom functionality; stepped or mouse wheel controlled.'
		}
	];
});