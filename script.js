// ===============================
// Premium Portfolio JavaScript
// ===============================

// Mobile Menu
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector("#menu");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("show");
});

// Close menu after clicking a link
document.querySelectorAll("#menu a").forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("show");
    });
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){
            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });
});

// Header Background on Scroll
const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){
        header.style.background = "#0f172a";
        header.style.boxShadow = "0 10px 20px rgba(0,0,0,.3)";
    }
    else{
        header.style.background = "rgba(15,23,42,.9)";
        header.style.boxShadow = "none";
    }

});

// Back To Top Button
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 400){
        topBtn.style.display = "block";
    }else{
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});

// Active Navigation
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if(window.scrollY >= sectionTop){
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){
            link.classList.add("active");
        }

    });

});

// Reveal Animation
const revealElements = document.querySelectorAll(
".hero,.about,.skills,.projects,.contact,.skill-card,.project-card"
);

function reveal(){

    revealElements.forEach(el=>{

        const top = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if(top < windowHeight - 100){
            el.classList.add("visible");
        }

    });

}

window.addEventListener("scroll", reveal);
reveal();

// Contact Form
const form = document.querySelector("form");

form.addEventListener("submit",(e)=>{

    e.preventDefault();

    alert("✅ Thank you! Your message has been received.");

    form.reset();

});

// Hero Typing Animation
const roles = [
    "Frontend Developer",
    "Web Designer",
    "JavaScript Developer",
    "UI Designer"
];

const roleElement = document.querySelector(".hero h2");

let roleIndex = 0;

setInterval(()=>{

    roleIndex++;

    if(roleIndex >= roles.length){
        roleIndex = 0;
    }

    roleElement.textContent = roles[roleIndex];

},2500);

// Skill Card Hover Effect
document.querySelectorAll(".skill-card").forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.background =
        `radial-gradient(circle at ${x}px ${y}px,#38bdf8,#1e293b)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.background="#1e293b";

    });

});

// Footer Year
const footer = document.querySelector("footer p");

footer.innerHTML =
`© ${new Date().getFullYear()} All Rights Reserved.`;

// Page Loader
window.addEventListener("load",()=>{

    document.body.style.opacity="1";

});

// Initial Style
document.body.style.opacity="0";
document.body.style.transition="opacity .6s";
