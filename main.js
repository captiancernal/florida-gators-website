document.addEventListener('DOMContentLoaded', () => {
  loadSchedule();
  loadStats();
  setupTabNavigation();
});

/**
 * Load schedule data dynamically
 */
function loadSchedule() {
  fetch('data/schedule.json')
    .then((response) => response.json())
    .then((schedule) => {
      const scheduleContainer = document.querySelector('#schedule');
      const table = document.createElement('table');
      table.classList.add('schedule-table');

      table.innerHTML = `
        <thead>
          <tr>
            <th>Week</th>
            <th>Date</th>
            <th>Opponent</th>
            <th>Location</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          ${schedule
            .map(
              (game) => `
          <tr>
            <td>${game.week}</td>
            <td>${game.date}</td>
            <td>${game.opponent}</td>
            <td>${game.location}</td>
            <td>${game.result}</td>
          </tr>
        `
            )
            .join('')}
        </tbody>
      `;
      scheduleContainer.appendChild(table);
    });
}

/**
 * Load stats data dynamically
 */
function loadStats() {
  fetch('data/stats.json')
    .then((response) => response.json())
    .then((stats) => {
      const statsContainer = document.querySelector('#stats');
      const table = document.createElement('table');
      table.classList.add('stats-table');

      table.innerHTML = `
        <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Yards</th>
            <th>Touchdowns</th>
          </tr>
        </thead>
        <tbody>
          ${stats
            .map(
              (player) => `
          <tr>
            <td>${player.name}</td>
            <td>${player.position}</td>
            <td>${player.yards}</td>
            <td>${player.touchdowns}</td>
          </tr>
        `
            )
            .join('')}
        </tbody>
      `;
      statsContainer.appendChild(table);
    });
}

/**
 * Set up tab navigation for different sections
 */
function setupTabNavigation() {
  const navLinks = document.querySelectorAll('nav a');
  const sections = document.querySelectorAll('main > section');

  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').replace('#', '');
      sections.forEach((section) => section.classList.add('hidden'));
      document.getElementById(targetId).classList.remove('hidden');
    });
  });
}
