import React, { Component } from 'react';

class UpdateButton extends Component {
    render() {
        const {updatecoursework,courseworkUpdate,coursework,userID} = this.props
        return (
            <button className='btn btn-outline-dark border-0 fa fa-pencil' type='submit' onClick={updatecoursework.bind(this, userID, coursework._id, courseworkUpdate)}></button>
        );
    }
}

export default UpdateButton;