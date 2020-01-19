(function () {
  'use strict';

  angular.module('BlurAdmin.pages.budget', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('budget', {
          url: '/budget',
          templateUrl: 'app/pages/budget/budget.html',
          title: 'Budget',
          sidebarMeta: {
            order: 250,
          },
        });
  }

})();