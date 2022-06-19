var nav_hamburger = document.querySelector("#nav_hamburger");

nav_hamburger.addEventListener("click", function(){
    nav_hamburger.classList.toggle("active");
    if (document.querySelector(".nav-modal").classList.contains("active") == true) { 
        document.querySelector(".nav-modal").classList.add("close");
        setTimeout(()=>{
            document.querySelector(".nav-modal").classList.remove("close");
            document.querySelector(".nav-modal").classList.remove("active");
        }, (500));
    } else {
        document.querySelector(".nav-modal").classList.add("active");
    }
});


var nav_modal = document.querySelector(".nav-modal");

var funkceAsiXD = ()=>{
    if(nav_modal.clientWidth < 1080){
        nav_modal.classList.remove("active")
        nav_hamburger.classList.remove("active");
    }else{
        nav_modal.classList.add("active")
    }
}
window.onresize = funkceAsiXD;
funkceAsiXD()