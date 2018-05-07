import React, { Component } from 'react';
import profileImg from '../../../images/profileImg.png';

class Image extends Component {
    render() {
        const {profile} = this.props;
        return (
            <img className="mb-3 mt-3 mx-auto card-img-top rounded text-center w-25 h-25" src={profile.imageUrl ? profile.imageUrl : profileImg} alt="Profile" />
        );
    }
}

export default Image;