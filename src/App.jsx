import { useEffect, useState } from 'react';
import './App.css';
import Button from './components/Button/Button.jsx';
import Nav from './components/Nav/Nav.jsx';
import Products from './components/Products/Products.jsx';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/data/products.json')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(`${err}: Failed to fetch products!`))
      .finally;
  }, []);

  return (
    <>
      <Nav />
      <div className='hero'>
        <h2 className='hero__title'>
          Eat Green. <br />
          <span style={{ paddingLeft: '8rem' }}>Feel Good.</span>
        </h2>
        <p className='hero__content'>
          Healthy never tasted this fun - fresh greens delivered straight to
          your door!
        </p>
        <Button variant='solid'>Make your bowl</Button>
      </div>
      <Products />
      <Products />
      <Products />
    </>
  );
}

export default App;
