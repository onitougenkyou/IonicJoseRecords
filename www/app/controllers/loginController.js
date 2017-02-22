
    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

      .state('app.login', {
          url: '/login',
          views: {
              'menuContent': {
                  templateUrl: 'templates/login.html',
                  controller: 'UserController'
              }
          }
      })

      .state('tab.home', {
          url: '/tab/home',
          views: {
              'tab-home': {
                  templateUrl: 'templates/home.html'
              }
          }
      })

      .state('app.test', {
          url: '/test',
          views: {
              'menuContent': {
                  templateUrl: 'templates/test.html',
                  controller: 'TestCtrl'
              }
          }
      })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    })
    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  });
