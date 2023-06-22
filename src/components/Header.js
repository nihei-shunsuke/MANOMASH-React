import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';
import OshiProfileIcon from '../images/osiprofile-icon.PNG';
import OshiProfileLogo from '../images/osiprofile-logo.PNG';

const Header = () => {
    return (
        <div className="header">
            <Link to='/' className="left-wrapper">
                <img className='osiprofile-icon' src={OshiProfileIcon} alt='OshiProfileIcon'/>
                <img className='osiprofile-logo' src={OshiProfileLogo} alt='OshiProfileLogo'/>
            </Link>
            <div className="right-wrapper">
                <ul>
                    <li className="li-transition"><Link to='/login'>マイページ</Link></li>
                    <li className="li-transition"><Link to='/gallery'>推しを探す</Link></li>
                    <li className="li-transition"><Link to='/profileadd'>＋新規作成</Link></li>
                    <li className="login-btn opacity-btn"><div id="login_logout"></div></li>
                </ul>
            </div>
        </div>
    )
};

export default Header;
