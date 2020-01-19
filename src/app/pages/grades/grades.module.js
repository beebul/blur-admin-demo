(function () {
  'use strict';

  angular.module('BlurAdmin.pages.grades', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('grades', {
          url: '/grades',
          templateUrl: 'app/pages/grades/grades.html',
          title: 'Grades',
          sidebarMeta: {
            order: 210,
          },

        });
  }

})();