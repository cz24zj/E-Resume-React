import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchexperience, addexperience, updateexperience, deleteexperience } from '../store/actions/experience.js';
import Item from '../components/Experience/Item.js';
import AddForm from '../components/Experience/AddForm.js';


class Experience extends Component {

    componentDidMount() {
        this.props.fetchexperience(this.props.userID);
    }

    render() {
        const { experiences, updateexperience, addexperience, deleteexperience, userID } = this.props
        const ExperienceList =
            experiences.map(experience =>
                <Item
                    key={`experience+${experience._id}`}
                    updateexperience={updateexperience}
                    deleteexperience={deleteexperience.bind(this, userID, experience._id)}
                    userID={userID}
                    experience={experience}
                />
            )
        return (
            <div className='container'>
                <AddForm
                    addexperience={addexperience}
                    userID={userID}
                />
                {ExperienceList}
            </div>
        )
    }

}
 
function mapStateToProps(state) {
    return {
        experiences: state.experience,
        userID: state.currentUser.user.id
    }
}

export default connect(mapStateToProps, { fetchexperience, addexperience, updateexperience, deleteexperience })(Experience);