import React, { Component } from 'react'
import EditButton from './Item/EditButton.js';
import DeleteButton from './Item/DeleteButton.js';
import ItemShow from './Item/ItemShow.js';
import UpdateButton from './Item/UpdateButton.js';

class Item extends Component {

    constructor(props) {
        super(props);
        this.state = { courseworkUpdate: {}, edittable: false };
    }

    componentDidMount() {
        const courseworkUpdate = this.props.coursework;
        this.setState({ courseworkUpdate });
    }

    handleEdit = e => {
        this.setState({ edittable: true });
    }

    handleChange = e => {
        const courseworkUpdate = this.state.courseworkUpdate;
        courseworkUpdate[e.target.name] = e.target.value;
        this.setState({ courseworkUpdate })
    }

    handleUpdate = e => {
        e.preventDefault();
        this.setState({ edittable: false });
    }

    render() {
        const { deletecoursework, userID, updatecoursework, coursework } = this.props;
        const { courseworkUpdate, edittable } = this.state;
        const CourseworkItem =
            <div>
                {!edittable
                    ? <EditButton
                        handleEdit={this.handleEdit}
                    />
                    : null
                }
                <DeleteButton
                    deletecoursework={deletecoursework}
                />
                <div className='form-group'>
                    <form onSubmit={this.handleUpdate}>
                        <ItemShow
                            edittable={edittable}
                            courseworkUpdate={courseworkUpdate}
                            coursework={coursework}
                            handleChange={this.handleChange}
                        />
                        {!edittable
                            ? null
                            : <UpdateButton
                                updatecoursework={updatecoursework}
                                courseworkUpdate={courseworkUpdate}
                                coursework={coursework}
                                userID={userID}
                            />
                        }
                    </form>
                </div>
            </div>



        return (
            <div className='card card-body text-center' >
                {CourseworkItem}
                </div>
        )
    }
}

export default Item;
