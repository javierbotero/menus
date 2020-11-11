import { dropDown } from './dropdown';

const initialSetUp = () => {
  const html = `
    <div id="menu-btn">Menu<div>
    <div id="mobile-menu-btn">Mobile Menu<div>
    <div id="slider-btn">Slider<div>
  `;

  dropDown.body.innerHTML += html;
};

initialSetUp();