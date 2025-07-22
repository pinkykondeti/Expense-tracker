// function drawChart(income, expense) {
// const ctx = document.getElementById('chart').getContext('2d');

// // Destroy existing chart if already created
// if (window.myChart) {
// window.myChart.destroy();
// }

// window.myChart = new Chart(ctx, {
// type: 'doughnut',
// data: {
// labels: ['Income', 'Expense'],
// datasets: [{
// data: [income, expense],
// backgroundColor: ['green', 'red']
// }]
// },
// options: {
// responsive: true,
// maintainAspectRatio: false
// }
// });
// }
let chart;

function drawChart(data) {
  const ctx = document.getElementById('chart').getContext('2d');

  const income = data.filter(t => t.type === 'income').reduce((sum, t) => sum + parseFloat(t.amount), 0);
  const expense = data.filter(t => t.type === 'expense').reduce((sum, t) => sum + parseFloat(t.amount), 0);

  if (chart) chart.destroy();

  chart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['Income', 'Expense'],
      datasets: [{
        label: 'Budget Distribution',
        data: [income, expense],
        backgroundColor: ['#28a745', '#dc3545']
      }]
    }
  });
}
