document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const firstName = document.getElementById('first-name');
    const lastName = document.getElementById('last-name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    const consent = document.getElementById('consent');
    const radioGroup = document.querySelectorAll('input[name="query-type"]');
    const successMessage = 'Message Sent! Thanks for completing the form. We\'ll be in touch soon!';
    
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        let valid = true;

        if (!firstName.value) {
            showError(firstName, 'first-name-error');
            valid = false;
        } else {
            hideError(firstName, 'first-name-error');
        }

        if (!lastName.value) {
            showError(lastName, 'last-name-error');
            valid = false;
        } else {
            hideError(lastName, 'last-name-error');
        }

        if (!validateEmail(email.value)) {
            showError(email, 'email-error');
            valid = false;
        } else {
            hideError(email, 'email-error');
        }

        if (![...radioGroup].some(radio => radio.checked)) {
            showError(radioGroup[0], 'query-type-error');
            valid = false;
        } else {
            hideError(radioGroup[0], 'query-type-error');
        }

        if (!message.value) {
            showError(message, 'message-error');
            valid = false;
        } else {
            hideError(message, 'message-error');
        }

        if (!consent.checked) {
            showError(consent, 'consent-error');
            valid = false;
        } else {
            hideError(consent, 'consent-error');
        }

        if (valid) {
            form.innerHTML = `<div class="success">${successMessage}</div>`;
        }
    });

    function showError(input, errorId) {
        input.classList.add('error');
        document.getElementById(errorId).style.display = 'block';
    }

    function hideError(input, errorId) {
        input.classList.remove('error');
        document.getElementById(errorId).style.display = 'none';
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});
