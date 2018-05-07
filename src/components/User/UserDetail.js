import React, { Component } from 'react';
import { ResumeList } from '../ResumeList.js';
import { ResumeArray } from '../ResumeList.js';

class UserDetail extends Component {

    render() {
        const { oneuser } = this.props;
        const Detail = ResumeList.map((type, index) => (
            <div key={`${index}cont${type}`} className='text-center'>
                <div className='font-weight-bold text-center mb-3 mt-3 text-capitalize' key={`${type}cont${index}`}>{type}</div>
                {oneuser[type].map((element, index1) => (
                    <div key={`card${index1}`} className='card mt-3 mb-3'>
                        {ResumeArray[index].map((list, index2) => (
                            list === 'bullet' ?
                                (element[list] ? element[list].map((bullet, index3) =>
                                    (<div key={`${list}${type}bullet ${index3}`} className='form-control'>{bullet}</div>))
                                    : null)
                                : (element[list] ? < div key={`${list}${index2}div2`} className='form-control' > {element[list]}</div>
                                    : null)
                        ))}
                    </div>
                ))}
            </div>
        ))

        return (
            <div>
                {Detail}
            </div>
        )
    }
}

UserDetail.defaultProps = {
    oneuser: {
        profile: [{}],
        school: [],
        experience: [],
        skill: [],
        coursework: [],
    }
}

export default UserDetail;