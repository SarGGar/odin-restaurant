function loadAboutPage(domParent) {
    const contactDiv = document.createElement("div")
    contactDiv.textContent = "Sarah G."

    domParent.appendChild(contactDiv)
}


export {loadAboutPage}