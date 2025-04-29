const express = require('express');
const path = require('path');
const app = express();

// Serve static files (HTML, CSS, JS, images) from the Frontend and eco-habit-tracker folders
app.use(express.static(path.join(__dirname, 'Frontend')));
app.use(express.static(path.join(__dirname, 'eco-habit-tracker')));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'Frontend', 'dashboard.html'));
});

app.get('/dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, 'Frontend', 'dashboard.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'Frontend', 'Login.html'));
});

// Add more routes as needed for other pages
app.get('/rewards', (req, res) => {
  res.sendFile(path.join(__dirname, 'eco-habit-tracker', 'reward page.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
