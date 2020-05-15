import React, { Component } from 'react';
import './Search.css';

class Search extends Component {

    state = {
        searchInput: ''
    }

    onChange = e => {
        this.setState({
          searchInput: e.target.value,
        }, () => {
          this.props.searchMethod(this.state.searchInput);
        });
      }

    render () {

        return (
            <div className="search">
                <label>Search your food:  </label>
                <input type="text" name="search" value={this.state.searchInput} onChange={(e) => this.onChange(e)}></input>
            </div>
        );
    }
}

export default Search