import React, { Component } from 'react';
import AddItemForm from './AddForm/AddItemForm.js';
import ShowFormButton from './AddForm/ShowFormButton.js';
import AddButton from './AddForm/AddButton.js';

class AddForm extends Component {

    constructor(props) {
        super(props);
        this.state = { skill: {}, showForm: false };
    }

    handleAdd = () => {
        const showForm = !this.state.showForm
        this.setState({ showForm });
    };

    handleChange = e => {
        const skill = this.state.skill;
        skill[e.target.name] = e.target.value;
        this.setState({ skill })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.setState({ skill: {}, showForm: false });
    }

    render() {
        const { addskill, userID } = this.props
        const { skill, showForm } = this.state;
        const SkillAddForm =
        <div>
            <ShowFormButton
                handleAdd={this.handleAdd}
            />
        {
            showForm
                ? <div>
                    <AddItemForm
                        skill={skill}
                        handleChange={this.handleChange}
                    />
                    <AddButton
                        skill={skill}
                        userID={userID}
                        addskill={addskill}
                        handleSubmit={this.handleSubmit}
                    />
                </div>
                : null
        }
        </div>
        return (
            <div className='container' style={{ marginTop: 100, marginBottom: 50, letterSpacing: 2 }}>
                {SkillAddForm}
                </div>

        )
    }
}



export default AddForm;