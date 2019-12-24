import React from 'react';
import DatePicker from 'react-datepicker';
import { Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';

import * as actions from '../actions/index';

import 'react-datepicker/dist/react-datepicker.css';
import SimpleReactValidator from 'simple-react-validator';
import { helperService } from '../actions/HelperService';


class CreateContract extends React.Component {
  constructor(props) {
    super(props);
    this.renderContractDetails = this.renderContractDetails.bind(this);
    this.renderWorkDescription = this.renderWorkDescription.bind(this);
    this.renderContractFooter = this.renderContractFooter.bind(this);
    this.renderSkill = this.renderSkill.bind(this);
    this.renderWarning = this.renderWarning.bind(this);
    this.handleDataChange = this.handleDataChange.bind(this);
    // this.handleSkillsChange = this.handleSkillsChange.bind(this);
    this.handleDateStartChange = this.handleDateStartChange.bind(this);
    this.handleDateEndChange = this.handleDateEndChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.checkStartEndDate = this.checkStartEndDate.bind(this);
    this.state = {
      inforTutor: null,
    };
    this.validator = new SimpleReactValidator();
  }

  componentWillReceiveProps() {
    this.validator.showMessages();
  }

  componentDidMount() {
    var userCookie = JSON.parse(localStorage.getItem('user'));
    helperService.loadUserInfor(userCookie._id).then(data => {
      this.setState({ inforTutor: data });
      this.props.setId(userCookie.id, data.id);
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.handleCreateContractSubmit(this.props.createContract.contract);
  }

  handleDataChange(event) {
    const { name, value } = event.target;
    this.props.handleCreateContractDataChange(name, value);
  }

  handleSkillsChange(event) {
    const { name, value, checked } = event.target;
    this.props.handleCreateContractSkillChange(name, value, checked);
  }

  handleDateStartChange(date) {
    // const moment = require('moment');
    // const d = moment(date).format('MM/DD/YYYY');
    this.props.handleCreateContractDateStartChange(date);
  }

  handleDateEndChange(date) {
    // const moment = require('moment');
    // const d = moment(date).format('MM/DD/YYYY');
    this.props.handleCreateContractDateEndChange(date);
  }

  checkStartEndDate(start, end) {
    // const moment = require('moment');
    // const s = Date.parse(moment(start).format('DD/MM/YYYY'));
    // const e = Date.parse(moment(end).format('DD/MM/YYYY'));
    const d = Math.floor((Date.UTC(start.getFullYear(), start.getMonth(), start.getDate()) - Date.UTC(end.getFullYear(), end.getMonth(), end.getDate())) / (1000 * 60 * 60 * 24));
    if (d >= 0) {
      return true;
    }
    return false;
  }

  renderContractDetails() {
    const { contract } = this.props.createContract;
    const { inforTutor } = this.state;
    const dateMess = (<div>The start date less or equal the end date.</div>);
    return (
      <div className="form ng-valid ng-valid-format ng-valid-min ng-valid-max ng-valid-date ng-valid-date-range ng-valid-hr-constraintinteger ng-valid-hr-constraintmin ng-valid-hr-constraintmax ng-dirty ng-valid-number ng-valid-hr-constraintrequired ng-valid-hr-constraintfloat">
        <div className="air-card m-0-top m-0-right-md m-0-right-xl p-0-top-bottom">
          <header>
            <h2 className="m-0-bottom">
              <img
                alt="avatar"
                className="avatar avatar-60 m-0-top-bottom m-0-left m-sm-right d-none d-block d-lg-inline"
                src="./Contract_files/c1PoXrydUGYA9LO6ofPHVhDT-C1Jbbt7cP0neDqE2SWOYzmrC4knZuD69ImVgyUNfu"
              />
              <span className="vertical-align-middle">
                {`${inforTutor.fullName},${inforTutor.address} - ${inforTutor.city.name}`}
              </span>
            </h2>
          </header>
          <section>
            <div className="form-group m-0-bottom">
              <Form.Label className="control-label" htmlFor="title">Tiêu đề hợp đồng</Form.Label>
              <div className="width-lg">
                <Form.Control
                  type="text"
                  id="title"
                  name="tieuDe"
                  value={contract.tieuDe}
                  onChange={this.handleDataChange}
                  className="form-control ng-pristine ng-valid ng-not-empty ng-touched"
                />
                {this.validator.message('contract title', contract.tieuDe, 'required')}
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
              <div className="form-group" id="rowHourlyRate">
                <Form.Label className="control-label">Mức tiền lương</Form.Label>
                <div className="d-xs-block d-sm-inline-block ng-hide" />
                <div className="d-flex align-items-center">
                  <div className="has-feedback">
                    <Form.Control
                      onChange={this.handleDataChange}
                      className="form-control text-right p-sm-right width-xs ng-valid ng-not-empty ng-dirty ng-valid-number ng-valid-hr-constraintrequired ng-valid-hr-constraintfloat ng-valid-hr-constraintmin ng-valid-hr-constraintmax ng-touched"
                      type="number"
                      name="giaTien"
                      placeholder="0.00"
                      value={contract.giaTien}
                    />
                    <span
                      className="glyphicon glyphicon-md air-icon-payment text-primary form-control-feedback"
                      aria-hidden="true"
                    />
                  </div>
                  <span className="m-sm-left">/giờ</span>
                  {this.validator.message('contract title', contract.giaTien, 'required|numeric')}
                </div>
                <div className="clearfix">
                  <div className="text-muted p-sm-top">
                    {`Mức lương đề xuất của người dạy là $ ${inforTutor.price}/giờ`}
                  </div>
                </div>
              </div>
              <div className="form-group">
                <Form.Label htmlFor="hourlyWeeklyLimit">Giới hạn giờ/tuần</Form.Label>
                <div className="row">
                  <div
                    name="weekly-limit"
                    className="ng-pristine ng-untouched ng-valid col-lg-4 col-md-5 col-sm-5 col-xs-12 py-0 ng-not-empty ng-valid-hr-constraintinteger ng-valid-hr-constraintmin ng-valid-hr-constraintmax"
                  >
                    <Form.Control
                      name="ghGio"
                      onChange={this.handleDataChange}
                      className="qa-wm-contract-proposal-form-limit-custom ng-pristine ng-untouched ng-valid width-sm form-control ng-empty ng-hide"
                      placeholder="Nhập giới hạn"
                      value={contract.ghGio}
                    />
                    {this.validator.message('limit hours/week', contract.ghGio, 'required|numberic')}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="form-group row full-width m-0-left">
                    <Form.Label className="control-label border-0-bottom">
                      <span className="nowrap">Ngày bắt đầu</span>
                    </Form.Label>
                    <div className="ng-pristine ng-untouched ng-valid ng-empty col-lg-4 col-md-5 col-sm-5 col-xs-12 p-0 ng-valid-date-range">
                      <DatePicker onChange={this.handleDateStartChange} value={contract.ngayBatDau} name=" ngayBatDau" />

                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="form-group row full-width m-0-left">
                    <Form.Label className="control-label border-0-bottom">
                      <span className="nowrap">Ngày kết thúc</span>
                    </Form.Label>
                    <div className="ng-pristine ng-untouched ng-valid ng-empty col-lg-4 col-md-5 col-sm-5 col-xs-12 p-0 ng-valid-date-range">
                      <DatePicker onChange={this.handleDateEndChange} name="ngayKetThuc" value={contract.ngayKetThuc} />
                    </div>
                    {this.checkStartEndDate(contract.ngayBatDau, contract.ngayKetThuc) ? dateMess : null}
                  </div>
                </div>
              </div>
              {/* <div className="form-group row full-width m-0-left">
                <Form.Label className="control-label border-0-bottom">
                  <span className="nowrap">Tổng dự kiến</span>
                </Form.Label>
                <div className="ng-pristine ng-untouched ng-valid ng-empty col-lg-4 col-md-5 col-sm-5 col-xs-12 p-0 ng-valid-date-range">
                  <span>2 000 000</span>
                </div>
              </div> */}
              <div className="form-group row full-width m-0-left">
                <Form.Label className="control-label border-0-bottom">
                  <span className="nowrap">Tổng tiền muốn trả</span>
                </Form.Label>
                <div className="ng-pristine ng-untouched ng-valid ng-empty col-lg-4 col-md-5 col-sm-5 col-xs-12 p-0 ng-valid-date-range">
                  <Form.Control name="tongTien" onChange={this.handleDataChange} className="qa-wm-contract-proposal-form-limit-custom ng-pristine ng-untouched ng-valid width-sm form-control ng-empty ng-hide" />
                  {this.validator.message('total', contract.tongTien, 'required|numberic')}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }

  renderWorkDescription() {
    const { contract } = this.props.createContract;
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
              <div
                id="rowHourlyInstruction"
                className=""
              >
                <div>
                  <textarea
                    name="moTa"
                    onChange={this.handleDataChange}
                    value={contract.moTa}
                    className="form-control ng-pristine ng-untouched ng-valid ng-not-empty"
                    autoComplete="off"
                    placeholder="Hãy mô tả về công việc để người dạy có thể hiểu rõ hơn."
                    rows="8"
                  />
                  {this.validator.message('contract description', contract.moTa, 'required')}
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

  // renderSkill() {
  //   return (
  //     <div>
  //       <div role="form" className="ng-pristine ng-valid ng-valid-uploading-file">
  //         <div className="air-card m-0-top m-0-right-md m-0-right-xl p-0-top-bottom">
  //           <header>
  //             <h2 className="m-0-bottom">
  //               Kỹ năng giảng dạy liên quan
  //             </h2>
  //           </header>
  //           <section>
  //             <div
  //               data-ng-show="flagIndex.hourly"
  //               id="rowHourlyInstruction"
  //               className=""
  //             >
  //               <div className="row">
  //                 <div className="checkbox col-md-6">
  //                   <Form.Label>
  //                     <Form.Control type="checkbox" onChange={this.handleSkillsChange} name="kyNang" value="1" />
  //                     <span className="checkbox-replacement-helper">
  //                       <span aria-hidden="true" className="glyphicon ">
  //                         <i className="fas fa-check" />
  //                       </span>
  //                     </span>
  //                     A/B Testing
  //                   </Form.Label>
  //                 </div>
  //                 <div className="checkbox col-md-6">
  //                   <Form.Label>
  //                     <Form.Control type="checkbox" onChange={this.handleSkillsChange} name="kyNang" value="3" />
  //                     <span className="checkbox-replacement-helper">
  //                       <span aria-hidden="true" className="glyphicon">
  //                         <i className="fas fa-check" />
  //                       </span>
  //                     </span>
  //                     A/B Testing
  //                   </Form.Label>
  //                 </div>
  //                 <div className="checkbox col-md-6">
  //                   <Form.Label>
  //                     <Form.Control type="checkbox" onChange={this.handleSkillsChange} name="kyNang" value="4" />
  //                     <span className="checkbox-replacement-helper">
  //                       <span aria-hidden="true" className="glyphicon">
  //                         <i className="fas fa-check" />
  //                       </span>
  //                     </span>
  //                     A/B Testing
  //                   </Form.Label>
  //                 </div>
  //               </div>
  //             </div>
  //           </section>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }

  renderContractFooter() {
    return (
      <div className="air-card m-0-top-bottom m-0-right-md m-0-right-xl">
        <div
          className="form ng-valid ng-dirty ng-valid-hr-constraintrequired ng-valid-parse"
          role="form"
        >
          <div>
            <div className="d-none d-lg-block">
              <Button
                type="submit"
                onClick={this.handleSubmit}
                className="btn btn-primary"
              >
                Xác nhận

              </Button>
              <Button type="button" className="btn btn-link m-lg-left">
                Cancel
              </Button>
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
                      {/* {this.renderSkill()} */}
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
};
const mapDispatchToProps = (dispatch, props) => ({
  handleCreateContractDataChange: (name, value) => {
    dispatch(actions.handleCreateContractDataChange(name, value));
  },
  // handleCreateContractSkillChange: (name, value, checked) => {
  //   dispatch(actions.handleCreateContractSkillChange(name, value, checked));
  // },
  handleCreateContractDateStartChange: (date) => {
    dispatch(actions.handleCreateContractDateStartChange(date));
  },
  handleCreateContractDateEndChange: (date) => {
    dispatch(actions.handleCreateContractDateEndChange(date));
  },
  setId: (idSt, idTutor) => {
    dispatch(actions.handleCreateContractSetIdUser(idSt, idTutor));
  },
  handleCreateContractSubmit: (contract) => {
    dispatch(actions.handleCreateContractSubmit(contract));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateContract);
