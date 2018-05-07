import React, { Component } from 'react';
import {SchoolList} from '../../ResumeList';

class AddItemForm extends Component {
    render() {
        const {school,handleChange} = this.props;
        const schoolItem = (
            SchoolList.map((list, index) =>
                (
                    <div key={`schooladdli+${list}+${index}`} className='form-group mb-3'>
                        <div key={`schoolAdddiv1+${list}+${index}`} className="input-group-prepend">
                            <span key={`schoolAddspan1+${list}+${index}`} className="input-group-text text-capitalize" id="inputGroup-sizing-default">{list}</span>
                            <input className='form-control' placeholder='required' type='text' id="inputGroup-sizing-default"  key={`schooleditinput+${list}+${index}`} name={list} onChange={handleChange} value={school[list]} />
                        </div>
                    </div>))
        )
        return (
            <div>
            {schoolItem}
            </div>
        );
    }
}

export default AddItemForm;