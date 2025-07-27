
const ctx = document.getElementById('balanceChart');
if (ctx) {
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Savings', 'Checking', 'Investment'],
      datasets: [{
        label: 'Account Balance ($)',
        data: [2500, 1500, 500],
        backgroundColor: ['#007bff', '#28a745', '#ffc107']
      }]
    }
  });
}
