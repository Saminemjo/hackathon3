angular.module('app')
    .config(function($stateProvider, $urlRouterProvider, AccessLevels) {
        $stateProvider
            .state('anon', {
                abstract: true,
                data: {
                    access: AccessLevels.anon
                },
                views: {
                    'navbar@': {
                        templateUrl: 'anon/navbar.html',
                        controller: 'NavbarController'
                    }
                }
            })
            .state('anon.home', {
                url: '/',
                views: {
                    'slide@': {
                        templateUrl: 'anon/home.html',
                        controller: 'MainController'
                    }
                }
            })
            .state('anon.login', {
                url: '/login',
                views: {
                    'slide@': {
                        templateUrl: 'anon/login.html',
                        controller: 'LoginController'
                    }
                }
            })
            .state('anon.register', {
                url: '/register',
                views: {
                    'slide@': {
                        templateUrl: 'anon/register.html',
                        controller: 'RegisterController'
                    }
                }
            });
        $stateProvider
            .state('user', {
                abstract: true,
                url: '/user',
                views: {
                    'navbar@': {
                        templateUrl: 'user/navbar.html',
                        controller: 'NavbarController'
                    }
                },
                data: {
                    access: AccessLevels.user
                }
            })
            .state('user.search', {
                url: '/search',
                views: {
                    'slide@': {
                        templateUrl: 'user/search.html',
                        controller: 'searchController'
                    }
                }
            })
            .state('user.otherUser', {
                url: '/otherUser',
                views: {
                    'slide@': {
                        templateUrl: 'user/otherUser.html',
                        controller: 'otherUserController'
                    }
                }
            })
            .state('user.otherUser3', {
                url: '/otherUser3',
                views: {
                    'slide@': {
                        templateUrl: 'user/otherUser3.html',
                        controller: 'otherUser3Controller'
                    }
                }
            })
            .state('user.dual', {
                url: '/dual',
                views: {
                    'slide@': {
                        templateUrl: 'user/dual.html',
                        controller: 'dualController'
                    }
                }
            })
            .state('user.chat', {
                url: '/chat',
                views: {
                    'slide@': {
                        templateUrl: 'user/chat.html',
                        controller: 'ChatController'
                    }
                }
            })
            .state('user.matchs', {
                url: '/matchs',
                views: {
                    'slide@': {
                        templateUrl: 'user/matchs.html',
                        controller: 'matchsController'
                    }
                }
            })
            .state('user.signup', {
                url: '/signup',
                views: {
                    'content@': {
                        templateUrl: 'user/signup.html',
                        controller: 'signupController'
                    }
                }
            })
            .state('user.home', {
                url: '/home',
                views: {
                    'content@': {
                        templateUrl: 'user/home.html',
                        controller: 'homeController'
                    }
                }
            })
            .state('user.profile', {
                url: '/profile',
                views: {
                    'slide@': {
                        templateUrl: 'user/profile.html',
                        controller: 'ProfileController'
                    }
                }
            });
        $urlRouterProvider.otherwise('/');
    });
