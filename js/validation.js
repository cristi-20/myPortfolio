const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('e-mail');
const subject = document.getElementById('subject');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
})

function checkInputs() {

    const firstnameValue = firstname.value.trim();
    const lastnameValue = lastname.value.trim();
    const emailValue = email.value.trim();
    const subjectValue = subject.value.trim();

    if(firstnameValue === '') {
setErrorFor(firstname, 'Firstname cannot be blank');
    } else {
setSuccesFor(firstname);
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;

    formControl.className = 'form-control error';
}
