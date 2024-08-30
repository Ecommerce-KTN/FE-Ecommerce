import { Link } from 'react-router-dom';
import './App.css';
import Banner from './components/app/Banner';
import Category from './components/app/Category';
import Product from './components/app/Product';
import { Button } from '@mui/material';

function App() {
  return (
    <div>
        <div>
          <h1>Manager</h1>
          <Link to="/Manager">
            <Button variant="contained">Manager</Button>
          </Link>
        </div>
        <Banner />
        <Category />
        <Product />
    </div>
  );
}

export default App;
