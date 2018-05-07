import React, { Component } from 'react';

class AddButton extends Component {
    
    render() {
        const {addexperience,userID,experience} = this.props;
        return (
            <button type='submit' className="btn btn-outline-primary fa fa-plus border-0 mb-3" onClick={addexperience.bind(this, userID, experience)}></button>
            
        );
    }
}

export default AddButton;