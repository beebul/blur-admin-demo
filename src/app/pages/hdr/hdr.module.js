(function () {
  'use strict';

  angular.module('BlurAdmin.pages.hdr', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('hdr', {
          url: '/hdr',
          templateUrl: 'app/pages/hdr/hdr.html',
          title: 'HDR Students',
          sidebarMeta: {
            order: 210,
          },

        });
  }

})();