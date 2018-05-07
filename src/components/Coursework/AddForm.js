import React, { Component } from 'react';
import AddItemForm from './AddForm/AddItemForm.js';
import ShowFormButton from './AddForm/ShowFormButton.js';
import AddButton from './AddForm/AddButton.js';

class AddForm extends Component {

    constructor(props) {
        super(props);
        this.state = { coursework: {}, showForm: false };
    }

    handleAdd = () => {
        const showForm = !this.state.showForm
        this.setState({ showForm });
    };

    handleChange = e => {
        const coursework = this.state.coursework;
        coursework[e.target.name] = e.target.value;
        this.setState({ coursework })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.setState({ coursework: {}, showForm: false });
    }

    render() {
        const { addcoursework, userID } = this.props
        const { coursework, showForm } = this.state;
        const CourseworkAddForm =
        <div>
            <ShowFormButton
                handleAdd={this.handleAdd}
            />
        {
            showForm
                ? <div>
                    <AddItemForm
                        coursework={coursework}
                        handleChange={this.handleChange}
                    />
                    <AddButton
                        coursework={coursework}
                        userID={userID}
                        addcoursework={addcoursework}
                        handleSubmit={this.handleSubmit}
                    />
                </div>
                : null
        }
        </div>
        return (
            <div className='container' style={{ marginTop: 100, marginBottom: 50, letterSpacing: 2 }}>
                {CourseworkAddForm}
                </div>

        )
    }
}



export default AddForm;