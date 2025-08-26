//add class active to header on scroll
let header= document.querySelector(".header");
window.onscroll=function(){
    if(this.scrollY >=50){
        header.classList.add("active")
    }else{
        header.classList.remove("active")
    }
}

function open_close_menu(){
    document.getElementById("links").classList.toggle("active");
}
document.querySelector(".close_menu").addEventListener("click", open_close_menu);
