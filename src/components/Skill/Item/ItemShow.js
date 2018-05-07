import React, { Component } from 'react';
import {SkillList} from '../../ResumeList.js';

class ItemShow extends Component {
    render() {
        const {skillUpdate,edittable,skill,handleChange} = this.props;
        const SkillItem  =  
        SkillList.map(
            (list, index) =>
                <div key={`skillupdatediv1${index}`}>
                    {edittable ?
                        <div className='input-group mb-3' key={`skillupdatediv2${index}`}>
                            <div className="input-group-prepend" key={`${index}skilldiv1`}>
                                <span className="input-group-text text-capitalize" id="inputGroup-sizing-default" key={`skillspaninput${index}`}>{list}</span>
                            </div>
                            <input className='form-control'  placeholder='required' key={`skillinputedit${index}`} name={list} onChange={handleChange} value={skillUpdate[list]} />
                        </div>
                        :
                        <div key={`skillupdatediv3${index}`}>
                            <div key={`skillspandiv4+${index}`}>{skill[list]}</div>
                        </div>

                    }
                </div>
        )
        return (
            <div>
                {SkillItem}
            </div>
        );
    }
}

export default ItemShow;