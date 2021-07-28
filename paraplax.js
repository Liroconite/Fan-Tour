let bg = document.getElementById("bg")
let mountain = document.getElementById("mountain")
let text = document.getElementById("text")

window.addEventListener('scroll', function(){
    var value = window.scrollY;

    bg.style.top = value * 0.5 + 'px';
    mountain.style.top = value * 0.15 + 'px';
    text.style.top = value * 1 + 'px';
})