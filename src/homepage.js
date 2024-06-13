import MacaronImage from '../imgs/macarons.jpg'



function loadHomePage(domParent) {  
    domParent.appendChild(loadHomeImage())
    domParent.appendChild(loadHomeHeadline())
    domParent.appendChild(loadHomeDescription())
}

function loadHomeImage() {
    const homeImage = document.createElement("img");
    homeImage.src = MacaronImage;
    homeImage.width = '300';  
    return homeImage
}

function loadHomeHeadline() {
    const homeHeadline = document.createElement("div");
    homeHeadline.textContent = "This is my headline"
    homeHeadline.style.fontSize = "28px"
    return homeHeadline
}

function loadHomeDescription() {
    const homeDescription = document.createElement("div");
    homeDescription.textContent = "This is the best restaurant in the world"
    homeDescription.style.fontSize = "18px"
    return homeDescription
}

export {loadHomePage};