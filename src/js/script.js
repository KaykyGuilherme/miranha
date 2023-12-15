const menuMobile = document.querySelector(".menu-hamburguer");

menuMobile.addEventListener('click', ()=>{
    const navMenu = document.querySelector(".navMenu");
    navMenu.classList.toggle("active")
})