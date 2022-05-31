import React from 'react';
import Header from '../Header';
import NewProduct from '../New-product';
import Hot_product from '../Hot-product';
import Slider from '../Slider';
import ListService from '../Service';
import Map from '../Map';
import Footer from '../Footer';
import './home.css'
function Home () {
    return(
    <div className="home">
        <Header />
         <div className="container">
        <Slider />
        <NewProduct />
        <h2>Hot Product</h2>
        <Hot_product />
        <ListService />
        <Map />
        <Footer/>
        </div>
    </div>
    )
}
export default Home;