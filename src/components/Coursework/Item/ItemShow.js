import React, { Component } from 'react';
import {CourseworkList} from '../../ResumeList.js';

class ItemShow extends Component {
    render() {
        const {courseworkUpdate,edittable,coursework,handleChange} = this.props;
        const CourseworkItem  =  
        CourseworkList.map(
            (list, index) =>
                <div key={`courseworkupdatediv1${index}`}>
                    {edittable ?
                        <div className='input-group mb-3' key={`courseworkupdatediv2${index}`}>
                            <div className="input-group-prepend" key={`${index}courseworkdiv1`}>
                                <span className="input-group-text text-capitalize" id="inputGroup-sizing-default" key={`courseworkspaninput${index}`}>{list}</span>
                            </div>
                            <input className='form-control'  placeholder='required' key={`courseworkinputedit${index}`} name={list} onChange={handleChange} value={courseworkUpdate[list]} />
                        </div>
                        :
                        <div key={`courseworkupdatediv3${index}`}>
                            <div key={`courseworkspandiv4+${index}`}>{coursework[list]}</div>
                        </div>

                    }
                </div>
        )
        return (
            <div>
                {CourseworkItem}
            </div>
        );
    }
}

export default ItemShow;