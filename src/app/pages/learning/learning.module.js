(function () {
  'use strict';

  angular.module('BlurAdmin.pages.learning', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('learning', {
          url: '/learning',
          templateUrl: 'app/pages/learning/learning.html',
          title: 'Learning & Teaching',
          sidebarMeta: {
            order: 200,
          },

        });
  }

})();