import React from 'react';
import DatePicker from "react-datepicker";
import { Form } from 'react-bootstrap';
import { connect } from 'react-redux';

import * as actions from './../actions/index';

import "react-datepicker/dist/react-datepicker.css";

class CreateContract extends React.Component {
    constructor(props) {
        super(props);
        this.renderContractDetails = this.renderContractDetails.bind(this);
        this.renderWorkDescription = this.renderWorkDescription.bind(this);
        this.renderContractFooter = this.renderContractFooter.bind(this);
        this.renderSkill = this.renderSkill.bind(this);
        this.renderWarning = this.renderWarning.bind(this);
        this.handleDataChange = this.handleDataChange.bind(this);
        this.handleSkillsChange = this.handleSkillsChange.bind(this);
        this.handleDateStartChange = this.handleDateStartChange.bind(this);
        this.handleDateEndChange = this.handleDateEndChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            inforTutor: null
        }
    }
    componentDidMount(){
        var idSt = 'cmt8';
        var idTutor = 'cmt10';
        var tutor = {};
        this.setState({inforTutor: tutor});
        this.props.setId(idSt,idTutor);
    }
    handleSubmit(event){
        event.preventDefault();
        this.handleCreateContractSubmit(this.props.createContract.contract);
    }
    handleDataChange(event) {
        var { name, value } = event.target;
        this.props.handleCreateContractDataChange(name, value);
    }
    handleSkillsChange(event) {
        const { name, value, checked } = event.target;
        this.props.handleCreateContractSkillChange(name, value, checked);
    }
    handleDateStartChange(date){
        var moment = require('moment');
        var d = moment(date).format('MM/DD/YYYY');
        this.props.handleCreateContractDateStartChange(d);
    }
    handleDateEndChange(date){
        var moment = require('moment');
        var d = moment(date).format('MM/DD/YYYY');
        this.props.handleCreateContractDateEndChange(d);
    }
    renderContractDetails() {
        return (
            <div className="form ng-valid ng-valid-format ng-valid-min ng-valid-max ng-valid-date ng-valid-date-range ng-valid-hr-constraintinteger ng-valid-hr-constraintmin ng-valid-hr-constraintmax ng-dirty ng-valid-number ng-valid-hr-constraintrequired ng-valid-hr-constraintfloat">
                <div className="air-card m-0-top m-0-right-md m-0-right-xl p-0-top-bottom">
                    <header>
                        <h2 className="m-0-bottom">
                            <img alt="avatar"
                                className="avatar avatar-60 m-0-top-bottom m-0-left m-sm-right d-none d-block d-lg-inline"
                                src="./Contract_files/c1PoXrydUGYA9LO6ofPHVhDT-C1Jbbt7cP0neDqE2SWOYzmrC4knZuD69ImVgyUNfu" />
                            <span className="vertical-align-middle">
                                Abhinav Sogga, Matrix Infologics® Pvt. Ltd.
                        </span>
                        </h2>
                    </header>
                    <section>
                        <div className="form-group m-0-bottom">
                            <label className="control-label" htmlFor="title">Tiêu đề hợp đồng</label>
                            <div className="width-lg">
                                <input type="text" id="title" name="tieuDe" onChange={this.handleDataChange}
                                    className="form-control ng-pristine ng-valid ng-not-empty ng-touched" />
                            </div>
                        </div>
                    </section>
                </div>
                <div className="air-card m-0-top m-0-right-md m-0-right-xl p-0-top-bottom">
                    <header className="d-flex align-items-center flex-justify-content-between">
                        <h2 className="m-0-bottom">
                            Kỳ hạn hợp đồng
                    </h2>
                    </header>

                    <section>
                        <div>
                            <div className="form-group" id="rowHourlyRate" >
                                <label className="control-label">Mức tiền lương</label>
                                <div className="d-xs-block d-sm-inline-block ng-hide">
                                </div>
                                <div className="d-flex align-items-center">
                                    <div className="has-feedback">
                                        <input onChange={this.handleDataChange}
                                            className="form-control text-right p-sm-right width-xs ng-valid ng-not-empty ng-dirty ng-valid-number ng-valid-hr-constraintrequired ng-valid-hr-constraintfloat ng-valid-hr-constraintmin ng-valid-hr-constraintmax ng-touched"
                                            type="number" name="giaTien"
                                            placeholder="0.00" />
                                        <span
                                            className="glyphicon glyphicon-md air-icon-payment text-primary form-control-feedback"
                                            aria-hidden="true">
                                        </span>
                                    </div>
                                    <span className="m-sm-left">/giờ</span>

                                </div>
                                <div className="clearfix">
                                    <div className="text-muted p-sm-top">
                                        Mức lương đề xuất của Abhinav Sogga là $15.00 / giờ
                                </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="hourlyWeeklyLimit">Giới hạn giờ/tuần</label>
                                <div className="row">
                                    <div name="weekly-limit"
                                        className="ng-pristine ng-untouched ng-valid col-lg-4 col-md-5 col-sm-5 col-xs-12 py-0 ng-not-empty ng-valid-hr-constraintinteger ng-valid-hr-constraintmin ng-valid-hr-constraintmax"
                                    >
                                        <input name='ghGio' onChange={this.handleDataChange}
                                            className="qa-wm-contract-proposal-form-limit-custom ng-pristine ng-untouched ng-valid width-sm form-control ng-empty ng-hide"
                                            placeholder="Nhập giới hạn" />
                                    </div>
                                    <div className="display-inline-block text-muted col-lg-8 col-md-7 col-sm-7 col-xs-12 pl-15 pl-sm-0">
                                        <div className="pl-0 pl-sm-10 py-0 py-sm-10 pt-10">
                                            <span
                                                className="d-none d-md-inline pl-md-20">=</span>
                                            <span>$250.00 tối đa/tuần</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col'>
                                    <div className="form-group row full-width m-0-left">
                                        <label className="control-label border-0-bottom">
                                            <span className="nowrap">Ngày bắt đầu</span>
                                        </label>
                                        <div className="ng-pristine ng-untouched ng-valid ng-empty col-lg-4 col-md-5 col-sm-5 col-xs-12 p-0 ng-valid-date-range">
                                            <DatePicker onChange={this.handleDateStartChange} name=' ngayBatDau' />
                                        </div>
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className="form-group row full-width m-0-left">
                                        <label className="control-label border-0-bottom">
                                            <span className="nowrap">Ngày kết thúc</span>
                                        </label>
                                        <div className="ng-pristine ng-untouched ng-valid ng-empty col-lg-4 col-md-5 col-sm-5 col-xs-12 p-0 ng-valid-date-range">
                                            <DatePicker onChange={this.handleDateEndChange} name='ngayKetThuc' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group row full-width m-0-left">
                                <label className="control-label border-0-bottom">
                                    <span className="nowrap">Tổng dự kiến</span>
                                </label>
                                <div className="ng-pristine ng-untouched ng-valid ng-empty col-lg-4 col-md-5 col-sm-5 col-xs-12 p-0 ng-valid-date-range">
                                    <span>2 000 000</span>
                                </div>
                            </div>
                            <div className="form-group row full-width m-0-left">
                                <label className="control-label border-0-bottom">
                                    <span className="nowrap">Tổng tiền muốn trả</span>
                                </label>
                                <div className="ng-pristine ng-untouched ng-valid ng-empty col-lg-4 col-md-5 col-sm-5 col-xs-12 p-0 ng-valid-date-range">
                                    <input name='tongTien' onChange={this.handleDataChange} className="qa-wm-contract-proposal-form-limit-custom ng-pristine ng-untouched ng-valid width-sm form-control ng-empty ng-hide" />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
    renderWorkDescription() {
        return (
            <div>
                <div role="form" className="ng-pristine ng-valid ng-valid-uploading-file">
                    <div className="air-card m-0-top m-0-right-md m-0-right-xl p-0-top-bottom">
                        <header>
                            <h2 className="m-0-bottom">
                                Mô tả công việc
                        </h2>
                        </header>
                        <section>
                            <div id="rowHourlyInstruction"
                                className="" >
                                <div> 
                                    <textarea name='moTa' onChange={this.handleDataChange}
                                        className="form-control ng-pristine ng-untouched ng-valid ng-not-empty"
                                        autoComplete="off"
                                        placeholder="Hãy mô tả về công việc để người dạy có thể hiểu rõ hơn."
                                        rows="8"></textarea>
                                    {/* <span className="form-message form-error form-error-bottom">
                                            <span>Báo lỗi</span>
                                        </span> */}
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        );
    }
    renderSkill() {
        return (
            <div>
                <div role="form" className="ng-pristine ng-valid ng-valid-uploading-file">
                    <div className="air-card m-0-top m-0-right-md m-0-right-xl p-0-top-bottom">
                        <header>
                            <h2 className="m-0-bottom">
                                Kỹ năng giảng dạy liên quan
                        </h2>
                        </header>
                        <section>
                            <div data-ng-show="flagIndex.hourly" id="rowHourlyInstruction"
                                className="" >
                                <div className="row" >
                                    <div className="checkbox col-md-6" >
                                        <Form.Label>
                                            <Form.Control type="checkbox" onChange={this.handleSkillsChange} name="kyNang" value="1" />
                                            <span className="checkbox-replacement-helper">
                                                <span aria-hidden="true" className="glyphicon ">
                                                    <i className="fas fa-check"></i>
                                                </span>
                                            </span>
                                            A/B Testing
                                        </Form.Label>
                                    </div>
                                    <div className="checkbox col-md-6" >
                                        <Form.Label>
                                            <Form.Control type="checkbox" onChange={this.handleSkillsChange} name="kyNang" value="3" />
                                            <span className="checkbox-replacement-helper">
                                                <span aria-hidden="true" className="glyphicon">
                                                    <i className="fas fa-check"></i>
                                                </span>
                                            </span>
                                            A/B Testing
                                        </Form.Label>
                                    </div>
                                    <div className="checkbox col-md-6" >
                                        <Form.Label>
                                            <Form.Control type="checkbox" onChange={this.handleSkillsChange} name="kyNang" value="4" />
                                            <span className="checkbox-replacement-helper">
                                                <span aria-hidden="true" className="glyphicon">
                                                    <i className="fas fa-check"></i>
                                                </span>
                                            </span>
                                            A/B Testing
                                            </Form.Label>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        );
    }
    renderContractFooter() {
        return (
            <div className="air-card m-0-top-bottom m-0-right-md m-0-right-xl">
                <div className="form ng-valid ng-dirty ng-valid-hr-constraintrequired ng-valid-parse"
                    role="form">
                    <div>
                        <div className="d-none d-lg-block">
                            <button type="submit" onClick={this.handleSubmit}
                                className="btn btn-primary">Xác nhận</button>
                            <button className="btn btn-link m-lg-left">
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    renderWarning() {
        return (
            <div>
                <strong>Hãy kiểm tra cẩn thận trước khi gửi hợp đồng</strong>
                <p>
                    U4T sẽ luôn bảo vệ lợi ích của cả người học và người dạy.
            </p>
            </div>
        );
    }
    render() {
        return (
            <div id="layout" className="layout">
                <div className="layout-page-content">
                    <main className="container pt-md-30 pt-0 p-0-bottom-xs">
                        <div>
                            <div className="edit_offer_area">
                                <div>
                                    <h1 className="d-none-mobile-app m-lg-top-bottom">
                                        Tạo hợp đồng
                                </h1>
                                    <div className="hr-form-container row">
                                        <div className="col-md-9 p-0-top">
                                            {this.renderContractDetails()}
                                            {this.renderWorkDescription()}
                                            {this.renderSkill()}
                                            {this.renderContractFooter()}
                                        </div>
                                        <div className="col-md-3 d-none d-md-block p-xs-top p-xs-left">
                                            {this.renderWarning()}
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
    const { alert, createContract } = state;
    return { alert, createContract };
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        handleCreateContractDataChange: (name, value) => {
            dispatch(actions.handleCreateContractDataChange(name, value));
        },
        handleCreateContractSkillChange: (name, value, checked) => {
            dispatch(actions.handleCreateContractSkillChange(name, value, checked));
        },
        handleCreateContractDateStartChange: (date) => {
            dispatch(actions.handleCreateContractDateStartChange(date));
        },
        handleCreateContractDateEndChange: (date) => {
            dispatch(actions.handleCreateContractDateEndChange(date));
        },
        setId: (idSt,idTutor) => {
            dispatch(actions.handleCreateContractSetIdUser(idSt,idTutor));
        },
        handleCreateContractSubmit: (contract) => {
            dispatch(actions.handleCreateContractSubmit(contract));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CreateContract);