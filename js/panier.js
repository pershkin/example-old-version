const sections = document.querySelectorAll('[data-section]')
const btns = document.querySelectorAll('[data-btn]')

btns.forEach(btn => {
  btn.addEventListener('click', openSection)
})


function openSection(event) {
  const dataValue = event.target.getAttribute('data-btn')
  event.target.closest('[data-section]').classList.add('p-hide')
  sections.forEach(block => {
    if (dataValue === block.getAttribute('data-section')) {
      block.classList.remove('p-hide')
    }
  })
  
}