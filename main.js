
document.addEventListener('DOMContentLoaded', () => {

    const loginForm = document.querySelector('#login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const username = loginForm.querySelector('#username').value;
            const password = loginForm.querySelector('#password').value;
            console.log(`Logging in with username: ${username} and password: ${password}`);
        });
    }

    const profileForm = document.querySelector('#profile-form');
    if (profileForm) {
        profileForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const name = profileForm.querySelector('#name').value;
            const email = profileForm.querySelector('#email').value;
            console.log(`Updating profile with name: ${name} and email: ${email}`);
        });
    }

});