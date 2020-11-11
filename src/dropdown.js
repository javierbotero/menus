const dropDown = (() => {
  const { body } = document;
  const ul = () => document.getElementsByTagName('ul');
  const menuHtml = `
  <ul id="menu">
    <li>Music</li>
    <li>Videos</li>
    <li>Movies</li>
    <li>Artists</li>
    <li>Friends</li>
    <li>Me</li>
    <li>FAQ</li>
    <li>Contact us</li>
  </ul>
  `;

  const displayMenu = () => {
    body.appendChild(menuHtml);
  };

  const removeMenu = () => {
    ul.remove();
  }

  return {
    displayMenu,
    removeMenu,
    body,
  };
})();

export { dropDown }