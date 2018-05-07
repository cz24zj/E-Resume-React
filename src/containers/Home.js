import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchuser } from '../store/actions/user.js';
import { fetchoneuser } from '../store/actions/oneuser.js'
import UserItem from '../components/User/UserItem.js'

class Home extends Component {

    componentDidMount() {
        this.props.fetchuser();
    }

    render() {
        const { user, fetchoneuser, } = this.props;
        const UserList = (
            user.map(user => (
                <UserItem
                    key={`user${user._id}`}
                    user={user}
                    fetchoneuser={fetchoneuser}
                />
            )
            ))
        return (
            <div className='container vw-100 vh-100'>
                {UserList}
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        currentUser: state.currentUser.user,
        user: state.user,
        oneuser: state.oneuser
    }
}

export default connect(mapStateToProps, { fetchoneuser, fetchuser })(Home);