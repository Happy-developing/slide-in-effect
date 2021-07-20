//Selectors
const text = document.querySelector(".text");
const image = document.querySelector(".image");

window.addEventListener("scroll",appearOnScroll);


function appearOnScroll(){
    let textPosition = text.getBoundingClientRect().top ;
    let windowHeight = window.innerHeight/1.2;
    if(windowHeight>textPosition){
        text.classList.remove("push-left");
        image.classList.remove("push-right");
    }else{
        text.classList.add("push-left");
        image.classList.add("push-right");
    }

}