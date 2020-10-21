import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
// import Details from './Details';
import Filter from './FilterPage/Filter';
import Homepage from './Home/Homepage';
import RestDetails from './DetailsPage/RestDetails';
import OrderForms from './PlaceOrder/Form';
import OrderDisplay from './PlaceOrder/OrderDisplay';

const Router = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Homepage}></Route>
                {/* <Route path="/details/:id" component={Filter}></Route> */}
                <Route path="/filter/:id" component={Filter}></Route>
                <Route path="/rest/:id" component={RestDetails}></Route>
                <Route path="/placeOrder/:id" component={OrderForms}></Route>
                <Route path="/orderlist" component={OrderDisplay}></Route>
            </Switch>
        </BrowserRouter>
    )
}
export default Router;
