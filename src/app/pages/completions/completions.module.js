(function () {
  'use strict';

  angular.module('BlurAdmin.pages.completions', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('completions', {
          url: '/completions',
          templateUrl: 'app/pages/completions/completions.html',
          title: 'Completions and Graduations',
          sidebarMeta: {
            order: 120,
          },

        });
  }

})();