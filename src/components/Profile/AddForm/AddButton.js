import React, { Component } from 'react';

class AddButton extends Component {
    
    render() {
        const {addprofile,userID,profile,handleSubmit} = this.props;
        return (
            <form onSubmit = {handleSubmit}>
            <button type='submit' className="btn btn-outline-primary fa fa-plus border-0 mb-3" onClick={addprofile.bind(this, userID, profile)}></button>
            </form>
        );
    }
}

export default AddButton;