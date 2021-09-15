import { Route, Switch } from 'react-router';
import Admin from '../../pages/Admin';
import Checkout from '../../pages/Checkout';
import Home from '../../pages/Home';
import ProductDetails from '../../pages/ProductDetails';
import ShoppingCart from '../../pages/ShoppingCart';

export default function ViewContainer () {
  return (
    <Switch>
        <Route exact path ="/" component={Home}/>
        <Route path ="/details/:productId" component={ProductDetails}/>
        <Route path ="/cart" component = {ShoppingCart}/>
        <Route path ="/checkout" component = {Checkout}/>
        <Route path ="/admin" component = {Admin}/>
    </Switch>
  )
}