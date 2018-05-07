import React, { Component } from 'react'
import EditButton from './Item/EditButton.js';
import DeleteButton from './Item/DeleteButton.js';
import ItemShow from './Item/ItemShow.js';
import UpdateButton from './Item/UpdateButton.js';

class Item extends Component {

    constructor(props) {
        super(props);
        this.state = { schoolUpdate: {}, edittable: false };
    }

    componentDidMount() {
        const schoolUpdate = this.props.school;
        this.setState({ schoolUpdate });
    }

    handleEdit = e => {
        this.setState({ edittable: true });
    }

    handleChange = e => {
        const schoolUpdate = this.state.schoolUpdate;
        schoolUpdate[e.target.name] = e.target.value;
        this.setState({ schoolUpdate })
    }

    handleUpdate = e => {
        e.preventDefault();
        this.setState({ edittable: false });
    }

    render() {
        const { deleteschool, userID, updateschool, school } = this.props;
        const { schoolUpdate, edittable } = this.state;
        const SchoolItem =
            <div>
                {!edittable
                    ? <EditButton
                        handleEdit={this.handleEdit}
                    />
                    : null
                }
                <DeleteButton
                    deleteschool={deleteschool}
                />
                <div className='form-group'>
                    <form onSubmit={this.handleUpdate}>
                        <ItemShow
                            edittable={edittable}
                            schoolUpdate={schoolUpdate}
                            school={school}
                            handleChange={this.handleChange}
                        />
                        {!edittable
                            ? null
                            : <UpdateButton
                                updateschool={updateschool}
                                schoolUpdate={schoolUpdate}
                                school={school}
                                userID={userID}
                            />
                        }
                    </form>
                </div>
            </div>



        return (
            <div className='card card-body text-center' >
                {SchoolItem}
                {}
            </div>
        )
    }
}

export default Item;
