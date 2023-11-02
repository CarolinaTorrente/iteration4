//adding event listener for the form's submit event. It prevents the default form submission, validates the username and password, and displays an alert if any of them are empty

document.addEventListener("DOMContentLoaded", function () {
    const profileForm = document.getElementById('profileForm');

    // event listener for form submissions
    profileForm.addEventListener('submit', function (event) {
        // Prevent the default form submission
        event.preventDefault();

        // validate the form inputs
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username.trim() === '' || password.trim() === '') {
            alert('Username and password are required');
        }
        if (username === 'Oliver' && password === '1234') {
            window.location.href = '/index';
        }
    });
});


//Properties (5 points):
// Creating a custom object
let profileData = {
    username: "",
    password: ""
};

// Accessing object properties
console.log("Username:", profileData.username);
console.log("Password:", profileData.password);

// Modifying object properties
profileData.username = "OliverDon";
profileData.password = "password1";

// Adding new properties
profileData.email = "oliverdon@gmail.com";

console.log("Updated Profile Data:", profileData);

// Timeout for window object points
// setTimeout example using the window object
setTimeout(() => {
    alert('Timeout!');
}, 300);