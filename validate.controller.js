(function () {

	angular.module('MyApp')
	.controller('RegisterController', RegisterController);

	RegisterController.$inject = ['$scope'];
	function RegisterController() {
		var reg = this;

		reg.submit = function () {
			reg.completed = true;

		};
	}





});