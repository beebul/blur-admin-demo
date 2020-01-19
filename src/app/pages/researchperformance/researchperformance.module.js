(function () {
  'use strict';

  angular.module('BlurAdmin.pages.researchperformance', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('researchperformance', {
          url: '/researchperformance',
          templateUrl: 'app/pages/researchperformance/researchperformance.html',
          title: 'Research performance (ERA)',
          sidebarMeta: {
            order: 250,
          },
        });
  }

})();