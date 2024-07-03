import React, { useEffect, useState } from 'react';
import './Register.css';
import { Link } from "react-router-dom";
import * as UserService from '../../services/UserService';
// import {useMutation} from '@tanstack/react-query';
import { useMutationHooks } from '../../hooks/useMutationHook'
import Loading from '../LoadingComponent/Loading';
import { useNavigate } from 'react-router-dom'
import * as message from '../Message/Message'

const Register = () => {
  const navigate = useNavigate()
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');

  const mutation = useMutationHooks(
    data => UserService.signupUser(data)
  )
  const { data, isPending , isSuccess, isError } = mutation;

  useEffect(() => {
    if(isSuccess && data?.status !== 'ERR') {
      message.success();
      handleNavigateSignIn();
    } else if(isError && data?.status == 'ERR' ) {
      message.error();
    }
  }, [isSuccess,isError])

  const handleNavigateSignIn = () => {
    navigate('/sign-in')
  }

  console.log('mutation',mutation);

  const handleSubmit = (e) => {
    e.preventDefault(); // Ngăn chặn hành vi mặc định của form
      // Implement your registration logic here
      mutation.mutate({
        name,
        email,
        password,
        confirmPassword
      })
      console.log('Username:', name);
      console.log('Email:', email);
      console.log('Password:', password);
      console.log('confirmPassword:', confirmPassword);
  };

  return (
    <body className="register-body">
      <div className="register-container">
        <form onSubmit={handleSubmit} className="register-form">
          <h2>Đăng ký</h2>
          { data?.status ==='ERR' &&   <p className="error">{data.message}</p> }
          {  data?.status ==='OK' &&   <p className="error">{data.message}</p> }
          <div className="form-group">
            <label>Tên đăng nhập</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Mật khẩu</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Nhập lại mật khẩu</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <Loading isPending={isPending}>
          <button type="submit" className="register_button">Đăng ký</button>
          </Loading>
          <div className="register_footer">
            <p>Đã có tài khoản? <span className='linksign' onClick={handleNavigateSignIn}>Đăng nhập</span> </p>
          </div>
        </form>
      </div>
    </body>
  );
}

export default Register;