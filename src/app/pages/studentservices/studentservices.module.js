(function () {
  'use strict';

  angular.module('BlurAdmin.pages.studentservices', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('studentservices', {
          url: '/studentservices',
          templateUrl: 'app/pages/studentservices/studentservices.html',
          title: 'Student Services',
          sidebarMeta: {
            order: 120,
          },

        });
  }

})();