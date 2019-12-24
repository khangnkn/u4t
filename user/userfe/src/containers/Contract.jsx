
import * as actions from '../actions/index'
import { connect } from 'react-redux';
import { helperService } from '../actions/HelperService';
import { Button } from 'react-bootstrap';
import '../public/stylesheets/auth.scss';
const Contract = (props) => {
    var validator = new SimpleReactValidator();
    var contract;
    var componentDidMount = () => {
        helperService.loadContract(id).then(data => {
            contract = data.data;
        })
    }
    var componentWillReceiveProps = () => {
        validator.showMessages();
    }
    var handleComplainDataChange = (event) => {
        var { name, value } = event.target;
        props.handleComplainDataChange(name, value);
    }
    var handleReviewDataChange = (event) => {
        var { name, value } = event;
        props.handleReviewDataChange(name, value);
    }
    var handleReviewContractSubmit = () => {
        var { _id } = contract;
        var { review } = props.contract;
        props.handleReviewContractSubmit(_id, review);
    }
    var handleComplainContractSubmit = () => {
        var { _id } = contract;
        var { complain } = props.contract;
        props.handleComplainContractSubmit(_id, complain);
    }
    var handleCompleteContractSubmit = () => {
        var { _id } = contract;
        props.handleCompleteContractSubmit(_id);
    }
    var contractOverview = () => {
        return (
            <div className="air-card m-0-top m-0-right-md m-0-right-xl p-0-top-bottom">
                <div className="content col-lg-9">
                    <header>
                        <h2 className="m-0-bottom" data-ng-non-bindable="">{contract.title}</h2>
                    </header>
                    <section className="air-card-divider-sm">
                        <div className="job-description break">
                            {contract.description}
                        </div>
                    </section>
                    <section className="air-card-divider-sm">
                        <ul className="job-features p-0">
                            <li>
                                <i className="glyphicon air-icon-clock-hourly jobdetails-tier-level-icon"></i>
                                <strong>Mức lương/Giờ</strong>
                                <small className="text-muted">{contract.price}</small>
                            </li>
                            <li>
                                <i className="glyphicon air-icon-calendar-under1month-alt jobdetails-tier-level-icon"></i>
                                <strong>
                                    <span className="d-none d-lg-inline">Thời gian</span>
                                </strong>
                                <small className="text-muted">
                                    <span className="d-none d-lg-inline">{contract.startDate} - {contract.endDate}</span>
                                    {/* <span className="d-none d-lg-inline">{contract.ghGio} giờ/tuần</span> */}
                                </small>
                            </li>

                            <li>
                                <i className="jobdetails-tier-level-icon">$</i>
                                <strong>
                                    <span className="d-none d-lg-inline">Tổng tiền</span>
                                    {/* <span className="d-lg-none">$</span> */}
                                </strong>
                                <small className="text-muted">
                                    <span className="d-none d-lg-inline">
                                        {contract.total}
                                    </span>
                                </small>
                            </li>
                        </ul>
                    </section>

                    <section className="air-card-divider-sm">
                        <h4>Thông tin kỹ năng liên quan</h4>
                        <div className="sands-groups">
                            <div className="row">
                                <div className="col-sm-6 m-md-bottom">
                                    {contract.kyNang.map((e, i) => {
                                        return (<a className="o-tag m-0-left m-0-top m-xs-bottom" key={i}
                                            href="#" disabled>CSS</a>);
                                    })}
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
    var contractReview = (review) => {
        var { alert } = props;
        var l = [1, 2, 3, 4, 5];
        return (
            <div className="air-card m-0-top m-0-right-md m-0-right-xl p-0-top-bottom">
                <header className="d-flex align-items-center flex-justify-content-between">
                    <h2 className="m-0-bottom">
                        Đánh giá hợp đồng
                  </h2>
                </header>

                <section>
                    <div className="form-group" id="rowHourlyRate">
                        {alert.message
                            && <div className={`alert alert-${alert.type} auth-alert-app`}>{alert.message}</div>}
                        <Form.Label className="control-label">Điểm đánh giá</Form.Label>
                        <div className="d-xs-block d-sm-inline-block ng-hide" />
                        <div className="d-flex align-items-center">
                            <div className="has-feedback">
                                <Form.Control
                                    onChange={handleReviewDataChange()}
                                    className="form-control text-right p-sm-right width-xs ng-valid ng-not-empty ng-dirty ng-valid-number ng-valid-hr-constraintrequired ng-valid-hr-constraintfloat ng-valid-hr-constraintmin ng-valid-hr-constraintmax ng-touched"
                                    value={review.rating}
                                    name='rating'
                                    as='select'
                                >
                                    {l.map((e) => { return (<option value={e}>e</option>) })}
                                </Form.Control>
                                <span
                                    className="glyphicon glyphicon-ms text-primary form-control-feedback"
                                    aria-hidden="true"
                                ><i class="far fa-star"></i></span>
                            </div>
                            <span className="m-sm-left">/5</span>
                        </div>
                    </div>
                    <div className="form-group">
                        <Form.Label htmlFor="hourlyWeeklyLimit">Đánh giá</Form.Label>
                        <div className="row">
                            <div className="ng-pristine ng-untouched ng-valid col-lg-4 col-md-5 col-sm-5 col-xs-12 py-0 ng-not-empty ng-valid-hr-constraintinteger ng-valid-hr-constraintmin ng-valid-hr-constraintmax"                                >
                                <textarea
                                    name="content"
                                    onChange={handleReviewDataChange()}
                                    value={review.content}
                                    className="form-control ng-pristine ng-untouched ng-valid ng-not-empty"
                                    autoComplete="off"
                                    placeholder="Hãy chi tiết đánh giá."
                                    rows="8"
                                />
                                {/* {this.validator.message('review content', review.content, 'required|max:300')} */}
                            </div>
                        </div>
                    </div>
                    <Button class="btn btn-primary" style="width: 200px;" type="button" onClick={handleReviewContractSubmit()}>Hoàn tất</Button>
                </section>
            </div>
        );
    }
    var contractComplain = () => {
        var {alert} = props;
        return (
            <div className="air-card m-0-top m-0-right-md m-0-right-xl p-0-top-bottom">
                <header className="d-flex align-items-center flex-justify-content-between">
                    <h2 className="m-0-bottom">
                        Khiếu nại hợp đồng
                  </h2>
                </header>
                <section>
                    <div className="form-group">
                        {alert.message
                            && <div className={`alert alert-${alert.type} auth-alert-app`}>{alert.message}</div>}
                        <Form.Label htmlFor="hourlyWeeklyLimit">Thông tin khiếu nại</Form.Label>
                        <div className="row">
                            <div className="ng-pristine ng-untouched ng-valid col-lg-4 col-md-5 col-sm-5 col-xs-12 py-0 ng-not-empty ng-valid-hr-constraintinteger ng-valid-hr-constraintmin ng-valid-hr-constraintmax"                                >
                                <textarea
                                    name="content"
                                    onChange={handleComplainDataChange()}
                                    value={props.complain}
                                    className="form-control ng-pristine ng-untouched ng-valid ng-not-empty"
                                    autoComplete="off"
                                    placeholder="Hãy trình bày khiếu nại của bạn...."
                                    rows="8"
                                />
                                {/* {this.validator.message('review content', props.complain, 'required|max:600')} */}
                            </div>
                        </div>
                    </div>
                </section>
                <Button class="btn btn-primary" style="width: 200px;" type="button" onClick={handleComplainContractSubmit()}>Hoàn tất</Button>
            </div>
        );
    }
    const controller = () => {
        return (
            <div class="col-lg-3 cfe-sidebar d-none d-lg-block ng-scope">
                <div class="air-card" >
                    <Button class="btn btn-primary" style="width: 200px;" type="button" onClick={handleContractControllerSelect(0)}>Đánh giá</Button>
                    <Button class="btn btn-primary" style="width: 200px;" type="button" onClick={handleContractControllerSelect(1)}>Khiếu nai</Button>
                    <Button class="btn btn-primary" style="width: 200px;" type="button" onClick={handleCompleteContractSubmit()}>Hoàn thành hợp đồng</Button>
                </div>
            </div>
        );
    }
    const board = () => {
        return (
            <div class="cfe-main p-0-left-right-xs col-xs-12 col-lg-9">
                <div dclass="ng-scope">
                    <div class="ng-scope">
                        <div class="m-0-right ng-scope">
                            <div class="ng-scope ng-isolate-scope">
                                <div class="p-0-top-bottom m-0-right m-0-left-right-md m-0-left-right-xl air-card">
                                    <header class="ng-scope">
                                        <div class="d-flex vertical-align-middle justify-content-space-between align-items-start">
                                            <h2 class="cfe-assignments-title m-0-top-bottom">{tt}</h2>
                                        </div>
                                    </header>
                                    <div class="in" aria-expanded="true" aria-hidden="false" style="height: auto;">
                                        <section class="p-lg-top responsive assigment-list-content ng-scope">
                                            <div class="m-sm-bottom ng-scope">
                                                <div class="ng-scope">
                                                    {contractOverview()}
                                                    {props.contract.selected === 0 ? contractReview() : contractComplain()}
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div id="layout" class="layout">
            <div class="layout-page-content">
                <div class="container p-lg-bottom p-0-top-bottom-xs p-0-top-bottom-sm">
                    <div class="ng-scope">
                        <div>
                            <div class="ng-scope ng-isolate-scope">
                                <div class="fe-ui-application responsive">
                                    <div class="fe-ui-application cfe-ui-application">
                                        <div class="row eo-block-none o-profile">
                                            {board()}
                                            {controller()}
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

const mapStateToProps = (state) => {
    const { alert, contract } = state;
    return { alert, contract };
}

const mapDispatchToProps = (dispatch, props) => ({
    handleComplainDataChange: (name, value) => {
        dispatch(actions.handleComplainDataChange(name, value));
    },
    handleReviewDataChange: (name, value) => {
        dispatch(actions.handleReviewDataChange(name, value));
    },
    handleReviewContractSubmit: (_id, review) => {
        dispatch(actions.handleReviewContractSubmit(_id, review));
    },
    handleComplainContractSubmit: (_id, complain) => {
        dispatch(actions.handleComplainContractSubmit(_id, complain));
    },
    handleCompleteContractSubmit: (_id) => {
        dispatch(actions.handleComplainContractSubmit(_id));
    },
    handleContractControllerSelect: (selected) => {
        dispatch(actions.handleContractControllerSelect(selected));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Contract);