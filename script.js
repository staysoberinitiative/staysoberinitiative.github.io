// script.js
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// Add event listener to automatically change slides every 5 seconds
setInterval(function() {
    plusSlides(1);
}, 5000);

// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
//   if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
//     document.getElementById("navbar").style.padding = "10px 10px";
//     document.getElementById("logo").style.fontSize = "25px";
//     document.getElementById("logo-img").style.width = "100px";
//     document.getElementById("mainnav").style.marginTop = "15px";
    
      
//   } else {
//     document.getElementById("navbar").style.padding = "30px 10px";
//     document.getElementById("logo").style.fontSize = "35px";
//     document.getElementById("logo-img").style.width = "200px";
//     document.getElementById("mainnav").style.marginTop = "50px";
    
//   }

  const viewportHeight = window.innerHeight;
  const threshold = viewportHeight * 0.8;
  const scrollPosition = window.scrollY;

  if (scrollPosition > threshold) {
    document.getElementById("navbar").style.backgroundColor = "#f1f1f1";
    document.getElementById("navbar").style.boxShadow = "0px 4px 8px rgba(59, 146, 24, 0.1)";
    let navlinks = document.getElementsByClassName("navlink");
    for (let i = 0; i < navlinks.length; i++) {
        navlinks[i].style.color = "black";
      }
  } else {
    document.getElementById("navbar").style.backgroundColor = "transparent";
    document.getElementById("navbar").style.boxShadow = "none";
    let navlinks = document.getElementsByClassName("navlink");
    for (let i = 0; i < navlinks.length; i++) {
        navlinks[i].style.color = "#f1f1f1";
      }
  }
}

document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const nav = document.getElementById('mainnav');

    hamburgerMenu.addEventListener('click', function() {
        nav.classList.toggle('show');
        hamburgerMenu.classList.toggle('toggle');
    });
});