function addListeners() {
  const form = document.querySelector('form')
  form && form.addEventListener('change', foo)

  const bisectForm = document.querySelector('.bisect-form')
  bisectForm && bisectForm.addEventListener('change', bar)

  const megaForm = document.querySelector('.mega-form')
  megaForm && megaForm.addEventListener('change', baz)

  const input = document.querySelector('input')
  input && input.addEventListener('input', hoo)
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

function hoo(event) {
  event.target.classList.add('flash')
  setTimeout(function() {
    event.target.classList.remove('flash')
  }, 100)
}
<<<<<<< HEAD

addListeners()
||||||| parent of 4c11f9e... select now also gets a border
=======

const select = document.querySelector('select')

select && select.addEventListener('change', nar)

function nar(event) {
  event.target.classList.add('flash')
  setTimeout(function() {
    event.target.classList.remove('flash')
  })
}
>>>>>>> 4c11f9e... select now also gets a border
