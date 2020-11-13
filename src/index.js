import { queries } from './queries';
import './assets/style.scss';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

// require('font-awesome-webpack');

queries.initialSetUp();
queries.addListenerToDisplayMenus();

export { queries };