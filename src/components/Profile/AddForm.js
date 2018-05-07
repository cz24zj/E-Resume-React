import React, { Component } from 'react';
import AddItemForm from './AddForm/AddItemForm.js';
import ShowFormButton from './AddForm/ShowFormButton.js';
import AddButton from './AddForm/AddButton.js';

class AddForm extends Component {

    constructor(props) {
        super(props);
        this.state = { profile: {}, showForm: false };
    }

    handleAdd = () => {
        const showForm = !this.state.showForm
        this.setState({ showForm });
    };

    handleChange = e => {
        const profile = this.state.profile;
        profile[e.target.name] = e.target.value;
        this.setState({ profile })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.setState({ profile: {}, showForm: false });
    }

    render() {
        const { addprofile, userID } = this.props
        const { profile, showForm } = this.state;
        const ProfileAddForm =
        <div>
            <ShowFormButton
                handleAdd={this.handleAdd}
            />
        {
            showForm
                ? <div>
                    <AddItemForm
                        profile={profile}
                        handleChange={this.handleChange}
                    />
                    <AddButton
                        profile={profile}
                        userID={userID}
                        addprofile={addprofile}
                        handleSubmit={this.handleSubmit}
                    />
                </div>
                : null
        }
        </div>
        return (
            <div className='container' style={{ marginTop: 100, marginBottom: 50, letterSpacing: 2 }}>
                {ProfileAddForm}
                </div>

        )
    }
}



export default AddForm;