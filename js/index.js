document.querySelectorAll('.digits, .operation')
    .forEach( el => el.addEventListener('click', digitOperClick));

function digitOperClick(e) {
    const target = e.target;
    const display = document.querySelector('.display');
    display.value += target.innerText;
}
document.querySelector('.equal')
    .addEventListener('click', equal);
function equal() {
    const display = document.querySelector('.display')
    display.value = eval(display.value);
}

document.querySelector('.decimal')
    .addEventListener('click', decimal);

function decimal(e) {
    const target = e.target;
    const display = document.querySelector('.display');
    display.value += '.';
}
document.querySelector('.clear')
    .addEventListener('click', clear)

function clear(e){
    const target = e.target;
    const display = document.querySelector('.display');
    display.value = null;
}
document.querySelector('.backspace')
  .addEventListener('click', backspace);
function backspace(e){
  const target = e.target;
  const display = document.querySelector('.display');
  display.value = display.value.substring(0, display.value.length - 1);
} 
document.querySelector('.chageSign')
  .addEventListener('click', chageSign );
function chageSign(e){ 
    const target = e.target;
    const display = document.querySelector('.display');
    display.value = -display.value;
}
document.querySelector('.procentage')
  .addEventListener('click', procentage );
function procentage(e){
  const target = e.target;
  const display = document.querySelector('.display');
  display.value = display.value / 100 + "%" ;
}