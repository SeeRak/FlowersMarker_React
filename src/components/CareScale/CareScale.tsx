import './CareScale.css';
import Sun from '../../assets/sun.svg';
import Water from '../../assets/water.svg';

function CareScale(props: { scaleValue: number; careType: string }) {

    const range = [1,2,3];

    const scaleType =
		props.careType === 'light' ? (
			<img src={Sun} alt='sun-icon' />
		) : (
			<img src={Water} alt='water-icon' />
		)

    function onClick(){
        switch(props.scaleValue){
            case 1:
                props.careType === 'light' ? alert("Cette plante requiert peu de lumière") : alert("Cette plante requiert peu d'arrosage");
                break;
            case 2: 
                props.careType === 'light' ? alert("Cette plante requiert modérement de lumière") : alert("Cette plante requiert modérement d'arrosage");
                break;
            case 3:
                props.careType === 'light' ? alert("Cette plante requiert beaucoup de lumière") : alert("Cette plante requiert beaucoup d'arrosage");   
                break;
            default:
                break;
        }
    }

    return (
        <div onClick={() => onClick()}>
            {range.map((rangeElem) => props.scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{scaleType}</span> : null
            )}
        </div>
    )    
}
    
export default CareScale;