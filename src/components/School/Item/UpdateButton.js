import React, { Component } from 'react';

class UpdateButton extends Component {
    render() {
        const {updateschool,schoolUpdate,school,userID} = this.props
        return (
            <button className='btn btn-outline-dark border-0 fa fa-pencil' type='submit' onClick={updateschool.bind(this, userID, school._id, schoolUpdate)}></button>
        );
    }
}

export default UpdateButton;