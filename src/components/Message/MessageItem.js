import React, { Component } from 'react';
import Moment from "react-moment";
import ReplyInput from './ReplyInput.js';
import { Link } from 'react-router-dom';

class MessageItem extends Component {
    constructor(props) {
        super(props);
        this.state = { replyInputBox: false }
    }

    handleReply = () => {
        this.setState({ replyInputBox: true })
    }

    handleClose = () => {
        this.setState({ replyInputBox: false })
    }

    handleHover = (e) => {
        const message = this.props.message;
        if (!message.beenread) {
            message.beenread = true;
            this.props.updatemessage(this.props.currentUser.id, message._id, message);
        }
    }

    render() {
        const { message, addmessage, deletemessage, currentUser, fetchoneuser } = this.props;
        const { replyInputBox} = this.state;
        const MessageItem =
            <div onMouseEnter={this.handleHover}
                style={!message.beenread ? { backgroundColor: '#cce0ff' } : { backgroundColor: 'white', transition: '0.5s' }}>
                <div className='mt-3 ml-3'>{message.text}</div>
                <button type='button' onClick={deletemessage} className='btn btn-outline-danger fa fa-times float-right' ></button>
                <div className='ml-3 float-right'>
                    {`From:`}
                    <Link className='text-primary' to={`/user/${message.user}`} onClick={fetchoneuser.bind(this, message.user)}>
                        {message.username}
                    </Link>
                </div>
                <Moment className="text-muted float-right" format="Do MMM YYYY">
                    {message.createAt}
                </Moment>
                <div>
                    <button type='button' className='btn btn-primary mt-3' onClick={this.handleReply}>Reply </button>
                    {replyInputBox
                        ? <div><button type="button" className="fa fa-times btn-outline-dark btn mb-2 float-right" aria-label="Close" onClick={this.handleClose}></button>
                            <ReplyInput currentUser={currentUser} userID={message.user} addmessage={addmessage} /></div>
                        : null
                    }
                </div>
            </div>

        return (
            <div className='mb-3 mt-3'>
                {MessageItem}
                <hr className='border-3' />
            </div>
        );
    }
}

MessageItem.defaultProps = {
    message: []
}

export default MessageItem;