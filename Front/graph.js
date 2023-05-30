const el = document.getElementById('chart-area_');
const data = {
series: [
    {
    name: 'Achievement',
    data: [80],
    },
],
};
const options = {
chart: { title: 'Achievement', width: 550, height: 500 },
series: {
    solid: true,
    dataLabels: { visible: true, offsetY: -30, formatter: (value) => `${value}%` },
},
theme: {
    circularAxis: {
    lineWidth: 0,
    strokeStyle: 'rgba(0, 256, 0, 0)',
    tick: {
        lineWidth: 0,
        strokeStyle: 'rgba(0, 256, 0, 0)',
    },
    label: {
        color: 'rgba(0, 256, 0, 0)',
    },
    },
    series: {
    dataLabels: {
        fontSize: 40,
        fontFamily: 'Impact',
        fontWeight: 600,
        color: 'rgb(0,0,0)',
        textBubble: {
        visible: false,
        },
    },
    },
},
};

const chart = toastui.Chart.gaugeChart({ el, data, options });