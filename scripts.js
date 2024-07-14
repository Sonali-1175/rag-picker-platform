document.addEventListener('DOMContentLoaded', function() {
    const content = document.getElementById('content');

    // Function to load Home page content
    const loadHomePage = () => {
        content.innerHTML = `
            <div class="container">
                <h2>Welcome to the Rag Picker Platform</h2>
                <p>Your reliable platform to find and connect with rag pickers.</p>
            </div>
            <div class="honeybee-house" style="top: 50px; left: 50px;"></div>
        `;
    };

    // Function to load User Profile page content
    const loadUserProfile = () => {
        content.innerHTML = `
            <div class="container">
                <h2>User Profile</h2>
                <form id="user-profile-form">
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" value="John Doe">
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" value="john@example.com">
                    <p>History:</p>
                    <ul>
                        <li>Service 1</li>
                        <li>Service 2</li>
                        <li>Service 3</li>
                    </ul>
                    <button type="submit">Save</button>
                </form>
            </div>
        `;

        // Add event listener to the form submission
        const userProfileForm = document.getElementById('user-profile-form');
        userProfileForm.addEventListener('submit', function(event) {
            event.preventDefault();
            // Handle form submission here
            alert('User profile updated!');
        });
    };

    // Function to load Edit Profile page content
    const loadEditProfile = () => {
        content.innerHTML = `
            <div class="container">
                <h2>Edit Profile</h2>
                <form id="edit-profile-form">
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" value="John Doe">
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" value="john@example.com">
                    <button type="submit">Save</button>
                </form>
            </div>
        `;

        // Add event listener to the form submission
        const editProfileForm = document.getElementById('edit-profile-form');
        editProfileForm.addEventListener('submit', function(event) {
            event.preventDefault();
            // Handle form submission here
            alert('Profile updated successfully!');
        });
    };

    // Function to load Rag Picker Profile page content
    const loadRagPickerProfile = () => {
        content.innerHTML = `
            <div class="container">
                <h2>Rag Picker Profile</h2>
                <p>Name: Rag Picker Name</p>
                <p>Location: Some Location</p>
                <p>Service Type: Some Service</p>
                <p>Rating: 4.5/5</p>
                <button>Hire</button>
            </div>
        `;
    };

    // Function to load Register Rag Picker page content
    const loadRegisterRagPicker = () => {
        content.innerHTML = `
            <div class="container">
                <h2>Register Rag Picker</h2>
                <form id="register-rag-picker-form">
                    <label for="rag-picker-name">Name:</label>
                    <input type="text" id="rag-picker-name" name="rag-picker-name">
                    <label for="location">Location:</label>
                    <input type="text" id="location" name="location">
                    <label for="service-type">Service Type:</label>
                    <input type="text" id="service-type" name="service-type">
                    <label for="rating">Rating:</label>
                    <input type="number" id="rating" name="rating" min="1" max="5">
                    <button type="submit">Register</button>
                </form>
            </div>
        `;

        // Add event listener to the form submission
        const registerRagPickerForm = document.getElementById('register-rag-picker-form');
        registerRagPickerForm.addEventListener('submit', function(event) {
            event.preventDefault();
            // Handle form submission here
            alert('Rag Picker registered successfully!');
        });
    };

    // Function to load Services page content
    const loadServices = () => {
        content.innerHTML = `
            <div class="container">
                <h2>Services</h2>
                <p>Here you can find various services provided by our platform.</p>
            </div>
        `;
    };

    // Function to load About Us page content
    const loadAboutUs = () => {
        content.innerHTML = `
            <div class="container">
                <h2>About Us</h2>
                <p>Our mission is to connect users with reliable rag pickers in an easy and transparent way. We ensure trust and reliability through our platform.</p>
            </div>
            <div class="honeybee-house" style="bottom: 50px; right: 50px;"></div>
        `;
    };

    // Function to load Contact Us page content
    const loadContactUs = () => {
        content.innerHTML = `
            <div class="container">
                <h2>Contact Us</h2>
                <form id="contact-us-form">
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name">
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email">
                    <label for="message">Message:</label>
                    <textarea id="message" name="message"></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>
        `;

        // Add event listener to the form submission
        const contactUsForm = document.getElementById('contact-us-form');
        contactUsForm.addEventListener('submit', function(event) {
            event.preventDefault();
            // Handle form submission here
            alert('Message sent successfully!');
        });
    };

    // Event listeners for navigation links
    document.getElementById('home-link').addEventListener('click', function(e) {
        e.preventDefault();
        loadHomePage();
    });

    document.getElementById('user-profile-link').addEventListener('click', function(e) {
        e.preventDefault();
        loadUserProfile();
    });

    document.getElementById('edit-profile-link').addEventListener('click', function(e) {
        e.preventDefault();
        loadEditProfile();
    });

    document.getElementById('rag-picker-profile-link').addEventListener('click', function(e) {
        e.preventDefault();
        loadRagPickerProfile();
    });

    document.getElementById('register-rag-picker-link').addEventListener('click', function(e) {
        e.preventDefault();
        loadRegisterRagPicker();
    });

    document.getElementById('services-link').addEventListener('click', function(e) {
        e.preventDefault();
        loadServices();
    });

    document.getElementById('about-us-link').addEventListener('click', function(e) {
        e.preventDefault();
        loadAboutUs();
    });

    document.getElementById('contact-us-link').addEventListener('click', function(e) {
        e.preventDefault();
        loadContactUs();
    });

    // Initial load
    loadHomePage();
});
