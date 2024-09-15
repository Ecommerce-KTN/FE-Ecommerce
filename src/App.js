import { Link } from 'react-router-dom';
import './App.css';
import EmblaCarousel from './components/app/Banner';
import Category from './components/app/Category';
import Product from './components/app/Product';
import { Button } from '@mui/material';
import Header from './components/app/Header';
import Footer from './components/app/Footer';

function App () {
  return (
    <div className="">
      <div>
        <h1>Manager</h1>
        <Link to="/Manager">
          <Button variant="contained">Manager</Button>
        </Link>
      </div>
      <div className="border-b border-gray-300"><Header /></div>

      <div className="mx-auto w-8/12">
        <EmblaCarousel />
        <Category />
        <Product />
        <Footer />
      </div>
    </div >
  );
}

export default App;
