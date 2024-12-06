function validateNumber(){
  const numbers = document.getElementById('input').value;
  if (isNaN(numbers)){
              alert("Please enter a number"); 
      }
  };
  
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

function handleClick(click){
  const points = myChart.getElementsAtEventForMode(click, 'nearest', {intersect:true}, true);
  if(points[0]){
    const dataset= points[0].datasetIndex;
    const index = points[0].index;
    const label= myChart.data.labels[index]
    const value = myChart.data.datasets[dataset].data[index];
    const tr = document.querySelectorAll('tbody tr')[0];
    tr.children[0].innerText = label;
    tr.children[1].innerText = value;
  }


}
myChart.canvas.onclick=handleClick;
