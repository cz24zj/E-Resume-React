import React, { Component } from 'react';

class DeleteBulletButton extends Component {
    render() {
        const {handleBulletDelete} = this.props
        return (
            <button className='fa fa-times btn btn-outline-danger border-0' type='button' onClick={handleBulletDelete}></button>
        );
    }
}

export default DeleteBulletButton;