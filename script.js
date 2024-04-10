const canvas = document.querySelector('#bar-graph');

//Chart.defaults.font.size = 16;
//Chart.defaults.color = '#111'; 
Chart.defaults.color = '#ffff'; 
Chart.defaults.borderColor = '#ccc'; 
const bar_graph =new Chart(canvas, {
type: 'bar',
data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
        {
            data:[14, 20, 16, 22, 18, 24, 16],
            backgroundColor: ['#ff9de3', '#9df5ff', '#aea5ff', '#9dffd5', '#e2ff9d', '#ffa06c', '#ff6c6c'],
            
        }
    ]
},
options: {
    responsive: true,
   // indexAxis:'y',
    plugins: {
        legend: {
            display: false,
        }
    },
    backgroundColor: 'purple',
    titleColor: 'black',
    scales: {
  /*       y: {
            grid:{
                color: 'crimson',
                lineWidth: 2,
            }
        }, */
        x: {
            grid: {
                 display: false,
            }
        }
    }
}
});



const canvas2 = document.querySelector('#pie-graph');

//Chart.defaults.font.size = 16;
Chart.defaults.color = '#111'; 
const pie_graph =new Chart(canvas2, {
type: 'doughnut',
data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
        {
            data:[14, 20, 16, 22, 18, 24, 16],
            backgroundColor: ['#ff9de3', '#9df5ff', '#aea5ff', '#9dffd5', '#e2ff9d', '#ffa06c', '#ff6c6c'],
            //hoverBackgroundColor: ['red'],  
            hoverOffset: 45,
        }
    ]
},
options: {
    scales: {
        x: {
            grid: {
                 display: false,
            }
        }
    }
}
});

const canvas3 = document.querySelector('#line-graph');


const line_graph =new Chart(canvas3, {
type: 'line',
data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
        {
            data:[14, 20, 16, 22, 18, 24, 16],
            label: 'Subscribers',
            backgroundColor: ['#ff9de3', '#9df5ff', '#aea5ff', '#9dffd5', '#e2ff9d', '#ffa06c', '#ff6c6c'],
            
            //hoverBackgroundColor: ['red'],  
            //Area Chart
            fill: true,
            hoverOffset: 45,
            tension: .4,
        }
    ]
},
options: {
    radius: 4,
    hitRadius: 45,
    plugins:{
        legend:{
            //display: false,
        }
    },
    scales: {
        x: {
            grid: {
                 display: false,
            }
        }
    }
}
});


const canvas4 = document.querySelector('#mixed-chart');


const mixed_chart =new Chart(canvas4, {
data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
        {
            type: 'bar',
            label: 'Subscribers',
            data:[14, 20, 16, 22, 18, 24, 16],
            backgroundColor: ['#ff9de3', '#9df5ff', '#aea5ff', '#9dffd5', '#e2ff9d', '#ffa06c', '#ff6c6c'],
        },
        {
            type: 'line',
            label: 'Views',
            data:[14, 20, 16, 22, 18, 24, 16],
            backgroundColor: ['#ff9de3', '#9df5ff', '#aea5ff', '#9dffd5', '#e2ff9d', '#ffa06c', '#ff6c6c'],
            borderColor: 'crimson',
        }
    ]
},
options: {
    radius: 4,
    hitRadius: 45,
    plugins:{
        legend:{
            //display: false,
        }
    },
    scales: {
        x: {
            grid: {
                 display: false,
            }
        }
    }
}
});

const canvas5 = document.querySelector('#polar-area-chart');


const polar_area_chart =new Chart(canvas5, {
    type: 'polarArea',
data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
        {
            data:[14, 20, 16, 22, 18, 24, 16],
            backgroundColor: ['#ff9de3', '#9df5ff', '#aea5ff', '#9dffd5', '#e2ff9d', '#ffa06c', '#ff6c6c'], 
        }
    ]
},
options: {
    radius: 4,
    hitRadius: 45,
    plugins:{
        legend:{
            //display: false,
        }
    },
    scales: {
        x: {
            grid: {
                 display: false,
            }
        }
    }
}
});


const canvas6 = document.querySelector('#radar-chart');


const radar_chart =new Chart(canvas6, {
    type: 'radar',
data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
        {
            data:[14, 20, 16, 22, 18, 24, 16],
            label: 'Subscribers',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgb(255, 99, 132)',
            pointBackgroundColor: ['#ff9de3', '#9df5ff', '#aea5ff', '#9dffd5', '#e2ff9d', '#ffa06c', '#ff6c6c'], 
        },
        {
            data:[26, 15, 22, 14, 24, 16, 21],
            label: 'Views',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgb(54, 162, 235)',
            pointBackgroundColor: ['#ff9de3', '#9df5ff', '#aea5ff', '#9dffd5', '#e2ff9d', '#ffa06c', '#ff6c6c'],
        }
    ]
},
options: {
    radius: 4,
    hitRadius: 45,
    plugins:{
        legend:{
            //display: false,
        }
    },
    scales: {
        x: {
            grid: {
                 display: false,
            }
        }
    }
}
});




const canvas7 = document.querySelector('#scatter-chart');

let data= [{
    x: -10,
    y: 0
  }, {
    x: 0,
    y: 10
  }, {
    x: 10,
    y: 5
  }, {
    x: 0.5,
    y: 5.5
  }];

const scatter_chart =new Chart(canvas7, {
    type: 'scatter',
data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
        {
            data: data,
            label: 'Subscribers',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgb(255, 99, 132)',

            pointBackgroundColor: ['#ff9de3', '#9df5ff', '#aea5ff', '#9dffd5', '#e2ff9d', '#ffa06c', '#ff6c6c'], 
        }
    ]
},
options: {
    radius: 4,
    hitRadius: 45,
    plugins:{
        legend:{
            //display: false,
        }
    },
    scales: {
        x: {
            grid: {
                 display: false,
            }
        }
    }
}
});


const canvas8 = document.querySelector('#bubble-chart');

let data2= [{
    x: -10,
    y: 9,
    r: 18
  }, {
    x: 0,
    y: 10,
    r: 8
  }, {
    x: 10,
    y: 5,
    r: 15
  }, {
    x: 2,
    y: 5.5,
    r:10
  },
  {
    x: 0,
    y: 2,
    r: 18
    
},{
    x: -6,
    y: 5,
    r: 18
}]

const bubble_chart =new Chart(canvas8, {
    type: 'bubble',
data2: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
        {
            data: data2,
            label: 'Subscribers',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgb(255, 99, 132)',

            pointBackgroundColor: ['#ff9de3', '#9df5ff', '#aea5ff', '#9dffd5', '#e2ff9d', '#ffa06c', '#ff6c6c'], 
        }
    ]
},
options: {
    radius: 4,
    hitRadius: 45,
    plugins:{
        legend:{
            //display: false,
        }
    },
    scales: {
        x: {
            grid: {
                 display: false,
            }
        }
    }
}
});

window.addEventListener('resize', ()=> {
    bar_graph.resize();
    pie_graph.resize();
    mixed_chart.resize();
    polar_area_chart_graph.resize();
    scatter_chart.resize();
    bubble_graph.resize();
    radar_chart_graph.resize();
    line_graph_graph.resize();
})


