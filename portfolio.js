let menuIcon= document.querySelector('#menu-icon');
let navbar= document.querySelector('.navbar');
menuIcon.onclick= () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll=()=>{
    sections.forEach(sec=>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top >= offset && top <offset +height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};
if (window.matchMedia("(min-width: 768px)").matches) {
  ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200 
});
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });
} else {
  ScrollReveal({ 
    reset: true,
    distance: '20px',
    duration: 2000,
    delay: 200 
});
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });
}
const typed =new Typed('.multiple-text',{
    strings: ['Software Engineer !','Frontend Developer !', 'Database Administrator !','Backend Developer !','Graphic Designer'],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay:1000,
    loop: true
});
const boxContainers = document.querySelectorAll('.box-container');
boxContainers.forEach(boxContainer => {
    const btnLink = boxContainer.querySelector('.read-more');
    btnLink.addEventListener('click', (event) => {
        event.preventDefault(); 
        boxContainer.classList.toggle('open');        
        const isOpen = boxContainer.classList.contains('open');
        btnLink.textContent = isOpen ? 'Close' : 'Read More';
    });
});
document.addEventListener('click', (event) => {
    const clickedElement = event.target;
    if (!clickedElement.closest('.box-container')) {
        boxContainers.forEach(boxContainer => {
            boxContainer.classList.remove('open');            
            const btnLink = boxContainer.querySelector('.read-more');
            btnLink.textContent = 'Read More';
        });
    }
});      
          function showDetails(id, imgIndex) {
            const enlarged = document.getElementById(id);
            const portfolioBoxes = document.querySelectorAll('.portfolio-box');
            const enlargedImages = enlarged.querySelectorAll('img');        
            portfolioBoxes.forEach((box, index) => {
                box.addEventListener('click', () => {
                    if (index === imgIndex) {
                        const imgSrc = box.querySelector('img').src;
                        enlargedImages[0].src = imgSrc;
                        enlarged.classList.add('active');
                    }
                });
            });
        }              
              function closeEnlargedView() {
                  const enlargedViews = document.getElementsByClassName('enlarged');
                  Array.from(enlargedViews).forEach(enlargedView => {
                      enlargedView.classList.remove('active');
                  });
              }    
 const form = document.getElementById("contact-form");
const submitButton = form.querySelector("button[type='submit']");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  submitButton.disabled = true;
  const formData = new FormData(form);
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "https://formspree.io/f/xqazqben", true);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      submitButton.disabled = false;
      if (xhr.status === 200) {
        var data = JSON.parse(xhr.responseText);
        if (data.ok) {
          console.log("Form submitted successfully");
          alert("Thank you for reaching out! Your message has been successfully submitted.");
          form.reset();
        } else {
          console.error("Form submission error:", data.error);
        }
      } else {
        console.error("Form submission error. Status code:", xhr.status);
      }
    }
  };
  xhr.send(formData);
});
document.addEventListener("DOMContentLoaded", function () {
    const arrow = document.querySelector(".footer-iconTop.arrow");
  
    window.addEventListener("scroll", function () {
      if (window.scrollY > 200) {
        arrow.classList.add("show");
      } else {
        arrow.classList.remove("show");
      }
    });  
    arrow.addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
  function disableAnchor() {
  var anchor = document.getElementById('download-CV-Button');
  anchor.removeAttribute('href');
  setTimeout(function () {
      anchor.setAttribute('href', '#');
  }, 5000);
}

  
  
