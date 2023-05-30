const el = document.getElementById('chart-area_');
const data = {
    categories: ['5/25', '5/26', '5/27', '5/28', '5/29', '5/30', '5/31'],
    series: [
    {
        name: 'Shoulder',
        data: [20, 20, 20, 20, 20, 20, 20],
    },
    {
        name: 'Back',
        data: [40, 0, 40, 0, 40, 0, 40],
    },
    {
        name: 'Leg',
        data: [0, 80, 0, 80, 0, 80, 0],
    },
    {
        name: 'Chest',
        data: [40, 0, 40, 0, 40, 0, 40],
    },
    ],
};

const theme = {
    series: {
      barWidth: 30,
      colors: ['rgb(128,128,128)', 'rgb(169,169,169)', 'rgb(211,211,211)', 'rgb(0,0,0)'],
      areaOpacity: 1,
      hover: {
        color: '#00ff00',
        borderColor: '#73C8E7',
        borderWidth: 3,
        shadowColor: 'rgba(0, 0, 0, 0.7)',
        shadowOffsetX: 4,
        shadowOffsetY: 4,
        shadowBlur: 6,
        groupedRect: {
          color: '#F0DCBC',
          opacity: 0.5,
        },
      },
      select: {
        color: '#0000ff',
        borderColor: '#000000',
        borderWidth: 3,
        shadowColor: 'rgba(0, 0, 0, 0.7)',
        shadowOffsetX: 4,
        shadowOffsetY: 4,
        shadowBlur: 6,
        groupedRect: {
          color: '#74521A',
          opacity: 0.2,
        },
        restSeries: {
          areaOpacity: 0.5,
        },
        areaOpacity: 0.8,
      },
    },
  };


  const options = {
    chart: { title: 'Achievement', width: 1200, height: 600 },
    series: {
        stack: {
        type: 'normal',
        },
    },
    theme
};
const chart = toastui.Chart.barChart({ el, data, options });