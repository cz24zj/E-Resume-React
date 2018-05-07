import React, { Component } from 'react';

class UpdateButton extends Component {
    render() {
        const {updateexperience,experienceUpdate,experience,userID} = this.props
        return (
            <button className='btn btn-outline-dark border-0 fa fa-pencil' type='submit' onClick={updateexperience.bind(this, userID, experience._id, experienceUpdate)}></button>
        );
    }
}

export default UpdateButton;