////////////////////////////////////////////////
// MOBILE RESPONSIVENESS
///////////////////////////////////////////////
const navToggle = document.querySelector(".nav-toggle")
const navLinks = document.querySelectorAll(".nav-menu a")

navLinks.forEach(function(link) {
    link.addEventListener("click", function (){
        navToggle.checked = false
    })
})

//////////////////////////////////////////////
// CONTACT FORM
/////////////////////////////////////////////
const contactForm = document.querySelector(".contact-form")
contactForm.addEventListener("submit", function(event){
    event.preventDefault()

    if (!contactForm.checkValidity()) {
        contactForm.reportValidity()
        return
    }

    const existingMessage = document.querySelector(".success-message")

    if (existingMessage) {
    existingMessage.remove()
}

    const userName = document.querySelector("#name").value.trim()
    const successMessage = document.createElement("p")
    successMessage.textContent = `Thank you, ${userName}! Your message has been received`
    successMessage.classList.add("success-message")
    successMessage.setAttribute("role","status")
    contactForm.insertAdjacentElement("beforebegin", successMessage)

    contactForm.reset()
})
