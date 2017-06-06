const form = document.querySelector('form')

form.addEventListener('change', foo)

function foo(event) {
  event.target.classList.add('filled')
}
