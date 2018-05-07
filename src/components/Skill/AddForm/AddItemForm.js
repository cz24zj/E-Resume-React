import React, { Component } from 'react';
import {SkillList} from '../../ResumeList';

class AddItemForm extends Component {
    render() {
        const {skill,handleChange} = this.props;
        const skillItem = (
            SkillList.map((list, index) =>
                (
                    <div key={`skilladdli+${list}+${index}`} className='form-group mb-3'>
                        <div key={`skillAdddiv1+${list}+${index}`} className="input-group-prepend">
                            <span key={`skillAddspan1+${list}+${index}`} className="input-group-text text-capitalize" id="inputGroup-sizing-default">{list}</span>
                            <input className='form-control' placeholder='required' type='text' id="inputGroup-sizing-default"  key={`skilleditinput+${list}+${index}`} name={list} onChange={handleChange} value={skill[list]} />
                        </div>
                    </div>))
        )
        return (
            <div>
            {skillItem}
            </div>
        );
    }
}

export default AddItemForm;