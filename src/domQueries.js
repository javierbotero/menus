const domQueries = (() => {
  const { body } = document;
  const ul = () => document.getElementsByTagName('ul');
  const container = () => document.getElementById('container');
  const liSlide = (n) => document.getElementById(`slide${n}`);
  const liBullet = (n) => document.getElementById(`bullet${n}`);
  const dropDown = () => document.querySelector('.drop-down');

  return {
    body,
    ul,
    container,
    liSlide,
    liBullet,
    dropDown,
  };
})();

export { domQueries };
