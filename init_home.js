function callBoth(){
    toggleClass();
    toggleRotate();
}
function toggleClass(){
    let menu1 = document.querySelector(".list");
    menu1.classList.toggle("toggleSub");
}
function toggleRotate(){
    let menu2 = document.querySelector(".nav .nav_right #icon");
    menu2.classList.toggle("toggleIcon");
}
