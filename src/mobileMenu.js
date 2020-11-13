import { dropDown } from './dropdown';

const mobileMenu = (() => {
  const displayMobileMenu = () => {
    const icons = [
      'fas fa-headphones-alt',
      'fas fa-icons',
      'fas fa-compact-disc',
      'fas fa-microphone-alt',
      'fas fa-palette',
    ];
    const arr = dropDown.createMenu();
    arr.classList += ' m-0 p-0';
    arr.children[0].classList += 'vh-100 scrollable col-10 float-right m-0 p-0 d-flex flex-column';
    for (let i = 0; i < arr.children[0].children.length; i += 1) {
      arr.children[0].children[i].children[0].classList = 'category text-dark d-flex align-items-center';
      arr.children[0].children[i].classList = 'bg-warning p-3 list-inline-item d-flex scrollable-li m-0 text-white flex-grow-1 align-items-center';
      icons.forEach((classes) => {
        const subel = document.createElement('i');
        subel.classList = `${classes} subel p-4`;
        arr.children[0].children[i].appendChild(subel);
      });
    }

    const leftColumn = document.createElement('div');
    leftColumn.classList = 'col-2 float-left bg-primary vh-100 m-0 p-0 d-flex flex-column align-items-center text-light';
    icons.forEach((classes, i) => {
      const element = document.createElement('i');
      element.classList = `${classes} flex-grow-1 left-icons left-icons-${i}`;
      leftColumn.appendChild(element);
    });
    arr.appendChild(leftColumn);

    return arr;
  };

  return {
    displayMobileMenu,
  };
})();

export { mobileMenu };