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
    label: 'Minutes Of Exercise',
    data: [20, 30, 40, 50, 60, 10, 15],
    backgroundColor: [
      'rgba(255, 26, 104, 0.2)',
      'rgba(255, 26, 104, 0.2)',
      'rgba(255, 26, 104, 0.2)',
      'rgba(255, 26, 104, 0.2)',
      'rgba(255, 26, 104, 0.2)',
      'rgba(255, 26, 104, 0.2)',
      'rgba(255, 26, 104, 0.2)'
    ],
    borderColor: [
      'rgba(255, 26, 104, 1)',
      'rgba(255, 26, 104, 1)',
      'rgba(255, 26, 104, 1)',
      'rgba(255, 26, 104, 1)',
      'rgba(255, 26, 104, 1)',
      'rgba(255, 26, 104, 1)',
      'rgba(255, 26, 104, 1)'
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
  document.getElementById('myChartexercise'),
  config
);


function updateChart(exercise){
  myChart.config.data.datasets[0].data.push(exercise.value);
  myChart.config.data.datasets[0].data.shift();
  myChart.update();
};


