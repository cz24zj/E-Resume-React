import React, { Component } from 'react';

class AddBulletButton extends Component {
    render() {
        const { handleBulletAdd ,edittable} = this.props;
        return (
            <div className="input-group-prepend">
                <span className="input-group-text mb-3" id="inputGroup-sizing-default">Bullets</span>
                {edittable
                    ? <button className=" fa fa-plus-circle btn btn-outline-primary border-0 mb-3" type='button' onClick={handleBulletAdd}></button>
                    : null}
            </div>
        );
    }
}

export default AddBulletButton;