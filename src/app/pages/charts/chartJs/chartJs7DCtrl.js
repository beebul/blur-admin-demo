/**
 * @author a.demeshko
 * created on 12/16/15
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.charts.chartJs')
    .controller('chartJs7DCtrl', chartJs7DCtrl);

  /** @ngInject Publication Quality */
  function chartJs7DCtrl($scope) {
    $scope.labels =["2021","2022","2023","2024","2025"];
    $scope.data = [
      [7,3,13,0,9]
    ];
    $scope.series = ['Year', 'Program Count'];

    $scope.options = { 
      legend: { display: false },
      showTooltips: true,
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
      }
    };

    // $scope.changeData = function () {
    //   $scope.data[0] = shuffle($scope.data[0]);
    // };

    // function shuffle(o){
    //   for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x){}
    //   return o;
    // }

  }

})();