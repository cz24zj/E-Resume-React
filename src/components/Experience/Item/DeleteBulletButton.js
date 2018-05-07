import React, { Component } from 'react';

class DeleteBulletButton extends Component {
    render() {
        const { handleBulletDelete } = this.props
            return(
                <button className='fa fa-times float-right btn btn-outline-danger border-0' onClick={handleBulletDelete} type= 'button'></button>
            )
    }
}

export default DeleteBulletButton;