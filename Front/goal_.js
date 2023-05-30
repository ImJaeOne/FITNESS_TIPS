


const el = document.getElementById('chart-area_');
const data = {
series: [
    {
    name: 'Achievement',
    data: [0]
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

const shoulder = document.getElementsByClassName("shoulder_1_img");
const chest = document.getElementsByClassName("chest_1_img");
const back = document.getElementsByClassName("back_1_img");
const leg = document.getElementsByClassName("leg_1_img");
const myCheck = document.getElementsByClassName("my_check");
const my_Check = document.getElementsByClassName("my_check_");
var Achievement = 0;

function getElementIndex(element, range) {
    if (!!range){
        return [].indexOf.call(element, range);
    }
    return [].indexOf.call(element.parentNode.children, element);
}

[].forEach.call(shoulder, function(el) {
    var a = 1;
    el.addEventListener('click', function() {
    console.log(getElementIndex(shoulder, el));
    my_Check[getElementIndex(shoulder, el)].classList.toggle('check');
    if(a == 1){
        Achievement += 25;
        a--;
    } else{
        Achievement -= 25;
        a++;
    }
    console.log(Achievement);
    data.series[0].data.splice(0,1,Achievement);
    console.log(data.series[0].data);
    });
});

[].forEach.call(chest, function(el) {
    var a = 1;
    el.addEventListener('click', function() {
    console.log(getElementIndex(chest, el));
    my_Check[getElementIndex(chest, el) + shoulder.length].classList.toggle('check');
    if(a == 1){
        Achievement += 25;
        a--;
    } else{
        Achievement -= 25;
        a++;
    }
    console.log(Achievement);
    data.series[0].data.splice(0,1,Achievement);
    console.log(data.series[0].data);
    });
});

[].forEach.call(back, function(el) {
    var a = 1;
    el.addEventListener('click', function() {
    console.log(getElementIndex(back, el));
    my_Check[getElementIndex(back, el) + shoulder.length + chest.length].classList.toggle('check');
    if(a == 1){
        Achievement += 25;
        a--;
    } else{
        Achievement -= 25;
        a++;
    }
    console.log(a);
    console.log(Achievement);
    data.series[0].data.splice(0,1,Achievement);
    });
});

[].forEach.call(leg, function(el) {
    var a = 1;
    el.addEventListener('click', function() {
    console.log(getElementIndex(leg, el));
    my_Check[getElementIndex(leg, el)+  shoulder.length + chest.length + back.length].classList.toggle('check');
    if(a == 1){
        Achievement += 25;
        a--;
    } else{
        Achievement -= 25;
        a++;
    }
    console.log(a);
    console.log(Achievement);
    data.series[0].data.splice(0,1,Achievement);
    });
});