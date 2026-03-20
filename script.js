
// ================= HAMBURGER MENU =================

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {

navMenu.classList.toggle("active");

});


// ================= PROJECT MODAL =================

const modal = document.getElementById("projectModal");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const closeBtn = document.querySelector(".close");

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach(card => {

card.addEventListener("click", () => {

let project = card.getAttribute("data-project");

if(project === "amazon"){

modalTitle.innerText = "Mini Amazon Clone";

modalDescription.innerText =
"E-commerce website UI inspired by Amazon using HTML, CSS and JavaScript.";

}

if(project === "blog"){

modalTitle.innerText = "Bridal Blog Website";

modalDescription.innerText =
"A modern responsive blog design for bridal fashion and wedding trends.";

}

if(project === "space"){

modalTitle.innerText = "Space Blog";

modalDescription.innerText =
"Educational blog platform about space and astronomy.";

}

modal.style.display = "block";

});

});

closeBtn.onclick = () => {

modal.style.display = "none";

};


// ================= CONTACT FORM VALIDATION =================

document.getElementById("contactForm").addEventListener("submit", function(e){

e.preventDefault();

let name = document.getElementById("name").value.trim();
let email = document.getElementById("email").value.trim();
let subject = document.getElementById("subject").value.trim();
let message = document.getElementById("message").value.trim();

let formMessage = document.getElementById("formMessage");

if(name === "" || email === "" || subject === "" || message === ""){

formMessage.innerHTML = "Please fill all fields.";
formMessage.style.color = "red";
return;

}

let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

if(!email.match(emailPattern)){

formMessage.innerHTML = "Please enter a valid email.";
formMessage.style.color = "red";
return;

}

formMessage.innerHTML = "Message sent successfully!";
formMessage.style.color = "green";

document.getElementById("contactForm").reset();

});