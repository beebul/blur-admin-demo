(function () {
  'use strict';

  angular.module('BlurAdmin.pages.staff', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('staff', {
          url: '/staff',
          templateUrl: 'app/pages/staff/staff.html',
          title: 'Staff',
          sidebarMeta: {
            order: 250,
          },
        });
  }

})();