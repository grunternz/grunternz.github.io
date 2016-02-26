ceoApp.config(function($routeProvider) {
	$routeProvider

		.when('/', {
			templateUrl : 'app/components/work/workView.html',
			controller  : 'workController'
		})

		.when('/work', {
			templateUrl : 'app/components/work/workView.html',
			controller  : 'workController'
		})

		.when('/android-development', {
			templateUrl : 'app/components/android-development/androidDevelopmentView.html',
			controller  : 'androidDevelopmentController'
		})

		.when('/game-art', {
			templateUrl : 'app/components/game-art/gameArtView.html',
			controller  : 'gameArtController'
		})

		.when('/seng-group-project', {
			templateUrl : 'app/components/seng-group-project/sengGroupProjectView.html',
			controller  : 'sengGroupProjectController'
		})

		.when('/ux-group-project', {
			templateUrl : 'app/components/ux-group-project/uxGroupProjectView.html',
			controller  : 'uxGroupProjectController'
		})

		.when('/ray-tracing', {
			templateUrl : 'app/components/ray-tracing/rayTracingView.html',
			controller  : 'rayTracingController'
		})

		.when('/art-design-portfolio', {
			templateUrl : 'app/components/art-design-portfolio/artDesignPortfolioView.html',
			controller  : 'artDesignPortfolioController'
		})

		.when('/misc-art', {
			templateUrl : 'app/components/misc-art/miscArtView.html',
			controller  : 'miscArtController'
		})

		.otherwise({
			redirectTo: '/'
		});
});