window.app = angular.module('ChooseUrAdventure', ['ui.router']);
app.config(function ($locationProvider, $urlRouterProvider) {
    // This turns off hashbang urls (/#about) and changes it to something normal (/about)
    $locationProvider.html5Mode(true);
    // // If we go to a URL that ui-router doesn't have registered, go to the "/" url.
     $urlRouterProvider.otherwise('/404');

});


app.controller("testCtrl", function ($scope) {
    $scope.message = "Angular works"
});

app.config(function ($stateProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: '/home/home.html'
    });
});

app.config(function ($stateProvider) {
    $stateProvider.state('404', {
        url: '/404',
        templateUrl: '/404.html'
    });
});

app.config(function ($stateProvider) {
    $stateProvider.state('color', {
        url: '/color',
        templateUrl: 'Pages/Inside/color.html',
        controller: "colorCtrl"
    });
});

app.config(function ($stateProvider) {
    $stateProvider.state('darkRoom', {
        url: '/darkRoom',
        templateUrl: 'Pages/Inside/darkRoom.html'
    });
});

app.config(function ($stateProvider) {
    $stateProvider.state('glowingRocks', {
        url: '/glowingRocks',
        templateUrl: 'Pages/Inside/glowingRocks.html'
    });
});

app.controller("colorCtrl", function ($scope, $state) {
    setTimeout(function () {
        $state.go("pageOne");
    }, 40000);
});

// app.controller("colorCtrl", function ($scope, $state) {
// 	setTimeout(function(){ $state.go("pageOne") }, 8000);
// })

app.config(function ($stateProvider) {
    $stateProvider.state('ledge', {
        url: '/ledge',
        templateUrl: 'Pages/Outside/ledge.html'
    });
});

app.config(function ($stateProvider) {
    $stateProvider.state('bed', {
        url: '/bed',
        templateUrl: 'Pages/Outside/bed.html'
    });
});

app.config(function ($stateProvider) {
    $stateProvider.state('ledge2', {
        url: '/ledge2',
        templateUrl: 'Pages/Outside/ledge2.html',
        controller: "FlyCtrl"
    });
});

app.controller('FlyCtrl', function ($scope, Player) {
    $scope.hasStick = function () {
            if($scope.itemChoice = "stick")
                return true;
        } else {
        return false;
    };
});

app.config(function ($stateProvider) {
    $stateProvider.state('pageOne', {
        url: '/pageOne',
        templateUrl: 'Pages/pageOne/pageOne.html',
        controller: "playerCtrl"
    });
});







//finish making this that will choose a random inside or outside room
// app.factory('RandomRoom', function () {

//     var getRandomFromArray = function getRandomFromArray(arr) {
//         return arr[Math.floor(Math.random() * arr.length)];
//     };

//     var rooms = [];

//     return {
//         rooms: rooms,
//         getRandomRoom: function getRandomRoom() {
//             return getRandomFromArray(rooms);
//         }
//     };
// });

// app.directive('randoRoom', function (RandomRooms) {

//     return {
//         restrict: 'E',
//         templateUrl: '',
//         link: function link(scope) {
//             scope.room = RandomRooms.getRandomRoom();
//         }
//     };
// });
