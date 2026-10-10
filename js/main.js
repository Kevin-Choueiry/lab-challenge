// main.js – application entry point (loaded with type="module")
// TODO: import from './events-api.js' and './render.js'
// TODO: load the events once, fill the <select>, render all cards
// TODO: on 'change' of the <select>, filter the events by category
//       ('all' shows everything) and update the "n events" counter
import { loadEvents } from './events-api.js';
import { renderEvents, fillCategories } from './render.js';

const grid = document.getElementById('card-grid');
const status = document.getElementById('status');
const count = document.getElementById('count');
const select = document.getElementById('category');

function show(events, category) {
  const visible = category === 'all'? events: events.filter((e) => e.category === category);
  renderEvents(visible, grid);
  count.textContent = `${visible.length} event${visible.length === 1 ? '' : 's'}`;
}

async function init() {
  try {
    const events = await loadEvents();
    fillCategories(events, select);
    show(events, 'all');
    status.textContent = '';
    select.addEventListener('change', () => show(events, select.value));
  } catch (error) {
    status.textContent = `Could not load events: ${error.message}`;
    status.classList.add('status-error');
  }
}

init();
