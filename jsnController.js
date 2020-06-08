(function () {

		angular.module('UserApp')
		.controller('jsnController', jsnController);

		jsnController.$inject = [ '$scope' ];
		function jsnController($scope){
			console.log(1);



			$scope.loadDoc = function() {
				console.log(2);
				var xhttp = new XMLHttpRequest();
				console.log(3);
				xhttp.open("GET", "https://reqres.in/api/users?page=2", true);
				xhttp.send();
			  	xhttp.onreadystatechange = function() {
			  		console.log(4);
			    	if (this.readyState == 4 && this.status == 200) {
			      		var ResOb = this.responseText;
			      		$scope.MyObj = JSON.parse(ResOb);
			    	}
			  	};
			  	
			}

	
			
		}
	})();