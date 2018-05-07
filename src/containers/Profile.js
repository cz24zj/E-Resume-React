import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchprofile, addprofile, updateprofile, deleteprofile } from '../store/actions/profile.js';
import Item from '../components/Profile/Item.js';
import AddForm from '../components/Profile/AddForm.js';


class Profile extends Component {

    componentDidMount() {
        this.props.fetchprofile(this.props.userID);
    }

    render() {
        const { profiles, updateprofile, addprofile, deleteprofile, userID } = this.props
        const ProfileList =
            profiles.map(profile =>
                <Item
                    key={`profile+${profile._id}`}
                    updateprofile={updateprofile}
                    deleteprofile={deleteprofile.bind(this, userID, profile._id)}
                    userID={userID}
                    profile={profile}
                />
            )
        return (
            <div className='container'>
            {profiles.length===0
            ?<AddForm
                    addprofile={addprofile}
                    userID={userID}
            />:null}
                {ProfileList}
            </div>
        )
    }

}

function mapStateToProps(state) {
    return {
        profiles: state.profile,
        userID: state.currentUser.user.id
    }
}

export default connect(mapStateToProps, { fetchprofile, addprofile, updateprofile, deleteprofile })(Profile);