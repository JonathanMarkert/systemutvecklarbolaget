import React from 'react';
import { Route, Switch } from 'react-router';
import Admin from '../../pages/Admin';
import Home from '../../pages/Home';
import ProductDetails from '../../pages/ProductDetails';
import ShoppingCart from '../../pages/ShoppingCart';

export default function ViewContainer () {
  return (
    <Switch>
        <Route exact path ="/" component={Home}/>
        <Route path ="/details/:id" component={ProductDetails}/>
        <Route path ="/cart" component = {ShoppingCart}/>
        <Route path ="/admin" component = {Admin}/>
    </Switch>
  )
}