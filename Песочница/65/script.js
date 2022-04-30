const btn = document.getElementById('btn-animation');
const field = document.querySelector('.field');
const box = document.querySelector('.box');

function myAnimation() {
  let pos = 0;
  let timerId = setInterval(field, 10);
  const stop = 300;

  function field() {
    if (pos === stop) {
      clearInterval(timerId);
    } else {
      pos++;
      box.style.left = pos + 'px';
      box.style.top = pos + 'px';
    }
  }
}

btn.addEventListener('click', myAnimation);
