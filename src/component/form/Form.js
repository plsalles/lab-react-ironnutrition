import React, {Component} from 'react';
import './Form.css';
import Input from '../input/Input';

class Form extends Component {


    // state = {
    //     showForm: false
       
    // }

    // toggleForm = () => {
    //     let formState = showForm
    //     this.setState ({
    //         showForm: !showForm
    //     })
    // }

    render () {
      
        return (
            <div>
                    {/* <button type="primary" onClick={() => this.toggleForm()}>Expand / Hide form</button>
                    {
                        this.state.showForm && <Input method={this.props.addFood} />
                    } */}
                    <Input method={this.props.method} />
            </div>
        );
    }
}

export default Form;