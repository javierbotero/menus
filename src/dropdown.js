const dropDown = (() => {
  const createMenu = () => {
    const menuHtml = document.createElement('ul');
    const container = document.createElement('div');
    menuHtml.classList = 'col-7 col-md-9 float-right min-vh-100';
    ['Music', 'Videos', 'Movies', 'Artists', 'Friends'].forEach((category) => {
      const li = document.createElement('li');
      const div = document.createElement('div');
      div.textContent = category;
      li.appendChild(div);
      container.appendChild(li);
    });
    menuHtml.appendChild(container);
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