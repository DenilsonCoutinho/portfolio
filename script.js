const navbar = document.querySelector('.nav-menu ul');
const button = document.querySelector('.nav .menu');


button.addEventListener('click', () => {
    navbar.classList.toggle('active')
});
 