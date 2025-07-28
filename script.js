const ctx = document.getElementById('balanceChart').getContext('2d');
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Savings', 'Checking', 'Investment'],
        datasets: [{
            label: 'Account Balance ($)',
            data: [2500, 1500, 500],
            backgroundColor: ['blue', 'green', 'gold']
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: true
            }
        }
    }
});