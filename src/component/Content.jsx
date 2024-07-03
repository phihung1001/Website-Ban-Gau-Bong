import React from "react";
import './Content.css'
import ContentItems from '../common/contentitems/ContentItems';
import HomeProductTitle from '../common/contentitems/HomeProductTitle';

const Content = () => {
    return (
        <div className="site-content">
            <div className="content-container">
                {/* Home Product Title */}
                <HomeProductTitle/>
                {/* Home Product   */}
                <ContentItems title="Gấu Bông Tặng Nàng" />
                <ContentItems title="Gấu Bông Teddy Cao Cấp" />
                <ContentItems title="Gấu Bông Teddy Khổng lồ" />
                <ContentItems title="Gấu Bông Hottrend" />
                <ContentItems title="Rồng Bông" />
                <ContentItems title="Gấu Bông Dễ Thương" />
                <ContentItems title="Best Gối Bông Ôm" />

                {/* Home Product Title */}
                <HomeProductTitle/>
            </div>
        </div>
    );
}

export default Content;