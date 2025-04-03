function validateForm() {
    let username = document.getElementById("first").value;
    let password = document.getElementById("password").value;

    // Validate Username
    if (username === "") {
        alert("Username is required.");
        return false; // Prevent form submission
    }

    // Validate Password
    let regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!regex.test(password)) {
        alert("Password must be at least 8 characters long, and include at least one letter and one number.");
        return false;
    }
    
}

window.onload = function() {
    setTimeout(() => {
        document.getElementById('blinking-link').style.animation = 'none';
    }, 5000);  // Stops blinking after 5 seconds
};

window.onload = function() {
    setTimeout(() => {
        document.getElementById('blinking-link').style.animation = 'none'; // Stops blinking after 5 seconds
    }, 5000);  // Stops blinking after 5 seconds
};


const countdownDate = new Date("2025-05-06T10:00:00").getTime();

const countdownFunction = setInterval(() => {
    // Get the current time
    const now = new Date().getTime();

    // Calculate the time remaining
    const distance = countdownDate - now;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Update the countdown elements on the page
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // If the countdown is finished, display a message
    if (distance < 0) {
        clearInterval(countdownFunction);  // Stop the countdown
        document.getElementById("countdown").innerHTML = "The event has started!";  // Show event start message
    }
}, 1000);  


