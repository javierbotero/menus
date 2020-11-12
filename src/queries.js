import { dropDown } from './dropdown';
import { mobileMenu } from './mobileMenu';
import { slider } from './slider';
import { domQueries } from './domQueries';

const queries = (() => {
  const display = (e) => {
    if (domQueries.ul()[0]) {
      domQueries.ul()[0].remove();
    }

    if (e.target.classList.contains('btn-info')) {
      domQueries.body.appendChild(dropDown.displayDropMenu());
    } else if (e.target.classList.contains('btn-danger')) {
      domQueries.body.appendChild(mobileMenu.displayMobileMenu());
    } else if (e.target.classList.contains('btn-warning')) {
      domQueries.body.appendChild(slider.displaySlider());
    }
  };

  const initialSetUp = () => {
    const html = `
    <div id="container" class="col-5 col-md-3 bg-light vh-100 d-flex flex-column justify-content-around float-left">
      <div class="btn btn-info" id="menu-btn">Menu</div>
      <div class="btn btn-danger" id="mobile-menu-btn">Mobile Menu</div>
      <div class="btn btn-warning" id="slider-btn">Slider</div>
    </div>
    `;

    domQueries.body.innerHTML += html;
  };

  const addListenerToDisplayMenus = () => {
    domQueries.container().addEventListener('click', (e) => { display(e); });
  };

  return {
    initialSetUp,
    display,
    addListenerToDisplayMenus,
  };
})();

export { queries };