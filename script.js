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