import React, { Component } from 'react';
import './FoodBox.css';

class FoodBox extends Component {
    state = {
        quantity: 1,
    }

    updateQuantity = value => {
        
        this.setState({
            quantity: value.target.value,
        });
    };

    displayFoods = () => {
        const foodsList = this.props.foods.map( (e,i) => {
            return (<div className="box" key={`food-${i+1}`}>
                        <article className="media">
                            <div className="media-left">
                                <figure className="image is-64x64">
                                <img src={e.image} />
                                </figure>
                            </div>
                            <div className="media-content">
                                <div className="content">
                                    <p>
                                        <strong>{e.name}</strong> <br />
                                        <small>{e.calories}</small>
                                    </p>
                                 </div>
                            </div>
                            <div className="media-right">
                                <div className="field has-addons">
                                    <div className="control">
                                        <input className="input" type="number" onChange={this.updateQuantity} value={this.state.quantity} />
                                    </div>
                                     <div className="control">
                                    <button className="button is-info">
                                        +
                                    </button>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
            )
        });
        return foodsList;
    }

    render () {
      return (
          <div>
              {this.displayFoods()}
          </div>
      );
    }
}

export default FoodBox;
