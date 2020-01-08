import React from 'react';
import '../public/stylesheets/app_odesk_air2.css';
import '../public/stylesheets/chat.css';
import '../public/stylesheets/chat-layout.css';
import { connect } from 'react-redux';
import NavBar from './NavBar';
import * as actions from '../actions/index';

import userService from '../actions/UserService';

class RoomChat extends React.Component {
  constructor(props) {
    super(props);
    this.reloadChatRoom = this.reloadChatRoom.bind(this);
    this.reloadStory = this.reloadStory.bind(this);
    this.handleSendMessage = this.handleSendMessage.bind(this);
    this.loadNewStory = this.loadNewStory.bind(this);
    this.handleMessageContent = this.handleMessageContent.bind(this);

    this.renderListChat = this.renderListChat.bind(this);
    this.renderRoomName = this.renderRoomName.bind(this);
    this.renderMessageItem = this.renderMessageItem.bind(this);
    this.renderListMessage = this.renderListMessage.bind(this);
    this.renderSendForm = this.renderSendForm.bind(this);

    this.reloadChatRoom();
  }

  componentDidMount() {
    this.reloadChatRoom();
    setInterval(this.reloadChatRoom, 10000);
    setInterval(this.reloadStory, 5000);
  }

  reloadChatRoom() {
    userService.getAllConverSation().then((data) => {
      console.log(data);
      if (data.code === 1) 
        this.props.reloadChatRoom(data.data);
    });
  }

  loadNewStory(event) {
    userService.getConverSation(event.currentTarget.dataset.id).then((data) => {
      console.log(data);
      if (data.code === 1) {
        this.props.handleReloadStory(data.data);
      }
    });
  }

  reloadStory() {
    if (this.props.chat.story) {
      userService.getConverSation(this.props.chat.story._id).then((data) => {
        if (data.code === 1) 
          this.props.handleReloadStory(data.data);
      });
    }
  }

  handleSendMessage(event) {
    event.preventDefault();
    var {me,message,story} = this.props.chat;
    userService.sendMessage(story._id,me._id,message).then((data)=> {
      if (data.code === 1){
        story.messages.push(data.data)
        this.props.handleMessageContent('');
        this.props.handleReloadStory(story);
      }
    })
  }

  handleMessageContent(event){
    const {value} = event.target;
    this.props.handleMessageContent(value);
  }

  renderListChat() {
    return (
      <div className="room-nav-body">
        <div className="fill room-nav-body-scrollable">
          <div className="room-list-container">
            <ul className="room-list proper" ng-if="!loading">
              {this.props.chat.roomList.length !== 0 ? this.props.chat.roomList.map((e, i) => {
                var avatar = "",username = "";
                if (this.props.chat.me.role === 0) {
                  avatar = e.tutor.avatar ?  e.tutor.avatar : '';
                  username = e.tutor.username;
                }
                if (this.props.chat.me.role === 1) {
                  avatar = e.learner.avatar ?  e.learner.avatar : '';
                  username = e.learner.username;
                }
                var event = new Date(e.updated_at);
                var datetime = event ? event.toLocaleString({ timeZone: 'UTC' }) : '----';
                return (
                  <li className="room-list-item room-list-item-expanded selected" key={i} value={e._id} data-id={e._id} onClick={this.loadNewStory} style={{marginBottom: '7px'}}>
                    <div>
                      <div className="room-list-item-div">
                        <eo-room-icon className="room-list-icon-span">
                          <div>
                            <div className="room-icon avatar-new avatar avatar-sm-42 user-presence-icon-photo sm-42 none">
                              <span className=" air-icon-users">
                              <img src={avatar} className="avatar avatar-sm-42 user-presence-icon-photo sm-42 offline"></img>
                              </span>
                              
                            </div>
                          </div>
                        </eo-room-icon>
                        <span className="room-list-name-span">
                          <span className="date">{datetime}</span>
                          <span>{username}</span>
                        </span>
                      </div>
                    </div>
                  </li>
                );
              }) : null}
            </ul>
          </div>
          <div className="col-xs-12 room-loading ng-hide">
            <span className="glyphicon-lg air-icon-loading" />
          </div>
        </div>
      </div>
    );
  }

  renderRoomName() {
    var roomName = 'Phòng chat';
    if (this.props.chat.me.role === 0) roomName = this.props.chat.story.tutor ?  this.props.chat.story.tutor.username : 'Phòng chat';
    if (this.props.chat.me.role === 1) roomName = this.props.chat.story.learner ?  this.props.chat.story.learner.username : 'Phòng chat';
    return (
      <header style={{ display: 'flex', margin: '0', alignItems: 'center' }} className="room-nav-header">
        <div className="room-header-name">
          <div className="room-name" style={{paddingLeft: '30px'}}>
            <h2 className="room-title-wrapper editable editable-click">{roomName}</h2>
          </div>
        </div>
      </header>
    );
  }

