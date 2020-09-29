const content = document.getElementById('content');

const container = document.createElement('div');
container.className = 'container';


function headerSetup() {

  const header = document.createElement('header');

  const headerNav = document.createElement('nav');
  headerNav.className = 'header-nav';

  const navBrand = document.createElement('div');
  navBrand.className = 'nav-brand';

  const nameLogo = document.createElement('img');
  nameLogo.setAttribute('src', './img/name-logo.png');

  const menuIcons = document.createElement('div');
  menuIcons.className = 'menu-icons';

  const menuIconsOpen = menuIcons.cloneNode(true);
  menuIconsOpen.className += ' open';

  const menuIconsClose = menuIcons.cloneNode(true);
  menuIconsClose.className += ' close';

  const openIcon = document.createElement('i');
  openIcon.className = 'icon ion-md-menu';

  const closeIcon = document.createElement('i');
  closeIcon.className = 'icon ion-md-close';

  const tabList = document.createElement('ul');
  tabList.className = 'tab-list';

  const tabItem = document.createElement('li');
  tabItem.className = 'tab-item';

  const homeTabItem = tabItem.cloneNode(true);
  const menuTabItem = tabItem.cloneNode(true);
  const hoursTabItem = tabItem.cloneNode(true);

  const tabLink = document.createElement('a');
  tabLink.className = 'tab-link';

  const homeTabLink = tabLink.cloneNode(true);
  homeTabLink.className += ' current';
  homeTabLink.setAttribute('href', '#');
  homeTabLink.setAttribute('data-tab-target', 'home');
  homeTabLink.textContent = 'Home';

  const menuTabLink = tabLink.cloneNode(true);
  menuTabLink.setAttribute('href', '#');
  menuTabLink.setAttribute('data-tab-target', 'menu');
  menuTabLink.textContent = "Menu";

  const hoursTabLink = tabLink.cloneNode(true);
  hoursTabLink.setAttribute('href', '#');
  hoursTabLink.setAttribute('data-tab-target', 'hours');
  hoursTabLink.textContent = "Hours";

  content.appendChild(header);

  header.appendChild(container);
  container.appendChild(headerNav);
  
  headerNav.appendChild(navBrand);
  navBrand.appendChild(nameLogo);
  
  headerNav.appendChild(menuIconsOpen);
  menuIconsOpen.appendChild(openIcon);

  headerNav.appendChild(tabList);
  tabList.appendChild(menuIconsClose);
  menuIconsClose.appendChild(closeIcon);
  tabList.appendChild(homeTabItem);
  homeTabItem.appendChild(homeTabLink);
  tabList.appendChild(menuTabItem);
  menuTabItem.appendChild(menuTabLink);
  tabList.appendChild(hoursTabItem);
  hoursTabItem.appendChild(hoursTabLink);
}

function heroSetup() {
  const heroContainer = document.createElement('section');
  heroContainer.className = 'hero container';
  content.appendChild(heroContainer);
}

function footerSetup() {
  const footer = document.createElement('footer');
  const footerContainer = (container.cloneNode(false));

  const footerNav = document.createElement('nav');
  footerNav.className = 'footer-nav';

  const reservationBtn = document.createElement('button');
  reservationBtn.className = 'reservation-btn';
  reservationBtn.textContent = 'Make a Reservation';

  const ul = document.createElement('ul');
  const socialItem = document.createElement('li');

  const socialLink = document.createElement('a');
  socialLink.setAttribute('href', '#');
  socialLink.className = 'social-link';

  const instagramIcon = document.createElement('img');
  instagramIcon.setAttribute('src', './img/instagram.svg');

  const facebookIcon = document.createElement('img');
  facebookIcon.setAttribute('src', './img/facebook.svg');

  const twitterIcon = document.createElement('img');
  twitterIcon.setAttribute('src', './img/twitter.svg');

  content.appendChild(footer);
  footer.appendChild(footerContainer);
  footerContainer.appendChild(footerNav);
  footerNav.appendChild(reservationBtn);
  footerNav.appendChild(ul);

  ul.appendChild(socialItem).appendChild(socialLink.cloneNode()).appendChild(instagramIcon);
  ul.appendChild(socialItem).appendChild(socialLink.cloneNode()).appendChild(facebookIcon);
  ul.appendChild(socialItem).appendChild(socialLink.cloneNode()).appendChild(twitterIcon);
}

export {
  headerSetup,
  heroSetup,
  footerSetup,
};