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
    label: 'Fruit and Vegetable Servings',
    data: [18, 12, 6, 9, 12, 3, 9],
    backgroundColor: [
      'rgba(54, 162, 235, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(54, 162, 235, 0.2)'
    ],
    borderColor: [
      'rgba(54, 162, 235, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(54, 162, 235, 1)'
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
  document.getElementById('myChartfruits'),
  config
);


function updateChart(fruits){
  myChart.config.data.datasets[0].data.push(fruits.value);
  myChart.config.data.datasets[0].data.shift();
  myChart.update();
};


