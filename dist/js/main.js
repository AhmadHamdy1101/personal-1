

window.addEventListener('scroll',function(){

    let nav = document.querySelector('nav');
    let windowposition = window.scrollY > 0;

    nav.classList.toggle('nav-active',windowposition);
    
});

let closemenu = document.querySelector('.close');
let openMenu = document.querySelector('.hamberger-menu');
let menu = document.querySelector('.menu');


openMenu.addEventListener('click',function(){
    menu.style.display = "block";
    closemenu.style.display = "block";
    openMenu.style.display = "none";

    
})
closemenu.addEventListener('click',function(){
    menu.style.display = "none";
    closemenu.style.display = "none";
    openMenu.style.display = "block";

    
})


$("body").niceScroll({
    cursorcolor:" #ff2b4a " ,
    cursorborder: "0px",
    scrollspeed: 70,
    zindex: "10" 
}

);