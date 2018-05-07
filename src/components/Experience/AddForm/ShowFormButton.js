import React, { Component } from 'react';

class ShowFormButton extends Component {
    
    render() {
        const {handleAdd} = this.props;
        return (
            <button className="fa fa-align-justify btn btn-secondary" type='button' onClick = {handleAdd} style={{ marginBottom: 25 }}>Add Experiences</button>
        );
    }
}

export default ShowFormButton;