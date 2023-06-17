import Cookies from 'js-cookie';

//Goのサーバーに取得した値を送って登録

const DisplayLogInResult = async (email, password) => {
    const obj = {
        email: email,
        password: password
    }
    if (obj.email === '' | obj.password === '') {
        return 1;
    } 

    const body = JSON.stringify(obj)
    const url = 'http://localhost:8080/login';
    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json charset=utf-8'
    };
    const response = await fetch(url, {
      method: 'POST',
      cache: 'no-cache',
      headers: headers,
      body: body,
    });
    console.log(response)
    const logInInfo = await response.json();
    console.log(logInInfo);
    console.log("status_flg",logInInfo.status)
    console.log(logInInfo.status)

    if (logInInfo.status === 0) {
        return 2;
    } else if (logInInfo.status === 1) {
        Cookies.set('uid', logInInfo.id)
        return 3;
    }
}

export default DisplayLogInResult;
