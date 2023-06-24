import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';
import OshiProfileIcon from '../images/osiprofile-icon.PNG';
import OshiProfileLogo from '../images/osiprofile-logo.PNG';
import { UserContext } from '../App';

const Header = () => {
    const context = useContext(UserContext);
    const logout = () => {
        context.setUserData({
            userId: '',
            userName: '',
            introduce: '',
        });
    }
    const loginRender = () => {
        let loginButtonDom
        if (!context.userData.userId) {
            loginButtonDom = <li className="li-transition"><Link to='/login'>ログイン</Link></li>
        } else {
            loginButtonDom = <li className="li-transition" onClick={logout}><Link to='/login'>ログアウト</Link></li>
        }
        console.log(context.userData.userId)
        return loginButtonDom
    }
    return (
        <div className="header">
            <Link to='/' className="left-wrapper">
                <img className='osiprofile-icon' src={OshiProfileIcon} alt='OshiProfileIcon'/>
                <img className='osiprofile-logo' src={OshiProfileLogo} alt='OshiProfileLogo'/>
            </Link>
            <div className="right-wrapper">
                <ul>
                    <li className="li-transition"><Link to='/mypage'>マイページ</Link></li>
                    <li className="li-transition"><Link to='/gallery'>推しを探す</Link></li>
                    <li className="li-transition"><Link to='/profileadd'>＋新規作成</Link></li>
                    {loginRender()}
                </ul>
            </div>
        </div>
    )
};

export default Header;
