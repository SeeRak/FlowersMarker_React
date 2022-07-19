import CareScale from '../CareScale/CareScale';
import './PlantItem.css';


function PlantItem(props: { id:string, name:string, cover:string, light:number, water:number, price:number }) {

    return (
        <li key={props.id} className='flm-plant-item'>
            <span className='flm-plant-item-price'>{props.price}€</span>
            <img src={props.cover} alt={props.name} className='flm-plant-item-cover' />
            {props.name}
            <div>
                <CareScale careType='water' scaleValue={props.water} />
                <CareScale careType='light' scaleValue={props.light} />
            </div>
        </li>
    )
}

export default PlantItem;