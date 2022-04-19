
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
} )


window.onload = () => {
  
  const transition_el = document.querySelector('.transition');

  setTimeout(() => {
    transition_el.classList.remove('is-active');
  }, 500);

  for (let i = 0; i < anchors.length; i++) {
    const anchor = anchors[i];

    anchor.addEventListener('click', e => {
      e.preventDefault();
      let target = e.target.href;

      console.log(transition_el);

      transition_el.classList.add('is-active');

      console.log(transition_el);

      setInterval(() => {
        window.location.href = target;
      }, 500);
    })
  }
}







const link = document.querySelectorAll('.link');
const linkHoverReveal = document.querySelectorAll('.hover-reveal');
const linkImages = document.querySelectorAll('.hidden-img');


for(let i = 0; i < link.length; i++) {
  link[i].addEventListener('mousemove', (e) => {
    linkHoverReveal[i].style.opacity = 1;
    linkHoverReveal[i].style.transform = `translate(-100%, -50% ) rotate(5deg)`;
    linkImages[i].style.transform = 'scale(1, 1)';
    linkHoverReveal[i].style.left = e.clientX + "px";
  })
  
  link[i].addEventListener('mouseleave', (e) => {
    linkHoverReveal[i].style.opacity = 0;
    linkHoverReveal[i].style.transform = `translate(-50%, -50%) rotate(-5deg)`;
    linkImages[i].style.transform = 'scale(0.8, 0.8)';
    
  })
}


ScrollReveal().reveal('.main-image', { 
  delay: 200, reset: true, desktop: true, mobile: true,duration: 1000, distance: '50px' });

ScrollReveal().reveal('.main-text, .circle-line', { 
  delay: 400, reset: true, desktop: true, mobile: true, duration: 2000, distance: '50px'  });


ScrollReveal().reveal('.text-1', { 
  delay: 400, reset: true, desktop: true, mobile: true, duration: 3000,  distance: '50px'});


ScrollReveal().reveal('.about-image', { 
  delay: 200, reset: true, desktop: true, mobile: true, duration: 2000,  distance: '100px'});

  ScrollReveal().reveal('.about-text', { 
    delay: 400, reset: true, desktop: true, mobile: true, duration: 3000,  distance: '100px'});

    ScrollReveal().reveal('.accent-title, .contact-text', { 
      delay: 100, reset: true, desktop: true, mobile: true, duration: 2000,  distance: '20px'});

      ScrollReveal().reveal('.link', { 
        delay: 400, reset: true, desktop: true, mobile: true, duration: 1000,  distance: '20px'});
    
  
    //project//



