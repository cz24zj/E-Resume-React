import React, { Component } from 'react';

class BulletShow extends Component {
    render() {
        const {bullet} = this.props
        return (
        <div className='form-group'>
            <span className="input-group-text" id="inputGroup-sizing-default">{bullet}</span>
        </div>
        );
    }
}

export default BulletShow;