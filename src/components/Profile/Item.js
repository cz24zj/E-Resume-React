import React, { Component } from 'react'
import EditButton from './Item/EditButton.js';
import ItemShow from './Item/ItemShow.js';
import UpdateButton from './Item/UpdateButton.js';
import Image from './Item/Image.js'

class Item extends Component {

    constructor(props) {
        super(props);
        this.state = { profileUpdate: {}, edittable: false };
    }

    componentDidMount() {
        const profileUpdate = this.props.profile;
        this.setState({ profileUpdate });
    }

    handleEdit = e => {
        this.setState({ edittable: true });
    }

    handleChange = e => {
        const profileUpdate = this.state.profileUpdate;
        profileUpdate[e.target.name] = e.target.value;
        this.setState({ profileUpdate })
    }

    handleUpdate = e => {
        e.preventDefault();
        this.setState({ edittable: false });
    }

    render() {
        const { deleteprofile, userID, updateprofile, profile } = this.props;
        const { profileUpdate, edittable } = this.state;
        const ProfileItem =
            <div>
                {!edittable
                    ? <EditButton
                        handleEdit={this.handleEdit}
                    />
                    : null
                }
                <Image profile = {profile}/>
                <div className='form-group'>
                    <form onSubmit={this.handleUpdate}>
                        <ItemShow
                            edittable={edittable}
                            profileUpdate={profileUpdate}
                            profile={profile}
                            handleChange={this.handleChange}
                        />
                      
                {!edittable
                            ? null
                            : <UpdateButton
                                updateprofile={updateprofile}
                                profileUpdate={profileUpdate}
                                profile={profile}
                                userID={userID}
                            />
                        }
                    </form>
                </div>
            </div>



        return (
            <div className='card card-body text-center' >
                {ProfileItem}
                {}
            </div>
        )
    }
}

export default Item;
