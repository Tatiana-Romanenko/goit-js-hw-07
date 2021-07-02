const navEl = document.querySelectorAll('li.item');
console.log('В списке', navEl.length, 'категории.');

const allCategoriesEl = document.querySelectorAll('li.item');

allCategoriesEl.forEach(elem => {
  console.log('Категория:', elem.firstElementChild.textContent);
  console.log('Количество элементов:', elem.lastElementChild.children.length);
});
