/**
 * @author a.demeshko
 * created on 12/16/15
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.charts.chartJs')
    .controller('chartJs2DCtrl', chartJs2DCtrl);

  /** @ngInject */
  function chartJs2DCtrl($scope) {
    $scope.labels =["2014", "2015", "2016", "2017", "2018"];
    $scope.data = [
      [83.2, 84.4, 82.9, 82.9, 83.4],
      [84.4, 90.9, 90.3, 91.8, 79.7]
    ];
    $scope.series = ['ALH Satisfaction', 'National Average'];
    $scope.legend = ['ALH Satisfaction', 'National Average'];

    $scope.options = { 
    legend: { display: true },
      responsive: true, 
      maintainAspectRatio: false
      //
    };

    $scope.changeData = function () {
      $scope.data[0] = shuffle($scope.data[0]);
      $scope.data[1] = shuffle($scope.data[1]);
    };

    function shuffle(o){
      for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x){}
      return o;
    }



  }

})();