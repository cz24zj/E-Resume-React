import React, { Component } from 'react';

class DeleteButton extends Component {
    render() {
        const {deleteexperience} = this.props
        return (
            <button className='fa fa-times float-right btn btn-outline-danger border-0' type='submit' onClick={deleteexperience}></button>
        );
    }
}

export default DeleteButton;