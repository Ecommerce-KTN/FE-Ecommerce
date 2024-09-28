import { Link } from 'react-router-dom';
import './App.css';
import EmblaCarousel from './components/app/Banner';
import Category from './components/app/Category';
import Product from './components/app/Product';
import { Button } from '@mui/material';
import Header from './components/app/Header';
import Footer from './components/app/Footer';
import Asseenon from './components/app/Asseenon';
function App () {
  return (
    <div className="">
      <div>
        <h1>Manager</h1>
        <Link to="/Manager">
          <Button variant="contained">Manager</Button>
        </Link>
      </div>
      <Header />

      <div className="mx-auto w-10/12">
          <EmblaCarousel />
          <Category />
          <div className="h-[500px] w-full">
            <Product nameTitle={'Product Popular 2023'}/>
          <div/> 
        </div>
      <Asseenon/>
      <Footer/>
      </div>
    </div >
  );
}

export default App;
