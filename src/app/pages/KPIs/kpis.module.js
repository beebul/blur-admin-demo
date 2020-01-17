(function () {
  'use strict';

  angular.module('BlurAdmin.pages.kpis', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('kpis', {
          url: '/kpis',
          templateUrl: 'app/pages/kpis/kpis.html',
          title: 'KPIs',
          sidebarMeta: {
            order: 110,
          },

        });
  }

})();