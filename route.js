(function () {



	angular.module('MyApp')
	.config(RoutesConfig1);

    RoutesConfig1.$inject = ['$stateProvider', '$urlRouterProvider'];
	function RoutesConfig1($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/home/main');

		//Set up UI states

		$stateProvider.state('home', {
			url: '/home',
			templateUrl: 'templates/header.html',
		})



		$stateProvider.state('home.main', {
			url: '/main',
			templateUrl: 'templates/main.html'
		})

		$stateProvider.state('home.menu', {
			url: '/menu',
			templateUrl: 'templates/menu.html'
		});

		$stateProvider.state('home.aboutUs', {
			url: '/aboutUs',
			templateUrl: 'templates/aboutUs.html'
		});


	}

	angular.module('UserApp')
	.config(RoutesConfig);

	RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
	function RoutesConfig ($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/dashboard/user');

		$stateProvider.state('dashboard', {
			url: '/dashboard',
			templateUrl: 'templates/nav.html'
		})

		$stateProvider.state('dashboard.menu', {
			url: '/menu',
			templateUrl: 'templates/menu.html'
		});

		$stateProvider.state('dashboard.user', {
			url: '/user',
			templateUrl: 'templates/user.html'
		});

	}









})();