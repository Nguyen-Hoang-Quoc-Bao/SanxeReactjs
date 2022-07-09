import React from 'react';
import PropTypes from 'prop-types'
import NewProduct from '../New-product';
import ListService from '../Service';
import Map from '../Map';
import './home.css'
import HotProduct from '../HotProduct';
import { useSelector } from 'react-redux';
function Home (props) {
    const {arrProduct} = props;
    const cart = useSelector(state => state.cart.list)

    return(
    <div className="home">
         <div className="container">
        <NewProduct  arrProduct={arrProduct}/>
        <h2>Hot Product</h2>
        <HotProduct  arrProduct={arrProduct}/>
        <ListService />
        <Map />
        </div>
    </div>
    )
}

Home.propTypes = {
    arrProduct: PropTypes.array
}
export default Home;