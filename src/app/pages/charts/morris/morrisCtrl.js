/**
 * @author a.demeshko
 * created on 12/16/15
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.charts.morris')
    .controller('morrisCtrl', morrisCtrl);

  /** @ngInject */
  function morrisCtrl($scope, $window, baConfig) {
    var layoutColors = baConfig.colors;
    $scope.colors = [layoutColors.primary, layoutColors.warning, layoutColors.danger, layoutColors.info, layoutColors.success, layoutColors.primaryDark];
    $scope.lineData = [
      {y: "2020", a: 3626, b: 90},
      {y: "2019", a: 4113, b: 90},
      {y: "2018", a: 3874, b: 90},  
      {y: "2017", a: 3462, b: 65},
      {y: "2016", a: 3382, b: 40},
      {y: "2015", a: 3224, b: 65},
      {y: "2014", a: 3033, b: 40},
      {y: "2013", a: 2922, b: 65},
      {y: "2012", a: 2720, b: 90},      
    ];
    $scope.lineDataEnrol = [
      {y: "2020", a: 3626},
      {y: "2019", a: 4113},
      {y: "2018", a: 3874},  
      {y: "2017", a: 3462},
      {y: "2016", a: 3382},
      {y: "2015", a: 3224},
      {y: "2014", a: 3033},
      {y: "2013", a: 2922},
      {y: "2012", a: 2720},      
    ];
    $scope.areaData = [
      {y: "2020", a: 3626, b: 90},
      {y: "2019", a: 4113, b: 90},
      {y: "2018", a: 3874, b: 90},  
      {y: "2017", a: 3462, b: 65},
      {y: "2016", a: 3382, b: 40},
      {y: "2015", a: 3224, b: 65},
      {y: "2014", a: 3033, b: 40},
      {y: "2013", a: 2922, b: 65},
      {y: "2012", a: 2720, b: 90},    
    ];
    $scope.barData = [
      {y: "2012", a: 2720, b: 90}, 
      {y: "2013", a: 2922, b: 65},
      {y: "2014", a: 3033, b: 40},
      {y: "2015", a: 3224, b: 65},
      {y: "2016", a: 3382, b: 40},
      {y: "2017", a: 3462, b: 65},
      {y: "2018", a: 3874, b: 90},  
      {y: "2019", a: 4113, b: 90},
      {y: "2020", a: 3626, b: 90},   
    ];
    $scope.barProgramData = [
      {y: "2022", a: 7 }, 
      {y: "2023", a: 3 },
      {y: "2024", a: 13 },
      {y: "2025", a: 9 }  
    ];
    $scope.donutData = [
      {label: "Download Sales", value: 12},
      {label: "In-Store Sales", value: 30},
      {label: "Mail-Order Sales", value: 20}
    ];

    angular.element($window).bind('resize', function () {
      //$window.Morris.Grid.prototype.redraw();
    });
  }

})();