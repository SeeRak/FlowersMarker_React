import { useState } from 'react';
import './Footer.css';

function Footer() {
	const [inputValue, setInputValue] = useState('')
    
    function checkInput(){    
        if(!inputValue.includes("@")){
            alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide")
        }
    }

	return (
		<footer className='flm-footer'>
			<div className='flm-footer-elem'>
				🌿🌱🌵
			</div>
			<div className='flm-footer-elem'>Laissez-nous votre mail :</div>
            <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} onBlur={checkInput}></input>
		</footer>
	)   

}

export default Footer