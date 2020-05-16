import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './component/foodbox/FoodBox';
import Form from './component/form/Form';
import Search from './component/search/Search';
import { prettyDOM } from '@testing-library/react';

class App extends Component {
  
  state = {
    foodList: foods,
    displayList: foods,
    chart: {
      products: [],
    }
  }

  addFood = (name,calories,quantity,image) => {
    const newFood = {name: name, calories: calories, image: image, quantity: quantity};
    this.state.foodList.push(newFood);
    this.setState({
      foodList:this.state.foodList
    });
  }

  searchFood = (searchInput) => {
    const filteredList = this.state.foodList.filter(food => (
      food.name.toLowerCase().includes(searchInput.toLowerCase())
    ));

    this.setState({
      displayList: filteredList
    })
  }

  render () {
    return (
    <div className="App">
      <Search searchMethod={this.searchFood} />
      <div className="container-food">
        <FoodBox foods={this.state.displayList} />
        <Form method={this.addFood} />
      </div>
    </div>
    );
  }
}

export default App;
