// Assuming you have a button element with the id "populate-SVI-barchart"
var button = document.getElementById('populate-SVI-barchart');

// Add an event listener to the button
button.addEventListener('click', function() {
    // Prompt the user to enter their income
    var income = prompt('Enter your income:');

    // Convert the income to a number
    income = parseFloat(income);

    // Calculate the total expenses from the pie chart
    var totalExpenses = myPieChart.data.datasets[0].data.reduce(function(a, b) {
        return a + b;
    }, 0);

    // Update the data of the spending vs income bar chart
    myBarChart.data.datasets[0].data[0] = income;
    myBarChart.data.datasets[0].data[1] = totalExpenses;

    // Update the chart
    myBarChart.update();
});