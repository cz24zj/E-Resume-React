import React, { Component } from 'react';
import {ExperienceList} from '../../ResumeList.js';

class ItemShow extends Component {
    render() {
        const {experienceUpdate,edittable,experience,handleChange} = this.props;
        const ExperienceItem  =  
        ExperienceList.map(
            (list, index) =>
                <div key={`experienceupdatediv1${index}`}>
                    {edittable ?
                        <div className='input-group mb-3' key={`experienceupdatediv2${index}`}>
                            <div className="input-group-prepend" key={`${index}experiencediv1`}>
                                <span className="input-group-text text-capitalize" id="inputGroup-sizing-default" key={`experiencespaninput${index}`}>{list}</span>
                            </div>
                            <input className='form-control'  placeholder='required' key={`experienceinputedit${index}`} name={list} onChange={handleChange} value={experienceUpdate[list]} />
                        </div>
                        :
                        <div key={`experienceupdatediv3${index}`}>
                            <div key={`experiencespandiv4+${index}`}>{experience[list]}</div>
                        </div>

                    }
                </div>
        )
        return (
            <div>
                {ExperienceItem}
            </div>
        );
    }
}

export default ItemShow;