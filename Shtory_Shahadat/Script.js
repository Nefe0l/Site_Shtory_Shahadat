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



//* Background_Style_Anime *//
const container = document.querySelector(".Square");
for (var i = 1; i <= 10; i++) {
  const hearts = document.createElement("div");
  hearts.classList.add("Square");
  container.appendChild(hearts);
}
