
const slides = document.querySelector('.slider').children;
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let index = 0;

prev.addEventListener('click', ()=>{
    prevSlide()
})

next.addEventListener('click', ()=>{
    nextSlide()
})

function prevSlide() {
    if (index==0) {
        index=slides.length-1;
    } else {
        index--;
    }
    changeSlide()    
}

function nextSlide() {
    if (index==slides.length-1) {
        index=0;
    } else {
        index++;
    }
    changeSlide();
}
function changeSlide() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
        
    }
    slides[index].classList.add("active");
}




/*Accordion*/

const accordion = document.getElementsByClassName('contentbox');

for ( i = 0; i< accordion.length; i++) {
  accordion[i].addEventListener('click',function(){
      this.classList.toggle('active');
  })
    }