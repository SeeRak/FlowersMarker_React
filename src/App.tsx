import React, { useEffect, useState } from 'react';
import Banner from './components/Banner/Banner';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer';
import ShoppingList from './components/ShoppingList/ShoppingList';
import './Layout.css';
import logo from './assets/logo.png';

function App() {
	const savedCart = localStorage.getItem('cart');
	const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : []);
	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])

  return (
    <div>
			<Banner>
				<img src={logo} alt='La maison jungle' className='lmj-logo' />
				<h1 className='lmj-title'>La maison jungle</h1>
			</Banner>
			<div className='flm-layout-inner'>
				<Cart cart={cart} updateCart={updateCart} />
				<ShoppingList cart={cart} updateCart={updateCart}/>
			</div>			
			<Footer/>
		</div>
  );
}

export default App;
