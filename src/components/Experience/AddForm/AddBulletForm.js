import React, { Component } from 'react';

class AddBulletForm extends Component {
    render() {
        const { bullet, index,handleBulletChange } = this.props;
        return (
            <div className = 'input-group mb-3'>
                <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-default">{index + 1}</span>
                </div>
                <input placeholder='required' className="form-control" onChange={handleBulletChange} id="inputGroup-sizing-default" type='text' value={bullet} />
            </div>
        )
    }
}

export default AddBulletForm;