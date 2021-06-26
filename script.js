const cards = document.querySelectorAll('.card');

const logoImage = document.querySelectorAll('.logo-img');
const title = document.querySelectorAll('.title');
const descripText = document.querySelectorAll('.descript-text');
const size = document.querySelectorAll('.size');
const purcasheButton = document.querySelectorAll('.purchase');
const container = document.querySelector(".container");

//Card effect
cards.forEach((card,i)=> {
  card.addEventListener('touchmove', e => {
    let xAxis = Math.round(window.innerWidth / 2 - (e.offsetX = e.touches[0].pageX - e.touches[0].target.offsetLeft)) / 20;     
  let yAxis = Math.round(window.innerHeight / 2 - (e.offsetY = e.touches[0].pageY - e.touches[0].target.offsetTop)) / 20;
  card.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`;
  card.style.transition = 'none';
  
  //POPIN
  logoImage[i].style.transform = 'translateZ(120px) rotateZ(-45deg)';
  title[i].style.transform = 'translateZ(110px)';
  descripText[i].style.transform = 'translateZ(100px)';
  size[i].style.transform = 'translateZ(95px)';
  purcasheButton[i].style.transform = 'translateZ(115px)';
  
  
  });
  
  
  //TOUCH END
  card.addEventListener('touchend', () => animatedEnd());
  
  function animatedEnd() {
     card.style.transform = `rotateX(0deg) rotateY(0deg)`;
    card.style.transition = 'all .5s ease';
    
    //POP OUT
    logoImage[i].style.transform = 'translateZ(0px) rotateZ(0deg)';
    title[i].style.transform = 'translateZ(0px)';
    descripText[i].style.transform = 'translateZ(0px)';
    size[i].style.transform = 'translateZ(0px)';
    purcasheButton[i].style.transform = 'translateZ(0px)';
    
  }
  
  //MOUSEMOVE 
  card.addEventListener('mousemove', e => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 20;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 20;
    card.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`;
    card.style.transition = 'none';
  });
  //MOUSELEAVE
  card.addEventListener('mouseleave', () => animatedEnd());
});
 


// REVEAL ABIMATED
const sr = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
  });
  
  sr.reveal('.card', {interval: 100});
