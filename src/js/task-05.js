const input = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

function onInputChange() {
  if (input.value.length === 0) {
  return nameOutput.textContent = 'незнакомец';
}
  return nameOutput.textContent = input.value;
}
input.addEventListener('input', onInputChange);