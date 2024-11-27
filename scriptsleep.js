function validateNumber(){
  const numbers = document.getElementById('input').value;
  if (isNaN(numbers)){
              alert("Please enter a number"); 
      }
  };

const data = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [{
    label: 'Hours of Sleep',
    data: [8, 8, 6, 9, 4, 3, 5],
    backgroundColor: [
      'rgba(0, 0, 0, 0.2)',
      'rgba(0, 0, 0, 0.2)',
      'rgba(0, 0, 0, 0.2)',
      'rgba(0, 0, 0, 0.2)',
      'rgba(0, 0, 0, 0.2)',
      'rgba(0, 0, 0, 0.2)',
      'rgba(0, 0, 0, 0.2)'
    ],
    borderColor: [
      'rgba(0, 0, 0, 1)',
      'rgba(0, 0, 0, 1)',
      'rgba(0, 0, 0, 1)',
      'rgba(0, 0, 0, 1)',
      'rgba(0, 0, 0, 1)',
      'rgba(0, 0, 0, 1)',
      'rgba(0, 0, 0, 1)',
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
  document.getElementById('myChartsleep'),
  config
);


function updateChart(sleep){
  myChart.config.data.datasets[0].data.push(sleep.value);
  myChart.config.data.datasets[0].data.shift();
  myChart.update();
};


