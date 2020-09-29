import {headerSetup, heroSetup, footerSetup} from './page-load';
import {homeTab} from './home-tab'
import {menuTab} from './menu-tab' ;
import {hoursTab} from './hours-tab';

/*Initial setup*/
headerSetup();
heroSetup();
const section = document.querySelector('.hero');

homeTab(section);
// menuTab(section);
// hoursTab(section);
footerSetup();

/*Hamburguer menu events*/
const openMenuIcon = document.querySelector('.open');
const closeMenuIcon = document.querySelector('.close');

const navListMenu = document.querySelector('.tab-list');

openMenuIcon.addEventListener('click', () => {
  navListMenu.classList.add('active');
});

closeMenuIcon.addEventListener('click', () => {
  navListMenu.classList.remove('active');
});

/*Tab menu logic*/
const tabs = document.querySelectorAll('[data-tab-target]');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const currentTabContent = document.querySelector('[data-tab-content]'); /*there's only one tab open at a time in the DOM*/
    section.removeChild(currentTabContent);
    const target = tab.dataset.tabTarget;
    switch(target) {
      case 'home':
        homeTab(section);
        break;
      case 'menu':
        menuTab(section);
        break;
      case 'hours':
        hoursTab(section);
        break;
    }
    tabs.forEach(tab => {
      tab.classList.remove('current');
    });
    tab.classList.add('current');
    const tabList = document.querySelector('.tab-list');
    tabList.classList.remove('active');
  });
});


