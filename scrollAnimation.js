let links = document.querySelectorAll(".link");
let sections = document.querySelectorAll(".section"); 

const elementInView = (el) => {
    const elTop = el.getBoundingClientRect().top; 

    return (
        elTop <= (window.innerHeight || document.body.clientHeight)
    );
}; 

const handleScrollAnimation = () => { 
    let index = 0; 
    sections.forEach((el) => { 
        if (elementInView(el)){
            links[index].classList.add(".active-page");  
        }
        index++; 
    }); 
};

window.addEventListener('scroll', ()=>{ 
    handleScrollAnimation(); 
})