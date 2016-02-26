var ceoApp = angular.module('ceoApp');

ceoApp.controller('artDesignPortfolioController', function($scope) {
	$scope.pager = "templates/pager.html";
	$scope.prevPage = "#ray-tracing";
	$scope.homePage = "#work";
	$scope.nextPage = "#misc-art";
	$scope.nextDisabled = "";
	$scope.prevDisabled = "";

	$scope.folderTemplate = "http://i.imgur.com/UkJwc2M.jpg";
	$scope.folderTemplateThumb = "http://i.imgur.com/UkJwc2Mh.jpg";
	$scope.folderTemplateTitle = "Template folder layout.";

	$scope.gallery = [
		{
			image: 'http://i.imgur.com/Z8gsseD.jpg',
			thumb: 'http://i.imgur.com/Z8gsseDm.jpg',
			title: 'Panel 1.1: Cover development.'
		},
		{
			image: 'http://i.imgur.com/6PCy6NI.jpg',
			thumb: 'http://i.imgur.com/6PCy6NIm.jpg',
			title: 'Panel 1.2: Logo development.'
		},
		{
			image: 'http://i.imgur.com/k907HbJ.jpg',
			thumb: 'http://i.imgur.com/k907HbJm.jpg',
			title: 'Panel 1.3: Cover development continued.'
		},
		{
			image: 'http://i.imgur.com/rtnYwIu.jpg',
			thumb: 'http://i.imgur.com/rtnYwIum.jpg',
			title: 'Panel 1.4: Final cover.'
		},
		{
			image: 'http://i.imgur.com/PgI8ve2.jpg',
			thumb: 'http://i.imgur.com/PgI8ve2m.jpg',
			title: 'Panel 2.1: Deck, wheel & double page spread development.'
		},
		{
			image: 'http://i.imgur.com/QOMYBJq.jpg',
			thumb: 'http://i.imgur.com/QOMYBJqm.jpg',
			title: 'Panel 2.2: Contents page development.'
		},
		{
			image: 'http://i.imgur.com/4prO65I.jpg',
			thumb: 'http://i.imgur.com/4prO65Im.jpg',
			title: 'Panel 2.3: Double page spread & gallery development.'
		},
		{
			image: 'http://i.imgur.com/v9nT2Re.jpg',
			thumb: 'http://i.imgur.com/v9nT2Rem.jpg',
			title: 'Panel 2.4: Final double page spread & gallery.'
		},
		{
			image: 'http://i.imgur.com/wGFYE6A.jpg',
			thumb: 'http://i.imgur.com/wGFYE6Am.jpg',
			title: 'Panel 3.1: Deck promotional poster development.'
		},
		{
			image: 'http://i.imgur.com/giFgQun.jpg',
			thumb: 'http://i.imgur.com/giFgQunm.jpg',
			title: 'Panel 3.2: Final promotional poster.'
		},
		{
			image: 'http://i.imgur.com/kza0iGx.jpg',
			thumb: 'http://i.imgur.com/kza0iGxm.jpg',
			title: 'Panel 3.3: Event promotional poster development.'
		},
		{
			image: 'http://i.imgur.com/vGncRk3.jpg',
			thumb: 'http://i.imgur.com/vGncRk3m.jpg',
			title: 'Panel 3.4: Final event promotional poster.'
		}
	];
});