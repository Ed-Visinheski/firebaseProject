var ctx = document.getElementById('spendingVsIncome').getContext('2d');
var myBarChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Spending", "Income"],
        datasets: [{ 
            label: "Spending vs Income", 
            data: [/* Put your spending value here */, /* Put your income value here */],
            backgroundColor: [
                'rgba(255, 99, 132, 0.8)', // Red color for spending
                'rgba(54, 162, 235, 0.8)' // Blue color for income
            ],
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