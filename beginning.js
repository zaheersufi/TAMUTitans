import low from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';

const adapter = new FileSync('db.json');
const db = low(adapter);

document.addEventListener("DOMContentLoaded", function () {
    // Wait for the DOM to be fully loaded

    const signupForm = document.getElementById("signupForm");

    signupForm.addEventListener("submit", function (event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Access and process the form data
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        // Perform form validation and processing here
        if (name && email && password && confirmPassword) {
            // Example: Display the form data in the console
            
            db.get('users').push({name: name, email: email, password: password }).write();

            console.log(db.get('users').values());


            // You can also send this data to other JavaScript functions or APIs
        } else {
            // Handle form validation errors (e.g., display error messages)
            console.error("Form data is incomplete");
        }
    });
});
