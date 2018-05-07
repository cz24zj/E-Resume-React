import React, { Component } from 'react';

class DeleteButton extends Component {
    render() {
        const {deletecoursework} = this.props
        return (
            <button className='fa fa-times float-right btn btn-outline-danger border-0' type='submit' onClick={deletecoursework}></button>
        );
    }
}

export default DeleteButton;