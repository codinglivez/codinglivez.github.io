$(window).on("scroll", function() {
    if($(window).scrollTop() > 150) {
        $("header").addClass("active-header");
    } else {
       $("header").removeClass("active-header");
    }
});


const hamburger = document.querySelector('.burger');
const navlink = document.querySelector('.banner-nav ul');
const links = document.querySelectorAll('.banner-nav ul li');

hamburger.addEventListener('click', () => {
    navlink.classList.toggle('open');
    links.forEach(link => {
        link.classList.toggle("fade");
    })
})