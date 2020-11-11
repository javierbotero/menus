import { dropDown } from './dropdown';

const mobileMenu = (() => {
  const displayMobileMenu = () => {
    const arr = dropDown.createMenu();
    for (let i = 0; i < arr.children.length; i += 1) {
      arr.children[i].classList = 'bg-danger p-3';
    }

    return arr;
  };

  return {
    displayMobileMenu,
  };
})();

export { mobileMenu };