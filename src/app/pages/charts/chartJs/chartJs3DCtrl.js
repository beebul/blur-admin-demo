/**
 * @author a.demeshko
 * created on 12/16/15
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.charts.chartJs')
    .controller('chartJs3DCtrl', chartJs3DCtrl);

  /** @ngInject */
  function chartJs3DCtrl($scope) {
    $scope.labels =["Domestic","International"];
    $scope.data = [
      [1741,720],
      [1228,69]
    ];
    $scope.series = ['Applications', 'Offers'];

    $scope.options = { legend: { display: true } };

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