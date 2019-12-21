import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
// import { Navbar } from 'react-bootstrap';
import {helperService} from '../actions/HelperService';

import './../public/stylesheets/air2.css';
import './../public/stylesheets/air2_1.css';
import './../public/stylesheets/footer.css';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.renderNav = this.renderNav.bind(this);
        this.renderSideBar = this.renderSideBar.bind(this);
        this.renderJobForm = this.renderJobForm.bind(this);
        this.renderFooter = this.renderFooter.bind(this);
        this.renderInforForm = this.renderInforForm.bind(this);
        this.renderOverviewForm = this.renderOverviewForm.bind(this);

        this.handleInforChange = this.handleInforChange.bind(this);
        this.handleDataChange = this.handleDataChange.bind(this);
        this.handleAvatarChange = this.handleAvatarChange.bind(this);
        this.handleSkillsChange = this.handleSkillsChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleStepChange = this.handleStepChange.bind(this);
        this.handleBack = this.handleBack.bind(this);
        this.handleNext = this.handleNext.bind(this);
    }

    componentDidMount() {
        helperService.loadSkills().then(skills => {
            this.setState(skills);
        })
        helperService.loadLevels().then(levels => {
            this.setState(levels);
        })
        helperService.loadCities().then(cities => {
            this.setState(cities);
        })
    }
    handleStepChange(step) {
        this.props.handleProfileStep(step);
    }
    handleInforChange(event) {
        const { name, value } = event.target;
        this.props.handleProfileInforChange(name, value);
    }

    handleDataChange(event) {
        const { name, value } = event.target;
        this.props.handleProfileDataChange(name, value);
    }
    handleSkillsChange(event) {
        const { name, value, checked } = event.target;
        this.props.handleProfileSkillChange(name, value, checked);
    }
    handleAvatarChange(event) {
        const imgFile = event.target.files[0];
        this.props.handleProfileAvatarChange(imgFile);
    }
    handleSubmit(event) {
        event.preventDefault();
        const { user } = this.props.profile;
        this.props.update(user);
    }
    handleBack(event) {
        // event.preventDefault();
        this.props.handleBack();
    }
    handleNext(event) {
        event.preventDefault();
        this.props.handleNext();
    }
    renderNav() {
        return (
            <nav aria-label="Navigation bar" className="navbar">
                <div className="container">
                    <div className="navbar-header">
                        <a href="/" className="nv-brand">U4T</a>
                    </div>
                    <div className="navbar-collapse">
                        <div slot="header-text" className="navbar-text navbar-right">
                            <p className="m-0-bottom">
                                <span>Logged in as {this.props.profile.user.username}</span>
                                <br />
                                <a href={this.props.logout()} className="navbar-link">Log out</a>
                            </p>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
    renderSideBar() {
        var w100 = { width: '100%' };
        var { step, currStep } = this.props.profile;
        var { role } = this.props.profile.user.infor;
        var ttct = () => {
            return (
                <li className={step === 1 ? "active" : ""} style={w100}>
                    <a href="">
                        <span aria-hidden="true" className="glyphicon m-0-left">
                            <i className="far fa-edit"></i>
                        </span>
                        Thông tin chi tiết
                    </a>
                    <div className="d-flex justify-content-end">
                        <span aria-hidden="true" className="completed-icon glyphicon completed">
                            <i className="fas fa-check "></i>
                        </span>
                    </div>
                </li>
            );
        };

        var ttcv = () => {
            return (
                <li className={step === 2 ? "active" : currStep < 2 ? "disabled" : ""} style={w100}>
                    <a href="">
                        <span aria-hidden="true" className="glyphicon m-0-left">
                            <i className="far fa-edit"></i>
                        </span>
                        Thông tin công việc
                    </a>
                    <div className="d-flex justify-content-end">
                        <span aria-hidden="true" className={currStep > 1 ? "completed-icon glyphicon completed" : "completed-icon glyphicon"}>
                            <i className="fas fa-check "></i>
                        </span>
                    </div>
                </li>
            );
        }

        var mtbt = () => {
            return (
                <li className={step === 3 ? "active" : currStep < 3 ? "disabled" : ""} style={w100}>
                    <a href="">
                        <span aria-hidden="true" className="glyphicon m-0-left">
                            <i className="far fa-edit"></i>
                        </span>
                        Mô tả bản thân
                    </a>
                    <div className="d-flex justify-content-end">
                        <span aria-hidden="true" className={"completed-icon glyphicon " + currStep > 2 ? "completed-icon glyphicon completed" : "completed-icon glyphicon"}>
                            <i className="fas fa-check "></i>
                        </span>
                    </div>
                </li>
            );
        }
        return (
            <div className="col-md-3 d-none d-md-block">
                <div className="fe-step-sidebar">
                    <div className="eo-tabset breadcrumbs">
                        <ul className="nav nav-pills nav-stacked">
                            {ttct()}
                            {role === 1 ? ttcv() : null}
                            {role === 1 ? mtbt() : null}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
    renderTitleForm() {
        let title;
        var profile = this.props.profile;
        var role = profile.user.infor.role;
        if (profile.step === 1) {
            title = 'Thông tin chi tiết';
        } else if (profile.step === 2) {
            title = 'Thông tin công việc'
        } else {
            title = 'Thông tin tổng quát'
        }
        var st = role === 1 ? 3 : 1;
        return (
            <div className="modal-header d-flex align-items-center d-none-mobile-app">
                <div>
                    <h2 data-qa="step-title" className="modal-title">{title}</h2>
                    <div className="text-muted">{profile.step} of {st}</div>
                </div>
            </div>
        );
    }
    renderFooterForm() {
        var role = this.props.profile.user.infor.role;
        var step = this.props.profile.step;
        var backBtn = () => {
            return (
                <Button className="btn pull-left btn-primary" onClick={this.handleBack}>Trở về</Button>
            );
        }
        var nextBtn = () => {
            return (
                <Button className="btn pull-right btn-primary" onClick={this.handleNext}>Tiếp</Button>
            );
        }
        var submitBtn = () => {
            return (
                <Button className="btn pull-right btn-primary" onClick={this.handleSubmit}>Cập nhật</Button>
            );
        }
        return (
            <div className="modal-footer">
                <div className="btn-row">
                    {step !== 1 ? backBtn() : role === 0 ? submitBtn() : null}
                    {step !== 3 ? role === 0 ? null : nextBtn() : role === 1 ? submitBtn() : null}
                </div>
            </div>
        );
    }
    renderInforForm() {
        var imageDefaultUrl = '../public/images/user.png';
        var url = this.props.profile.avatarPreviewUrl === '' ? imageDefaultUrl : this.props.profile.avatarPreviewUrl;
        return (
            <div data-qa="content" className="modal-body">
                <div className="d-flex justify-content-between flex-row">
                    <div className="center-block">
                        <img alt="" src={url} className="avatarPicture" />
                    </div>

                    <div className="center-block d-flex flex-column">
                        <span style={{ marginTop: "30px" }}>Thêm ảnh đại diện</span>
                        <div className="d-flex align-items-center">
                            <Form.Control onChange={this.handleAvatarChange} type="file" className="btn mr-0 btn-default" accept="image/*" />
                        </div>

                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-6 m-lg-bottom">
                        <div className="form-group">
                            <Form.Label className="">Họ tên</Form.Label>
                            <Form.Control type="text" onChange={this.handleInforChange} name="hoTen" className="form-control sessioncamexclude" />
                        </div>
                    </div>
                    <div className="col-sm-6 m-lg-bottom">
                        <div className="form-group">
                            <Form.Label className="">Giới tính</Form.Label>
                            <Form.Control as="select" onChange={this.handleInforChange} name="gioiTinh" className="form-control sessioncamexclude">
                                <option value='0'>Nam</option>
                                <option value='1'>Nữ</option>
                            </Form.Control>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6 m-lg-bottom">
                        <div className="form-group">
                            <Form.Label className="">Email</Form.Label>
                            <Form.Control onChange={this.handleInforChange} name="email" type="text" className="form-control sessioncamexclude" />
                        </div>
                    </div>
                    <div className="col-sm-6 m-lg-bottom">
                        <div className="form-group">
                            <Form.Label className="">Số điện thoại</Form.Label>
                            <Form.Control type="text" onChange={this.handleInforChange} name="sdt" className="form-control sessioncamexclude" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6 m-lg-bottom">
                        <div className="form-group">
                            <Form.Label className="">Địa chỉ</Form.Label>
                            <Form.Control type="text" onChange={this.handleInforChange} name="diaChi" className="form-control sessioncamexclude" />
                        </div>
                    </div>
                    <div className="col-sm-6 m-lg-bottom">
                        <div className="form-group">
                            <Form.Label className="">Tỉnh/Thành phố</Form.Label>
                            <Form.Control as="select" className="form-control sessioncamexclude" onChange={this.handleInforChange} name="ttp">
                                {this.state.cities.map((e, i) => {
                                    return (<option value={e._id} key={i}>e.name</option>);
                                })}
                            </Form.Control>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    renderJobForm() {
        return (
            <div className="modal-body">
                <div className="">
                    <h3>Thông tin về công việc</h3>
                    <div className="form-group">
                        <Form.Label className="">Trình độ</Form.Label>
                        <div className="dropdown width-lg fe-cat-height dropdown-block">
                            <Form.Control as='select' className="custom-select" onChange={this.handleDataChange} name="trinhDo">
                                {this.state.levels.map((e, i) => {
                                    return (<option value={e._id} key={i}>{e.name}</option>);
                                })}
                            </Form.Control>
                        </div>
                    </div>

                    <div className="form-group has-error">
                        <Form.Label className="">Các kỹ năng mà bạn muốn đăng ký dạy?</Form.Label>
                        <p className="text-muted">
                            Vui lòng chọn ít nhất một kỹ năng.
                        </p>
                        <div className="row" >
                            {this.states.skills.map((e, i) => {
                                return (
                                    <div className="checkbox col-md-6" key={i}>
                                        <Form.Label>
                                            <Form.Control type="checkbox" onChange={this.handleSkillsChange} name="kyNang" value={e._id} />
                                            <span className="checkbox-replacement-helper">
                                                <span aria-hidden="true" className="glyphicon ">
                                                    <i className="fas fa-check"></i>
                                                </span>
                                            </span>
                                            {e.name}
                                        </Form.Label>
                                    </div>
                                );
                            })}

                        </div>
                    </div>

                    <div className="form-group">
                        <div className="row">
                            <div className="col-md-7">
                                <strong className="m-0">Mức tiền: </strong>
                                <div className="m-sm-bottom text-muted">
                                    Số tiền thuê mà người học sẽ nhìn thấy
                                </div>
                            </div>
                            <div className="col-md-5 col-sm-7 col-xs-8">
                                <div className="d-flex align-items-center">
                                    <div className="has-feedback width-auto">
                                        <Form.Control placeholder="" type="tel" className="form-control width-xs text-right p-sm-right" value="0.00" onChange={this.handleDataChange} name="giaTien" />
                                        <span aria-hidden="true" className="glyphicon glyphicon-md air-icon-payment text-primary form-control-feedback"></span>
                                        <span id="input-el" className="sr-only"></span>
                                    </div>
                                    <span className="m-sm-left">/giờ</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    renderOverviewForm() {
        return (
            <div data-qa="content" className="modal-body">
                <p>Các thông tin bạn viết sẽ được hiển thị đối với người học.</p>
                <div className="form-group">
                    <Form.Label className="label-width-auto">Tiêu đề</Form.Label>
                    <div data-v-1e6776cd="" className="d-inline-block" >
                        <a href="">
                            <span className="glyphicon air-icon-question-circle"></span>
                        </a>
                    </div>
                    <Form.Control type="text" placeholder="Ví dụ: Admin Support,Java Developer" className="form-control" onChange={this.handleDataChange} name="tieuDe" />
                </div>
                <div className="form-group overview-box">
                    <Form.Label className="label-width-auto">Professional Overview</Form.Label>
                    <div className="up-disintermediation-container" >
                        <div>
                            <Form.Control as="textarea" rows="7" placeholder="Hãy mô tả tổng quan về bản thân,trình độ,kỹ thuật để người học hiểu rõ hơn về bạn." className="form-control" onChange={this.handleDataChange} name="tongQuan"></Form.Control>
                            <small className="m-xs-top text-muted pull-right"> </small>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    renderFooter() {
        return (
            <footer id="myFooter">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3">
                            <h5><a href="/">Trang chủ</a></h5>
                        </div>
                        <div className="col-sm-3">
                            <h5><a href="/login">Đăng nhập</a></h5>
                        </div>
                        <div className="col-sm-3">
                            <h5><a href="/register">Đăng kí</a></h5>
                        </div>
                        <div className="col-sm-3 info">
                            <h5>Information</h5>
                            <p> Đây là trang web dành cho freelancer</p>
                        </div>
                    </div>
                </div>
                <div className="second-bar">
                    <div className="container">
                        <h2 className="logo"><a href="/"> U4T </a></h2>
                        <div className="social-icons">
                            {/* <a href="#" className="twitter"><i className="fa fa-twitter"></i></a>
                    <a href="#" className="facebook"><i className="fa fa-facebook"></i></a>
                    <a href="#" className="google"><i className="fa fa-google-plus"></i></a> */}
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
    render() {
        // var userCookie = JSON.parse(localStorage.getItem('user'));
        // var role = parseInt(userCookie.data.user.account_type);
        var profile = this.props.profile;
        var step = profile.step;
        var requestIcon = < img alt="processing"
            src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />;
        return (
            <div className="off-canvas-container">
                <div className="off-canvas-content">
                    {this.renderNav()}
                    <main>
                        <div className="container p-lg-top-bottom">
                            <div className="row">
                                {this.renderSideBar()}
                                <div className="col-md-9">
                                    <div data-qa="step-container-2000" className="fe-step" sidebar-icon="project" sidebar-title="Expertise">
                                        <div>
                                            <div className="step-manager-modal">
                                                <div className="modal-content">
                                                    {alert.message &&
                                                        <div className={`alert ${alert.type} alert-app`}>{alert.message}</div>
                                                    }
                                                    {this.renderTitleForm()}
                                                    <div data-v-1b001e90="" className="progress m-0-bottom d-md-none progress-nodetails">
                                                        <div data-v-1b001e90="" aria-valuenow="0" aria-valuemin="0" aria-valuemax="9" role="progressbar" className="progress-bar" style={{ width: 0 }}>
                                                        </div>
                                                    </div>
                                                    <div className="modal-flex-container flex-1">
                                                        {step === 1 ? this.renderInforForm() : step === 2 ? this.renderJobForm() : this.renderOverviewForm()}
                                                        {this.renderFooterForm()}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                    {this.renderFooter()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { alert, profile } = state;
    return { alert, profile };
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        update: (user, token) => {
            dispatch(actions.update(user));
        },
        handleProfileInforChange: (name, value) => {
            dispatch(actions.handleProfileInforChange(name, value));
        },
        handleProfileDataChange: (name, value) => {
            dispatch(actions.handleProfiledDataChange(name, value));
        },
        handleProfileAvatarChange: (imgFile) => {
            dispatch(actions.handleProfileAvatarChange(imgFile));
        },
        handleStepChange: (step) => {
            dispatch(actions.handleProfileStepChange(step));
        },
        handleBack: () => {
            dispatch(actions.handleProfileStepBack());
        },
        handleNext: () => {
            dispatch(actions.handleProfileStepNext());
        },
        handleProfileSkillChange: (name, value, checked) => {
            dispatch(actions.handleProfileSkillChange(name, value, checked));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);