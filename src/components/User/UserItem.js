import React, { Component } from 'react';
import { Link, } from 'react-router-dom';
import defaultImg from '../../images/profileImg.png';
import Hover from '../Hover.js';
import MessageHoverForm from '../../containers/MessageHoverForm.js'

class UserItem extends Component {

    render() {
        const { outer } = Hover;
        const { user, fetchoneuser, } = this.props;
        const UserItem =
            <div className='card mb-5 border-info text-center ml-3 float-left' style={{ width: '300px', height: '450px' }} >
                <div style={outer}>
                    <img alt='User Img' src={user.profile[0] && user.profile[0].imageUrl ? user.profile[0].imageUrl : defaultImg}
                        className='card-img-top img-fluid' style={{ width: '300px', height: '200px' }} />
                    <MessageHoverForm userID={user._id} />
                </div>
                <h5 className="card-title mt-3">{`${user.profile[0] && user.profile[0].firstname ? user.profile[0].firstname : `Firstname`} ${user.profile[0] && user.profile[0].lastname ? user.profile[0].lastname : `Lastname`}`}</h5>
                <h4 className='card-subtitle mt-3'>{user.username}</h4>
                <p className="d-inline-block text-truncate card-text mt-3">{user.profile[0] && user.profile[0].description ? user.profile[0].description : `Description`}</p>
                <Link to={`user/${user._id}`} onClick={fetchoneuser.bind(this, user._id)}>See Description</Link>
            </div >
        return (
            <div>
                {UserItem}
            </div>
        );
    }
}

export default UserItem;