/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle) {
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}


/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}


/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader = document.querySelectorAll('.skills__header')


function toggleSkills() {
    let itemClass = this.parentNode.className

    for(i = 0; i < skillsContent.length; i++ ) {
        skillsContent[i].className = 'skills__content skills__close'
    }

    if(itemClass === 'skills__content skills__close') {
        this.parentNode.className = 'skills__content skills__open'
    }
}      


skillsHeader.forEach(el => {
    el.addEventListener('click',toggleSkills);
})
/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')


tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification__active')
        })

        target.classList.add('qualification__active')

        tab.forEach(tab => {
            tab.classList.remove('qualification__active')
        })

        tab.classList.add('qualification__active')
    })
})      

/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.services__button'),
      modalCloses = document.querySelectorAll('.services__modal-close')


let modal = function(modalClick) {
    modalViews[modalClick].classList.add('active-modal')
}      


modalBtns.forEach((modalBtn, i) => {
modalBtn.addEventListener('click', () => {
    modal(i)
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach(modalView => {
            modalView.classList.remove('active-modal')
        })
    })
})

})

/*==================== PORTFOLIO SWIPER  ====================*/
var swiperPortfolio = new Swiper('.portfolio__container', {
    cssMode: true,
    loop:true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }
  });

/*==================== TESTIMONIAL ====================*/
var swiperTestimonial = new Swiper('.testimonial__container', {
    loop:true,
    grabCursor: true,
    spaceBetween:48,
    
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
    breakpoints: {
        568: {
            slidePerView: 2,
            
        }
    }
  });

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader() {
    const nav = document.getElementById('header')
// when the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up')

    if(this.scrollY >= 560)  scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)

/*==================== DARK LIGHT THEME ====================*/ 

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'


const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')


const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'



if(selectedTheme) {
    document.body.classList[selectedTheme ===  'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon ===  'uil-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon)
})




 // ======= scroll reveal ======
 ScrollReveal({ 
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});


ScrollReveal().reveal('.home__data, .home__social, .section__title, .section__subtitle', { origin:'top' });
ScrollReveal().reveal('.home__img, .skills__container, .qualification__container, .services__container, .portfolio__container, .testimonial__container, .contact__container', { origin:'bottom' });
ScrollReveal().reveal('.home__data h3, .about__img, .project__data, .footer__title, .footer__subtitle', { origin:'left' });
ScrollReveal().reveal('.home__data p, .about__data, .project__img, .footer__links, .footer__socials', { origin:'right' });







// ======= typed js ======

const typed = new Typed('.multiple-text', {
    strings: ['Backend Developer', 'UI/UX developer', 'Blogger'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
 })

 // ======= EMAIL js ======
const contactForm = document.getElementById('contact-form'),
contactName = document.getElementById('contact-name'),
contactEmail = document.getElementById('contact-email'),
contactProject = document.getElementById('contact-project'),
projectType = document.getElementById('project-type'),
contactMessage = document.getElementById('contact-message'),
loader = document.getElementById('loader');

const sendEmail = (e) => {
e.preventDefault();

if (contactName.value === '' || contactEmail.value === '' || contactProject.value === '' || projectType.value === '') {
  contactMessage.classList.remove('color-blue');
  contactMessage.classList.add('color-red');
  contactMessage.textContent = 'Fill in all the input fields';
} else {
  // Show the loader while the email is being sent
  loader.style.display = 'block';

  emailjs.sendForm('service_o50cr4o', 'template_mtn81zh', '#contact-form', 'rXR9ecRyT8S4Z1Hlg')
      .then(() => {
          contactMessage.classList.add('color-blue');
          contactMessage.textContent = 'Message sent';

          // Hide the loader after a successful message
          loader.style.display = 'none';

          setTimeout(() => {
              contactMessage.textContent = '';
          }, 5000);
      }, (error) => {
          alert('OOPS! SOMETHING WENT WRONG...', error);

          // Hide the loader if there's an error
          loader.style.display = 'none';
      });

  // Clear the input fields
  contactName.value = '';
  contactEmail.value = '';
  contactProject.value = '';
  projectType.value = '';
}
};

contactForm.addEventListener('submit', sendEmail);


