import '../css/Footer.css';
import ManomashLogo from "../images/MANOMASH-logo.PNG";
const Footer = () => {
    return (
        <div className='footer'>
            <img src={ManomashLogo} alt='logo'/>
            <p>@KIT_Smapro</p> 
        </div>
    )
};

export default Footer;
