import React, { Component } from 'react';

class AddButton extends Component {
    
    render() {
        const {addcoursework,userID,coursework,handleSubmit} = this.props;
        return (
            <form onSubmit = {handleSubmit}>
            <button type='submit' className="btn btn-outline-primary fa fa-plus border-0 mb-3" onClick={addcoursework.bind(this, userID, coursework)}></button>
            </form>
        );
    }
}

export default AddButton;