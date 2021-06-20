// sets the timeout for the loading of the page
window.onload = () => {
    setTimeout(() => {
        document.querySelector('body').classList.add('display');
    }, 4000);
};

// addEventListener for the hamburger menu
document.querySelector(".hamburger-menu").addEventListener("click", () => {
    document.querySelector(".container").classList.toggle("change");
});

// adding an event listener to the scroll button to ensure smooth scrolling of the page
document.querySelector('.scroll-btn').addEventListener('click', () => {
    document.querySelector('html').style.scrollBehavior = 'smooth';
    setTimeout(() => {
        document.querySelector('html').style.scrollBehavior = 'unset';
    }, 1000);
});

// adding user valiation for the form
// grab all the info from html and store them inside of a variable
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#useremail');
const msgInput = document.querySelector('#usermsg');
const userList = document.querySelector('#users')

// Listen for the form to submit
myForm.addEventListener('submit', onSubmit);

// create the function onSubmit
function onSubmit(e) {
    // stops the page from auto reloading every time the user clicks the submit button
    e.preventDefault();

    // check if all the values are filled for the contact form
    if (nameInput.value === '' || emailInput.value === '' || msgInput.value === '') {
        // alert the user to enter all the fields
        msgInput.innerHTML = 'Please enter all fields';

        // remove the error message after 3 seconds
        setTimeout(() => msgInput.remove(), 3000);
    }

    else {
        // create a new list item with user
        const li = document.createElement('li');

        // Add text node with input values
        li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}: ${msgInput.value}`));

        // Append new names to the temp ul
        userList.appendChild(li);

        // clear fields
        nameInput.value = '';
        emailInput.value = '';
        msgInput.value = '';
    }
}