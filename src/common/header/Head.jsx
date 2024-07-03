
import React ,{useState} from "react";
import './Head.css';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from "react-redux";
import { Popover } from "antd";
import * as UserService from '../../services/UserService';
import { resetUser } from "../../component/redux/slides/userSlide";
import Loading from "../LoadingComponent/Loading";


const Head = () => {
   const [isloading, setIsloading] = useState(false);
   const user = useSelector((state) => state.user)
    const naviagate = useNavigate()
    const dispatch = useDispatch()

   const handleLogout = async() => {
      setIsloading(true)
      await UserService.logoutUser()
      localStorage.removeItem('access_token')
      dispatch(resetUser())
      setIsloading(false)
 }
   const content = (
      <div>
        <p className='popup'>Thông tin người dùng</p>
        <p className='popup' onClick= {handleLogout}>Đăng xuất</p>
      </div>
    );
    
    
   console.log('user',user);
   return (
     <body className="head-body">
      <header className="site-header" role="banner">
         <div className="site-branding">
           <div className="header-container">
            
           <a className="site-nav-toggler" data-toggle="collapse" href="#site-nav">
             <FontAwesomeIcon icon={faBars} />
           </a>
					<div className="site-logo">
                  <a href="https://gaubongbeo.com/">
						  <img className="w-auto" loading="lazy" src="Image/logo.jpg" alt="Gấu Bông Bèo"/>
                    <span className="name-branding" rel="home"> Gấu Bông Bèo </span>
                  </a>
               </div>

               <div className="site-search">
                     <form className="form-search" action="https://gaubongbeo.com" method="GET"> 
                        <div className="input-group">
                            <input className="form-control" type="text"
                                   placeholder="Nhập sản phẩm cần tìm..." /> 
                            <button className="btn-logo" type="submit">
                            <FontAwesomeIcon icon={faSearch} />
                           </button>
                        </div>
                     </form>
               </div>
            <Loading isPending={isloading}>
            <div className="infor-user-login"> 
              { user?.name ? (
                  <div className="user-icon-container">
                  <Popover content={content} trigger="click">
                    <div className="user-icon">
                      <FontAwesomeIcon icon={faUser} />
                      <div className="user-name">{user.name}</div>
                    </div>
                  </Popover>
                </div>
               ) : (
              <div className="auth-links">
                 <Link to="/sign-in" className="auth-link">Đăng nhập</Link>
                 <Link to="/sign-up" className="auth-link">Đăng ký</Link>
              </div>
               )}
            </div>
            </Loading>
            
         </div>
         </div>
      </header>  
      </body>                 
   )
}
export default Head;