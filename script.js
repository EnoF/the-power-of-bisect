function addListeners() {
  const form = document.querySelector('form')
  form && form.addEventListener('change', foo)

  const bisectForm = document.querySelector('.bisect-form')
  bisectForm && bisectForm.addEventListener('change', bar)

  const megaForm = document.querySelector('.mega-form')
  megaForm && megaForm.addEventListener('change', baz)
} 

function foo(event) {
  event.target.classList.add('filled')
}

function bar(event) {
  event.target.classList.add('filled')
}

function baz(event) {
  event.target.classList.add('filled')
}

addListeners()
