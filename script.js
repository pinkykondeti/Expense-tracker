// function login() {
//   const username = document.getElementById('username').value;
//   const password = document.getElementById('password').value;
//   fetch('login.php', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ username, password })
//   })
//     .then(res => res.json())
//     .then(data => {
//       if (data.success) {
//         sessionStorage.setItem('loggedIn', 'true');
//         document.getElementById('login-section').style.display = 'none';
//         document.getElementById('app-section').style.display = 'block';
//         fetchTransactions();
//       } else {
//         alert('Login failed');
//       }
//     });
// }

// function logout() {
//   sessionStorage.removeItem('loggedIn');
//   document.getElementById('login-section').style.display = 'block';
//   document.getElementById('app-section').style.display = 'none';
//   fetch('logout.php');
// }

// function addTransaction() {
//   const data = {
//     date: document.getElementById('date').value,
//     amount: document.getElementById('amount').value,
//     category: document.getElementById('category').value,
//     type: document.getElementById('type').value
//   };
//   fetch('add_transaction.php', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(data)
//   }).then(() => fetchTransactions());
// }

// function deleteTransaction(id) {
//   fetch('delete_transaction.php?id=' + id).then(() => fetchTransactions());
// }

// function fetchTransactions() {
//   const date = document.getElementById('filter-date').value;
//   const category = document.getElementById('filter-category').value;
//   fetch(`fetch_transactions.php?date=${date}&category=${category}`)
//     .then(res => res.json())
//     .then(data => {
//       const list = document.getElementById('transaction-list');
//       list.innerHTML = '';
//       let income = 0, expense = 0;
//       data.forEach(t => {
//         const li = document.createElement('li');
//         li.innerHTML = `${t.date} - ${t.category}: ₹${t.amount} (${t.type}) <button onclick="deleteTransaction(${t.id})">X</button>`;
//         list.appendChild(li);
//         if (t.type === 'income') income += parseFloat(t.amount);
//         else expense += parseFloat(t.amount);
//       });
//       drawChart(income, expense);
//     });
// }

// function drawChart(income, expense) {
//   const ctx = document.getElementById('chart').getContext('2d');
//   new Chart(ctx, {
//     type: 'doughnut',
//     data: {
//       labels: ['Income', 'Expense'],
//       datasets: [{
//         data: [income, expense],
//         backgroundColor: ['green', 'red']
//       }]
//     }
//   });
// }
// function login() {
//   const username = document.getElementById('username').value;
//   const password = document.getElementById('password').value;
//   fetch('login.php', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ username, password })
//   })
//     .then(res => res.json())
//     .then(data => {
//       if (data.success) {
//         sessionStorage.setItem('loggedIn', 'true');
//         document.getElementById('login-section').style.display = 'none';
//         document.getElementById('register-section').style.display = 'none';
//         document.getElementById('app-section').style.display = 'block';
//         fetchTransactions();
//       } else {
//         alert('Login failed');
//       }
//     });
// }

// function register() {
//   const username = document.getElementById('reg-username').value;
//   const password = document.getElementById('reg-password').value;
//   fetch('new_register.php', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ username, password })
//   })
//     .then(res => res.json())
//     .then(data => {
//       if (data.success) {
//         alert('Registration successful. Please log in.');
//         showLogin();
//       } else {
//         alert('Registration failed: ' + data.message);
//       }
//     });
// }

// function showRegister() {
//   document.getElementById('login-section').style.display = 'none';
//   document.getElementById('register-section').style.display = 'block';
// }

// function showLogin() {
//   document.getElementById('register-section').style.display = 'none';
//   document.getElementById('login-section').style.display = 'block';
// }

// function logout() {
//   sessionStorage.removeItem('loggedIn');
//   document.getElementById('login-section').style.display = 'block';
//   document.getElementById('register-section').style.display = 'none';
//   document.getElementById('app-section').style.display = 'none';
//   fetch('logout.php');
// }

