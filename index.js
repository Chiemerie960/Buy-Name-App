var input = document.querySelector('.input');
var display = document.querySelector('.name-wrap .name');
var button = document.querySelector('button');
var numOfLetters = document.querySelector('.summary .amount');
var comment = document.querySelector('h4');
input.addEventListener('input', () => {
  var name = input.value;
  display.innerHTML = name;
  var total = name.replace(/ /g, "");
  numOfLetters.innerHTML = total.length * 5;
})
button.addEventListener('click', () => {
  if (input.value === '') {
    comment.innerHTML = 'Enter Your Custom Letter'
  }
  else {
    comment.innerHTML = 'Nice One 😎'
  }
  input.value = "";
})