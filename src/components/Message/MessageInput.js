import React, { Component } from 'react';

class MessageInput extends Component {

    constructor(props) {
        super(props);
        this.state = { message: { text: '' } }
    }

    handleChange = e => {
        const message = {};
        message[e.target.name] = e.target.value;
        message.user = this.props.currentUser.id;
        message.beenread = false;
        message.username = this.props.currentUser.username
        this.setState({ message });
    }

    handleSend = (userID, message, e) => {
        this.props.addmessage(userID, message);
        this.setState({ message: { text: '' } });
    }

    render() {
        const { message } = this.state;
        const { userID } = this.props;
        const MessageInput =
            <div>
                <textarea type='text' name='text' className="form-control w-100 h-100 border-0 h-100" placeholder="Send a Message(required)" aria-label="Message" aria-describedby="basic-addon2"
                    onChange={this.handleChange} value={message.text} />
                <button type='submit' onClick={this.handleSend.bind(this, userID, message)} className='btn btn-outline-primary' >Send</button>
            </div>
        return (
            <div>
                {MessageInput}
            </div>
        );
    }
}

export default MessageInput;