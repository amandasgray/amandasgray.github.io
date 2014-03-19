var AmandaGrayApp = angular.module('AmandaGrayApp', ['ngRoute']);

	AmandaGrayApp.config(function ($routeProvider) {
		$routeProvider 
			.when('/home', 
				{
					controller: 'MainCtrl',
					templateUrl: '/app/partials/Home.html'
				})
			.when('/about', 
				{
					controller: 'MainCtrl',
					templateUrl: '/app/partials/About.html'
				})
			.when('/publications', 
				{
					controller: 'MainCtrl',
					templateUrl: '/app/partials/Publications.html'
				})
			.when('/contact', 
				{
					controller: 'MainCtrl',
					templateUrl: '/app/partials/Contact.html'
				})
			.otherwise({ redirectTo: '/home'
				});
	})