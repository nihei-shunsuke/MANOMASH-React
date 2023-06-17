import React from 'react';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import TopPage from './pages/TopPage';
import Gallery from './pages/Gallery';
import Login from './pages/Login';
import MyPage from './pages/MyPage';
import Profile from './pages/Profile';
import ProfileAdd from './pages/ProfileAdd';
import ProfileEdit from './pages/ProfileEdit';
import SignUp from './pages/SignUp';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<TopPage/>} />
        <Route path='/gallery' element={<Gallery/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/mypage' element={<MyPage/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/profileadd' element={<ProfileAdd/>} />
        <Route path='/profileedit' element={<ProfileEdit/>} />
        <Route path='/signup' element={<SignUp/>} />
      </Routes>
    </BrowserRouter>

  );
};

export default App;
