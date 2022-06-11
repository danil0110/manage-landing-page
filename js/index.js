const btnHamburger = document.querySelector('#menu-btn');
const menu = document.querySelector('#menu');

btnHamburger.addEventListener('click', () => {
  btnHamburger.classList.toggle('open');
  menu.classList.toggle('flex');
  menu.classList.toggle('hidden');
});
