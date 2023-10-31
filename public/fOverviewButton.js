// Assuming you have a button element with the id "populate-pie-chart"
var button = document.getElementById('populate-pie-chart');

// Add an event listener to the button
button.addEventListener('click', function() { 
    // Create the menu container
    var menuContainer = document.createElement('div');
    menuContainer.style.position = 'absolute';
    menuContainer.style.top = '50%';
    menuContainer.style.left = '50%';
    menuContainer.style.transform = 'translate(-50%, -50%)';
    menuContainer.style.background = 'white';
    menuContainer.style.padding = '10px';
    menuContainer.style.border = '1px solid black';

    // Create the expense form
    var expenseForm = document.createElement('form');
    var expenseLabel = document.createElement('label');
    expenseLabel.textContent = 'Expense: ';
    var expenseSelect = document.createElement('select');

    // Create option elements for each expense category
    var expenseOptions = ["Rent", "Food", "Utilities", "Transport", "Leisure", "Other"];
    for (var i = 0; i < expenseOptions.length; i++) {
        var option = document.createElement('option');
        option.value = expenseOptions[i];
        option.textContent = expenseOptions[i];
        expenseSelect.appendChild(option);
    }

    expenseForm.appendChild(expenseLabel);
    expenseForm.appendChild(expenseSelect);

    // Create the money value form
    var moneyForm = document.createElement('form');
    var moneyLabel = document.createElement('label');
    moneyLabel.textContent = 'Money Value: ';
    var moneyInput = document.createElement('input');
    moneyInput.type = 'number';
    moneyForm.appendChild(moneyLabel);
    moneyForm.appendChild(moneyInput);

    // Create the submit button
    var submitButton = document.createElement('button');
    submitButton.textContent = 'Submit';

    // Append the forms and button to the menu container
    menuContainer.appendChild(expenseForm);
    menuContainer.appendChild(moneyForm);
    menuContainer.appendChild(submitButton);

    // Append the menu container to the body
    document.body.appendChild(menuContainer);

    // Add event listener to the submit button
    submitButton.addEventListener('click', function(event) {
        event.preventDefault();

        // Get the expense and money value from the forms
        var expense = expenseSelect.value;
        var moneyValue = parseFloat(moneyInput.value);

        // Update the labels and data of the pie chart
        myPieChart.data.labels.push(expense);
        myPieChart.data.datasets[0].data.push(moneyValue);

        // Update the chart
        myPieChart.update();

        // Remove the menu container
        document.body.removeChild(menuContainer); 
    }); 
}); 