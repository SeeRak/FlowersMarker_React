import './Banner.css';
import logo from '../../assets/logo.png';

function Banner(props: { children: any }) {
    return (
    <div className="flm-banner">
        {props.children}
    </div>
    )
}
export default Banner;