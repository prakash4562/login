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


  dateObj = new Date()
  currentDate = this.dateObj.getDate()
  currentDate_1 = this.currentDate-1
  currentDate_2 = this.currentDate-2
  currentDate_3 = this.currentDate-3
  currentDate_4 = this.currentDate-4
  currentDate_5 = this.currentDate-5
  currentDate_6 = this.currentDate-6
  month = this.dateObj.getMonth()+1
  year = this.dateObj.getFullYear()



  public basicBarOptions: any = {
    chart: {
      type: 'bar',
      height: '300px'

    },
    title: {
      text: ''
    },
    subtitle: {
      text: ''
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

  makeColumnChart() {
    this.chart = {
      type: 'column',
      height: '300px'
    },
      this.title = {
        align: 'left',
        text: ''
      },
      this.subtitle = {
        align: 'left',
        text: ''
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
          color: 'orange',
          opacity: '0.5',
          data: [
            {
              name: this.currentDate_6 + "/" + this.month,
              y: 62.74,
              drilldown: "Chrome",
              color: 'red'
            },
            {
              name: this.currentDate_5 + "/" + this.month,
              y: 30.57,
              drilldown: "Firefox",
              color: 'orange'
            },
            {
              name: this.currentDate_4 + "/" + this.month,
              y: 47.23,
              drilldown: "Internet Explorer",
              color: 'black'
            },
            {
              name: this.currentDate_3 + "/" + this.month,
              y: 5.58,
              drilldown: "Safari",
              color: 'blue'
            },
            {
              name: this.currentDate_2 + "/" + this.month,
              y: 54.02,
              drilldown: "Edge",
              color: 'white'
            },
            {
              name: this.currentDate_1 + "/" + this.month,
              y: 31.92,
              drilldown: "Opera",
              color: 'green'
            },
            {
              name: "Today",
              y: 27.62,
              drilldown: null,
              color: 'yellow'
            }
          ]
        }
      ]
    Highcharts.chart('columnChart', {
      chart: this.chart,
      title: this.title,
      subtitle: this.subtitle,
      accessibility: this.accessibility,
      xAxis: this.xAxis,
      yAxis: this.yAxis,
      legend: this.legend,
      plotOptions: this.plotOptions,
      tooltip: this.tooltip,
      series: this.series
    })
  }
  makeAreaChart() {
    this.chart = {
      type: 'area',
      height: '300px'
    },
      this.title = {
        align: 'left',
        text: ''
      },
      this.subtitle = {
        align: 'left',
        text: ''
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
          color: 'orange',
          opacity: '0.5',
          data: [
            {
              name: this.currentDate_6 + "/" + this.month,
              y: 62.74,
              drilldown: "Chrome",
              color: 'red'
            },
            {
              name: this.currentDate_5 + "/" + this.month,
              y: 30.57,
              drilldown: "Firefox",
              color: 'orange'
            },
            {
              name: this.currentDate_4 + "/" + this.month,
              y: 47.23,
              drilldown: "Internet Explorer",
              color: 'black'
            },
            {
              name: this.currentDate_3 + "/" + this.month,
              y: 5.58,
              drilldown: "Safari",
              color: 'blue'
            },
            {
              name: this.currentDate_2 + "/" + this.month,
              y: 54.02,
              drilldown: "Edge",
              color: 'white'
            },
            {
              name: this.currentDate_1 + "/" + this.month,
              y: 31.92,
              drilldown: "Opera",
              color: 'green'
            },
            {
              name: "Today",
              y: 27.62,
              drilldown: null,
              color: 'yellow'
            }
          ]
        }
      ]
    Highcharts.chart('areaChart', {
      chart: this.chart,
      title: this.title,
      subtitle: this.subtitle,
      accessibility: this.accessibility,
      xAxis: this.xAxis,
      yAxis: this.yAxis,
      legend: this.legend,
      plotOptions: this.plotOptions,
      tooltip: this.tooltip,
      series: this.series
    })
  }


  drawColumnChart() {
    this.chart = {
      type: 'column',
      height: '300px'
    },
      this.title = {
        align: 'left',
        text: ''
      },
      this.subtitle = {
        align: 'left',
        text: ''
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
          color: 'orange',
          opacity: '0.5',
          data: [
            {
              name: this.currentDate_6 + "/" + this.month,
              y: 62.74,
              drilldown: "Chrome",
              color: 'red'
            },
            {
              name: this.currentDate_5 + "/" + this.month,
              y: 30.57,
              drilldown: "Firefox",
              color: 'orange'
            },
            {
              name: this.currentDate_4 + "/" + this.month,
              y: 47.23,
              drilldown: "Internet Explorer",
              color: 'black'
            },
            {
              name: this.currentDate_3 + "/" + this.month,
              y: 5.58,
              drilldown: "Safari",
              color: 'blue'
            },
            {
              name: this.currentDate_2 + "/" + this.month,
              y: 54.02,
              drilldown: "Edge",
              color: 'white'
            },
            {
              name: this.currentDate_1 + "/" + this.month,
              y: 31.92,
              drilldown: "Opera",
              color: 'green'
            },
            {
              name: "Today",
              y: 27.62,
              drilldown: null,
              color: 'yellow'
            }
          ]
        }
      ]
    Highcharts.chart('areaChart', {
      chart: this.chart,
      title: this.title,
      subtitle: this.subtitle,
      accessibility: this.accessibility,
      xAxis: this.xAxis,
      yAxis: this.yAxis,
      legend: this.legend,
      plotOptions: this.plotOptions,
      tooltip: this.tooltip,
      series: this.series
    })
  }
  drawChart() {
    this.chart = {
      type: 'area',
      height: '300px'
    },
      this.title = {
        align: 'left',
        text: ''
      },
      this.subtitle = {
        align: 'left',
        text: ''
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
          color: 'orange',
          opacity: '0.5',
          data: [
            {
              name: this.currentDate_6 + "/" + this.month,
              y: 62.74,
              drilldown: "Chrome",
              color: 'red'
            },
            {
              name: this.currentDate_5 + "/" + this.month,
              y: 30.57,
              drilldown: "Firefox",
              color: 'orange'
            },
            {
              name: this.currentDate_4 + "/" + this.month,
              y: 47.23,
              drilldown: "Internet Explorer",
              color: 'black'
            },
            {
              name: this.currentDate_3 + "/" + this.month,
              y: 5.58,
              drilldown: "Safari",
              color: 'blue'
            },
            {
              name: this.currentDate_2 + "/" + this.month,
              y: 54.02,
              drilldown: "Edge",
              color: 'white'
            },
            {
              name: this.currentDate_1 + "/" + this.month,
              y: 31.92,
              drilldown: "Opera",
              color: 'green'
            },
            {
              name: "Today",
              y: 27.62,
              drilldown: null,
              color: 'yellow'
            }
          ]
        }
      ]
    Highcharts.chart('columnChart', {
      chart: this.chart,
      title: this.title,
      subtitle: this.subtitle,
      accessibility: this.accessibility,
      xAxis: this.xAxis,
      yAxis: this.yAxis,
      legend: this.legend,
      plotOptions: this.plotOptions,
      tooltip: this.tooltip,
      series: this.series
    })
  }




  ngOnInit(): void {
    this.makeDoughnutChart1()
    this.makeDoughnutChart2()
    this.makeColumnChart()
    this.makeAreaChart()
    Highcharts.chart('basicBar', this.basicBarOptions);
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
      height: '90%',
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
        // valueSuffix: '%',
        // pointFormat: '{series.name}<br><span style="font-size:2em; color: {point.color}; font-weight: bold">{point.y}</span>',
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
          backgroundColor: 'lightgrey',
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
          y: 70
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
      height: '80%',
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
        // valueSuffix: '%',
        // pointFormat: '{series.name}<br><span style="font-size:2em; color: {point.color}; font-weight: bold">{point.y}</span>',
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
          backgroundColor: 'lightgrey',
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
          y: 70
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

  convertToTable() {
    this.drawColumnChart()
    {
      this.chart = {
        type: 'column',
        height: '300px'
      },
        this.title = {
          align: 'left',
          text: ''
        },
        this.subtitle = {
          align: 'left',
          text: ''
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
            color: 'orange',
            opacity: '0.5',
            data: [
              {
                name: this.currentDate_6 + "/" + this.month,
                y: 62.74,
                drilldown: "Chrome",
                color: 'red'
              },
              {
                name: this.currentDate_5 + "/" + this.month,
                y: 30.57,
                drilldown: "Firefox",
                color: 'orange'
              },
              {
                name: this.currentDate_4 + "/" + this.month,
                y: 47.23,
                drilldown: "Internet Explorer",
                color: 'black'
              },
              {
                name: this.currentDate_3 + "/" + this.month,
                y: 5.58,
                drilldown: "Safari",
                color: 'blue'
              },
              {
                name: this.currentDate_2 + "/" + this.month,
                y: 54.02,
                drilldown: "Edge",
                color: 'white'
              },
              {
                name: this.currentDate_1 + "/" + this.month,
                y: 31.92,
                drilldown: "Opera",
                color: 'green'
              },
              {
                name: "Today",
                y: 27.62,
                drilldown: null,
                color: 'yellow'
              }
            ]
          }
        ]
      Highcharts.chart('areaChart', {
        chart: this.chart,
        title: this.title,
        subtitle: this.subtitle,
        accessibility: this.accessibility,
        xAxis: this.xAxis,
        yAxis: this.yAxis,
        legend: this.legend,
        plotOptions: this.plotOptions,
        tooltip: this.tooltip,
        series: this.series
      })
    }
  }

  selectChart() {
    this.makeAreaChart()
  }

  convertToChart() {
    this.drawChart()
  }

  selectTable() {
    this.makeColumnChart()
    {
      this.chart = {
        type: 'column',
        height: '300px'
      },
        this.title = {
          align: 'left',
          text: ''
        },
        this.subtitle = {
          align: 'left',
          text: ''
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
            color: 'orange',
            opacity: '0.5',
            data: [
              {
                name: this.currentDate_6 + "/" + this.month,
                y: 62.74,
                drilldown: "Chrome",
                color: 'red'
              },
              {
                name: this.currentDate_5 + "/" + this.month,
                y: 30.57,
                drilldown: "Firefox",
                color: 'orange'
              },
              {
                name: this.currentDate_4 + "/" + this.month,
                y: 47.23,
                drilldown: "Internet Explorer",
                color: 'black'
              },
              {
                name: this.currentDate_3 + "/" + this.month,
                y: 5.58,
                drilldown: "Safari",
                color: 'blue'
              },
              {
                name: this.currentDate_2 + "/" + this.month,
                y: 54.02,
                drilldown: "Edge",
                color: 'white'
              },
              {
                name: this.currentDate_1 + "/" + this.month,
                y: 31.92,
                drilldown: "Opera",
                color: 'green'
              },
              {
                name: "Today",
                y: 27.62,
                drilldown: null,
                color: 'yellow'
              }
            ]
          }
        ]
      Highcharts.chart('columnChart', {
        chart: this.chart,
        title: this.title,
        subtitle: this.subtitle,
        accessibility: this.accessibility,
        xAxis: this.xAxis,
        yAxis: this.yAxis,
        legend: this.legend,
        plotOptions: this.plotOptions,
        tooltip: this.tooltip,
        series: this.series
      })
    }
  }
}
