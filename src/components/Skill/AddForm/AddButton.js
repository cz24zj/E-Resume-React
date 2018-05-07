import React, { Component } from 'react';

class AddButton extends Component {
    
    render() {
        const {addskill,userID,skill,handleSubmit} = this.props;
        return (
            <form onSubmit = {handleSubmit}>
            <button type='submit' className="btn btn-outline-primary fa fa-plus border-0 mb-3" onClick={addskill.bind(this, userID, skill)}></button>
            </form>
        );
    }
}

export default AddButton;