
const scriptURL = 'https://script.google.com/macros/s/AKfycbyJ6E6tku0UkeEMx12SV6orhqD_W7dcgcjwdyBKfOfapMmF36kF8vYlj7lk6oeSxpbx/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Thank You For Subscribing!!!";
            form.reset();
            setTimeout(function () {
                msg.innerHTML = "";
            }, 3000);
        })
        .catch(error => {
            console.error('Error!', error.message);
            msg.innerHTML = "An error occurred. Please try again later.";
            setTimeout(function () {
                msg.innerHTML = "";
            }, 3000);
        });
});
