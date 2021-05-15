const btnsOpen = document.querySelectorAll('[data-btn]')
const blogBlocks = document.querySelectorAll('[data-blog]')

btnsOpen.forEach(btn => {
  btn.addEventListener('click', openArticle)
})

function openArticle(event) {
  const dataBlog = event.target.getAttribute('data-blog')
  blogBlocks.forEach(block => {
    if (block.getAttribute('data-blog') === dataBlog) {
      block.classList.toggle('p-hide')
    }
  })
}