const form = document.querySelector(".quote-form");

if (form) {

form.addEventListener("submit", function(e){

e.preventDefault();

const name = form.querySelector('input[type="text"]').value;
const mobile = form.querySelector('input[type="tel"]').value;
const from = form.querySelectorAll('input[type="text"]')[1].value;
const to = form.querySelectorAll('input[type="text"]')[2].value;
const date = form.querySelector('input[type="date"]').value;
const service = form.querySelector("select").value;
const message = form.querySelector("textarea").value;

const text =
`*New Customer Enquiry*%0A%0A`+
` Name : ${name}%0A`+
` Mobile : ${mobile}%0A`+
` From : ${from}%0A`+
` To : ${to}%0A`+
` Date : ${date}%0A`+
` Service : ${service}%0A`+
` Message : ${message}`;

window.open(
`https://wa.me/917014049609?text=${text}`,
"_blank"
);

});

}

const galleryImages = document.querySelectorAll(".gallery-box img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

galleryImages.forEach((img) => {
    img.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
    });
});

lightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
});
// ================= MOBILE MENU =================

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});