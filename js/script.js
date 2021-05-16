const burger = document.querySelector('#burger')
const menu = document.querySelector('#nav')
const body = document.querySelector('body')

const cookies = document.createElement('div')
const cookiesBtnOK = document.createElement('button')
const cookiesBtnCancel = document.createElement('button')

cookiesBtnOK.innerHTML = 'Accepter'
cookiesBtnOK.className = 'btn-cookies'

cookiesBtnCancel.innerHTML = 'Refuser'
cookiesBtnCancel.className = 'btn-cookies'

cookies.className = 'block-cookies p-show'
cookies.innerHTML = `<h3>Ce site web utilise des cookies</h3><p>
Les cookies nous permettent de personnaliser le contenu et les annonces, d'offrir des fonctionnalités relatives aux médias sociaux et d'analyser notre trafic. Nous partageons également des informations sur l'utilisation de notre site avec nos partenaires de médias sociaux, de publicité et d'analyse, qui peuvent combiner celles-ci avec d'autres informations que vous leur avez fournies ou qu'ils ont collectées lors de votre utilisation de leurs services</p>`
cookies.insertAdjacentElement('beforeend', cookiesBtnCancel)
cookies.insertAdjacentElement('beforeend', cookiesBtnOK)


setTimeout(() => body.insertAdjacentElement('beforeend', cookies), 1000)

cookiesBtnOK.onclick = () => {
  cookies.classList.remove('p-show')
}

cookiesBtnCancel.onclick = () => {
  cookies.classList.remove('p-show')
}

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
