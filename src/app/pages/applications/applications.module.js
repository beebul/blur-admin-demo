(function () {
  'use strict';

  angular.module('BlurAdmin.pages.applications', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('applications', {
          url: '/applications',
          templateUrl: 'app/pages/applications/applications.html',
          title: 'Applications & Offers',
          sidebarMeta: {
            order: 120,
          },

        });
  }

})();