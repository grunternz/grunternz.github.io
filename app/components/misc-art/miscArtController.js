var ceoApp = angular.module('ceoApp');

ceoApp.controller('miscArtController', function($scope) {
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