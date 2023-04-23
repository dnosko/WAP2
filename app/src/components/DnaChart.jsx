import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import "../css/chart.css";

const seriesInit = [
  {
    data: [0, 0, 0, 0, 0],
  },
];

const optionsInit = {
  colors: ["#FFFFFF"],
  chart: {
    id: "dna",
    type: "bar",
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      columnWidth: "100%",
      distributed: true,
    },
    dataLabels: {
      position: "top",

      total: {
        enabled: false,
        style: {
          color: "white",
          fontSize: "12px",
          fontWeight: 600,
        },
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  xaxis: {
    categories: [
      ["Energy"],
      ["Acoustic"],
      ["Danceability"],
      ["Valence"],
      ["Tempo"],
    ],
    labels: {
      style: {
        fontSize: "12px",
      },
    },
  },
  yaxis: {
    show: false,
  },
  grid: {
    show: false,
  },
  tooltip: {
    enabled: false,
  },
};

function DnaChart(props) {
  const [series, setSeries] = useState(seriesInit);
  const [options, setOptions] = useState(optionsInit);

  useEffect(() => {
    setSeries(() => [
      {
        data: Object.values(props.avg),
      },
    ]);
    setOptions((prev) => ({
      ...prev,
      colors: props.colors,
    }));
  }, [props]);

  return (
    <div id='chart'>
      <Chart options={options} series={series} type='bar' height='100%' />
    </div>
  );
}

export default DnaChart;
