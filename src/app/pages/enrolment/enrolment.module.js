(function () {
  'use strict';

  angular.module('BlurAdmin.pages.enrolment', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('enrolment', {
          url: '/enrolment',
          templateUrl: 'app/pages/enrolment/enrolment.html',
          title: 'Enrolment',
          sidebarMeta: {
            order: 120,
          },

        });
  }

})();