import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/Account.css';
import DisplayLogInResult from '../services/login';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [formStatus, setFormStatus] = useState('');
    const navigate = useNavigate();

    const navigateMyPage = async (event) => {
        event.preventDefault();
        console.log('押された');
        const result = await DisplayLogInResult(email, password)
        console.table('result:',result)
        switch (result) {
            case 1:
                setFormStatus('未入力の項目があります。');
                console.log('結果1');
                break;
            case 2:
                setFormStatus('メールアドレスかパスワードが間違っています。');
                console.log('結果2');
                break;
            case 3:
                console.log('結果3');
                navigate('/gallery');
                break;
            default:
                console.log('作動しませんでした。')
        }
    }
    return (
        <div>
            <Header />
            <div className="form-wrapper">
                <h1>ログイン</h1>
                <p className="alert">{formStatus}</p>
                <form noValidate autoComplete="off">
                    <div className="form-item">
                        <label htmlFor="email"></label>
                        <input id="email" type="email" name="email"  placeholder="メールアドレス" value={email} onChange={(event) => setEmail(event.target.value)}/>
                    </div>

                    <div className="form-item">
                        <label htmlFor="password"></label>
                        <input id="pass" type="password" name="password" placeholder="パスワード" value={password} onChange={(event) => setPassword(event.target.value)}/>
                    </div>

                    <div className="button-panel1">
                        <button className="button opacity-btn" type='submit' id="btn" onClick={navigateMyPage}>ログイン</button>
                    </div>

                    <div className="form-footer">
                        <p><Link to='/signup' className="li-transition">アカウントをつくる</Link></p>
                    </div>
                </form>

            </div>
            <Footer />
        </div>
    )
};

export default Login;
