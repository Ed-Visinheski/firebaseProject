var ctx = document.getElementById('budgetPie').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [], 
        datasets: [{
            label: 'Budget',
            data: [], 
            backgroundColor: 'rgba(54, 162, 235, 0.8)',
            borderWidth: 1
        }, {
            label: 'Expenditure',
            data: [], 
            backgroundColor: 'rgba(255, 99, 132, 0.8)',
            borderWidth: 1
        }]
    },
    options: {
        indexAxis: 'y', // Rotate the chart to display bars horizontally
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                beginAtZero: true
            }
        }
    }
}); 