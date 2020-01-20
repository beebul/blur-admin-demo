/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.charts.amCharts')
      .controller('AreaChartCtrlBudget', AreaChartCtrlBudget);

  /** @ngInject */
  function AreaChartCtrlBudget($scope, baConfig, $element, layoutPaths) {
    var layoutColors = baConfig.colors;
    var id = $element[0].getAttribute('id');
    var areaChart = AmCharts.makeChart(id, {
      type: 'serial',
      theme: 'blur',
      color: layoutColors.defaultText,
      dataProvider: [
        {
          lineColor: layoutColors.info,
          date: '2014-01-01',
          duration: 10
        },
        {
          date: '2015-01-01',
          duration: 482
        },
        {
          date: '2016-01-01',
          duration: 562
        },
        {
          date: '2017-01-01',
          duration: 379
        },
        {
          lineColor: layoutColors.warning,
          date: '2018-01-01',
          duration: 501
        },
        {
          date: '2019-01-01',
          duration: 443
        }
      ],
      balloon: {
        cornerRadius: 6,
        horizontalPadding: 15,
        verticalPadding: 10
      },
      valueAxes: [
        {
          duration: 'mm',
          durationUnits: {
            hh: 'h ',
            mm: 'min'
          },
          gridAlpha: 0.5,
          gridColor: layoutColors.border,
        }
      ],
      graphs: [
        {
          bullet: 'square',
          bulletBorderAlpha: 1,
          bulletBorderThickness: 1,
          fillAlphas: 0.5,
          fillColorsField: 'lineColor',
          legendValueText: '[[value]]',
          lineColorField: 'lineColor',
          title: 'duration',
          valueField: 'duration'
        }
      ],

      chartCursor: {
        categoryBalloonDateFormat: 'YYYY MMM DD',
        cursorAlpha: 0,
        fullWidth: true
      },
      dataDateFormat: 'YYYY-MM-DD',
      categoryField: 'date',
      categoryAxis: {
        dateFormats: [
          {
            period: 'DD',
            format: 'DD'
          },
          {
            period: 'WW',
            format: 'MMM DD'
          },
          {
            period: 'MM',
            format: 'MMM'
          },
          {
            period: 'YYYY',
            format: 'YYYY'
          }
        ],
        parseDates: true,
        autoGridCount: false,
        gridCount: 50,
        gridAlpha: 0.5,
        gridColor: layoutColors.border,
      },
      export: {
        enabled: true
      },
      pathToImages: layoutPaths.images.amChart
    });

    areaChart.addListener('dataUpdated', zoomAreaChart);

    function zoomAreaChart() {
      areaChart.zoomToDates(new Date(2012, 0, 3), new Date(2012, 0, 11));
    }
  }

})();
