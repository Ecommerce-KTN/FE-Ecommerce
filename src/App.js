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
    <div className="">
      <div>
        <h1>Manager</h1>
        <Link to="/Manager">
          <Button variant="contained">Manager</Button>
        </Link>
      </div>
      <Header/>
      
      <div className="mx-auto w-10/12">
          <EmblaCarousel />
          <Category />
          <div className="h-[500px] w-full">
            <Product/>
          <div/> 
        </div>
      </div>
    </div >
  );
}

export default App;
