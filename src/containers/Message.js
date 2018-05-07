import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchmessage, updatemessage, addmessage, deletemessage } from '../store/actions/message.js';
import { fetchoneuser } from '../store/actions/oneuser.js'
import MessageItem from '../components/Message/MessageItem.js'


class Message extends Component {

    componentDidMount() {
        this.props.fetchmessage(this.props.currentUser.id);
    }

    render() {

        const { messages, currentUser, deletemessage, updatemessage, addmessage, fetchoneuser } = this.props;
        const messageList =
            messages.map((message,index) => (
                <MessageItem
                    key={`message${message._id}`}
                    message={message}
                    currentUser={currentUser}
                    deletemessage={deletemessage.bind(this,currentUser.id,message._id)}
                    updatemessage={updatemessage}
                    addmessage={addmessage}
                    fetchoneuser = {fetchoneuser}
                />
            )

            )
        return (
            <div className='container'>
                {messageList}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        messages: state.message,
        currentUser: state.currentUser.user,
        oneuser: state.oneuser
    }
}

Message.defaultProps = {
    messages: []
}

export default connect(mapStateToProps, { fetchoneuser, fetchmessage, addmessage, deletemessage, updatemessage })(Message);