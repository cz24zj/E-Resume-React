import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addmessage } from '../store/actions/message';
import Hover from '../components/Hover.js';
import MessageInput from '../components/Message/MessageInput.js'


class MessageHoverForm extends Component {

    constructor(props) {
        super(props);
        this.state = { hover: false, messageInput: false };
    }

    showHoverDiv = e => {
        this.setState({ hover: true });
    }

    hideHoverDiv = e => {
        this.setState({ hover: false });
    }

    handleClick = () => {
        this.setState({ messageInput: true })
    }

    handleClose = () => {
        this.setState({ messageInput: false })
    }


    render() {
        const { hover, messageInput } = this.state;
        const { currentUser, addmessage, userID } = this.props;
        const { inner, normal, messageInputClick } = Hover;
        const MessageHoverForm =
            <div>
                <div onMouseEnter={this.showHoverDiv} onMouseLeave={this.hideHoverDiv} className='d-flex justify-content-center align-items-center'
                    style={hover ? inner : normal}>
                    <button data-toggle="tooltip" title='Send a Message!' data-placement="top" className='btn-outline-primary btn fa fa-comment' onClick={this.handleClick}></button>
                </div>
                {messageInput ?
                    <div className="form-group input-group-lg mb-3 border-dark w-50" style={messageInputClick}>
                        <button type="button" className="fa fa-times btn-outline-dark btn mb-2 float-right" aria-label="Close" onClick={this.handleClose}></button>
                        <MessageInput
                            currentUser={currentUser}
                            addmessage={addmessage}
                            userID={userID}
                        />
                    </div> : null}

            </div>
        return (
            <div>
                {MessageHoverForm}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        currentUser: state.currentUser.user
    }
}

export default connect(mapStateToProps, { addmessage })(MessageHoverForm);