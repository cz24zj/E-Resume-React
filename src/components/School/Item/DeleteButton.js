import React, { Component } from 'react';

class DeleteButton extends Component {
    render() {
        const {deleteschool} = this.props
        return (
            <button className='fa fa-times float-right btn btn-outline-danger border-0' type='submit' onClick={deleteschool}></button>
        );
    }
}

export default DeleteButton;