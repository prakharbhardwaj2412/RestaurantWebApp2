(function () {

angular.module('SigninFormApp',[]);

angular.module('SigninFormApp')
.controller('SigninController', SigninController);

function SigninController() {
  var sic = this;

  // sic.submit = function () {
  //   sic.completed = true;
  // };
}


angular.module('RegisterFormApp', []);

angular.module('RegisterFormApp')
.controller('RegisterController', RegisterController);

function RegisterController() {
	var reg = this;
}


})();
