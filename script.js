/* ===========================
   SMOOTH SCROLL
=========================== */

const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(link => {

    link.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({

            behavior: "smooth"

        });

    });

});


/* ===========================
   ACTIVE NAVBAR
=========================== */

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        const sectionHeight = section.clientHeight;

        if (window.pageYOffset >= sectionTop &&
            window.pageYOffset < sectionTop + sectionHeight) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


/* ===========================
   NAVBAR SHADOW
=========================== */

const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.35)";
        navbar.style.background = "rgba(15,23,42,.98)";

    } else {

        navbar.style.boxShadow = "none";
        navbar.style.background = "rgba(15,23,42,.90)";

    }

});


/* ===========================
   TYPING EFFECT
=========================== */

const typingElement = document.querySelector(".hero h2");

const words = [

    "Python Web Developer",

    "Frontend Developer",

    "Django Developer",

    "Web Designer"

];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typingEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(0, charIndex++);

        if (charIndex > currentWord.length) {

            deleting = true;

            setTimeout(typingEffect, 1200);

            return;

        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, charIndex--);

        if (charIndex < 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(typingEffect, deleting ? 60 : 120);

}

typingEffect();


/* ===========================
   HERO FADE ANIMATION
=========================== */

window.addEventListener("load", () => {

    const hero = document.querySelector(".hero-content");

    hero.style.opacity = "0";

    hero.style.transform = "translateY(40px)";

    setTimeout(() => {

        hero.style.transition = "1s";

        hero.style.opacity = "1";

        hero.style.transform = "translateY(0px)";

    }, 300);

});


/* ===========================
   UPDATE FOOTER YEAR
=========================== */

const footer = document.querySelector("footer");

const year = new Date().getFullYear();

footer.innerHTML =
`© ${year} Nambu Sree Jaya Krishna Siva Sai Bulli Pavan | Python Web Developer`;

/* ===========================
   SCROLL REVEAL ANIMATION
=========================== */

const revealElements = document.querySelectorAll(
".about, .skill, .project-card, .contact, .project-content");

const revealObserver = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}else{

entry.target.classList.remove("show");

}

});

},{
threshold:0.15
});

revealElements.forEach(el=>{

el.classList.add("hidden");

revealObserver.observe(el);

});


/* ===========================
   SCROLL TO TOP BUTTON
=========================== */

const topBtn=document.createElement("button");

topBtn.className="top-btn";

topBtn.innerHTML='<i class="fas fa-arrow-up"></i>';

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.style.display="flex";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};


/* ===========================
   SCROLL PROGRESS BAR
=========================== */

const progress=document.createElement("div");

progress.className="progress-bar";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

const totalHeight=document.documentElement.scrollHeight-window.innerHeight;

const progressHeight=(window.pageYOffset/totalHeight)*100;

progress.style.width=progressHeight+"%";

});


/* ===========================
   BUTTON RIPPLE EFFECT
=========================== */

document.querySelectorAll(".btn").forEach(button=>{

button.addEventListener("click",function(e){

const ripple=document.createElement("span");

const rect=this.getBoundingClientRect();

const size=Math.max(rect.width,rect.height);

ripple.style.width=size+"px";
ripple.style.height=size+"px";

ripple.style.left=e.clientX-rect.left-size/2+"px";
ripple.style.top=e.clientY-rect.top-size/2+"px";

ripple.classList.add("ripple");

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

});


/* ===========================
   PROJECT CARD HOVER EFFECT
=========================== */

document.querySelectorAll(".project-card").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-12px) scale(1.02)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px) scale(1)";

});

});


/* ===========================
   SKILL CARD ANIMATION
=========================== */

document.querySelectorAll(".skill").forEach(skill=>{

skill.addEventListener("mouseenter",()=>{

skill.style.transform="translateY(-10px)";

});

skill.addEventListener("mouseleave",()=>{

skill.style.transform="translateY(0px)";

});

});


/* ===========================
   IMAGE HOVER EFFECT
=========================== */

document.querySelectorAll(".project-card img").forEach(img=>{

img.addEventListener("mouseenter",()=>{

img.style.transform="scale(1.08)";

});

img.addEventListener("mouseleave",()=>{

img.style.transform="scale(1)";

});

});


/* ===========================
   PAGE LOADER
=========================== */

window.addEventListener("load",()=>{

document.body.style.opacity="0";

setTimeout(()=>{

document.body.style.transition="opacity .8s";

document.body.style.opacity="1";

},100);

});


/* ===========================
   SOCIAL ICON ANIMATION
=========================== */

document.querySelectorAll(".social a").forEach(icon=>{

icon.addEventListener("mouseenter",()=>{

icon.style.transform="translateY(-8px) rotate(360deg)";

});

icon.addEventListener("mouseleave",()=>{

icon.style.transform="translateY(0) rotate(0deg)";

});

});


/* ===========================
   PARALLAX EFFECT
=========================== */

window.addEventListener("scroll",()=>{

const hero=document.querySelector(".hero");

hero.style.backgroundPositionY=window.pageYOffset*0.4+"px";

});


/* ===========================
   CONSOLE MESSAGE
=========================== */

console.log(
"%cWelcome to Pavan's Portfolio!",
"color:#38bdf8;font-size:22px;font-weight:bold;"
);
