/* ==========================================
   PARIS INFORMATION WEBSITE
   JavaScript ფუნქციები
   ========================================== */


// ================= DARK MODE =================

// ვპოულობთ ღილაკს
const themeButton = document.getElementById("themeButton");

// ვამოწმებთ, ჰქონდა თუ არა მომხმარებელს შენახული Dark Mode
const savedTheme = localStorage.getItem("parisTheme");

if (savedTheme === "dark") {
    document.body.classList.add("dark");
    themeButton.textContent = "🌙";
}


// Dark Mode-ის ჩართვა/გამორთვა
themeButton.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        themeButton.textContent = "🌙";

        // ვინახავთ არჩევანს
        localStorage.setItem("parisTheme", "dark");

    } else {

        themeButton.textContent = "☀️";

        localStorage.setItem("parisTheme", "light");
    }

});


// ================= SCROLL ANIMATION =================

// საიტის სექციებს ვპოულობთ
const sections = document.querySelectorAll(".section");

// Intersection Observer ამოწმებს,
// როდის გამოჩნდება სექცია ეკრანზე
const observer = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);


// თითოეულ სექციაზე ვრთავთ Observer-ს
sections.forEach(function (section) {

    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition = "opacity 0.8s ease, transform 0.8s ease";

    observer.observe(section);

});


// ================= CURRENT YEAR =================

// Footer-ში ავტომატურად ჩასვამს მიმდინარე წელს
const year = new Date().getFullYear();

const copyright = document.querySelector(".copyright");

if (copyright) {
    copyright.textContent = `© ${year} Paris Information`;
}