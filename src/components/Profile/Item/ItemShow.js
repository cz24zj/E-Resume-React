import React, { Component } from 'react';
import {ProfileList} from '../../ResumeList.js';

class ItemShow extends Component {
    render() {
        const {profileUpdate,edittable,profile,handleChange} = this.props;
        const ProfileItem  =  
        ProfileList.map(
            (list, index) =>
                <div key={`profileupdatediv1${index}`}>
                    {edittable ?
                        <div className='input-group mb-3' key={`profileupdatediv2${index}`}>
                            <div className="input-group-prepend" key={`${index}profilediv1`}>
                                <span className="input-group-text text-capitalize" id="inputGroup-sizing-default" key={`profilespaninput${index}`}>{list}</span>
                            </div>
                            <textarea className='form-control' placeholder='required' key={`profileinputedit${index}`} name={list} onChange={handleChange} value={profileUpdate[list]} />
                        </div>
                        :
                        <div className='input-group mb-3' key={`profileupdatediv3${index}`}>
                            <span className="input-group-text text-capitalize" id="inputGroup-sizing-default" key={`profilespanli${index}`}>{list}</span>
                            <div className='form-control' key={`${index}div4`}>{profile[list]}</div>
                        </div>
                    }
                </div>
        )
        
        return (
            <div>
                {ProfileItem}
            </div>
        );
    }
}

export default ItemShow;