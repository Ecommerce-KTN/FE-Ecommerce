import { Link } from 'react-router-dom';
import './App.css';
import EmblaCarousel from './components/app/Banner';
import Category from './components/app/Category';
import Product from './components/app/Product';
import { Button } from '@mui/material';
import Header from './components/app/Header';

function App ()
{
  return (
    <div className="mx-auto w-10/12">
      <div>
        <h1>Manager</h1>
        <Link to="/Manager">
          <Button variant="contained">Manager</Button>
        </Link>
      </div>
      <Header />
      <EmblaCarousel />
      <Category />
      <Product />
    </div >
  );
}

export default App;
