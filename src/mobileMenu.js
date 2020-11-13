import { dropDown } from './dropdown';

const mobileMenu = (() => {
  const displayMobileMenu = () => {
    const arr = dropDown.createMenu();
    arr.children[0].classList += 'vh-100 scrollable';
    for (let i = 0; i < arr.children[0].children.length; i += 1) {
      arr.children[0].children[i].children[0].classList = 'category';
      arr.children[0].children[i].classList = 'bg-danger p-3 list-inline-item rounded d-flex scrollable-li m-0';
      [
        'fas fa-headphones-alt',
        'fas fa-icons',
        'fas fa-compact-disc',
        'fas fa-microphone-alt',
        'fas fa-palette',
      ].forEach((classes) => {
        const subel = document.createElement('i');
        subel.classList = `${classes} subel`;
        arr.children[0].children[i].appendChild(subel);
      });
    }

    return arr;
  };

  return {
    displayMobileMenu,
  };
})();

export { mobileMenu };