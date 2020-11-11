import { dropDown } from './dropdown';
import { mobileMenu } from './mobileMenu';
import { slider } from './slider';

const queries = (() => {
  const { body } = document;
  const ul = () => document.getElementsByTagName('ul');
  const container = () => document.getElementById('container');

  const display = (e) => {
    if (ul()[0]) {
      ul()[0].remove();
    }

    if (e.target.classList.contains('btn-info')) {
      body.appendChild(dropDown.displayDropMenu());
    } else if (e.target.classList.contains('btn-danger')) {
      body.appendChild(mobileMenu.displayMobileMenu());
    } else if (e.target.classList.contains('btn-warning')) {
      body.appendChild(slider.displaySlider());
    }
  };

  const initialSetUp = () => {
    const html = `
    <div id="container" class="col-12 col-md-3 bg-light vh-100 d-flex flex-column justify-content-around">
      <div class="btn btn-info" id="menu-btn">Menu</div>
      <div class="btn btn-danger" id="mobile-menu-btn">Mobile Menu</div>
      <div class="btn btn-warning" id="slider-btn">Slider</div>
    </div>
    `;

    body.innerHTML += html;
  };

  const addListenerToDisplayMenus = () => {
    console.log(container());
    container().addEventListener('click', (e) => { display(e); });
  };

  return {
    initialSetUp,
    display,
    addListenerToDisplayMenus,
  };
})();

export { queries };