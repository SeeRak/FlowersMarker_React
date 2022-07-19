import './ShoppingList.css';
import { plantList } from '../../datas/plantList';
import PlantItem from '../PlantItem/PlantItem';
import Cover from '../../assets/monstera.jpg';
import Categories from '../Categories/Categories';
import { useState } from 'react';

function ShoppingList(props: { cart: any, updateCart: any }) {

    const [activeCategorie, setActiveCategories] = useState('');

    let categories = Array<string>();

    plantList.forEach((element) => {
        if(!categories.includes(element.category)){
            categories.push(element.category);
        }              
    })

    function addToCart(name: string, price: number){

        const currentPlantAdded = props.cart.find((plant: any) => plant.name === name);
        
        if(currentPlantAdded){
            const cartFilteredCurrentPlant = props.cart.filter(
                (plant: any) => plant.name !== name
            )
            props.updateCart([
                ...cartFilteredCurrentPlant,
                { name, price, amount: currentPlantAdded.amount + 1 }
            ])
        }
        else{
            props.updateCart([ ...props.cart, { name, price, amount: 1 } ])
        }
    }

    return (
    <div className='flm-shopping-list'>
        <ul>
            <Categories listCategories = {categories} activeCategory = {activeCategorie} setActiveCategory = {setActiveCategories} />
        </ul>
        <ul className='flm-plant-list'>
            {activeCategorie !== '' ? plantList.filter((plant: any) => plant.category === activeCategorie).map((plant: any) => (
                <div key={plant.id}>
                    <PlantItem id={plant.id} name={plant.name} cover={Cover} light={plant.light} water={plant.water} price={plant.price} />
                    <button onClick={() => addToCart(plant.name, plant.price)}>Ajouter</button>
                </div>   
            )) :
            plantList.map((plant) => (
                <div key={plant.id}>
                    <PlantItem id={plant.id} name={plant.name} cover={Cover} light={plant.light} water={plant.water} price={plant.price}/>
                    <button onClick={() => addToCart(plant.name, plant.price)}>Ajouter</button>
                </div>                
            ))}
        </ul>
    </div>
        )
}

export default ShoppingList;