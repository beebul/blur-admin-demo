/**
 * @author a.demeshko
 * created on 12/16/15
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.charts.chartJs')
    .controller('chartJs5DCtrl', chartJs5DCtrl);

  /** @ngInject Research Income ($mil) */
  function chartJs5DCtrl($scope) {
    $scope.labels =["2017","2018","2019"];
    $scope.data = [
      [4, 5, 6]
    ];
    $scope.series = ['$mil', 'Count'];

    $scope.options = { 
      legend: { display: false },
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