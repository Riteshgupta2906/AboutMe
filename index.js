function navSlide (){
   var burger=document.querySelector(".burger");
    var nav=document.querySelector(".nav-links");
    const navLinks=document.querySelectorAll(".nav-links li");
    console.log(navLinks);
    
    


    burger.addEventListener("click",function(){
        nav.classList.toggle("nav-active");
   
    burger.classList.toggle('toggle');
    });

}
navSlide();


