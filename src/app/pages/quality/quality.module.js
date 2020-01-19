(function () {
  'use strict';

  angular.module('BlurAdmin.pages.quality', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('quality', {
          url: '/quality',
          templateUrl: 'app/pages/quality/quality.html',
          title: 'Program Quality/Development',
          sidebarMeta: {
            order: 120,
          },

        });
  }

})();