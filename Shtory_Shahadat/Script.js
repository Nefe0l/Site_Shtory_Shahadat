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
            document.querySelector('.themetoggle span').textContent = 'dark_mode';
        }
        else {
            document.querySelector('html').classList.remove('dark');
            document.querySelector('.themetoggle span').textContent = 'wb_sunny';
        }
    } catch (err) { }
}

addDarkClassToHTML();

//* Burger_Menu_Function *//
let Burger_object = document.querySelector(".Burger_object");
let a = document.querySelector("nav");

Burger_object.onclick = function () {
  Burger_object.classList.toggle("Active");
  a.classList.toggle("Active_Nav");
};

//* Background_Style_Anime *//
const container = document.querySelector(".Square");
for (var i = 1; i <= 5; i++) {
  const hearts = document.createElement("div");
  hearts.classList.add("Square");
  container.appendChild(hearts);
}



