import React, { Component } from 'react';

class AddBulletButton extends Component {
    render() {
        const {handleBulletAdd} = this.props;
        return (
            <div className="input-group-prepend">
                <span className="input-group-text mb-3" id="inputGroup-sizing-default">BULLETS</span>
                <button onClick={handleBulletAdd} className='fa fa-plus-circle btn btn-outline-primary border-0 mb-3' type='button'></button>
            </div>
        );
    }
}

export default AddBulletButton;