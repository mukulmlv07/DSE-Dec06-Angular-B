import React from "react";
import Chart from "react-apexcharts";
import "./BarChart.css"

var colors = [
  "#008FFB",
  "#00E396",
  "#FEB019",
  "#FF4560",
  "#775DD0",
  "#00D9E9",
  "#FF66C3",
];

function makeData(data) {
  var dataYearSeries = data.barChart.map((ele) => ({
    x: ele.barLabel,
    y: ele.percent,
  }));
  return dataYearSeries;
}

class BarChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          data: makeData(props.data),
        },
      ],
      options: {
        chart: {
          id: "bar",
          height: 400,
          width: "100%",
          type: "bar",
          toolbar: {
            show: false,
          },
        },
        plotOptions: {
          bar: {
            distributed: true,
            horizontal: true,
            barHeight: "75%",
            dataLabels: {
              position: "bottom",
            },
          },
        },
        legend: {
          show: false,
        },
        grid: {
          show: false,
        },
        dataLabels: {
          enabled: true,
          textAnchor: "start",
          style: {
            colors: ["#fff"],
          },
          formatter: function (val, opt) {
            return opt.w.globals.labels[opt.dataPointIndex];
          },
          offsetX: 0,
          dropShadow: {
            enabled: true,
          },
        },

        colors: colors,

        states: {
          normal: {
            filter: {
              type: "desaturate",
            },
          },
          active: {
            filter: {
              type: "darken",
              value: 1,
            },
          },
        },
        tooltip: {
          x: {
            show: false,
          },
          y: {
            title: {
              formatter: function (val, opts) {
                // console.log(opts.w.globals.labels, val);
                return opts.w.globals.labels[opts.dataPointIndex];
              },
            },
            color: "#775DD0",
          },
        },
        yaxis: {
          labels: {
            show: false,
          },
        },
      },
    };
  }

  render() {
    return (
      <div id="wrap">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          height={400}
        />
      </div>
    );
  }
}

export default BarChart;
