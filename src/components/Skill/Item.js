import React, { Component } from 'react'
import EditButton from './Item/EditButton.js';
import DeleteButton from './Item/DeleteButton.js';
import ItemShow from './Item/ItemShow.js';
import UpdateButton from './Item/UpdateButton.js';

class Item extends Component {

    constructor(props) {
        super(props);
        this.state = { skillUpdate: {}, edittable: false };
    }

    componentDidMount() {
        const skillUpdate = this.props.skill;
        this.setState({ skillUpdate });
    }

    handleEdit = e => {
        this.setState({ edittable: true });
    }

    handleChange = e => {
        const skillUpdate = this.state.skillUpdate;
        skillUpdate[e.target.name] = e.target.value;
        this.setState({ skillUpdate })
    }

    handleUpdate = e => {
        e.preventDefault();
        this.setState({ edittable: false });
    }

    render() {
        const { deleteskill, userID, updateskill, skill } = this.props;
        const { skillUpdate, edittable } = this.state;
        const SkillItem =
            <div>
                {!edittable
                    ? <EditButton
                        handleEdit={this.handleEdit}
                    />
                    : null
                }
                <DeleteButton
                    deleteskill={deleteskill}
                />
                <div className='form-group'>
                    <form onSubmit={this.handleUpdate}>
                        <ItemShow
                            edittable={edittable}
                            skillUpdate={skillUpdate}
                            skill={skill}
                            handleChange={this.handleChange}
                        />
                        {!edittable
                            ? null
                            : <UpdateButton
                                updateskill={updateskill}
                                skillUpdate={skillUpdate}
                                skill={skill}
                                userID={userID}
                            />
                        }
                    </form>
                </div>
            </div>



        return (
            <div className='card card-body text-center' >
                {SkillItem}
                {}
            </div>
        )
    }
}

export default Item;
