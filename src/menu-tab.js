function menuTab(section) {
  const menu = document.createElement('div');
  menu.className = 'active';
  menu.id = 'menu';
  menu.setAttribute('data-tab-content', '');
  menu.innerHTML = `
  <ul class="lunch-menu">
    <h3 class="menu-type-title">Lunch</h3>
    <li class="plate">
      <h5 class="plate-title">Moonlight Kiss Rock Oyster 5</h5>
      <p class="plate-description">Steven Feletti/ Bateman's Bay NSW</p>
    </li>
    <li class="plate">
      <h5 class="plate-title">Tathra Rock Oyster 5.5</h5>
      <p class="plate-description">Gary Rodley/ Nelson's Lagoon Tathra NSW</p>
    </li>
    <li class="plate">
      <h5 class="plate-title">Organic Wapengo Rock Oyster 6</h5>
      <p class="plate-description">Shane Buckley/ Wapengo Lake NSW</p>
    </li>
    <li class="plate">
      <h5 class="plate-title">Live Purple Sea Urchin 24</h5>
      <p class="plate-description">Craig Shepherd/ Royal National Park NSW</p>
    </li>
    <li class="plate">
      <h5 class="plate-title">A Selection of Raw Australian Fish 26</h5>
      <p class="plate-description">Bunya Red Farm Capers & Vividus Extra Virgin Olive Oil</p>
    </li>
  </ul>
  <ul class="dinner-menu">
    <h3 class="menu-type-title">Dinner</h3>
    <li class="plate">
      <h5 class="plate-title">The Fish Charcuterie 14</h5>
      <p class="plate-description">by Fish Butchery</p>
    </li>
    <li class="plate">
      <h5 class="plate-title">Cold Smoked Bass Grouper Roe 24</h5>
      <p class="plate-description">Dried Tomatoes & Fragrant Herbs</p>
    </li>
    <li class="plate">
      <h5 class="plate-title">Pressed Coral Trout Head 24</h5>
      <p class="plate-description">Quince & Saffron Jelly</p>
    </li>
    <li class="plate">
      <h5 class="plate-title">Striped Marlin Nduja 22</h5>
      <p class="plate-description">Ulladulla Blue Mackerel on Toast</p>
    </li>
    <li class="plate">
      <h5 class="plate-title">Day Dry Aged Murray Cod 52</h5>
      <p class="plate-description">Salt & Vinegar Head, Diane Sauce</p>
    </li>
  </ul>`;
section.appendChild(menu);
}

export {menuTab};