document.getElementById("loginForm").addEventListener("submit", function (event) {
  event.preventDefault();
  
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  
  // Send a POST request to the server
  fetch("/login", {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, password })
  })
  .then(response => response.json())
  .then(data => {
      if (data.success) {
          // Redirect to the main page on successful login
          window.location.href = "/main.html";
      } else {
          document.getElementById("message").textContent = "Login failed. Please check your credentials.";
      }
  })
  .catch(error => {
      console.error("Error:", error);
  });
});
