const burger = document.querySelector('#burger')
const menu = document.querySelector('#nav')


burger.addEventListener('click', () => {
  menu.classList.toggle('show-flex')
})

const searchIcon = document.querySelector('#search-icon')
const searchInput = document.querySelector('#search-input')

searchIcon.addEventListener('click', () => {
  searchInput.classList.add('p-show')
  searchInput.focus()
})
  
searchInput.addEventListener('blur', () => {
  searchInput.value=""
  searchInput.classList.remove('p-show')
})