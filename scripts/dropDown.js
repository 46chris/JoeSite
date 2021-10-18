//Handles the hamburger menu 
function myFunction(x) {
    x.classList.toggle("change");
    //Handle the drop down 
    let links= document.querySelector(".links");
    let nLinks = document.querySelector(".navbar .nav-links"); 
    console.log(nLinks); 
    if (window.getComputedStyle(links).top === "70px"){ 
        links.style.animation = "disappear 0.5s ease-in-out";
        links.style.top = "-300px"; 

    }
    else { 
        links.style.animation = "appear 0.7s ease-in-out"; 
        links.style.top = "70px";  
    } 

}