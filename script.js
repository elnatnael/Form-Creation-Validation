document.addEventListener('DOMContentLoaded', function() {

    const form = document.getElementById('registration-form');
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const feedbackDiv = document.getElementById('form-feedback');

    form.addEventListener("submit", function(event) {
      event.preventDefault();
      alert("Form submitted!");
    });

    // Submit event listener validation
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        feedbackDiv.textContent = ''; // Clear previous feedback

        const username = usernameInput.value.trim();
        const email = emailInput.value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const password = passwordInput.value;

        let isValid = true; // Tracks if the form is valid
        let messages = [];  // Stores all error messages

        // Username validation
        if (username.length < 3) {
            isValid = false;
            messages.push('Username must be at least 3 characters long.');
        }

        // Email validation
        if (!emailPattern.test(email)) {
            isValid = false;
            messages.push('Email must be a valid email address.');
        }

        // Password validation
        if (password.length < 8) {
            isValid = false;
            messages.push('Password must be at least 8 characters long.');
        }

        // Display feedback
        feedbackDiv.style.display = 'block';
        if (isValid) {
            feedbackDiv.textContent = 'Registration successful!';
            feedbackDiv.style.color = '#28a745';
            form.reset(); // Clear the form
        } else {
            feedbackDiv.innerHTML = messages.join('<br>');
            feedbackDiv.style.color = '#dc3545';
        }
    });

});
