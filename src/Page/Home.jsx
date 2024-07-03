import Header from '../common/header/Header';
import Layer from '../component/Layer';
import Footer from '../common/footer/Footer';
import React from "react";
import Content from '../component/Content';

const Home =() => {
   return (
      <>
    <div> <Header/></div>
     <div><Layer/> </div>
     <div><Content/></div>
     <div> <Footer/></div>
    </>
  );
}

export default Home;
