import React, { Component } from 'react'
import EditButton from './Item/EditButton.js';
import DeleteButton from './Item/DeleteButton.js';
import ItemShow from './Item/ItemShow.js';
import UpdateButton from './Item/UpdateButton.js';
import BulletItem from './BulletItem.js';
import AddBulletButton from './Item/AddBulletButton.js'

class Item extends Component {

    constructor(props) {
        super(props);
        this.state = { experienceUpdate: { bullet: [] }, edittable: false };
    }

    componentDidMount() {
        const experienceUpdate = this.props.experience
        this.setState({ experienceUpdate });
    }

    handleEdit = e => {
        this.setState({ edittable: true });
    }

    handleChange = e => {
        const experienceUpdate = this.state.experienceUpdate;;
        experienceUpdate[e.target.name] = e.target.value;
        this.setState({ experienceUpdate });
    }

    handleBulletChange = (index, e) => {
        const experienceUpdate = this.state.experienceUpdate;;
        experienceUpdate.bullet[index] = e.target.value;
        this.setState({ experienceUpdate });
    }

    handleBulletAdd = e => {
        const experienceUpdate = this.state.experienceUpdate;;
        const bullet = experienceUpdate.bullet
        experienceUpdate.bullet = [...bullet, ''];
        this.setState({ experienceUpdate });
    }

    handleBulletDelete = (index, e) => {
        const experienceUpdate = this.state.experienceUpdate;
        const bullet = experienceUpdate.bullet
        bullet.splice(index, 1);
        this.setState({ experienceUpdate });
    }

    handleUpdate = e => {
        e.preventDefault();
        this.setState({ edittable: false });
    }


    render() {
        const { deleteexperience, userID, updateexperience, experience } = this.props;
        const { experienceUpdate, edittable } = this.state;
        const ExperienceItem =
            <div>
                {!edittable
                    ? <EditButton
                        handleEdit={this.handleEdit}
                    />
                    : null
                }
                <DeleteButton
                    deleteexperience={deleteexperience}
                />
                <div className='form-group'>
                    <form onSubmit={this.handleUpdate}>
                        <ItemShow
                            edittable={edittable}
                            experienceUpdate={experienceUpdate}
                            experience = {experience}
                            handleChange={this.handleChange}
                        />
                        <div className='form-group mb-3'>
                            <AddBulletButton
                                handleBulletAdd={this.handleBulletAdd}
                                edittable={edittable}
                            />
                        </div>
                            <div className="form-group mb-3">
                                {experienceUpdate.bullet.map(
                                        (bullet, index) => (
                                            <BulletItem
                                                key={`bulletAdd${index}`}
                                                handleBulletChange={this.handleBulletChange.bind(this, index)}
                                                handleBulletDelete={this.handleBulletDelete.bind(this, index)}
                                                bullet={bullet}
                                                index={index}
                                                edittable = {edittable}
                                            />
                                        ))
                                    }
                                </div>
                                    {!edittable ? null
                                        : <UpdateButton
                                           updateexperience={updateexperience}
                                            experienceUpdate={experienceUpdate}
                                            experience={experience}
                                            userID={userID}
                                        />
                                    }
                                </form>
                            </div>
                        </div>



return (
            <div className='card card-body text-center' >
                            {ExperienceItem}
                            
                        </div>
                        )
                    }
                }
                
                export default Item;
