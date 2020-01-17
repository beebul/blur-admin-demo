/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .controller('DashboardPieChartCtrl', DashboardPieChartCtrl);

  /** @ngInject */
  function DashboardPieChartCtrl($scope, $timeout, baConfig, baUtil) {
    var pieColor = baUtil.hexToRGB(baConfig.colors.defaultText, 0.2);
    $scope.charts = [{
      color: pieColor,
      description: 'Recognition and Engagement',
      stats: '93%',
      icon: 'person',
      percentage: '93',
      otherdescription: 'Previous Year : 98%',
    }, {
      color: pieColor,
      description: 'HDR Completions',
      stats: '100%',
      icon: 'face',
      percentage: '100',
      otherdescription: 'Previous Year : 93%',
    }, {
      color: pieColor,
      description: 'Research Income Increase',
      stats: '$6.3m',
      icon: 'money',
      percentage: '19',
      otherdescription: 'Previous Year: $5.3m',
    }, {
      color: pieColor,
      description: 'Publication Quality',
      stats: '66%',
      icon: 'book',
      percentage: '80%',
      otherdescription: 'Previous Year: 66%',
    }
    ];

    function getRandomArbitrary(min, max) {
      return Math.random() * (max - min) + min;
    }

    function loadPieCharts() {
      $('.chart').each(function () {
        var chart = $(this);
        chart.easyPieChart({
          easing: 'easeOutBounce',
          onStep: function (from, to, percent) {
            $(this.el).find('.percent').text(Math.round(percent));
          },
          barColor: chart.attr('rel'),
          trackColor: 'rgba(0,0,0,0)',
          size: 84,
          scaleLength: 0,
          animation: 2000,
          lineWidth: 9,
          lineCap: 'round',
        });
      });

      $('.refresh-data').on('click', function () {
        updatePieCharts();
      });
    }

    function updatePieCharts() {
      $('.pie-charts .chart').each(function(index, chart) {
        $(chart).data('easyPieChart').update(charts.percentage);
      });
    }

    $timeout(function () {
      loadPieCharts();
      updatePieCharts();
    }, 1000);
  }
})();