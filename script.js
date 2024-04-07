 
   
   /*var swiper2 = new Swiper2(".swiper-mySwiper2", {
    grabCursor: true,
    effect: "creative",
    creativeEffect: {
      prev: {
        shadow: true,
        translate: ["-120%", 0, -500],
      },
      next: {
        shadow: true,
        translate: ["120%", 0, -500],
      },
    },
  });*/

  /*
  window.addEventListener('scroll', function() {
    var aboutSection = document.getElementById('about');
    var aboutPosition = aboutSection.getBoundingClientRect().top;
    var screenHeight = window.innerHeight;

    if (aboutPosition < screenHeight && aboutPosition > 0) {
        aboutSection.classList.add('animate-up');
    } else {
        aboutSection.classList.remove('animate-up');
    }
});
*/



  const wrapper= document.querySelector('.wrapper');
  const registerLink=document.querySelector('.register-link');
  const loginLink=document.querySelector('.login-link');
  const btnPopup=document.querySelector('.btnLogin-popup');
  const iconClose=document.querySelector('.icon-close');


  registerLink.onclick=()=>{
    wrapper.classList.add('active');
  };

  loginLink.onclick=()=>{
    wrapper.classList.remove('active');
  };

  btnPopup.onclick=()=>{
    wrapper.classList.add('active-popup');
  };

  iconClose.onclick=()=>{
    wrapper.classList.remove('active-popup');
    wrapper.classList.remove('active');
  };