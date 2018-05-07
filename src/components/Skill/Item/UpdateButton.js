import React, { Component } from 'react';

class UpdateButton extends Component {
    render() {
        const {updateskill,skillUpdate,skill,userID} = this.props
        return (
            <button className='btn btn-outline-dark border-0 fa fa-pencil' type='submit' onClick={updateskill.bind(this, userID, skill._id, skillUpdate)}></button>
        );
    }
}

export default UpdateButton;