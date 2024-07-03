import React, { useState, useEffect } from 'react';
import './Login.css';
import { Link } from "react-router-dom";
import * as UserService from '../../services/UserService';
// import {useMutation} from '@tanstack/react-query';
import { useMutationHooks } from '../../hooks/useMutationHook'
import Loading from '../LoadingComponent/Loading'
import { useNavigate } from 'react-router-dom'
import * as message from '../Message/Message'
import { jwtDecode } from "jwt-decode";
import {useDispatch} from 'react-redux'
import { updateUser } from '../../component/redux/slides/userSlide';
const Login = () => {
  const navigate = useNavigate()
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  

  const mutation = useMutationHooks(
    data => UserService.loginUser(data)
  )
  const { data, isPending , isSuccess } = mutation;

  useEffect(() => {
    if(isSuccess && data?.status !== 'ERR') {
      message.success();
      navigate('/');
      localStorage.setItem('access_token', JSON.stringify(data?.access_token))

      if(data?.access_token) {
        const decoded = jwtDecode(data?.access_token);
        console.log('decoded',decoded);
        if(decoded?.id) {
           handleGetDetailsUser(decoded?.id, data?.access_token);
        }
      }
    } 
  }, [isSuccess])

  const handleGetDetailsUser = async(id, token) => {
       const res = await UserService.getDetailsUser(id,token) ;
       dispatch(updateUser({...res?.data, access_token: token}))
       console.log('Res',res);
  }

  
  console.log('data',data);
  console.log('isPending',isPending);
  console.log('mutation',mutation);
  //if(data.status === 'ERR') {  }
 
  const handleSubmit = (e) => {
    e.preventDefault();
      mutation.mutate({
        name,
        password
      })
      console.log('Name:', name);
      console.log('Password:', password);
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Đăng nhập</h2>
        {  data?.status ==='ERR' &&   <p className="error">{data.message}</p> }
        {  data?.status ==='OK' &&   <p className="error">{data.message}</p> }
        <div className="login_form-group">
          <label>Tên đăng nhập</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="login_form-group">
          <label>Mật khẩu</label>
          <div className="password-container">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="show-password-button"
              onClick={() => setShowPassword(!showPassword)}
            >
              Show
            </button>
          </div>
        </div>
        <Loading isPending={isPending}>
        <button type="submit" className="login_button">Đăng nhập</button>
        </Loading>
        <div className="login_footer">
          <p>Chưa có tài khoản? <Link to="/sign-up">Đăng ký</Link></p>
        </div>
      </form>
    </div>
  );
}

export default Login;