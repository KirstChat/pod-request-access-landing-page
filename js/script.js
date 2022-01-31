const form = document.getElementById('form');
const email = document.getElementById('email');
const error = document.getElementById('error');

const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

form.addEventListener('submit', (e) => {
  if (email.value === '' || !email.value.match(emailFormat)) {
    e.preventDefault();
    error.classList.remove('hidden');
  } else {
    error.classList.add('hidden');
  }
});
