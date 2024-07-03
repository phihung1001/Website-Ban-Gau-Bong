import React from "react";
import './Navbar.css'
// import { useState, useEffect } from 'react';
// import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Navbar = () => {

   return (
    <>
       
       <div id="test" className="navbar" >
         <div className="navbar-container">
           <ul className="nav-menu">
            <li className="menu-has-home"><Link to='/'> Trang Chủ  <i className="fa fa-home"></i></Link> </li>
           
 <li className="menu-has-children"><a href="#"> Gấu Bông Cao Cấp <i className="fa fa-angle-down"></i> </a> 
     <ul className="sub-menu">
	      <li className="menu-item "><Link to='/gauteddyto'>Gấu Bông Teddy To</Link></li>
	      <li className="menu-item "><Link to='/gauteddygiare'>Gấu Bông Teddy Giá Rẻ</Link></li>
	      <li className="menu-item "><Link to='/gaubongcaocap'>Gấu bông cao cấp</Link> </li>
	      <li className="menu-item "><Link to='/gaubongtotnghiep'>Gấu Bông Tốt Nghiệp</Link></li>
     </ul>
  </li>

  <li className="menu-has-children"><a href="#"> Bộ Sưu Tập  <i className="fa fa-angle-down"></i></a> 
      <ul className="sub-menu">
	      <li className="menu-item "><a href="https://gaubongonline.vn/gau-bong-gia-re-2-1-2034681">Gấu Bông Bản quyền</a></li>
	      <li className="menu-item "><a href="https://gaubongonline.vn/gau-bong-cao-cap-2-1-2034447">Gấu bông độc quyền</a> </li>
	      <li className="menu-item "><a href="https://gaubongonline.vn/gau-bong-cu-nhan-2-1-2037501">Gấu Bông Ngày Lễ</a></li>
        <li className="menu-item "><a href="https://gaubongonline.vn/gau-bong-cu-nhan-2-1-2037501">Thú Bông</a></li>
      </ul>   
  </li>
  <li className="menu-has-children"><a href="#"> Hoạt Hình <i className="fa fa-angle-down"></i></a>
      <ul className="sub-menu">
	      <li className="menu-item "><a href="https://gaubongonline.vn/gau-bong-gia-re-2-1-2034681">Mẫu Gấu Đáng Yêu</a></li>
	      <li className="menu-item "><a href="https://gaubongonline.vn/gau-bong-cao-cap-2-1-2034447">mẫu Gấu Mới ra mắt </a> </li>
      </ul>   
  </li>
  <li className="menu-has-children"><a href="#"> Thú Bông <i className="fa fa-angle-down"></i></a>
      <ul className="sub-menu">
	      <li className="menu-item "><a href="https://gaubongonline.vn/gau-bong-gia-re-2-1-2034681">Thú Bông đáng Yêu</a></li>
	      <li className="menu-item "><a href="https://gaubongonline.vn/gau-bong-cao-cap-2-1-2034447">Thú Bông loài vật</a> </li>
	      <li className="menu-item "><a href="https://gaubongonline.vn/gau-bong-cu-nhan-2-1-2037501">Gấu Bông BigSize</a></li>
        <li className="menu-item "><a href="https://gaubongonline.vn/gau-bong-cu-nhan-2-1-2037501">Thú Bông Theo Màu</a></li>
      </ul>   
  </li>
  <li className="menu-has-children"><a href="#"> Gối Bông & Phụ Kiện  <i className="fa fa-angle-down"></i></a>
      <ul className="sub-menu">
	      <li className="menu-item "><a href="https://gaubongonline.vn/gau-bong-gia-re-2-1-2034681">gối bông</a></li>
	      <li className="menu-item "><a href="https://gaubongonline.vn/gau-bong-cao-cap-2-1-2034447">Phụ Kiện Bông</a> </li>
	
      </ul>   
  </li>
  <li className="menu-has-children"><a href="http://fb.com"> Góc Của Gấu <i className="fa fa-angle-down"></i></a>
      <ul className="sub-menu">
	      <li className="menu-item "><a href="https://gaubongonline.vn/gau-bong-gia-re-2-1-2034681">Mẹo Gấu bông</a></li>
	      <li className="menu-item "><a href="https://gaubongonline.vn/gau-bong-cao-cap-2-1-2034447">Dịch Vụ</a> </li>
      </ul>   
  </li>
           </ul>
         </div>
      </div>
     
    </>
    
   )
 

}
export default Navbar
