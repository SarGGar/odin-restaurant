import './styles.css';

import {loadHomePage} from './homepage';
import {loadMenuPage} from './menupage';
import {loadAboutPage} from './aboutpage';

const content = document.querySelector('#content')

loadHomePage(content)


const homeTabButton = document.querySelector('#home-tab')
const menuTabButton = document.querySelector('#menu-tab')
const aboutTabButton = document.querySelector('#about-tab')


homeTabButton.addEventListener('click', switchTab)
menuTabButton.addEventListener('click', switchTab)
aboutTabButton.addEventListener('click', switchTab)

function switchTab(e) {
    content.innerHTML = '';

    switch (e.target.id) {
        case 'home-tab':
            loadHomePage(content)
            break;
        case 'menu-tab':
            loadMenuPage(content)
            break;
        case 'about-tab':
            loadAboutPage(content)
            break;
    }
}