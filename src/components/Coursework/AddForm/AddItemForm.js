import React, { Component } from 'react';
import {CourseworkList} from '../../ResumeList';

class AddItemForm extends Component {
    render() {
        const {coursework,handleChange} = this.props;
        const courseworkItem = (
            CourseworkList.map((list, index) =>
                (
                    <div key={`courseworkaddli+${list}+${index}`} className='form-group mb-3'>
                        <div key={`courseworkAdddiv1+${list}+${index}`} className="input-group-prepend">
                            <span key={`courseworkAddspan1+${list}+${index}`} className="input-group-text text-capitalize" id="inputGroup-sizing-default">{list}</span>
                            <input className='form-control' placeholder='required' type='text' id="inputGroup-sizing-default"  key={`courseworkeditinput+${list}+${index}`} name={list} onChange={handleChange} value={coursework[list]} />
                        </div>
                    </div>))
        )
        return (
            <div>
            {courseworkItem}
            </div>
        );
    }
}

export default AddItemForm;