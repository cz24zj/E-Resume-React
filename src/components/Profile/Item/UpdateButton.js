import React, { Component } from 'react';

class UpdateButton extends Component {
    render() {
        const {updateprofile,profileUpdate,profile,userID} = this.props
        return (
            <button className='btn btn-outline-dark border-0 fa fa-pencil' type='submit' onClick={updateprofile.bind(this, userID, profile._id, profileUpdate)}></button>
        );
    }
}

export default UpdateButton;