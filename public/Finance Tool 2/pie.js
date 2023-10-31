var ctx = document.getElementById('financial_overview_pie').getContext('2d');
var myPieChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: [],
        datasets: [{
            label: 'My Pie Chart',
            data: [], // Data values for the slices
            backgroundColor: [
                'rgba(255, 99, 132, 0.8)',
                'rgba(54, 162, 235, 0.8)',
                'rgba(255, 206, 86, 0.8)',
                'rgba(75, 192, 192, 0.8)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        // Additional options for styling and configuration
    }
}); 