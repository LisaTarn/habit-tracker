function validateNumber(){
    const numbers = document.getElementById('input').value;
    if (isNaN(numbers)){
                alert("Please enter a number"); 
        }
    };

    const ctxexercise = document.getElementById('myChartexercise');

    const myChartexercise = new Chart(ctxexercise, {
      type: 'bar',
      data: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [{
          label: 'Minutes of Exercise',
          data: [20, 30, 40, 50, 60, 10, 15],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
    

  function updateChartexercise(){
    const exercisedata = document.getElementById('exercise');
    const labeldata = document.getElementById('dayexercise');
    myChartexercise.data.datasets[0].data.push(exercisedata.value);
    myChartexercise.data.labels.push(labeldata.value);
    myChartexercise.data.datasets[0].data.shift();
    myChartexercise.data.labels.shift();
    myChartexercise.update();
  }
  
  const ctxwater = document.getElementById('myChartwater');

  const myChartwater = new Chart(ctxwater, {
    type: 'bar',
    data: {
      labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      datasets: [{
        label: 'Cups of Water',
        data: [2, 4, 8, 5, 6, 1, 5],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  

function updateChartwater(){
  const waterdata = document.getElementById('water');
  const labeldata = document.getElementById('daywater');
  myChartwater.data.datasets[0].data.push(waterdata.value);
  myChartwater.data.labels.push(labeldata.value);
  myChartwater.data.datasets[0].data.shift();
  myChartwater.data.labels.shift();
  myChartwater.update();
}

const ctxsleep = document.getElementById('myChartsleep');

  const myChartsleep = new Chart(ctxsleep, {
    type: 'bar',
    data: {
      labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      datasets: [{
        label: 'Hours of Sleep',
        data: [2, 4, 8, 5, 6, 8, 5],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  

function updateChartsleep(){
  const sleepdata = document.getElementById('sleep');
  const labeldata = document.getElementById('daysleep');
  myChartsleep.data.datasets[0].data.push(sleepdata.value);
  myChartsleep.data.labels.push(labeldata.value);
  myChartsleep.data.datasets[0].data.shift();
  myChartsleep.data.labels.shift();
  myChartsleep.update();
}

const ctxfruit = document.getElementById('myChartfruit');

  const myChartfruit = new Chart(ctxfruit, {
    type: 'bar',
    data: {
      labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      datasets: [{
        label: 'Servings of Fruits and Vegetables',
        data: [2, 4, 8, 5, 6, 8, 5],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  

function updateChartfruit(){
  const fruitdata = document.getElementById('fruit');
  const labeldata = document.getElementById('dayfruit');
  myChartfruit.data.datasets[0].data.push(fruitdata.value);
  myChartfruit.data.labels.push(labeldata.value);
  myChartfruit.data.datasets[0].data.shift();
  myChartfruit.data.labels.shift();
  myChartfruit.update();
}
