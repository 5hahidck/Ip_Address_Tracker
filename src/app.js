// Main JavaScript functionality for the IP Address Tracker app

const form = document.getElementById('search-form');
const ipEl = document.getElementById('ip');
const locationEl = document.getElementById('location');
const timezoneEl = document.getElementById('timezone');
const ispEl = document.getElementById('isp');

form.addEventListener('submit', event => {
  event.preventDefault();
  const query = document.getElementById('ip-input').value.trim();
  if (!query) return;

  // TODO: Add IP lookup API request here.
  console.log('Searching for:', query);
});
