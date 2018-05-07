import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchskill, addskill, updateskill, deleteskill } from '../store/actions/skill.js';
import Item from '../components/Skill/Item.js';
import AddForm from '../components/Skill/AddForm.js';


class Skill extends Component {

    componentDidMount() {
        this.props.fetchskill(this.props.userID);
    }

    render() {
        const { skills, updateskill, addskill, deleteskill, userID } = this.props
        const SkillList =
            skills.map(skill =>
                <Item
                    key={`skill+${skill._id}`}
                    updateskill={updateskill}
                    deleteskill={deleteskill.bind(this, userID, skill._id)}
                    userID={userID}
                    skill={skill}
                />
            )
        return (
            <div className='container'>
                <AddForm
                    addskill={addskill}
                    userID={userID}
                />
                {SkillList}
            </div>
        )
    }

}

function mapStateToProps(state) {
    return {
        skills: state.skill,
        userID: state.currentUser.user.id
    }
}

export default connect(mapStateToProps, { fetchskill, addskill, updateskill, deleteskill })(Skill);