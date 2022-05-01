'use strict';

const rubInput = document.getElementById('rub');
const usdInput = document.getElementById('usd');

rubInput.addEventListener('input', async () => {
  try {
    const value = +rubInput.value;
    if (isNaN(value) || value < 0) {
      throw new Error('wrong value');
    }
    const response = await fetch('data.json');
    const data = await response.json();
    const { usd } = data.current;

    usdInput.value = (value / +usd).toFixed(2);
  } catch (err) {
    usdInput.value = 'Что то пошло не так';
  }
});
