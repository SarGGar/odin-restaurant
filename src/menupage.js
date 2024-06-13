


function loadMenuPage(domParent) {
    const startersDiv = document.createElement("div")
    startersDiv.textContent = "Starters"

    const mainsDiv = document.createElement("div")
    mainsDiv.textContent = "Mains"

    const dessertsDiv = document.createElement("div")
    dessertsDiv.textContent = "Desserts"

    domParent.appendChild(startersDiv)
    domParent.appendChild(mainsDiv)
    domParent.appendChild(dessertsDiv)
}


export {loadMenuPage}
