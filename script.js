const navbar = document.querySelector('.navbar');
function CheckScroll(){
  if (window.scrollY>1){
    navbar.classList.add('scrolled');

  } else{
    navbar.classList.remove('scrolled');
  
  }
 
}
 window.addEventListener('scroll',CheckScroll);