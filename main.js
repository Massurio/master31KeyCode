const action = document.querySelector('.action');

window.addEventListener('keydown', (event) => {
  action.innerHTML = `
  <h1>${event.keyCode}</h1>
  <div class="key">
  ${event.key === ' ' ? 'Space' : event.key}
  <small>event.key</small>
  </div>
  <div class="key">
  ${event.code}
  <small>event.Code</small>
  </div>
  <div class="key">
  ${event.keyCode}
  <small>event.which</small>
  </div>
  `;
});
