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
            homeTabButton.style.backgroundColor = '#fafafa'
            menuTabButton.style.backgroundColor = '#c4c1e0'
            aboutTabButton.style.backgroundColor = '#c4c1e0'
            loadHomePage(content)
            break;
        case 'menu-tab':
            homeTabButton.style.backgroundColor = '#c4c1e0'
            menuTabButton.style.backgroundColor = '#fafafa'
            aboutTabButton.style.backgroundColor = '#c4c1e0'
            loadMenuPage(content)
            break;
        case 'about-tab':
            homeTabButton.style.backgroundColor = '#c4c1e0'
            menuTabButton.style.backgroundColor = '#c4c1e0'
            aboutTabButton.style.backgroundColor = '#fafafa'
            loadAboutPage(content)
            break;
    }
}