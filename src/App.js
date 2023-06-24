import React, { useState, useEffect, createContext } from 'react';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import TopPage from './pages/TopPage';
import Gallery from './pages/Gallery';
import Login from './pages/Login';
import MyPage from './pages/MyPage';
import Profile from './pages/Profile';
import ProfileAdd from './pages/ProfileAdd';
import ProfileEdit from './pages/ProfileEdit';
import SignUp from './pages/SignUp';

export const UserContext = createContext();

function App() {
  const [userData, setUserData] = useState({
    userId: '',
    userName: '',
    introduce: '',
  });

  const [oshiDataList, setOshiDataList] = useState([])
  useEffect(() => {
    const url = "http://localhost:8080/gallery";
    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json charset=utf-8'
    }
    fetch(url, {
        method: "GET",
        cache: "no-cache",
        headers: headers,
    })
    .then(res => res.json())
    .then(data => {
      setOshiDataList(data)
      console.log(data)
    })
  }, []);

  return (
    <UserContext.Provider value={{userData:userData,setUserData:setUserData}}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<TopPage/>} />
          <Route path='/gallery' element={<Gallery oshiDataList={oshiDataList} setOshiDataList={setOshiDataList}/>} />
          <Route path='/login' element={<Login setUserData={setUserData}/>} />
          <Route path='/mypage' element={<MyPage/>} />
          <Route path='/profile' element={<Profile/>} />
          <Route path='/profileadd' element={<ProfileAdd/>} />
          <Route path='/profileedit' element={<ProfileEdit/>} />
          <Route path='/signup' element={<SignUp/>} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>

  );
};

export default App;
