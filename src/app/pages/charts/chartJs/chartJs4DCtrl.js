/**
 * @author a.demeshko
 * created on 12/16/15
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.charts.chartJs')
    .controller('chartJs4DCtrl', chartJs4DCtrl);

  /** @ngInject Research Leadership Capacity */
  function chartJs4DCtrl($scope) {
    $scope.labels =["2017","2018","2019"];
    $scope.data = [
      [17, 14, 17]
    ];
    $scope.series = ['Capacity', 'Count'];

    $scope.options = { 
      legend: { display: false },
      scales: { yAxes: [{
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