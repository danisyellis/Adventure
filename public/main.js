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
    }, 20000);
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
        for (var i = 0; i < Player.loot.length; i++) {
            if (Player.loot[i] === "stick") {
                return true;
            }
        }
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

app.controller("playerCtrl", function ($scope) {
    //$scope.player = new Player();
    $scope.itemChoice;
});


//probably don't want this player object anymore, because it's easier with angular to have any variables be on the session, I think
// var Player = function Player() {
//     this.loot = [];
// };

// Player.prototype.addLoot = function (item) {
//     this.loot.push(item);
//     console.log(this.loot);
//     //I may want to refactor this.loot into an object at some point for better optimization
// };

// Player.prototype.write = function () {
//     console.log("Hi");
// };






//use this later for random inside or outside room
// app.factory('RandomGreetings', function () {

//     var getRandomFromArray = function getRandomFromArray(arr) {
//         return arr[Math.floor(Math.random() * arr.length)];
//     };

//     var greetings = ['Hello, world!', 'At long last, I live!', 'Hello, simple human.', 'What a beautiful day!', 'I\'m like any other project, except that I am yours. :)', 'This empty string is for Lindsay Levine.', 'こんにちは、ユーザー様。', 'Welcome. To. WEBSITE.', ':D', 'Yes, I think we\'ve met before.', 'Gimme 3 mins... I just grabbed this really dope frittata', 'If Cooper could offer only one piece of advice, it would be to nevSQUIRREL!'];

//     return {
//         greetings: greetings,
//         getRandomGreeting: function getRandomGreeting() {
//             return getRandomFromArray(greetings);
//         }
//     };
// });

// app.directive('randoGreeting', function (RandomGreetings) {

//     return {
//         restrict: 'E',
//         templateUrl: 'js/common/directives/rando-greeting/rando-greeting.html',
//         link: function link(scope) {
//             scope.greeting = RandomGreetings.getRandomGreeting();
//         }
//     };
// });
