import { queries } from './queries';
import './assets/style.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

queries.initialSetUp();
queries.addListenerToDisplayMenus();

export { queries };