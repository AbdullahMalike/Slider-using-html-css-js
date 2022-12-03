var slideindex = 1;  
displaySlides(slideindex);  

function nextbutton(a) {
    displaySlides(slideindex += a); 
}

function currentSlide(a) {  
    displaySlides(slideindex = a);  
}  

function displaySlides(a){
var slider = document.getElementsByClassName("imageslider");
if(a> slider.length){
    slideindex = 1;
}
if(a<1){
    slideindex = slider.length
}
for (var i = 0; i < slider.length; i++) {  
    slider[i].style.display = "none";  
} 
slider[slideindex - 1].style.display = "block";
}