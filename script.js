// =========================
// TYPING ANIMATION
// =========================

const textArray = [
    "Aspiring Web Developer 🚀",
    "HTML • CSS • JavaScript 💻",
    "Building Creative Websites ✨",
    "Future Full Stack Developer 🌍"
];

let typingElement =
document.getElementById("typing");

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect(){

    if(!typingElement) return;

    let currentText =
    textArray[textIndex];

    if(isDeleting){

        typingElement.innerHTML =
        currentText.substring(
            0,
            charIndex--
        );
    }
    else{

        typingElement.innerHTML =
        currentText.substring(
            0,
            charIndex++
        );
    }

    let speed =
    isDeleting ? 50 : 100;

    if(
        !isDeleting &&
        charIndex ===
        currentText.length + 1
    ){

        isDeleting = true;
        speed = 1500;
    }

    else if(
        isDeleting &&
        charIndex === 0
    ){

        isDeleting = false;

        textIndex++;

        if(
            textIndex >=
            textArray.length
        ){

            textIndex = 0;
        }
    }

    setTimeout(
        typeEffect,
        speed
    );
}

typeEffect();


// =========================
// SCROLL FADE ANIMATION
// =========================

const observer =
new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.style.opacity =
            "1";

            entry.target.style.transform =
            "translateY(0px)";
        }
    });

});

document.querySelectorAll(
".section, .project-card, .card, .timeline-box, .hire-card"
).forEach(item => {

    item.style.opacity =
    "0";

    item.style.transform =
    "translateY(50px)";

    item.style.transition =
    "all 1s ease";

    observer.observe(item);
});


// =========================
// CONTACT SUCCESS MESSAGE
// =========================

const form =
document.querySelector("form");

if(form){

    form.addEventListener(
    "submit",
    function(){

        setTimeout(() => {

            alert(
            "Message Sent Successfully 🚀"
            );

        }, 500);
    });
}


// =========================
// BUTTON GLOW EFFECT
// =========================

document.querySelectorAll(
"button"
).forEach(btn => {

    btn.addEventListener(
    "mouseenter",
    function(){

        btn.style.boxShadow =
        "0 0 40px #ff00ff";
    });

    btn.addEventListener(
    "mouseleave",
    function(){

        btn.style.boxShadow =
        "0 0 20px rgba(255,0,255,.4)";
    });

});


// =========================
// CURSOR GLOW EFFECT
// =========================

const cursor =
document.createElement("div");

cursor.style.width =
"20px";

cursor.style.height =
"20px";

cursor.style.position =
"fixed";

cursor.style.borderRadius =
"50%";

cursor.style.background =
"rgba(255,0,255,.5)";

cursor.style.pointerEvents =
"none";

cursor.style.transform =
"translate(-50%,-50%)";

cursor.style.filter =
"blur(8px)";

cursor.style.zIndex =
"9999";

document.body.appendChild(
cursor
);

document.addEventListener(
"mousemove",
function(e){

    cursor.style.left =
    e.clientX + "px";

    cursor.style.top =
    e.clientY + "px";
});


// =========================
// NAVBAR GLOW ON SCROLL
// =========================

window.addEventListener(
"scroll",
function(){

    let navbar =
    document.querySelector(
    ".navbar"
    );

    if(
        navbar &&
        window.scrollY > 50
    ){

        navbar.style.boxShadow =
        "0 0 20px #ff00ff";
    }
    else if(navbar){

        navbar.style.boxShadow =
        "none";
    }
});