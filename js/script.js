console.log('hi');

const burger = document.querySelector('#burger')
const menu = document.querySelector('#nav')


burger.addEventListener('click', () => {
  menu.classList.toggle('p-show')
})