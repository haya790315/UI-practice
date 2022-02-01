

let select = document.querySelectorAll('.select');
let card = document.getElementsByClassName('card');
let select1 = document.getElementById('select-1');
let select2 = document.getElementById('select-2');

let card1 = document.getElementsByClassName('testimonial__box--card1');
let card2 = document.getElementsByClassName('testimonial__box--card2');
let card3 = document.getElementsByClassName('testimonial__box--card3');

let [...selectArr] = [...select];



selectArr.forEach(element => element.addEventListener('click',function(){
    console.log('click');
    let x = 0 ;
    let y = selectArr.indexOf(this);
    console.log(element);
    let z = y-x ;
    
    for (let i = 0; i < card.length; i++) {
        card[i].style.transform = `translateX(${-(z-i)*106}%)`;   
        select[i].classList.remove('active');
    }
    element.classList.add('active');
    
}));



    
    
    
    
    


