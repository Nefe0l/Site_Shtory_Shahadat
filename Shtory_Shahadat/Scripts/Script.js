//* Function Dark/Light Mode *//
function addDarkClassToHTML() {
    try {
        if (localStorage.getItem("theme") === "dark") {
            document.querySelector("html").classList.add("dark");
        }
        $("html").addClass("dark");

    } catch (err) { }
}
document.querySelector('.Header__Span').addEventListener('click', (event) => {
    event.preventDefault();
    if (localStorage.getItem('theme') === 'dark') {
        localStorage.removeItem('theme');
    }
    else {
        localStorage.setItem('theme', 'dark')
    }
    addDarkClassToHTML()
});

function addDarkClassToHTML() {
    try {
        if (localStorage.getItem('theme') === 'dark') {
            document.querySelector('html').classList.add('dark');
            document.querySelector('.Alert_Helper_h3 ').textContent = 'Что-бы сменить тему, нажмите на солнце.';
        }
        else {
            document.querySelector('html').classList.remove('dark');
            document.querySelector('.Alert_Helper_h3').textContent = ' Что-бы сменить тему, нажмите на луну.';
        }
    } catch (err) { }
}

addDarkClassToHTML();

//* Burger_Menu_Function *//
let Burger_object = document.querySelector(".Burger_object");
let Header__Span = document.querySelector(".Header__Span");
let Nav = document.querySelector("nav");
let Body = document.body

Burger_object.onclick = function () {
  Burger_object.classList.toggle("Active_Burger_object");
  Nav.classList.toggle("Active_Nav");
  Header__Span.classList.toggle("Active_Header__Span");
  Body.classList.toggle("Noscroll");
};

//* Video_Function *//
let Caret_forward_circle = document.querySelector(".caret-forward-circle");
let Close_circle  = document.querySelector(".close-circle ");
let Video = document.querySelector("video");
let Video_Container = document.querySelector(".Video_Container");
let Video_Function = document.querySelector(".Video_Function");
let Close_Circle__Container= document.querySelector(".Close-Circle__Container");


Close_circle.onclick = function () {
    Video.classList.remove("Active_Video");
    Video_Container.classList.remove("Active_Video_Container");
    Video_Function.classList.remove("Active_Video_Function");
    Caret_forward_circle.classList.remove("Active_caret-forward-circle");
    Close_circle.classList.remove("Active_Close_circle");
    Close_Circle__Container.classList.remove("Active_Close_Circle__Container");
    Body.classList.remove("Noscroll");
    Video.pause();
  };


Caret_forward_circle.onclick = function () {
    Caret_forward_circle.classList.toggle("Active_caret-forward-circle");
    Video.classList.toggle("Active_Video");
    Video_Container.classList.toggle("Active_Video_Container");
    Video_Function.classList.toggle("Active_Video_Function");
    Close_circle.classList.toggle("Active_Close_circle");
    Close_Circle__Container.classList.toggle("Active_Close_Circle__Container");
    Body.classList.toggle("Noscroll");
    Video.load()
  };

//* Background_Style_Anime *//
const container = document.querySelector(".Square");
for (var i = 1; i <= 10; i++) {
  const hearts = document.createElement("div");
  hearts.classList.add("Square");
  container.appendChild(hearts);
};

//* Scroll_Function *//
window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("Scroll_function", window.scrollY > 0);
  });


//* Pause/Video/Fix_Bug *//
body = function() {
    Video.pause();
}
Video.pause();


//* ??? *//
console.log("By: Nefeol/Nefe0l")