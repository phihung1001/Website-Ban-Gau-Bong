import React from "react";
import './Layer.css'
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
const Layer = () => {      
           const images = [
               "https://gaubongonline.vn/wp-content/uploads/2024/01/tet.png",
               "https://gaubongonline.vn/wp-content/uploads/2023/11/banner-thang12-3-jpg.webp",
               "https://gaubongonline.vn/wp-content/uploads/2023/11/banner-thang12-1-jpg.webp",
               "https://gaubongonline.vn/wp-content/uploads/2023/11/banner-thang12-2-jpg.webp",
           ];
      
           return (
               <div className="layer-site-slider">
               <Slide>
                   {images.map((images, index)=> (
                   <div className="each-slide-effect" key={index}>
                      <div style={{ 'backgroundImage': `url(${images})` }}> </div>
                   </div>
                   ))} 
               </Slide>
               </div>
           );
}
export default Layer