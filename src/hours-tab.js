function hoursTab(section) {
  const hours = document.createElement('div');
  hours.className = 'active';
  hours.id = 'hours';
  hours.setAttribute('data-tab-content', '');
  hours.innerHTML = `
  <div class="hours-info">
    <h3>Hours</h3>
    <p>Wednesday - 6pm - late</p>
    <p>Thursday - Lunch 12pm-2pm, Dinner 6pm - late</p>
    <p>Lunch 12pm-2pm, Dinner 6pm - late</p>
    <p>Lunch 12pm-2pm, Dinner 6pm - late</p>
    <p>Sunday -> Monday - Closed</p>
  </div>
  <div class="contact-info">
    <h3>Contact</h3>
    <p>02 8937 2530 (unattended Sunday - Wednesday afternoon)</p>
    <p>362 Oxford St, Paddington, NSW</p>
    <p>hello@saintpeter.com.au (unattended Sunday - Wednesday afternoon)</p>
  </div>`;
  section.appendChild(hours);
}

export {hoursTab};