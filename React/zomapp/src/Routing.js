import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Component/Home/Home';
import Listing from './Component/Listing/listingApi';
import Details from './Component/details/details';
import PlaceOrder from './Component/booking/placeOrder';
import ViewOrder from './Component/booking/viewOrder';
import Login from './Component/login/login';
import Register from './Component/login/register';

const Routing = () => {
    return(
        <BrowserRouter>
            <div>
                    <Route exact path="/" component={Home}/>
                    <Route path="/listing/:mealId" component={Listing}/>
                    <Route path="/details" component={Details}/>
                    <Route path="/placeOrder/:restName" component={PlaceOrder}/>
                    <Route path="/viewBooking" component={ViewOrder}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={Register}/>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}

export default Routing;