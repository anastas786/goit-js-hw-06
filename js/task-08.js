

const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const formDataObject = {};

    formData.forEach((value, name) => {
        formDataObject[name] = value;
    });


    const { email, password } = formDataObject;
    if (!email || !password) {
        alert('All fields must be filled!');
        return;
    }

    console.log(formDataObject);

    loginForm.reset();
}

