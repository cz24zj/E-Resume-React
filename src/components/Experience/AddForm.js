import React, { Component } from 'react';
import AddItemForm from './AddForm/AddItemForm.js';
import ShowFormButton from './AddForm/ShowFormButton.js';
import AddButton from './AddForm/AddButton.js';
import AddBulletButton from './AddForm/AddBulletButton.js';
import BulletAddForm from './BulletAddForm.js'

class AddForm extends Component {

    constructor(props) {
        super(props);
        this.state = { experience: { bullet: [] }, showForm: false, };
    }

    handleAdd = () => {
        const showForm = !this.state.showForm
        this.setState({ showForm });
    };

    handleBulletAdd = () => {
        const experience = this.state.experience
        const bullet = experience.bullet;
        experience.bullet = [...bullet, ''];
        this.setState({ experience });
    }

    handleChange = e => {
        const experience = this.state.experience;
        experience[e.target.name] = e.target.value;
        this.setState({ experience })
    }

    handleBulletChange = (index, e) => {
        const experience = this.state.experience
        const bullet = experience.bullet;
        const bulletChange = bullet.map((bullet, i) => (
            (index === i) ? e.target.value : bullet
        ))
        experience.bullet = bulletChange;
        this.setState({ experience })
    }

    handleBulletDelete = (index, e) => {
        const experience = this.state.experience
        experience.bullet.splice(index, 1);
        this.setState({ experience });
    }

    handleSubmit = e => {
        e.preventDefault();
        this.setState({ experience: { bullet: [] }, showForm: false });
    }

    render() {
        const { addexperience, userID } = this.props
        const { experience, showForm } = this.state;
        const ExperienceAddForm =
            <div>
                <ShowFormButton
                    handleAdd={this.handleAdd}
                />
                {
                    showForm
                        ? <div>
                            <form className='form-group' onSubmit={this.handleSubmit}>
                                <AddItemForm
                                    experience={experience}
                                    handleChange={this.handleChange}
                                />
                                <div className='form-group mb-3'>
                                    <AddBulletButton
                                        handleBulletAdd={this.handleBulletAdd}
                                    />

                                    {experience.bullet.map((bullet, index) => (
                                        <BulletAddForm
                                            key={`bulletAdd${index}`}
                                            handleBulletChange={this.handleBulletChange.bind(this, index)}
                                            handleBulletDelete={this.handleBulletDelete.bind(this, index)}
                                            bullet={bullet}
                                            index={index}
                                        />


                                    ))}
                                </div>

                                <AddButton
                                    experience={experience}
                                    userID={userID}
                                    addexperience={addexperience}
                                />
                            </form>
                        </div>
                        : null
                }
            </div>

        return (
            <div className='container' style={{ marginTop: 100, marginBottom: 50, letterSpacing: 2 }}>
                {ExperienceAddForm}
            </div>

        )
    }
}



export default AddForm;