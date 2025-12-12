// Contact Form Validation and Submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    const feedback = document.getElementById('form-feedback');
    
    let isValid = true;
    
    // Clear previous errors
    document.querySelectorAll('.error').forEach(el => {
        el.style.display = 'none';
        el.textContent = '';
    });
    feedback.className = '';
    feedback.textContent = '';
    
    // Validate Name
    if (!name.value.trim()) {
        document.getElementById('name-error').textContent = 'Name is required.';
        document.getElementById('name-error').style.display = 'block';
        isValid = false;
    }
    
    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim()) {
        document.getElementById('email-error').textContent = 'Email is required.';
        document.getElementById('email-error').style.display = 'block';
        isValid = false;
    } else if (!emailRegex.test(email.value)) {
        document.getElementById('email-error').textContent = 'Please enter a valid email address.';
        document.getElementById('email-error').style.display = 'block';
        isValid = false;
    }
    
    // Validate Message
    if (!message.value.trim()) {
        document.getElementById('message-error').textContent = 'Message is required.';
        document.getElementById('message-error').style.display = 'block';
        isValid = false;
    }
    
    if (isValid) {
        // Simulate form submission (replace with real backend integration)
        feedback.textContent = 'Thank you! Your message has been sent successfully.';
        feedback.className = 'success';
        this.reset(); // Clear form
    } else {
        feedback.textContent = 'Please correct the errors above.';
        feedback.className = 'error';
    }
});
