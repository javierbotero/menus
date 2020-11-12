const dropDown = (() => {
  const createMenu = () => {
    const menuHtml = document.createElement('ul');
    menuHtml.classList = 'col-7 col-md-9 float-right min-vh-100';
    ['Music', 'Videos', 'Movies', 'Artists', 'Friends'].forEach((category) => {
      const li = document.createElement('li');
      li.textContent = category;
      menuHtml.appendChild(li);
    });
    return menuHtml;
  };
  const displayDropMenu = () => {
    const arr = createMenu();
    for (let i = 0; i < arr.children.length; i += 1) {
      arr.children[i].classList = 'bg-info p-4 text-white list-inline-item';
    }

    return arr;
  };

  return {
    createMenu,
    displayDropMenu,
  };
})();

export { dropDown };