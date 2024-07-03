import React, { useEffect } from 'react';
import './App.css';
import Home from './Page/Home';
import Gauteddyto from './Page/Gauteddyto';
import Gauteddygiare from './Page/Gauteddygiare';
import Gaubongtotnghiep from './Page/Gaubongtotnghiep';
import Gaubongcaocap from './Page/Gaubongcaocap';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import axios from 'axios'
import Login from './common/login/Login';
import Register from './common/register/Register';
import { useQuery } from '@tanstack/react-query';
import { isJsonString } from './utils';
import { jwtDecode } from "jwt-decode";
import * as UserService from '../src/services/UserService';
import { useDispatch } from 'react-redux';
import { updateUser } from './component/redux/slides/userSlide';
import { current } from '@reduxjs/toolkit';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
      //  localStorage.setItem('access_token', JSON.stringify(data?.access_token))
    const { storageData, decoded } =  handleDecoded()
     console.log('storageData', storageData);
     console.log('decoded',decoded);
        if(decoded?.id) {
           //khi gọi getDetail nó sẽ chạy xuống UserServive.axiosJWT.interceptors...
           handleGetDetailsUser(decoded?.id, storageData);
        }
  },[])

  const handleDecoded =() => {

    // cos nguy hiểm, dễ bị tấn công bởi hacker ( update lữu trữ token bằng cookie)
    let storageData =  localStorage.getItem('access_token')
    // console.log('storageData', storageData, isJsonString(storageData));
    let decoded = {}
    if(storageData && isJsonString(storageData)) {
      storageData = JSON.parse(storageData)
      decoded = jwtDecode(storageData);
    }
    return { decoded, storageData }
  }

  // chạy vào đây trước khi getdetail , nên mình check ở đây nếu token hết hạn thì gọi đến refresh_token lấy ra access_token mới đặt vào config
  UserService.axiosJWT.interceptors.request.use(async(config) => {
    const { storageData, decoded } =  handleDecoded()
    const currentTime = new Date()
    if(decoded?.exp < currentTime.getTime()/ 1000) {
      const data = await UserService.refreshToken()
      config.headers['token'] = `Bearer ${data?.access_token}`
    }
    return config;
  }, (err) => {
    return Promise.reject(err)
  })

  const handleGetDetailsUser = async(id, token) => {
    const res = await UserService.getDetailsUser(id,token) ;
    dispatch(updateUser({...res?.data, access_token: token}))
    console.log('Res',res);
}
  
  return (
    <> 
       <BrowserRouter>
       <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/gauteddyto" element={<Gauteddyto/>}/>
          <Route path="/gauteddygiare" element={<Gauteddygiare/>}/>
          <Route path="/gaubongtotnghiep" element={<Gaubongtotnghiep/>}/>
          <Route path="/gaubongcaocap" element={<Gaubongcaocap/>}/>
          <Route path="/sign-in" element={<Login/>}/>
          <Route path="/sign-up" element={<Register/>}/>
       </Routes>
       </BrowserRouter>
    </>
  );
}

export default App;
