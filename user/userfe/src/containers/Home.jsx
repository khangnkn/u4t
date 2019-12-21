import React from 'react';
import '../public/stylesheets/air2-ng-cat.css';
import NavBar from './NavBar';
import Footer from './Footer';

import userService from '../actions/UserService';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.renderBanner = this.renderBanner.bind(this);
    this.renderOverview = this.renderOverview.bind(this);
    this.renderTopTeacher = this.renderTopTeacher.bind(this);
    this.renderSeach = this.renderSeach.bind(this);
    this.renderTinyInfor = this.renderTinyInfor.bind(this);
    this.state = {
      data: [],
    };
    console.log(this.state);
  }

  componentDidMount() {
    userService.loadTop4().then((data) => {
      this.setState({ data });
      console.log(this.state);
    });
  }

  renderBanner() {
    this.banner = (
      <section className="developers vs-bg-gray-lightest hero-with-image-section">
        <div className="container-visitor ">
          <div className="row">
            <div className="col-md-8 col-xs-12 col-sm-12 col-lg-7">
              <h1 className="display-3 m-lg-bottom" style={{ color: '#f17d2c' }}>Tìm kiếm các cơ hội việc làm và khóa học tốt tại Uber for Teacher</h1>
              <a
                className="btn btn-primary m-md-bottom m-0-bottom-md m-0-bottom-xl m-0-right-xs btn-block-sm"
                href="/register"
              >
                {' '}
Đăng ký ngay
              </a>
            </div>
          </div>
        </div>
      </section>
    );
    return this.banner;
  }

  renderOverview() {
    this.overview = (
      <section className="hiring-use-cases-section vs-bg-gray-lightest">
        <div className="container-visitor p-lg-top-bottom p-0-bottom-xs">
          <div className="row">
            <div className="title col-md-12 col-xl-3">
              <h2 className="d-none d-xl-block m-0"> Tìm kiếm các cơ hội việc làm và khóa học tốt: </h2>
            </div>
            <div className="item col-md-4 col-xl-3">
              <div
                className="use-case p-lg-left p-xs-top-bottom p-0-top-bottom-xs m-md-bottom m-0-bottom-md m-0-bottom-xl"
              >
                <h4 className="m-sm-bottom"> Đăng tải dễ dàng </h4>
                <p className="m-0"> Chúng tối đưa hồ sơ của bạn đến người học dễ dàng </p>
              </div>
            </div>
            <div className="item col-md-4 col-xl-3">
              <div
                className="use-case p-lg-left p-xs-top-bottom p-0-top-bottom-xs m-md-bottom m-0-bottom-md m-0-bottom-xl"
              >
                <h4 className="m-sm-bottom"> Tìm kiếm dễ dàng </h4>
                <p className="m-0">
                  {' '}
Người học có thể tìm kiếm người dạy phù hợp dựa theo tùy chọn
                </p>
              </div>
            </div>
            <div
              className="item col-md-4 col-xl-3 m-xlg-bottom m-0-bottom-md m-0-bottom-xl"
            >
              <div className="use-case p-lg-left p-xs-top-bottom p-0-top-bottom-xs">
                <h4 className="m-sm-bottom"> Quản lý dễ dàng </h4>
                <p className="m-0">
                  {' '}
U4T hỗ trợ quản lý thống kê lịch sử hợp đồng
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
    return this.overview;
  }

  renderTopTeacherItem(i, avatar, price, fullname, title, city, skills) {
    this.topTeacherItem = (
      <div key={i} className="fl-tile col-xl-3 col-md-5 col-sm-12 p-xs-top">
        <div className="vs-shadow-dark p-md-top p-lg-bottom p-sm-left-right text-left ng-scope">
          <div className="d-flex">
            <div className="text-center">
              <img
                alt="avatar"
                src={avatar}
                className="avatar d-block avatar-md m-0"
              />
              <p className="m-md-top text-center m-0-bottom">
                <strong className="font-14">
                  {' '}
$
                  {price}
                </strong>
                <small>/giờ</small>
              </p>
            </div>
            <div className="p-sm-left tile-text-part">
              <p className="d-block ellipsis fl-name">
                <small>
                  <strong>{fullname}</strong>
                </small>
              </p>
              <p className="m-sm-bottom tile-title vs-full-word-cut-text">{title}</p>
              <span className="d-block badge badge-top-rated top-rated-badge-height">
                <span aria-hidden="true" className="glyphicon air-icon-top-rated" />
                                Top rated
              </span>
              <small className="d-block m-xs-top vs-color-gray ellipsis p-xs-top p-0-top-xs">
                {city}
,Viet Nam
              </small>
            </div>
          </div>
          <hr className="m-sm-top-bottom" />
          <div className="skills-list-container m-xs-bottom m-0-bottom-xs">
            {skills.map((e, i) => (<div key={i}><span className="vs-full-word-cut-text o-tag-skill m-xs-right pull-left m-xs-bottom vs-o-tag-no-hover d-block vs-color-text">{e}</span></div>))}
          </div>
          <a href="/user/detail" className="btn btn-primary btn-sm btn-block-sm m-0-bottom m-md-top tile-cta-button">Thông tin chi tiết</a>
        </div>
      </div>
    );
    return this.topTeacherItem;
  }

  renderTopTeacher() {
    console.log(this.state);
    const { data } = this.state;

    this.topTeacher = (
      <section className="fl-carousel-section  ng-scope">
        <h2 className="display-1 m-xlg-top m-lg-bottom m-0-bottom text-center">Danh sách người dạy tiêu biểu</h2>
        <div className="d-none d-xl-block p-md-bottom" />
        <div className="vs-tab-content-container">
          <div className="vs-tab-content">
            <div className="container-visitor">
              <div className="d-none d-xl-block carousel-comp carousel ng-isolate-scope">
                <div className="carousel-inner">
                  <div className="item text-center ng-scope ng-isolate-scope active" style={{ height: '400px' }}>
                    <div className="d-flex p-xs-left-right p-sm-bottom row ng-scope">
                      {data.map((e, i) => this.renderTopTeacherItem(i, e.avatar, e.data.price, e.fullname, e.data.title, e.city.name, e.data.skills))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
    return this.topTeacher;
  }

  renderSeach() {
    this.search = (
      <section className="p-xxxlg-bottom">
        <div className="container-visitor ng-scope">
          <div className="row">
            <h2 data-qa="title" className="title display-1 col-md-12 text-center m-xlg-top m-xlg-bottom">Tìm kiếm người dạy phù hợp với yêu cầu của bạn</h2>
          </div>
          <div className="ng-dirty ng-valid-rest ng-valid">
            <div className="row">
              <div className="col-xs-12 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2 col-xl-6 col-xl-offset-3 ng-scope">
                <div className="text-center m-lg-top">
                  <div className="text-center m-lg-top">
                    <div>
                      <a
                        href="/search"
                        className="btn-block-sm btn-primary btn-submit btn m-0 btn m-0"
                      >
Tìm kiếm ngay

                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
    return this.search;
  }

  renderTinyInfor() {
    this.tinyInfo = (
      <section className="payroll-footer-link-section vs-bg-midnight-blue">
        <div className="container-visitor">
          <div className="row">
            <div className="col-xs-12">
              <div className="text-center p-md-top-bottom payroll-link">
                <small className="vs-color-gray-light">
                  Website Uber For Teacher đươc xây dựng để đem đến cho người dạy và người học những trải nghiệm tuyệt vời
                </small>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
    return this.tinyInfo;
  }

  render() {
    return (
      <div>
        <NavBar />
        <div className="off-canvas-content navbar-fixed-subnav">
          <div id="layout">
            <div id="main" role="main" style={{ overflow: 'auto' }}>
              {this.renderBanner()}
              {this.renderOverview()}
              {this.renderTopTeacher()}
              {this.renderSeach()}
              {this.renderTinyInfor()}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
