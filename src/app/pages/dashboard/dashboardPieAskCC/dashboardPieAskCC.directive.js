/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .directive('dashboardPieAskCC', dashboardPieAskCC);

  /** @ngInject */
  function dashboardPieChart() {
    return {
      restrict: 'E',
      controller: 'dashboardPieAskCCCtrl',
      templateUrl: 'app/pages/dashboard/dashboardPieAskCC/dashboardPieAskCC.html'
    };
  }
})();