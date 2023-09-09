const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// In-memory data store (for demonstration purposes)
const users = [];

// Middleware
app.use(bodyParser.json());

// Routes

// Get all users
app.get('/users', (req, res) => {
  res.json(users);
});

// Create a new user
app.post('/users', (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
    estimatedSpending: [],
    actualSpending: [],
  };

  users.push(newUser);
  res.status(201).json(newUser);
});

// Add estimated spending for a user
app.post('/users/:id/estimated-spending', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find((u) => u.id === userId);

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  user.estimatedSpending.push(req.body.amount);
  res.status(201).json(user.estimatedSpending);
});

// Add actual spending for a user
app.post('/users/:id/actual-spending', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find((u) => u.id === userId);

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  user.actualSpending.push(req.body.amount);
  res.status(201).json(user.actualSpending);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
