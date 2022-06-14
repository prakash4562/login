import {Component, OnInit} from '@angular/core';
import * as Highcharts from 'highcharts';
import highChartsMore from 'highcharts/highcharts-more'
import solidGauge from 'highcharts/modules/solid-gauge'
// import HCSoldGauge from 'highcharts/modules/solid-gauge';
highChartsMore(Highcharts);
solidGauge(Highcharts);


import {Chart, registerables} from 'chart.js';

Chart.register(...registerables);


@Component({
  selector: 'app-performance-report',
  templateUrl: './performance-report.component.html',
  styleUrls: ['./performance-report.component.css']
})
export class PerformanceReportComponent implements OnInit {
  title;
  chart;
  subtitle;
  accessibility;
  xAxis;
  yAxis;
  legend;
  plotOptions;
  tooltip;
  series;
  drilldown;
  pane;
  renderer;
  chartWidth;
  plotHeight;
  credits;

  public basicBarOptions: any = {
    chart: {
      type: 'bar',
      height: '30%'

    },
    title: {
      text: 'Historic World Population by Region'
    },
    subtitle: {
      text: 'Wikipedia'
    },
    xAxis: {
      categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
      title: {
        text: null
      }
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Population (millions)',
        align: 'high'
      },
      labels: {
        overflow: 'justify'
      }
    },
    tooltip: {
      valueSuffix: ' millions'
    },
    plotOptions: {
      bar: {
        dataLabels: {
          enabled: true
        }
      }
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'top',
      x: -40,
      y: 80,
      floating: true,
      borderWidth: 1,
      backgroundColor: '#FFFFFF',
      shadow: true
    },
    credits: {
      enabled: false
    },
    series: [{
      name: 'Year 1800',
      data: [107, 31, 635, 203, 100]
    }, {
      name: 'Year 1900',
      data: [133, 156, 947, 408, 60]
    }]
  }


  constructor() {
  }

  ngOnInit(): void {
    this.makeDoughnutChart1()
    this.makeDoughnutChart2()
    this.makeAreaChart()
    Highcharts.chart('basicBar', this.basicBarOptions);
    this.makeColumnChart()
  }

  makeColumnChart() {
    this.chart = {
      type: 'column'
    },
      this.title = {
        align: 'left',
        text: 'Browser market shares. January, 2018'
      },
      this.subtitle = {
        align: 'left',
        text: 'Share Market'
      },
      this.accessibility = {
        announceNewData: {
          enabled: true
        }
      },
      this.xAxis = {
        type: 'category'
      },
      this.yAxis = {
        title: {
          text: 'Total percent market share'
        }

      },
      this.legend = {
        enabled: false
      },
      this.plotOptions = {
        series: {
          borderWidth: 0,
          dataLabels: {
            enabled: true,
            format: '{point.y:.1f}%'
          }
        }
      },
      this.tooltip = {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
      },
      this.series = [
        {
          name: "Browsers",
          colorByPoint: true,
          data: [
            {
              name: "Chrome",
              y: 50,
              drilldown: "Chrome"
            },
            {
              name: "Firefox",
              y: 20.57,
              drilldown: "Firefox"
            },
            {
              name: "Internet Explorer",
              y: 47.23,
              drilldown: "Internet Explorer"
            },
            {
              name: "Safari",
              y: 25.58,
              drilldown: "Safari"
            },
            {
              name: "Edge",
              y: 14.02,
              drilldown: "Edge"
            },
            {
              name: "Opera",
              y: 51.92,
              drilldown: "Opera"
            },
            {
              name: "Other",
              y: 37.62,
              drilldown: null
            }
          ]
        }
      ],
      this.drilldown = {
        breadcrumbs: {
          position: {
            align: 'right'
          }
        },
        series: [
          {
            name: "Chrome",
            id: "Chrome",
            data: [
              [
                "v65.0",
                0.1
              ],
              [
                "v64.0",
                1.3
              ],
              [
                "v63.0",
                53.02
              ],
              [
                "v62.0",
                1.4
              ],
              [
                "v61.0",
                0.88
              ],
              [
                "v60.0",
                0.56
              ],
              [
                "v59.0",
                0.45
              ],
              [
                "v58.0",
                0.49
              ],
              [
                "v57.0",
                0.32
              ],
              [
                "v56.0",
                0.29
              ],
              [
                "v55.0",
                0.79
              ],
              [
                "v54.0",
                0.18
              ],
              [
                "v51.0",
                0.13
              ],
              [
                "v49.0",
                2.16
              ],
              [
                "v48.0",
                0.13
              ],
              [
                "v47.0",
                0.11
              ],
              [
                "v43.0",
                0.17
              ],
              [
                "v29.0",
                0.26
              ]
            ]
          },
          {
            name: "Firefox",
            id: "Firefox",
            data: [
              [
                "v58.0",
                1.02
              ],
              [
                "v57.0",
                7.36
              ],
              [
                "v56.0",
                0.35
              ],
              [
                "v55.0",
                0.11
              ],
              [
                "v54.0",
                0.1
              ],
              [
                "v52.0",
                0.95
              ],
              [
                "v51.0",
                0.15
              ],
              [
                "v50.0",
                0.1
              ],
              [
                "v48.0",
                0.31
              ],
              [
                "v47.0",
                0.12
              ]
            ]
          },
          {
            name: "Internet Explorer",
            id: "Internet Explorer",
            data: [
              [
                "v11.0",
                6.2
              ],
              [
                "v10.0",
                0.29
              ],
              [
                "v9.0",
                0.27
              ],
              [
                "v8.0",
                0.47
              ]
            ]
          },
          {
            name: "Safari",
            id: "Safari",
            data: [
              [
                "v11.0",
                3.39
              ],
              [
                "v10.1",
                0.96
              ],
              [
                "v10.0",
                0.36
              ],
              [
                "v9.1",
                0.54
              ],
              [
                "v9.0",
                0.13
              ],
              [
                "v5.1",
                0.2
              ]
            ]
          },
          {
            name: "Edge",
            id: "Edge",
            data: [
              [
                "v16",
                2.6
              ],
              [
                "v15",
                0.92
              ],
              [
                "v14",
                0.4
              ],
              [
                "v13",
                0.1
              ]
            ]
          },
          {
            name: "Opera",
            id: "Opera",
            data: [
              [
                "v50.0",
                0.96
              ],
              [
                "v49.0",
                0.82
              ],
              [
                "v12.1",
                0.14
              ]
            ]
          }
        ]
      }
    Highcharts.chart('pieChart', {
      chart: this.chart,
      title: this.title,
      subtitle: this.subtitle,
      accessibility: this.accessibility,
      xAxis: this.xAxis,
      yAxis: this.yAxis,
      legend: this.legend,
      plotOptions: this.plotOptions,
      tooltip: this.tooltip,
      series: this.series,
      drilldown: this.drilldown
    });
  }

  makeAreaChart() {
    this.chart = {
      type: 'area',
      height: '60%'
    },
      this.accessibility = {
        description: 'Image description: An area chart compares the nuclear stockpiles of the USA and the USSR/Russia between 1945 and 2017. The number of nuclear weapons is plotted on the Y-axis and the years on the X-axis. The chart is interactive, and the year-on-year stockpile levels can be traced for each country. The US has a stockpile of 6 nuclear weapons at the dawn of the nuclear age in 1945. This number has gradually increased to 369 by 1950 when the USSR enters the arms race with 6 weapons. At this point, the US starts to rapidly build its stockpile culminating in 32,040 warheads by 1966 compared to the USSR’s 7,089. From this peak in 1966, the US stockpile gradually decreases as the USSR’s stockpile expands. By 1978 the USSR has closed the nuclear gap at 25,393. The USSR stockpile continues to grow until it reaches a peak of 45,000 in 1986 compared to the US arsenal of 24,401. From 1986, the nuclear stockpiles of both countries start to fall. By 2000, the numbers have fallen to 10,577 and 21,000 for the US and Russia, respectively. The decreases continue until 2017 at which point the US holds 4,018 weapons compared to Russia’s 4,500.'
      },
      this.title = {
        text: 'US nuclear stockpiles'
      },
      this.xAxis = {
        allowDecimals: false,
        labels: {
          // formatter: function () {
          //   return this.value; // clean, unformatted number for year
          // }
        },
        accessibility: {
          rangeDescription: 'Range: 1940 to 2017.'
        }
      },
      this.yAxis = {
        title: {
          text: 'Nuclear weapon states'
        },
        labels: {
          // formatter: function () {
          //   return this.value / 1000 + 'k';
          // }
        }
      },
      this.tooltip = {
        pointFormat: '{series.name} had stockpiled <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
      },
      this.plotOptions = {
        area: {
          pointStart: 1940,
          marker: {
            enabled: false,
            symbol: 'circle',
            radius: 2,
            states: {
              hover: {
                enabled: true
              }
            }
          }
        }
      },
      this.series = [{
        name: 'USA',
        data: [
          null, null, null, null, null, 6, 11, 32, 110, 235,
          369, 640, 1005, 1436, 2063, 3057, 4618, 6444, 9822, 15468,
          20434, 24126, 27387, 29459, 31056, 31982, 32040, 31233, 29224, 27342,
          26662, 26956, 27912, 28999, 28965, 27826, 25579, 25722, 24826, 24605,
          24304, 23464, 23708, 24099, 24357, 24237, 24401, 24344, 23586, 22380,
          21004, 17287, 14747, 13076, 12555, 12144, 11009, 10950, 10871, 10824,
          10577, 10527, 10475, 10421, 10358, 10295, 10104, 9914, 9620, 9326,
          5113, 5113, 4954, 4804, 4761, 4717, 4368, 4018
        ]
      }]
    Highcharts.chart('areaChart', {
      chart: this.chart,
      accessibility: this.accessibility,
      title: this.title,
      xAxis: this.xAxis,
      yAxis: this.yAxis,
      tooltip: this.tooltip,
      plotOptions: this.plotOptions,
      series: this.series
    });
  }

  makeBarChart() {
    this.chart = {
      type: 'bar'
    },
    this.title = {
      text: 'Historic World Population by Region'
    },
    this.subtitle = {
      text: 'Wikipedia'
    },
    this.xAxis = {
      categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
        title: {
        text: null
      }
    },
    this.yAxis = {
      min: 0,
        title: {
        text: 'Population (millions)',
          align: 'high'
      },
      labels: {
        overflow: 'justify'
      }
    },
    this.tooltip = {
      valueSuffix: ' millions'
    },
    this.plotOptions = {
      bar: {
        dataLabels: {
          enabled: true
        }
      }
    },
    this.legend = {
      layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 80,
        floating: true,
        borderWidth: 1,
        backgroundColor: '#FFFFFF',
        shadow: true
    },
    this.credits = {
      enabled: false
    },
    this.series = [{
      name: 'Year 1800',
      data: [107, 31, 635, 203, 100]
    }, {
      name: 'Year 1900',
      data: [133, 156, 947, 408, 60]
    }]
    Highcharts.chart('basicBar', {
      chart: this.chart,
      title: this.title,
      subtitle: this.subtitle,
      xAxis: this.xAxis,
      yAxis: this.yAxis,
      tooltip: this.tooltip
    });
  }

  makeDoughnutChart1() {
    this.chart = {
      type: 'solidgauge',
      height: '110%',
    },

      this.title = {
        text: 'Activity',
        style: {
          fontSize: '24px'
        }
      },

      this.tooltip = {
        borderWidth: 0,
        backgroundColor: 'none',
        shadow: false,
        style: {
          fontSize: '16px'
        },
        valueSuffix: '%',
        pointFormat: '{series.name}<br><span style="font-size:2em; color: {point.color}; font-weight: bold">{point.y}</span>',
        positioner: function (labelWidth) {
          return {
            x: (this.chart.chartWidth - labelWidth) / 2,
            y: (this.chart.plotHeight / 2) + 15
          };
        }
      },

      this.pane = {
        startAngle: 0,
        endAngle: 360,
        background: [{ // Track for Move
          outerRadius: '120%',
          innerRadius: '90%',
          backgroundColor: 'orange',
          borderWidth: 0
        }, { // Track for Exercise
          outerRadius: '80%',
          innerRadius: '65%',
          backgroundColor: 'blue',
          borderWidth: 0
        }]
      },

      this.yAxis = {
        min: 0,
        max: 100,
        lineWidth: 0,
        tickPositions: []
      },

      this.plotOptions = {
        solidgauge: {
          dataLabels: {
            enabled: false
          },
          linecap: 'round',
          stickyTracking: false,
          rounded: true
        }
      },

      this.series = [{
        name: 'Move',
        data: [{
          color: 'orange',
          radius: '120%',
          innerRadius: '90%',
          y: 100
        }]
      }, {
        name: 'Exercise',
        data: [{
          color: 'blue',
          radius: '80%',
          innerRadius: '65%',
          y: 100
        }]
      }]
    Highcharts.chart('donutChart1', {
      chart: this.chart,
      title: this.title,
      tooltip: this.tooltip,
      pane: this.pane,
      yAxis: this.yAxis,
      plotOptions: this.plotOptions,
      series: this.series
    });

  }
  makeDoughnutChart2() {
    this.chart = {
      type: 'solidgauge',
      height: '50%',
    },

      this.title = {
        text: 'Activity',
        style: {
          fontSize: '24px'
        }
      },

      this.tooltip = {
        borderWidth: 0,
        backgroundColor: 'none',
        shadow: false,
        style: {
          fontSize: '16px'
        },
        valueSuffix: '%',
        pointFormat: '{series.name}<br><span style="font-size:2em; color: {point.color}; font-weight: bold">{point.y}</span>',
        positioner: function (labelWidth) {
          return {
            x: (this.chart.chartWidth - labelWidth) / 2,
            y: (this.chart.plotHeight / 2) + 15
          };
        }
      },

      this.pane = {
        startAngle: 0,
        endAngle: 360,
        background: [{ // Track for Move
          outerRadius: '120%',
          innerRadius: '90%',
          backgroundColor: 'orange',
          borderWidth: 0
        }, { // Track for Exercise
          outerRadius: '80%',
          innerRadius: '65%',
          backgroundColor: 'blue',
          borderWidth: 0
        }]
      },

      this.yAxis = {
        min: 0,
        max: 100,
        lineWidth: 0,
        tickPositions: []
      },

      this.plotOptions = {
        solidgauge: {
          dataLabels: {
            enabled: false
          },
          linecap: 'round',
          stickyTracking: false,
          rounded: true
        }
      },

      this.series = [{
        name: 'Move',
        data: [{
          color: 'orange',
          radius: '120%',
          innerRadius: '90%',
          y: 100
        }]
      }, {
        name: 'Exercise',
        data: [{
          color: 'blue',
          radius: '80%',
          innerRadius: '65%',
          y: 100
        }]
      }]
    Highcharts.chart('donutChart2', {
      chart: this.chart,
      title: this.title,
      tooltip: this.tooltip,
      pane: this.pane,
      yAxis: this.yAxis,
      plotOptions: this.plotOptions,
      series: this.series
    });

  }

}
