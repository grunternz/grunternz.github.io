ceoApp.config(function($routeProvider) {
	$routeProvider

		.when('/', {
			templateUrl : 'app/components/work/workView.html',
			controller  : 'workController',
		})

		.when('/work', {
			templateUrl : 'app/components/work/workView.html',
			controller  : 'workController'
		})

		.when('/android-development', {
			templateUrl : 'app/components/android-development/androidDevelopmentView.html',
			controller  : 'androidDevelopmentController',
			resolve		: {
				loadController: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load('app/components/android-development/androidDevelopmentController.js');
                }]
			}
		})

		.when('/game-art', {
			templateUrl : 'app/components/game-art/gameArtView.html',
			controller  : 'gameArtController',
			resolve		: {
				loadController: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load('app/components/game-art/gameArtController.js');
                }]
			}
		})

		.when('/seng-group-project', {
			templateUrl : 'app/components/seng-group-project/sengGroupProjectView.html',
			controller  : 'sengGroupProjectController',
			resolve		: {
				loadController: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load('app/components/seng-group-project/sengGroupProjectController.js');
                }]
			}
		})

		.when('/ux-group-project', {
			templateUrl : 'app/components/ux-group-project/uxGroupProjectView.html',
			controller  : 'uxGroupProjectController',
			resolve		: {
				loadController: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load('app/components/ux-group-project/uxGroupProjectController.js');
                }]
			}
		})

		.when('/ray-tracing', {
			templateUrl : 'app/components/ray-tracing/rayTracingView.html',
			controller  : 'rayTracingController',
			resolve		: {
				loadController: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load('app/components/ray-tracing/rayTracingController.js');
                }]
			}
		})

		.when('/art-design-portfolio', {
			templateUrl : 'app/components/art-design-portfolio/artDesignPortfolioView.html',
			controller  : 'artDesignPortfolioController',
			resolve		: {
				loadController: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load('app/components/art-design-portfolio/artDesignPortfolioController.js');
                }]
			}
		})

		.when('/misc-art', {
			templateUrl : 'app/components/misc-art/miscArtView.html',
			controller  : 'miscArtController',
			resolve		: {
				loadController: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load('app/components/misc-art/miscArtController.js');
                }]
			}
		})

		.otherwise({
			redirectTo: '/'
		});
});