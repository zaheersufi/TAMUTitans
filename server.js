const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

// In-memory user database (for demonstration purposes)
const users = [
    { username: "user1", password: "password1" },
    { username: "user2", password: "password2" }
];

app.use(bodyParser.json());

app.post("/login", (req, res) => {
    const { username, password } = req.body;
    
    // Check if the provided username and password match a user in the database
    const user = users.find(u => u.username === username && u.password === password);
    
    if (user) {
        // Successful login
        res.json({ success: true });
    } else {
        // Failed login
        res.json({ success: false });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
