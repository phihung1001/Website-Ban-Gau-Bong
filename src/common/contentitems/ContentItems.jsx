
import React from "react";
import './ContentItems.css';

const ContentItems =({title}) => {
   return (
      <body className="contentItems-">
       <section className="module-home-product">
                    <header className="module-header-home-product">
                        <h2 className="module-header-title ">
                        <a className="text-header-title" href="https://teddy.vn/gau-bong-ngay-8-3">{title}</a>
                        </h2>
                    </header>
                    <div className="module-content-product">
                        <ul className="products">
                            {/* items  */}
                            <li className="type-products">
                                <div className="inner-products-">
                                    <a href="https://teddy.vn/tho-bong-ao-len-2-39958" className="link-products">
                                        <img src="https://teddy.vn/wp-content/uploads/2024/01/Az5098772351602_943b632fdd7ff5be84722788e57191f3-500x500.jpg" alt="" />
                                        <h3 className="woocommerce-product">Thỏ Bông Áo Len</h3>
                                    </a>
                                    <div className="tab-content">
                                        <span className="price">
                                        <bdi>388.888<span className="woocommerce-Price-currencySymbol">₫</span></bdi>
                                        </span>
                                    </div>
                                </div>
                                <div data-product_id="14799" data-variant_id="14809" className="btn-order">MUA NGAY</div>
                            </li>
                             {/* items  */}
                            <li className="type-products">
                                <div className="inner-products-">
                                    <a href="https://teddy.vn/tho-bong-ao-len-2-39958" className="link-products">
                                        <img src="https://teddy.vn/wp-content/uploads/2024/01/Az5098772351602_943b632fdd7ff5be84722788e57191f3-500x500.jpg" alt="" />
                                        <h3 className="woocommerce-product">Thỏ Bông Áo Len</h3>
                                    </a>
                                    <div className="tab-content">
                                        <span className="price">
                                        <bdi>388.888<span className="woocommerce-Price-currencySymbol">₫</span></bdi>
                                        </span>
                                    </div>
                                </div>
                                <div data-product_id="14799" data-variant_id="14809" className="btn-order">MUA NGAY</div>
                            </li>
                             {/* items  */}
                            <li className="type-products">
                                <div className="inner-products-">
                                    <a href="https://teddy.vn/tho-bong-ao-len-2-39958" className="link-products">
                                        <img src="https://teddy.vn/wp-content/uploads/2024/01/Az5098772351602_943b632fdd7ff5be84722788e57191f3-500x500.jpg" alt="" />
                                        <h3 className="woocommerce-product">Thỏ Bông Áo Len</h3>
                                    </a>
                                    <div className="tab-content">
                                        <span className="price">
                                        <bdi>388.888<span className="woocommerce-Price-currencySymbol">₫</span></bdi>
                                        </span>
                                    </div>
                                </div>
                                <div data-product_id="14799" data-variant_id="14809" className="btn-order">MUA NGAY</div>
                            </li>
                             {/* items  */}
                            <li className="type-products">
                                <div className="inner-products-">
                                    <a href="https://teddy.vn/tho-bong-ao-len-2-39958" className="link-products">
                                        <img src="https://teddy.vn/wp-content/uploads/2024/01/Az5098772351602_943b632fdd7ff5be84722788e57191f3-500x500.jpg" alt="" />
                                        <h3 className="woocommerce-product">Thỏ Bông Áo Len</h3>
                                    </a>
                                    <div className="tab-content">
                                        <span className="price">
                                        <bdi>388.888<span class="woocommerce-Price-currencySymbol">₫</span></bdi>
                                        </span>
                                    </div>
                                </div>
                                <div data-product_id="14799" data-variant_id="14809" className="btn-order">MUA NGAY</div>
                            </li>
                        </ul>
                    </div>
                    <div className="module-content-more">
                        <a className="btn text-primary d-inline-flex align-items-center" href="https://teddy.vn/gau-bong-ngay-8-3">
                            Xem thêm {title} 
                        </a>
                    </div>
                </section>
        </body>
  );
}

export default ContentItems;
