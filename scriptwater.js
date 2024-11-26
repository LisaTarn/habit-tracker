function validateNumber(){
    const form = document.getElementById ('habit-form');
    const numbers = form.getElementByTagName('input');
    for (let i=0; i<numbers.length; i++){
        if (numbers[i].value === ""){
                alert("Please enter a number"); 
        }
    }
}

const data = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [{
    label: 'Cups of Water',
    data: [8, 12, 6, 2, 5, 3, 9],
    backgroundColor: [
      'rgba(153, 102, 255, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(153, 102, 255, 0.2)'
    ],
    borderColor: [
      'rgba(153, 102, 255, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(153, 102, 255, 1)'
    ],
    borderWidth: 1
  }]
};

// config 
const config = {
  type: 'bar',
  data,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
};

// render init block
const myChart = new Chart(
  document.getElementById('myChartwater'),
  config
);


function updateChart(water){
  myChart.config.data.datasets[0].data.push(water.value);
  myChart.config.data.datasets[0].data.shift();
  myChart.update();
};


