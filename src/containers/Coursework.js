import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchcoursework, addcoursework, updatecoursework, deletecoursework } from '../store/actions/coursework.js';
import Item from '../components/Coursework/Item.js';
import AddForm from '../components/Coursework/AddForm.js';


class Coursework extends Component {

    componentDidMount() {
        this.props.fetchcoursework(this.props.userID);
    }

    render() {
        const { courseworks, updatecoursework, addcoursework, deletecoursework, userID } = this.props
        const CourseworkList =
            courseworks.map(coursework =>
                <Item
                    key={`coursework+${coursework._id}`}
                    updatecoursework={updatecoursework}
                    deletecoursework={deletecoursework.bind(this, userID, coursework._id)}
                    userID={userID}
                    coursework={coursework}
                />
            )
        return (
            <div className='container'>
                <AddForm
                    addcoursework={addcoursework}
                    userID={userID}
                />
                {CourseworkList}
            </div>
        )
    }

}

function mapStateToProps(state) {
    return {
        courseworks: state.coursework,
        userID: state.currentUser.user.id
    }
}

export default connect(mapStateToProps, { fetchcoursework, addcoursework, updatecoursework, deletecoursework })(Coursework);