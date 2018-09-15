import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import { DISHES }  from '../shared/dishes.js';
import {DishDetail}  from './DishDetailComponent';

class Main extends Component {

    constructor(props) {
      super(props);

      this.state = {
        dishes: DISHES,
        selectedDish: null
      };

      console.log("Main Constructor invoked");
    }

    onDishSelect(dishId){
        this.setState({selectedDish: dishId});
    }

    render() {
        return ( 
          <div>
            <Navbar dark color = "primary">
              <div className = "container">
                <NavbarBrand href = "/">Ristorante Con Fusion</NavbarBrand> 
              </div> 
            </Navbar> 
            <Menu dishes={this.state.dishes} 
                onClk={(dishId) => this.onDishSelect(dishId)}/>
            <DishDetail 
                dish={this.state.dishes.filter((dish)=> dish.id === this.state.selectedDish)[0]}/>
          </div>
        );
    }
}

export default Main;