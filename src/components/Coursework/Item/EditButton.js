import React, { Component } from 'react';

class EditButton extends Component {
    render() {
        const {handleEdit} = this.props;
        return (
            <button className='btn btn-outline-warning fa fa-edit float-left border-0' onClick={handleEdit}></button>
        );
    }
}

export default EditButton;