import React, { Component } from 'react';
import AddItemForm from './AddForm/AddItemForm.js';
import ShowFormButton from './AddForm/ShowFormButton.js';
import AddButton from './AddForm/AddButton.js';

class AddForm extends Component {

    constructor(props) {
        super(props);
        this.state = { school: {}, showForm: false };
    }

    handleAdd = () => {
        const showForm = !this.state.showForm
        this.setState({ showForm });
    };

    handleChange = e => {
        const school = this.state.school;
        school[e.target.name] = e.target.value;
        this.setState({ school })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.setState({ school: {}, showForm: false });
    }

    render() {
        const { addschool, userID } = this.props
        const { school, showForm } = this.state;
        const SchoolAddForm =
        <div>
            <ShowFormButton
                handleAdd={this.handleAdd}
            />
        {
            showForm
                ? <div>
                    <AddItemForm
                        school={school}
                        handleChange={this.handleChange}
                    />
                    <AddButton
                        school={school}
                        userID={userID}
                        addschool={addschool}
                        handleSubmit={this.handleSubmit}
                    />
                </div>
                : null
        }
        </div>
        return (
            <div className='container' style={{ marginTop: 100, marginBottom: 50, letterSpacing: 2 }}>
                {SchoolAddForm}
                </div>

        )
    }
}



export default AddForm;