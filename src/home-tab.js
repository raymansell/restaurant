function homeTab(section) {
  const home = document.createElement('div');
  home.id = 'home';
  home.className = 'active';
  home.setAttribute('data-tab-content', '');
  home.innerHTML = `
  <p>We hope this letter finds you well.</p>
  <p><span class="accent">The Kitchen</span> is a cocktail parlor located at</p>
  <span class="accent">55 Irving Place, NYC.</span>
  <img src="./img/stamp.png" class="stamp" alt="">
  `;
  section.appendChild(home);
}

export {homeTab};