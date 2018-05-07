import React, { Component } from 'react';
import {ProfileList} from '../../ResumeList';

class AddItemForm extends Component {
    render() {
        const {profile,handleChange} = this.props;
        const profileItem = (
            ProfileList.map((list, index) =>
                (
                    <div key={`profileaddli+${list}+${index}`} className='form-group mb-3'>
                        <div key={`profileAdddiv1+${list}+${index}`} className="input-group-prepend">
                            <span key={`profileAddspan1+${list}+${index}`} className="input-group-text text-capitalize" id="inputGroup-sizing-default">{list}</span>
                            <input className='form-control' placeholder='required' type='text' id="inputGroup-sizing-default"  key={`profileeditinput+${list}+${index}`} name={list} onChange={handleChange} value={profile[list]} />
                        </div>
                    </div>))
        )
        return (
            <div>
            {profileItem}
            </div>
        );
    }
}

export default AddItemForm;