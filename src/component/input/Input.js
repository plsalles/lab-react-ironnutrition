import React, {Component} from 'react';
import './Input.css';

class Input extends Component {
    
    state = {
        name: '',
        calories: 0,
        quantity: 0,
        image: ''
    }

    handleNameInput = (event) => {
        
        this.setState({
          name: event.target.value
        }, () => {
            console.log(this.state.name);
        })
    }

    handleCaloriesInput = (event) => {
        this.setState({
            calories: event.target.value
        })
    }

    handleQuantityInput = (event) => {
        this.setState({
            quantity: event.target.value
        })
    }

    handleImageInput = (event) => {
        this.setState({
            image: event.target.value
        })
    }

    render(){
        return (
          <div className="Input">
            <label>Name</label>
            <input type="text" name="name" value={this.state.name} onChange={(e) => this.handleNameInput(e)}></input>
            <label>Calories</label>
            <input type="number" name="calories" value={this.state.calories} onChange={(e) => this.handleCaloriesInput(e)}></input>
            <label>Image</label>
            <input type="text" name="image" value={this.state.image} onChange={(e) => this.handleImageInput(e)}></input>
            <label>Quantity</label>
            <input type="number" name="quantity" value={this.state.quantity} onChange={(e) => this.handleQuantityInput(e)}></input>
            <button type="primary" onClick={(e) => this.props.method(this.state.name,this.state.calories,this.state.quantity,this.state.image)}>Add new food</button>
          </div>
        );
        }
}

export default Input;