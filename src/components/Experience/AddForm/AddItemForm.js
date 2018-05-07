import React, { Component } from 'react';
import {ExperienceList} from '../../ResumeList';

class AddItemForm extends Component {
    render() {
        const {experience,handleChange} = this.props;
        const experienceItem = (
            ExperienceList.map((list, index) =>
                (
                    <div key={`experienceaddli+${list}+${index}`} className='form-group mb-3'>
                        <div key={`experienceAdddiv1+${list}+${index}`} className="input-group-prepend">
                            <span key={`experienceAddspan1+${list}+${index}`} className="input-group-text text-capitalize" id="inputGroup-sizing-default">{list}</span>
                            <input className='form-control' placeholder='required' type='text' id="inputGroup-sizing-default"  key={`experienceeditinput+${list}+${index}`} name={list} onChange={handleChange} value={experience[list]} />
                        </div>
                    </div>))
        )
        return (
            <div>
            {experienceItem}
            </div>
        );
    }
}

export default AddItemForm;