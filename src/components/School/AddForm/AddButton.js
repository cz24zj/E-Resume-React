import React, { Component } from 'react';

class AddButton extends Component {
    
    render() {
        const {addschool,userID,school,handleSubmit} = this.props;
        return (
            <form onSubmit = {handleSubmit}>
            <button type='submit' className="btn btn-outline-primary fa fa-plus border-0 mb-3" onClick={addschool.bind(this, userID, school)}></button>
            </form>
        );
    }
}

export default AddButton;