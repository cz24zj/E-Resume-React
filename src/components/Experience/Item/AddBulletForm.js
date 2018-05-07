import React, { Component } from 'react';

class AddBulletForm extends Component {
    render() {
        const { handleBulletChange, bullet,index } =this.props
        return (
            <div className='input-group mb-3'>
                <div className="input-group-prepend" >
                    <span className="input-group-text" id="inputGroup-sizing-default">{index + 1}</span>
                </div>
                <input className="form-control"  required = 'required' placeholder='required' onChange={handleBulletChange} value={bullet} />
            </div>
        )
    }
}

export default AddBulletForm;