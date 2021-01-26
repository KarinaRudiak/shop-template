let cartCounterLabel = document.querySelector('#cart-counter');
let buttonsContainer = document.querySelector('.page-content');

let cartCounter = 0;
let cartPrice = 0;

function ClickHandler(e) {
  let target = e.target;

  if (target.classList.contains('item-actions__cart')) {
    cartCounterLabel.innerHTML = `${++cartCounter}`;
    if (cartCounter === 1) cartCounterLabel.style.display = 'block';

    const mockData = +target.parentElement.previousElementSibling.innerHTML
      .replace(/^\$(\d+)\s\D+(\d+).*$/u, '$1.$2');

    cartPrice = Math.round((cartPrice + mockData) * 100) / 100;

    let restoreHTML = target.innerHTML;

    target.innerHTML = `Added ${cartPrice.toFixed(2)} $`;
    target.disabled = true;
    buttonsContainer.removeEventListener('click', ClickHandler);

    setTimeout(() => {
      target.innerHTML = restoreHTML;
      target.disabled = false;
      buttonsContainer.addEventListener('click', ClickHandler);
    }, 2000);
  }
};

buttonsContainer.addEventListener('click', ClickHandler);

