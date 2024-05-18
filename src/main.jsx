import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductManagerLayout from './components/ProductManagerLayout';
import PageProduct from './pages/products/PageProduct';
import PageUser from './pages/users/PageUser';
import PageCategory from './pages/Category/PageCategory';

ReactDOM.createRoot(document.getElementById('root')).render(<PageUser/>);
