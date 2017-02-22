// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
var appchat = angular.module('appchat', ['ionic']);

    appchat.run(function($ionicPlatform) {
        $ionicPlatform.ready(function() {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);

            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    });

    appchat.config(function($stateProvider, $urlRouterProvider) {
        $stateProvider

            .state('index', {
                url: '/signup',
                templateUrl: 'app/views/signup.html',
                controller: 'UserController'
            })

            .state('login', {
                url: '/login',
                templateUrl: 'app/views/login.html',
                controller: 'UserController'
            })

            .state('profil', {
                url: '/profil',
                templateUrl: 'app/views/profil.html',
                controller: 'profilController'

        })
            .state('conversation_createview', {
                url: '/conversation/messages/createView',
                templateUrl: 'app/views/conversation/createView.html',
                controller: 'createController'
            })

        .state('conversation', {
            url: '/conversation/messages/:id',
            templateUrl: 'app/views/chat.html',
            controller: 'conversationController'
        })

            .state('conversation_id', {
                url: '/conversation/:id',
                templateUrl: 'app/views/conversation/viewConversation.html',
                controller: 'viewController'
            })

        .state('signup_success', {
            url: '/signup_success',
            templateUrl: 'app/views/signup_success.html'

        })

        .state('login_success', {
            url: '/login_success',
            templateUrl: 'app/views/login_success.html'

        });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/signup');
    });