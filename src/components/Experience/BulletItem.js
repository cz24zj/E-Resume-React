import React, { Component } from 'react';
import AddBulletForm from './Item/AddBulletForm.js';
import BulletShow from './Item/BulletShow.js';
import DeleteBulletButton from './Item/DeleteBulletButton.js'

class BulletItem extends Component {
    render() {
        const { edittable, handleBulletChange, handleBulletDelete, bullet ,index} = this.props;
        return (
            <div>
                {edittable
                    ? <div>
                        < AddBulletForm
                            handleBulletChange={handleBulletChange}
                            index = {index}
                            bullet = {bullet}
                        />
                        <DeleteBulletButton
                            handleBulletDelete={handleBulletDelete}
                        />
                    </div>
                    : <BulletShow bullet={bullet} />
                }
            </div>
        )
    }
}

export default BulletItem;