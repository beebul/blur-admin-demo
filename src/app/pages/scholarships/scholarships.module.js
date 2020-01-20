(function () {
  'use strict';

  angular.module('BlurAdmin.pages.scholarships', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('scholarships', {
          url: '/scholarships',
          templateUrl: 'app/pages/scholarships/scholarships.html',
          title: 'Scholarships',
          sidebarMeta: {
            order: 200,
          },

        });
  }

})();