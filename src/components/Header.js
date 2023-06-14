import '../css/Header.css';
import OshiProfileIcon from '../images/osiprofile-icon.PNG';
import OshiProfileLogo from '../images/osiprofile-logo.PNG';
const Header = () => {
    return (
        <div className="header">
            <a class="left-wrapper" href="index.html">
                <img class='osiprofile-icon' src={OshiProfileIcon} alt='OshiProfileIcon'/>
                <img class='osiprofile-logo' src={OshiProfileLogo} alt='OshiProfileLogo'/>
            </a>
            <div class="right-wrapper">
                <ul>
                    <li class="li-transition"><a href="mypage.html">マイページ</a></li>
                    <li class="li-transition"><a href="gallery.html">推しを探す</a></li>
                    <li class="li-transition"><a href="profile-add.html">＋新規作成</a></li>
                    <li class="login-btn opacity-btn"><div id="login_logout"></div></li>
                </ul>
            </div>
        </div>
    )
};

export default Header;
