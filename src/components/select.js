const select = function () {
  const selectHeader = document.querySelectorAll('.select__header');
  const selectItem = document.querySelectorAll('.select__item');
  const select = document.querySelector('.select');
  const body = document.querySelector('body');
  const current = document.querySelector('.select__current');

  selectHeader.forEach(item => {
    item.addEventListener('click', function (e) {
      select.classList.toggle('is-active');
    });
    body.addEventListener('click', e => {
      if (e.target.parentElement !== item) {
        select.classList.remove('is-active');
      }
    });
  });

  selectItem.forEach(item => {
    item.addEventListener('click', function () {
      const text = this.innerText;
      const currentText = select.querySelector('.select__current');
      currentText.innerText = text;
      select.classList.remove('is-active');
    });
  });
};

select();
