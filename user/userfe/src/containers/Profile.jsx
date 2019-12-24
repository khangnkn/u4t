import React from 'react';
import * as actions from '../actions/index';
import { helperService } from '../actions/HelperService';

import { connect } from 'react-redux';
import { Button, Form } from 'react-bootstrap';
import '../public/stylesheets/air2.css';
import '../public/stylesheets/air2_1.css';
import '../public/stylesheets/footer.css';
import '../public/stylesheets/auth.scss';
import SimpleReactValidator from 'simple-react-validator';

import NavBar from './NavBar';
import Footer from './Footer';


const Profile = (props) => {
    var validator = new SimpleReactValidator();
    var state;
    // var skills, levels, cities;
    var componentDidMount = () => {
        helperService.loadSkills().then((_skills) => {
            state.skills = _skills;
        });
        helperService.loadLevels().then((_levels) => {
            state.levels = _levels;
        });
        helperService.loadCities().then((_cities) => {
            state.cities = _cities;
        });
    }
    var componentWillReceiveProps = () => {
        validator.showMessages();
    }
    var handleStepChange = (step) => {
        props.handleProfileStep(step);
    }
    var handleInforChange = (event) => {
        const { name, value } = event.target;
        props.handleProfileInforChange(name, value);
    }
    var handleDataChange = (event) => {
        const { name, value } = event.target;
        props.handleProfileDataChange(name, value);
    }
    var handleSkillsChange = (event) => {
        const { name, value, checked } = event.target;
        props.handleProfileSkillChange(name, value, checked);
    }
    var handleAvatarChange = (event) => {
        const imgFile = event.target.files[0];
        props.handleProfileAvatarChange(imgFile);
    }

    var handleSubmit = (event) => {
        // console.log('submit');
        if (!validator.allValid()) return;
        event.preventDefault();
        const { user } = props.profile;
        props.update(user);
    }
    var handleBack = (event) => {
        event.preventDefault();
        props.handleBack();
    }
    var handleNext = (event) => {
        event.preventDefault();
        props.handleNext();
    }

    var renderSideBar = () => {
        const w100 = { width: '100%' };
        const { step, currStep } = props.profile;
        const { role } = props.profile.user.infor;
        // console.log(role);
        const ttct = () => {
            return (
                <li className={step === 1 ? 'active' : ''} style={w100}>
                    <a href="">
                        <span aria-hidden="true" className="glyphicon m-0-left">
                            <i className="far fa-edit" />
                        </span>
                        Thông tin chi tiết
              </a>
                    <div className="d-flex justify-content-end">
                        <span aria-hidden="true" className="completed-icon glyphicon completed">
                            <i className="fas fa-check " />
                        </span>
                    </div>
                </li>)

        };

        const ttcv = () => {
            return (
                <li className={step === 2 ? 'active' : currStep < 2 ? 'disabled' : ''} style={w100}>
                    <a href="">
                        <span aria-hidden="true" className="glyphicon m-0-left">
                            <i className="far fa-edit" />
                        </span>
                        Thông tin công việc
                  </a>
                    <div className="d-flex justify-content-end">
                        <span aria-hidden="true" className={currStep > 1 ? 'completed-icon glyphicon completed' : 'completed-icon glyphicon'}>
                            <i className="fas fa-check " />
                        </span>
                    </div>
                </li>
            )
        }

        const mtbt = () => {
            return (
                <li className={step === 3 ? 'active' : currStep < 3 ? 'disabled' : ''} style={w100}>
                    <a href="">
                        <span aria-hidden="true" className="glyphicon m-0-left">
                            <i className="far fa-edit" />
                        </span>
                        Mô tả bản thân
                  </a>
                    <div className="d-flex justify-content-end">
                        <span aria-hidden="true" className={`completed-icon glyphicon ${currStep}` > 2 ? 'completed-icon glyphicon completed' : 'completed-icon glyphicon'}>
                            <i className="fas fa-check " />
                        </span>
                    </div>
                </li>
            );
        };
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

    var renderTitleForm = () => {
        let title;
        const { profile } = props;
        const { role } = profile.user.infor;
        if (profile.step === 1) {
            title = 'Thông tin chi tiết';
        } else if (profile.step === 2) {
            title = 'Thông tin công việc';
        } else {
            title = 'Thông tin tổng quát';
        }
        const st = role === 1 ? 3 : 1;
        return (
            <div className="modal-header d-flex align-items-center d-none-mobile-app">
                <div>
                    <h2 data-qa="step-title" className="modal-title">{title}</h2>
                    <div className="text-muted">
                        {profile.step}
                        {' '} of {' '}
                        {st}
                    </div>
                </div>
            </div>
        );
    }

    var renderFooterForm = () => {
        const { role } = props.profile.user.infor;
        // const role = 1;
        const { step } = props.profile;
        const backBtn = () => (
            <Button type="button" className="btn pull-left btn-primary" onClick={handleBack}>Trở về</Button>
        );
        const nextBtn = () => (
            <Button type="button" className="btn pull-right btn-primary" onClick={handleNext}>Tiếp</Button>
        );
        const submitBtn = () => (
            <Button type="submit" className="btn pull-right btn-primary" onClick={handleSubmit}>Cập nhật</Button>
        );
        return (
            <div className="modal-footer">
                <div className="btn-row">
                    {step !== 1 ? backBtn() : role === 0 ? submitBtn() : null}
                    {step !== 3 ? role === 0 ? null : nextBtn() : role === 1 ? submitBtn() : null}
                </div>
            </div>
        );
    }

    var renderInforForm = () => {
        const imageDefaultUrl = '../public/images/user.png';
        const url = props.profile.avatarPreviewUrl === '' ? imageDefaultUrl : props.profile.avatarPreviewUrl;
        const user = props.profile.user;
        return (
            <div className="modal-body">
                <div className="d-flex justify-content-between flex-row">
                    <div className="center-block">
                        <img alt="" src={url} className="avatarPicture" />
                    </div>
                    <div className="center-block d-flex flex-column">
                        <span style={{ marginTop: '30px' }}>Thêm ảnh đại diện</span>
                        <div className="d-flex align-items-center">
                            <Form.Control onChange={handleAvatarChange} type="file" className="btn mr-0 btn-default" accept="image/*" name="avatar" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6 m-lg-bottom">
                        <div className="form-group">
                            <Form.Label className="">Họ tên</Form.Label>
                            <Form.Control type="text" onChange={handleInforChange} value={user.infor.fullname} name="fullname" className="form-control sessioncamexclude" />
                            {validator.message('fullname', props.profile.user.infor.hoTen, 'required|alpha')}
                        </div>
                    </div>
                    <div className="col-sm-6 m-lg-bottom">
                        <div className="form-group">
                            <Form.Label className="">Giới tính</Form.Label>
                            <Form.Control as="select" onChange={handleInforChange} selected={user.infor.sex} name="sex" className="form-control sessioncamexclude">
                                <option value="0">Nam</option>
                                <option value="1">Nữ</option>
                            </Form.Control>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6 m-lg-bottom">
                        <div className="form-group">
                            <Form.Label className="">Email</Form.Label>
                            <Form.Control onChange={handleInforChange} value={user.infor.email} name="email" type="text" className="form-control sessioncamexclude" />
                            {/* {validator.message('email',props.profile.user.infor.email,'required|email','text-danger')} */}
                            {validator.message('email', props.profile.user.infor.email, 'required|email')}
                        </div>
                    </div>
                    <div className="col-sm-6 m-lg-bottom">
                        <div className="form-group">
                            <Form.Label className="">Số điện thoại</Form.Label>
                            <Form.Control type="text" onChange={handleInforChange} value={user.infor.phone} name="phone" className="form-control sessioncamexclude" />
                            {validator.message('phone', props.profile.user.infor.sdt, 'integer|min:10')}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6 m-lg-bottom">
                        <div className="form-group">
                            <Form.Label className="">Địa chỉ</Form.Label>
                            <Form.Control type="text" onChange={handleInforChange} value={user.infor.address} name="address" className="form-control sessioncamexclude" />
                        </div>
                    </div>
                    <div className="col-sm-6 m-lg-bottom">
                        <div className="form-group">
                            <Form.Label className="">Tỉnh/Thành phố</Form.Label>
                            <Form.Control as="select" className="form-control sessioncamexclude" value={user.infor.city._id} onChange={handleInforChange} name="city">
                                {state.cities.map((e, i) => (<option value={e._id} key={i}>{e.name}</option>))}
                            </Form.Control>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    var renderJobForm = () => {
        const data = props.profile.user.data;
        return (
            <div className="modal-body">
                <h3>Thông tin về công việc</h3>
                <div className="form-group">
                    <Form.Label className="">Trình độ</Form.Label>
                    <div className="dropdown width-lg fe-cat-height dropdown-block">
                        <Form.Control as="select" className="custom-select" value={data.level} onChange={handleDataChange} name="level">
                            {state.levels.map((e, i) => (<option value={e._id} key={i}>{e.name}</option>))}
                        </Form.Control>
                    </div>
                </div>

                <div className="form-group has-error">
                    <Form.Label className="">Các kỹ năng mà bạn muốn đăng ký dạy?</Form.Label>
                    <p className="text-muted">
                        Vui lòng chọn ít nhất một kỹ năng.
                    </p>
                    <div className="row">
                        {state.skills.map((e, i) => {
                            var flat = false;
                            data.skills.forEach(element => {
                                if (element === e._id) { flat = true; }
                            });
                            return (
                                <div className="checkbox col-md-6" key={i}>
                                    <Form.Label>
                                        <Form.Control type="checkbox" selected={flat} onChange={handleSkillsChange} name="kyNang" value={e._id} />
                                        <span className="checkbox-replacement-helper">
                                            <span aria-hidden="true" className="glyphicon ">
                                                <i className="fas fa-check" />
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
                                    <Form.Control placeholder="" type="text" className="form-control width-xs text-right p-sm-right" value="0.00" onChange={handleDataChange} name="price" />
                                    {validator.message('fullname', props.profile.user.data.price, 'required|integer')}
                                    <span aria-hidden="true" className="glyphicon glyphicon-md air-icon-payment text-primary form-control-feedback" />
                                    <span id="input-el" className="sr-only" />
                                </div>
                                <span className="m-sm-left">/giờ</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    var renderOverviewForm = () => {
        var user = props.profile.user;
        return (
            <div className="modal-body">
                <p>Các thông tin bạn viết sẽ được hiển thị đối với người học.</p>
                <div className="form-group">
                    <Form.Label className="label-width-auto">Tiêu đề</Form.Label>
                    <div data-v-1e6776cd="" className="d-inline-block">
                        <a href="">
                            <span className="glyphicon air-icon-question-circle" />
                        </a>
                    </div>
                    <Form.Control type="text" placeholder="Ví dụ: Admin Support,Java Developer" value={user.data.title} className="form-control" onChange={handleDataChange} name="title" />
                </div>
                <div className="form-group overview-box">
                    <Form.Label className="label-width-auto">Thông tin tổng quan</Form.Label>
                    <div className="up-disintermediation-container">
                        <div>
                            <Form.Control as="textarea" rows="7" value={user.data.intro} placeholder="Hãy mô tả tổng quan về bản thân,trình độ,kỹ thuật để người học hiểu rõ hơn về bạn." className="form-control" onChange={handleDataChange} name="intro"></Form.Control>
                            <small className="m-xs-top text-muted pull-right"> </small>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    const { profile, alert } = props;
    const { step } = profile;
    const requestIcon = (
        <img
            alt="processing"
            src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="
        />
    );
    return (
        <div>
            <NavBar />
            <div className="off-canvas-content navbar-fixed-subnav">
                <div id="layout">
                    <div id="main" role="main" style={{ overflow: 'auto' }}>
                        <div className="container p-lg-top-bottom">
                            <div className="row">
                                {renderSideBar}
                                <div className="col-md-9">
                                    <div data-qa="step-container-2000" className="fe-step" sidebar-icon="project" sidebar-title="Expertise">
                                        <div>
                                            <div className="step-manager-modal">
                                                <div className="modal-content">

                                                    {renderTitleForm()}
                                                    <div data-v-1b001e90="" className="progress m-0-bottom d-md-none progress-nodetails">
                                                        <div data-v-1b001e90="" aria-valuenow="0" aria-valuemin="0" aria-valuemax="9" role="progressbar" className="progress-bar" style={{ width: 0 }} />
                                                    </div>
                                                    <div className="modal-flex-container flex-1">
                                                        {alert.message
                                                            && <div className={`alert alert-${alert.type} auth-alert-app`}>{alert.message}</div>}
                                                        {step === 1 ? renderInforForm() : step === 2 ? renderJobForm() : renderOverviewForm()}
                                                        {renderFooterForm()}
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
            <Footer />
        </div>
    );
}

const mapStateToProps = (state) => {
    const { alert, profile } = state;
    return { alert, profile };
};

const mapDispatchToProps = (dispatch, props) => ({
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
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);