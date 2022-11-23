// document.getElementsByClassName("btn")
// function mobileMenu() {
//     if (document.querySelector(".navbar-nav").style.display == block) {
//         document.querySelector(".navbar-nav").style.display = "none";
//     }else {
//         document.querySelector(".menu").style.display = "block";
//      }
    
// }
// document.querySelector("menu").addEventlistener("click", mobileMenu);



function resetMenu(){
    if(window.innerWidth >= 900) {
        document.querySelector(".navbar-nav").style.display ="flex"
    }else if(window.innerWidth < 900) {
        document.querySelector(".navbar-nav").style.display ="none"
    };
}
window.addEventListener("resize", resetMenu)
const navSlide = () => {
    const menu = document.querySelector(".menu");
    const navbar = document. querySelectorAll(".navbar-nav");
    menu.addEventListener("click",()=> {
        navbar.classList.toggle("navbar-nav.active");
    });
}
navSlide();