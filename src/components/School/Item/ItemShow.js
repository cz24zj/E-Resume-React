import React, { Component } from 'react';
import {SchoolList} from '../../ResumeList.js';

class ItemShow extends Component {
    render() {
        const {schoolUpdate,edittable,school,handleChange} = this.props;
        const SchoolItem  =  
        SchoolList.map(
            (list, index) =>
                <div key={`schoolupdatediv1${index}`}>
                    {edittable ?
                        <div className='input-group mb-3' key={`schoolupdatediv2${index}`}>
                            <div className="input-group-prepend" key={`${index}schooldiv1`}>
                                <span className="input-group-text text-capitalize" id="inputGroup-sizing-default" key={`schoolspaninput${index}`}>{list}</span>
                            </div>
                            <input className='form-control'  placeholder='required' key={`schoolinputedit${index}`} name={list} onChange={handleChange} value={schoolUpdate[list]} />
                        </div>
                        :
                        <div className='input-group mb-3' key={`schoolupdatediv3${index}`}>
                            <span className="input-group-text text-capitalize" id="inputGroup-sizing-default" key={`schoolspanli${index}`}>{list}</span>
                            <div className='form-control' key={`schoolspandiv4+${index}`}>{school[list]}</div>
                        </div>

                    }
                </div>
        )
        return (
            <div>
                {SchoolItem}
            </div>
        );
    }
}

export default ItemShow;