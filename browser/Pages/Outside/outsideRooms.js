app.config(function ($stateProvider) {
    $stateProvider.state('ledge', {
        url: '/ledge',
        templateUrl: 'js/Pages/Outside/ledge.html',
        // controller: "playerCtrl"
    });
});

app.config(function ($stateProvider) {
    $stateProvider.state('bed', {
        url: '/bed',
        templateUrl: 'js/Pages/Outside/bed.html',
    });
});

app.config(function ($stateProvider) {
    $stateProvider.state('ledge2', {
        url: '/ledge2',
        templateUrl: 'js/Pages/Outside/ledge2.html',
        controller: "FlyCtrl"
    });
});

app.controller('FlyCtrl', function ($scope, Player) {
            //rewrite this!!!!
    	$scope.hasStick = function() {
    		for (var i=0; i<Player.loot.length; i++) {
    			if (Player.loot[i] === "stick") {
    				return true
    			}
    		}
    		return false
    	}
});