  renderMessageItem(message,i) {
    
    const event = new Date(message.timestamp*1000);
    var datetime = event.toLocaleString('vi', { timeZone: 'UTC' })
    return (
      <div className="story-wrapper" key={i}> 
        {/* <div className="room-timestamp" /> */}
        <div className="story-body-wrapper">
          <div className="story-body">
            <div className="story-user-message">
              <div className="story-icon">
                <img className="avatar avatar-sm-r " src={message.sender.avatar}>
                </img>
              </div>
              <span className="timestamp">
                <a className="text-muted" href="#" disabled>
                  <span className="time">{datetime}</span>
                </a>
              </span>
              <div className="story-author">
                <span>
                  <div>
                    <span>{this.props.chat.me._id === message.sender._id ? 'Tôi' : message.sender.username}</span>
                  </div>
                </span>
              </div>
              <div className="story-message">
                {message.content}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderListMessage() {
    return (
      <div >
        {this.props.chat.story.messages.length > 0 ? this.props.chat.story.messages.map((e, i) => {
          console.log(i);
          return this.renderMessageItem(e,i);
        }):null}
      </div>
    );
  }

  renderSendForm() {
    return (
      <div className="panel-body">
        <form className="ng-pristine ng-valid ng-submitted">
          <div className="msg-composer hide-arrow">
            <span className="msg-composer-section">
              <div className="form-control msg-composer-area">
                <div className="msg-composer-maxheight">
                  <div className="message-composer-box">
                    <div className="msg-composer-highlighter" style={{ height: '19px' }}>
                      <div />
                    </div>
                    <div className="msg-composer-highlighter" style={{ height: '19px' }}>
                      <div />
                    </div>
                    <textarea
                      rows="1"
                      className="msg-composer-input"
                      onChange={this.handleMessageContent}
                      value={this.props.chat.message}
                      style={{
                        display: 'block', overflow: 'hidden', overflowWrap: 'break-word', height: '19px',
                      }}
                    />
                  </div>
                </div>
              </div>
            </span>
            <span className="msg-composer-section msg-composer-send">
              <div>
                <button className="btn btn-primary m-0" type="submit" onClick={this.handleSendMessage}>Send</button>
              </div>
            </span>
          </div>
        </form>
      </div>
    );
  }

  render() {
    return (
      <div>
      <NavBar />
      <div className="off-canvas-content navbar-fixed-subnav">
      <div id="layout" className="layout">
        <div className="layout-page-content">
          <main className="main-container" id="main" style={{ height: 'calc(100% - 30px)',paddingTop: '40px' }}>
            <div className="row fill body" style={{ height: 'calc(100% - 60px)' }}>
              <div className="col-xs-12 fill app-body int-body">
                <div className="col-xs-12 fill app-body">
                  <div className="row fill">
                    <aside className="col-xs-12 col-sm-3 main-body-col" style={{ width: '300px' }}>
                      {this.renderListChat()}
                    </aside>
                    <div className="col-xs-12 col-sm-9 main-body-col d-none d-md-block" style={{ width: 'calc(100% - 300px)' }}>
                      <div className="room-body">
                        <div className="rooms-chat room-side-panel-closed">
                          <div className="rooms-chat-container room-air-card">
                            {this.renderRoomName()}
                            <div className="col-xs-12 room-chat-area">
                              <div className="room-chat-area-content">
                                <div className="story-box" style={{ width: 'calc(100% - 300px)' }}>
                                  <div className="story-panel">
                                    <div className="room-story-list">
                                      <div className="eo-scroll-continuum-container">
                                        <div className="room-viewport" tabIndex="0">
                                          <div className="content minimal-content">
                                            {this.renderListMessage()}
                                          </div>
                                        </div>
                                        <div className="loading-indicator" />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="composer-panel" style={{ height: '79px' }}>
                                    <div autoFocus="">
                                      {this.renderSendForm()}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  const { chat } = state;
  return {chat};
};
const mapDispatchToProps = (dispatch, props) => ({
  reloadChatRoom: (room) => {
    dispatch(actions.handleReloadChatRoom(room));
  },
  handleReloadStory: (story) => {
    dispatch(actions.handleReloadStory(story));
  },
  handleMessageContent: (mess) => {
    dispatch(actions.handleMessageContent(mess));
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(RoomChat);