// function addTransaction() {
//   const data = {
//     date: document.getElementById('date').value,
//     amount: document.getElementById('amount').value,
//     category: document.getElementById('category').value,
//     type: document.getElementById('type').value
//   };
//   fetch('add_transaction.php', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(data)
//   }).then(() => fetchTransactions());
// }

// function deleteTransaction(id) {
//   fetch('delete_transaction.php?id=' + id).then(() => fetchTransactions());
// }

// function fetchTransactions() {
//   const date = document.getElementById('filter-date').value;
//   const category = document.getElementById('filter-category').value;
//   fetch(`fetch_transactions.php?date=${date}&category=${category}`)
//     .then(res => res.json())
//     .then(data => {
//       const list = document.getElementById('transaction-list');
//       list.innerHTML = '';
//       let income = 0, expense = 0;
//       data.forEach(t => {
//         const li = document.createElement('li');
//         li.innerHTML = `${t.date} - ${t.category}: ₹${t.amount} (${t.type}) <button onclick="deleteTransaction(${t.id})">X</button>`;
//         list.appendChild(li);
//         if (t.type === 'income') income += parseFloat(t.amount);
//         else expense += parseFloat(t.amount);
//       });
//       drawChart(income, expense);
//     });
// }

// function drawChart(income, expense) {
//   const ctx = document.getElementById('chart').getContext('2d');
//   new Chart(ctx, {
//     type: 'doughnut',
//     data: {
//       labels: ['Income', 'Expense'],
//       datasets: [{
//         data: [income, expense],
//         backgroundColor: ['green', 'red']
//       }]
//     }
//   });
// }
let currentUser = null;
let transactions = [];

function showRegister() {
  document.getElementById('login-section').style.display = 'none';
  document.getElementById('register-section').style.display = 'block';
}

function showLogin() {
  document.getElementById('login-section').style.display = 'block';
  document.getElementById('register-section').style.display = 'none';
}

function login() {
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value;

  const users = JSON.parse(localStorage.getItem('users') || '{}');

  if (users[username] && users[username].password === password) {
    currentUser = username;
    transactions = users[username].transactions || [];
    showApp();
    fetchTransactions();
  } else {
    alert('Invalid login.');
  }
}

function logout() {
  currentUser = null;
  transactions = [];
  document.getElementById('app-section').style.display = 'none';
  document.getElementById('login-section').style.display = 'block';
}

function register() {
  const username = document.getElementById('reg-username').value.trim();
  const password = document.getElementById('reg-password').value;

  const users = JSON.parse(localStorage.getItem('users') || '{}');

  if (users[username]) {
    alert('User already exists.');
    return;
  }

  users[username] = { password, transactions: [] };
  localStorage.setItem('users', JSON.stringify(users));

  alert('Registered! Please login.');
  showLogin();
}

function showApp() {
  document.getElementById('login-section').style.display = 'none';
  document.getElementById('register-section').style.display = 'none';
  document.getElementById('app-section').style.display = 'block';
}

function addTransaction() {
  const date = document.getElementById('date').value;
  const amount = document.getElementById('amount').value;
  const category = document.getElementById('category').value;
  const type = document.getElementById('type').value;

  const transaction = { date, amount, category, type };
  transactions.push(transaction);

  const users = JSON.parse(localStorage.getItem('users'));
  users[currentUser].transactions = transactions;
  localStorage.setItem('users', JSON.stringify(users));

  fetchTransactions();
}

function fetchTransactions() {
  const filterDate = document.getElementById('filter-date').value;
  const filterCategory = document.getElementById('filter-category').value.toLowerCase();

  const filtered = transactions.filter(t => {
    return (!filterDate || t.date === filterDate) &&
           (!filterCategory || t.category.toLowerCase().includes(filterCategory));
  });

  const list = document.getElementById('transaction-list');
  list.innerHTML = '';

  filtered.forEach((t, i) => {
    const li = document.createElement('li');
    li.innerHTML = `${t.date} - ${t.category} - ₹${t.amount} - ${t.type}`;
    list.appendChild(li);
  });

  drawChart(filtered);
}
