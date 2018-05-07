import React, { Component } from 'react';
import DeleteBulletButton from './AddForm/DeleteBulletButton.js';
import AddBulletForm from './AddForm/AddBulletForm.js';

class BulletAddForm extends Component {
    render() {
        const {index,bullet,handleBulletChange,handleBulletDelete} = this.props;
        return (
            <div className = 'input-group mb-3'>
                <AddBulletForm 
                handleBulletChange = {handleBulletChange}
                index = {index}
                bullet = {bullet}                
                />
                <DeleteBulletButton
                handleBulletDelete = {handleBulletDelete}
                />
            </div>
        );
    }
}

export default BulletAddForm;