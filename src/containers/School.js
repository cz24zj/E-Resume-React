import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchschool, addschool, updateschool, deleteschool } from '../store/actions/school.js';
import Item from '../components/School/Item.js';
import AddForm from '../components/School/AddForm.js';


class School extends Component {

    componentDidMount() {
        this.props.fetchschool(this.props.userID);
    }

    render() {
        const { schools, updateschool, addschool, deleteschool, userID } = this.props
        const SchoolList =
            schools.map(school =>
                <Item
                    key={`school+${school._id}`}
                    updateschool={updateschool}
                    deleteschool={deleteschool.bind(this, userID, school._id)}
                    userID={userID}
                    school={school}
                />
            )
        return (
            <div className='container'>
                <AddForm
                    addschool={addschool}
                    userID={userID}
                />
                {SchoolList}
            </div>
        )
    }

}

function mapStateToProps(state) {
    return {
        schools: state.school,
        userID: state.currentUser.user.id
    }
}

export default connect(mapStateToProps, { fetchschool, addschool, updateschool, deleteschool })(School);