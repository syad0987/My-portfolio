 
var typed = new Typed(".texts", {
    strings: ["Frontend Developer", "Ui-Ux Designer", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

var tablinks= document.getElementsByClassName('tab-links');
var tabcontents= document.getElementsByClassName('tab-contents');
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");

    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
        
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
}


const mobileMenuBtn=document.querySelector('.mobile-menu');
const navLinks=document.querySelector('.nav-links');
mobileMenuBtn.addEventListener('click',()=>{
    navLinks.classList.toggle('active');
});
 

document.querySelector('a[href^="#"]').array.forEach(anchor => {
    anchor.addEventListener('click', function(e){
        e.preventDefault();
        const target= document.querySelector(this.getAttribute('href'));
        if(target){
            target.scrollIntoView({behavior:'smooth'});

        }

    })
});


 

 