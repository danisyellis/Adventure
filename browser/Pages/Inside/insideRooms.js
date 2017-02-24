app.config(function ($stateProvider) {
    $stateProvider.state('color', {
        url: '/color',
        templateUrl: 'js/Pages/Inside/color.html',
        controller: "colorCtrl"
    });
});

app.config(function ($stateProvider) {
    $stateProvider.state('darkRoom', {
        url: '/darkRoom',
        templateUrl: 'js/Pages/Inside/darkRoom.html',
    });
});

app.config(function ($stateProvider) {
    $stateProvider.state('glowingRocks', {
        url: '/glowingRocks',
        templateUrl: 'js/Pages/Inside/glowingRocks.html',
    });
});

app.controller("colorCtrl", function ($scope, $state) {
	setTimeout(function(){ $state.go("pageOne") }, 10000);
})
