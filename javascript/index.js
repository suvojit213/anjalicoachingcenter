const sidenav = document.querySelector('.sidenav');
const hideBtn = document.querySelector('.sidenav-hide-btn');

hideBtn.addEventListener('click', () => {
  sidenav.classList.toggle('hidden');
});
