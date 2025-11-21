// ======== Mobile Menu Toggle ========
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    navbar.classList.toggle("active");
    menuIcon.classList.toggle("bx-x");
};

// ======== Highlight Navbar on Scroll ========
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove("active");
                document.querySelector("header nav a[href*=" + id + "]")
                    .classList.add("active");
            });
        }
    });
};

// ======== Typing Effect ========
const text = [
    "Akmaludin Yahya",
    "21 Tahun",
    "Lahir 24 April 2004",
    "Mahasiswa Universitas Komputama"
];

let idx = 0;
let charIdx = 0;
let currentText = "";
let letter = "";
const typedText = document.getElementById("typing");

(function type() {
    if (idx === text.length) idx = 0;

    currentText = text[idx];
    letter = currentText.slice(0, ++charIdx);

    typedText.textContent = letter;

    if (letter.length === currentText.length) {
        idx++;
        charIdx = 0;
        setTimeout(type, 1200);
    } else {
        setTimeout(type, 100);
    }
})();

// ======== Smooth Scroll ========
document.querySelectorAll("nav a").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({ behavior: "smooth" });
    });
});
