import appetizers from './data/appetizers.yaml';
import mains from './data/mains.yaml';
import desserts from './data/desserts.yaml';


function loadMenuPage(domParent) {
    console.log(appetizers)
    const startersDiv = document.createElement("div")
    startersDiv.classList.add("menu-section")
    const startersSectionTitle = document.createElement("div")
    startersSectionTitle.textContent = "Starters"
    startersSectionTitle.classList.add("menu-section-title")
    startersDiv.appendChild(startersSectionTitle)
    for (const app in appetizers.appetizers) {
        const app_dict = appetizers.appetizers[app]
        generateMenuItem(app_dict.name, app_dict.description, app_dict.price, startersDiv)
    }

    const mainsDiv = document.createElement("div")
    mainsDiv.classList.add("menu-section")
    const mainsSectionTitle = document.createElement("div")
    mainsSectionTitle.textContent = "Mains"
    mainsSectionTitle.classList.add("menu-section-title")
    mainsDiv.appendChild(mainsSectionTitle)
    for (const main in mains.mains) {
        const main_dict = mains.mains[main]
        generateMenuItem(main_dict.name, main_dict.description, main_dict.price, mainsDiv)
    }

    const dessertsDiv = document.createElement("div")
    dessertsDiv.classList.add("menu-section")
    const dessertsSectionTitle = document.createElement("div")
    dessertsSectionTitle.textContent = "Desserts"
    dessertsSectionTitle.classList.add("menu-section-title")
    dessertsDiv.appendChild(dessertsSectionTitle)
    for (const dessert in desserts.desserts) {
        const dessert_dict = desserts.desserts[dessert]
        generateMenuItem(dessert_dict.name, dessert_dict.description, dessert_dict.price, dessertsDiv)
    }

    domParent.appendChild(startersDiv)
    domParent.appendChild(mainsDiv)
    domParent.appendChild(dessertsDiv)
}


function generateMenuItem(name, description, price, domParent) {
    const itemDiv = document.createElement("div")
    itemDiv.classList.add("menu-item")

    const nameDiv = document.createElement("div")
    nameDiv.classList.add("item-title")
    nameDiv.textContent = name

    const descriptionDiv = document.createElement("div")
    descriptionDiv.classList.add("item-description")
    descriptionDiv.textContent = description

    const priceDiv = document.createElement("div")
    priceDiv.classList.add("item-price")
    priceDiv.textContent = price

    itemDiv.appendChild(nameDiv)
    itemDiv.appendChild(descriptionDiv)
    itemDiv.appendChild(priceDiv)

    domParent.appendChild(itemDiv)

}


export {loadMenuPage}
