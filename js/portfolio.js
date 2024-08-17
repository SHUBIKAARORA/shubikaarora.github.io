const sections=document.querySelectorAll("section");
const navlist=document.querySelectorAll("nav .nav-menu .nav_menu_list li ");
window.addEventListener("scroll",()=>{
    let current="";
    sections.forEach(section=>{
        const sectionTop=section.offsetTop;
        const height=section.clientHeight;
        if (scrollY>=(sectionTop-height/3)){
            current=section.getAttribute("id");
        }
    })
    navlist.forEach( li =>{
        li.classList.remove("active");
        console.log(li);
        if(li.classList.contains(current)){
            console.log(li);
            li.classList.add("active");
        }
    })
})

/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction(){
    let menuBtn = document.getElementById("myNavMenu");
  
    if(menuBtn.className === "nav-menu"){
      menuBtn.className += " responsive";
    } else {
      menuBtn.className = "nav-menu";
    }
  }
/*SMOOTH SCROLLING*/
$(".scroll").on("click", function() {
    $(this).each(function() {
        const sectionTop = $(this.hash).offset().top;
        $("html, body").animate({
            scrollTop: sectionTop
        }, 1500);
    });
});
// /*DOWNLOAD CV*/
// document.getElementById('download').addEventListener('click', function() {
//     const link = document.createElement('a');
//     link.href="../images/CV SHUBIKA ARORA.pdf";  // Replace with your PDF URL
//     link.download = 'CVSHUBIKAARORA.pdf';  // Set the filename for download
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
// });

/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

/* -- HOME -- */
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})

/* -- CERTIFICATE BOX -- */
sr.reveal('.divs',{delay: 200})
// PROJECT
sr.reveal(".pro",{delay:200})
/* -- HEADINGS -- */
sr.reveal('.top-header',{})

const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
    })
    
    srLeft.reveal('.about-info',{delay: 100})
    srLeft.reveal('.contact-info',{delay: 100})
    
    /* -- ABOUT SKILLS & FORM BOX -- */
    const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: true
    })
    
    srRight.reveal('.skills-box',{delay: 100})
    srRight.reveal('.form-control',{delay: 100})