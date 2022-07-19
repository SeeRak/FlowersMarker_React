import './Categories.css';
import { plantList } from '../../datas/plantList';
import { useState } from 'react';

function Categories(props: { listCategories : string[], activeCategory : string, setActiveCategory : any }) {

    return (
        <div className='flm-categories'>
            <select onChange={(e) => props.setActiveCategory(e.target.value)} className='flm-categories-select'>
                {props.listCategories.map((categorie, index) => (
                    <option key={`${categorie}-${index}`}>{categorie}</option>
                ))}
            </select>
            <button onClick={() => props.setActiveCategory('')}>Clear</button>
        </div>
    )
}

export default Categories;