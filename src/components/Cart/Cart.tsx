import './Cart.css'
import { useState, useEffect } from 'react'

function Cart(props : { cart: any, updateCart: any }) {

    const [isOpen, setIsOpen] = useState(false);
    const total = props.cart.reduce(
        (acc: number, plant: { amount: number; price: number; }) => acc + plant.amount * plant.price, 0
    )  

    return isOpen ?(
        <div className="flm-cart">
            <button className='flm-cart-toggle-button' onClick={() => setIsOpen(false)}>Fermer</button>
            <h2>Panier</h2>
            {props.cart.map((cart : any, index:number) => {
                <div key={`${cart.name}-${index}`}>
                    {cart.name} {cart.price}€ x {cart.amount}
                </div>
            })}
            <h3>Total : {total} €</h3>
            <button onClick={() => props.updateCart([])}>Vider le panier</button>
        </div>
    ) : (
        <div className='flm-cart-closed'>
            <button className='flm-cart-toggle-button' onClick={() => setIsOpen(true)}>Ouvrir le Panier</button>
        </div>
        
    )
}

export default Cart;