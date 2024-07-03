import React from "react";
import './Footer.css';
const Footer= () => {

   const year = new Date().getFullYear();

   return (
    <>
        <footer className="site-footer">
            <div className="footer-container">
              <div className="row">
                  <div className="col-menu">
                    <strong className="footer-title">Liên Hệ</strong>
                    <ul className="footer-stores list-unstyled ">
                       <strong className="footer-title">NGHỆ AN | 8:30 - 23:00</strong>
                       <li>
                           {/* <i class="fa fa-location"></i> */}
                            Diễn Trường - Diễn Châu - Nghệ An - 0899999999    					
                       </li>
                       <iframe className="map"
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15080.515315536255!2d105.
                          59568831072946!3d19.10200343999487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31377019fe0d9bcf%3A0x9beff486714b220b!2zRGnhu4VuIFRyxrDhu51uZywgRGnhu4VuIENow6J1LCBOZ2jhu4cgQW4sIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1705148135858!5m2!1svi!2s" 
                        >  </iframe>
                       
                          <strong className="footer-title"> <i className="fa fa-phone"> </i>&nbsp;Đặt hàng Online: 099.999.6666 </strong><br /> 
                    
                    
                         
                         <strong className="footer-title"><i className="fa fa-phone"></i>&nbsp;Mua hàng buôn/ sỉ: 09.9797.9999 </strong><br /> 
                     
                   
                         
                         <strong className="footer-title"><i className="fa fa-phone"></i>&nbsp;Hotline phản ánh SP/ DV: 039.333.6666 </strong><br /> 
          
                       
                    </ul>        
                    <div className="mb-3"><i className="fa fa-envelope"></i> Email: gaubongbeo@gmail.com<br />    
                       <br />
                    </div>      
                  </div>

                  <div className="col-menu">
                    <strong className="footer-title">CHUYỂN KHOẢN ONLINE</strong>
                    <div className="footer-online">
                    <p><strong>+ TECHCOMBANK</strong><br />
                          STK: <strong>9999999999999</strong><br />
                          Chủ TK: Hoàng Dũng &#8211; CN NGHỆ AN</p>
                          <p>
                            <strong><span >+ </span>
                              <a href="https://gaubongonline.vn/tai-khoan-ngan-hang" rel="nofollow">
                                Xem chi tiết các TK ngân hàng
                              </a>
                            </strong>
                          </p>
                          <section  className="nav-menu_footer">
                            <h4 className="footer-title">Hỗ trợ khách hàng </h4>
                            <div className="menu-ho-tro-khach-hang">
                               <ul id="menu-ho-tro-khach-hang" className="menu">
                                 <li id="menu-item-47536" className="menu-item">
                                    <a href="https://gaubongonline.vn/refund_returns" aria-current="page">Chính sách bán Buôn – Sỉ</a>
                                  </li>
                                  <li id="menu-item-15767" className="menu-item">
                                    <a rel="nofollow" href="https://gaubongonline.vn/chinh-sach-chung">Chính sách chung</a>
                                  </li>
                                 <li id="menu-item-15766" className="menu-item">
                                    <a rel="nofollow" href="https://gaubongonline.vn/chinh-sach-bao-mat-thong-tin">Chính sách bảo mật thông tin</a>
                                  </li>
                                  <li id="menu-item-15764" className="menu-item">
                                     <a rel="nofollow" href="https://gaubongonline.vn/bao-hanh-doi-tra">Bảo hành &amp; Đổi trả</a>
                                  </li>
                                  <li id="menu-item-15765" className="menu-item">
                                    <a rel="nofollow" href="https://gaubongonline.vn/gioi-thieu-lien-he">Giới thiệu &amp; Liên hệ</a>
                                  </li>
                               </ul>
                             </div>
                          </section>	
                      </div>
                  </div>

                  <div className="col-menu">
                    <strong className="footer-title font-weight-bold">FANPAGE</strong>
                    <p className="footer-fanpage-text mb-1">Follow nhà Gấu nhé!</p>
				            <div className="footer-fanpage">
                        <div className="fb-page" data-href="https://www.facebook.com/gaubongbeocaocap" >
                          <blockquote cite="https://www.facebook.com/Shop.Gaubongonline.vn" className="fb-xfbml-parse-ignore">
                            <a href="https://www.facebook.com/gaubongbeocaocap">Gấu Bông Bèo</a>
                          </blockquote>
                        </div>
			            	</div>
                    
                    <strong className="footer-title font-weight-bold">Xem gấu bông với</strong>
								<ul className="footer-socials list-unstyled">
										<li><a href="https://www.facebook.com/gaubongbeocaocap" ><img src="https://gaubongonline.vn/wp-content/uploads/2023/11/Logo-cac-san-09-1-e1702435231105.png"/></a></li>
										<li><a href="https://www.instagram.com/gaubong.beo/"><img src="https://gaubongonline.vn/wp-content/uploads/2023/11/Logo-cac-san-05-e1702435278909.png"/></a></li>
										<li><a href=""><img src="https://gaubongonline.vn/wp-content/uploads/2023/11/Logo-cac-san-10-1-e1702435305485.png"/></a></li>
										<li><a href=""><img src="https://gaubongonline.vn/wp-content/uploads/2023/11/Logo-cac-san-08-1-e1702435316359.png"/></a></li>
									</ul>
                  </div>
              </div>
            </div> 
            <div className="footer-coppyright">
              <div className="container">
                <p>
                     ©2020 - {year}
                     <strong>
                     <a href="https://gaubongonline.vn" target="_blank" rel="noopener">Gaubongbeo.com&nbsp;</a>
                     </strong>
                </p>
              </div>
            </div>

        </footer>
    </>
   )

}
export default Footer