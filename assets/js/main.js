document.addEventListener("DOMContentLoaded", function () {
    const btnMobile = document.getElementById("btn-menu");

    function closeMenu (){
        nav.classList.toggle('active');
        document.body.classList.toggle('menu-aberto');
    }

    function toggleMenu (event){
        if (event.type === 'touchstart') event.preventDefault();
        const nav = document.getElementById("nav");
        nav.classList.toggle('active');
        const active = nav.classList.contains('active');
        document.body.classList.toggle('menu-aberto');
    }

    btnMobile.addEventListener('click', toggleMenu);
    btnMobile.addEventListener('touchstart', toggleMenu);
});