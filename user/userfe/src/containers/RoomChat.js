import React from 'react';
import '../public/stylesheets/app_odesk_air2.css';

import * as actions from '../actions/index';

import userService from '../actions/UserService';

class RoomChat extends React.Component {
  constructor(props) {
    super(props);
    this.reloadChatRoom = this.reloadChatRoom.bind(this);
  }

  componentDidMount() {
    setInterval(this.reloadChatRoom, 10000);
    setInterval(this.reloadStory, 5000);
  }

  reloadRoomUserList() {
    userService.reloadChatRoom(this.props.chat.mess.by._id).then((data) => {
      this.props.reloadChatRoom(data);
    });
  }

  reloadChatRoom = () => {
    console.log("on reload");
  }

  loadNewStory(room) {
    userService.loadStory(room).then((data) => {
      this.props.loadStory(data);
    });
  }

  reloadStory() {
    if (this.props.chat.story) {
      userService.loadStory(this.props.chat.story._id).then((data) => {
        this.props.loadStory(data);
      });
    }
  }

  handleSendMessage(event) {
    const { value } = event.target;
    this.props.handleSendMessage(value);
  }

  renderListChat() {
    return (
      <div className="room-nav-body">
        <div className="fill room-nav-body-scrollable">
          <div className="room-list-container">
            <ul className="room-list proper" ng-if="!loading">
              <li className="room-list-item room-list-item-expanded selected">
                <div>
                  <div className="room-list-item-div">
                    <eo-room-icon className="room-list-icon-span">
                      <div>
                        <div className="room-icon avatar-new avatar avatar-sm-42 user-presence-icon-photo sm-42 none">
                          <span className="glyphicon air-icon-users glyphicon-md" />
                        </div>
                      </div>
                    </eo-room-icon>
                    <span className="room-list-name-span">
                      <span className="date">3:39 PM</span>
                      <span>aa</span>
                    </span>
                  </div>
                </div>
              </li>
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
    return (
      <header style={{ display: 'flex', margin: '0', alignItems: 'center' }} className="room-nav-header">
        <div className="room-header-name">
          <div className="room-name">
            <h2 className="room-title-wrapper editable editable-click">GiaoVien</h2>
          </div>
        </div>
      </header>
    );
  }

  renderMessageItem() {
    return (
      <div>
        <div className="room-timestamp" />
        <div className="story-body-wrapper">
          <div className="story-body">
            <div className="story-user-message">
              <div className="story-icon">
                <div className="avatar avatar-sm-r user-presence-icon-photo sm-r online" style={{ backgroundImage: 'none' }}>
                  <span>
                    <div className="photo-tip-container">
                      <div className="popover right fade in photo-tip">
                        <div className="arrow" />
                        <div className="popover-inner">
                          <div className="popover-content" />
                        </div>
                      </div>
                    </div>
                  </span>
                </div>
              </div>
              <span className="timestamp">
                <a className="text-muted" href="/" disabled>
                  <span className="time">3:39 PM</span>
                </a>
              </span>
              <div className="story-author">
                <span>
                  <div>
                    <span>Me</span>
                  </div>
                </span>
              </div>
              <div className="story-message">
                                Muốn nói cái gì thì nói đi
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderListMessage() {
    return (
      <div className="story-wrapper" />
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
                <button className="btn btn-primary m-0" disabled="disabled">Send</button>
              </div>
            </span>
          </div>
        </form>
      </div>
    );
  }

  renderRoom() {
    return (
      <div className="col-xs-12 col-sm-9 main-body-col d-none d-md-block" style={{ width: 'calc(100% - 300px)' }}>
        <div className="room-body">
          <div className="rooms-chat side-panel-closed">
            <div className="rooms-chat-container air-card">
              {this.renderRoomName()}
              <div className="col-xs-12 room-chat-area">
                <div className="room-chat-area-content">
                  <div className="story-box" style={{ width: 'calc(100% - 300px)' }}>
                    <div className="story-panel">
                      <div className="room-story-list">
                        <div className="eo-scroll-continuum-container">
                          <div className="viewport" tabIndex="0">
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
    );
  }

  render() {
    return (
      <div id="layout" className="layout">
        <div className="layout-page-content">
          <main className="main-container" id="main" style={{ height: 'calc(100% - 30px)' }}>
            <div className="row fill body" style={{ height: 'calc(100% - 60px)' }}>
              <div className="col-xs-12 fill app-body int-body">
                <div className="col-xs-12 fill app-body">
                  <div className="row fill">
                    <aside className="col-xs-12 col-sm-3 main-body-col" style={{ width: '300px' }}>
                      {this.renderListChat()}
                    </aside>
                    <div className="col-xs-12 col-sm-9 main-body-col d-none d-md-block" style={{ width: 'calc(100% - 300px)' }}>
                      <div className="room-body">
                        <div className="rooms-chat side-panel-closed">
                          <div className="rooms-chat-container air-card">
                            {this.renderRoomName()}
                            <div className="col-xs-12 room-chat-area">
                              <div className="room-chat-area-content">
                                <div className="story-box" style={{ width: 'calc(100% - 300px)' }}>
                                  <div className="story-panel">
                                    <div className="room-story-list">
                                      <div className="eo-scroll-continuum-container">
                                        <div className="viewport" tabIndex="0">
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
    );
  }
}
const mapStateToProps = (state) => {
  const { chat } = state;
  return chat;
};
const mapDispatchToProps = (dispatch, props) => ({
  reloadChatRoom: (room) => {
    dispatch(actions.handleReloadChatRoom(room));
  },
  reloadHandleMessage: (mess) => {
    dispatch(actions.handleMessageChatRoom(mess));
  },
});
export default RoomChat;
