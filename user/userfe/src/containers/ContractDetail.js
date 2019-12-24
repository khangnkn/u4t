import React from 'react'
import { userService } from '../actions/UserService';
// import SimpleReactValidator from 'simple-react-validator';
class ContractDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contract: null
        }
        // this.validator = new SimpleReactValidator();
        this.handleDesicionContractAcception = this.handleDesicionContractAcception.bind(this);
    }
    componentDidMount() {
        var id = 'cmt8';
        userService.getContractDetail(id).then(data => {
            this.setState({ contract: data.contract });
        })
    }
    handleDesicionContractAcception(value) {
        userService.desicionContractAccept(state.id,value).then(data => {
            window.alert(data.message);
        })
    }
    renderContract() {
        return (
            <div className="content col-lg-9">
                <header>
                    <h2 className="m-0-bottom" data-ng-non-bindable="">{this.state.contract.title}</h2>
                </header>
                <section className="air-card-divider-sm">
                    <div className="job-description break">
                        {this.state.contract.description}
                    </div>
                </section>
                <section className="air-card-divider-sm">
                    <ul className="job-features p-0">
                        <li>
                            <i className="glyphicon air-icon-clock-hourly jobdetails-tier-level-icon"></i>
                            <strong>Mức lương/Giờ</strong>
                            <small className="text-muted">{this.state.contract.price}</small>
                        </li>
                        <li>
                            <i className="glyphicon air-icon-calendar-under1month-alt jobdetails-tier-level-icon"></i>
                            <strong>
                                <span className="d-none d-lg-inline">Thời gian</span>
                            </strong>
                            <small className="text-muted">
                                <span className="d-none d-lg-inline">{this.state.contract.startDate} - {this.state.contract.endDate}</span>
                                {/* <span className="d-none d-lg-inline">{this.state.contract.ghGio} giờ/tuần</span> */}
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
                                    {this.state.contract.total}
                                </span>
                            </small>
                        </li>
                    </ul>
                </section>

                {/* <section className="air-card-divider-sm">
                    <h4>Thông tin kỹ năng liên quan</h4>
                    <div className="sands-groups">
                        <div className="row">
                            <div className="col-sm-6 m-md-bottom">
                                {this.state.contract.skills.map((e, i) => {
                                    return (<a className="o-tag m-0-left m-0-top m-xs-bottom" key={i}
                                        href="#" disabled>CSS</a>);
                                })}
                            </div>

                        </div>
                    </div>
                </section> */}
            </div>
        );
    }
    renderContractEvaluation() {
        return (
            <aside className="sidebar-extra col-lg-3">
                <div className="sidebar m-0-top p-0-top">
                    <section className="air-card-divider-sm">

                        <h4>Thông tin đánh giá</h4>

                        <div className="m-md-bottom">
                            <span className="text-success text-primary glyphicon air-icon-verified eoPaymentVerified m-0-left m-xs-right no-close-lg ng-scope">
                            </span>
                            <strong>
                                Đã thanh toán đầy đủ
                        </strong>
                        </div>


                        <div className="rating m-md-bottom text-muted justify-xs-md">
                            <span
                                className="work-rating vertical-align-middle primary ng-pristine ng-untouched ng-valid ng-isolate-scope ng-not-empty">
                                <div className="stars" style={{ visibility: 'visible' }}>
                                    <canvas className="star ng-scope" height="16" width="80"></canvas>
                                </div>
                            </span>
                            <span className="nowrap">
                                5.00 of 2
                                reviews
                            </span>
                        </div>

                        <ul className="list-unstyled m-0-bottom">
                            <li className="justify-xs-md">
                                <strong className="primary">Mức độ hoàn thành</strong>
                                <div className="text-muted">
                                    <span className="nowrap">100%</span>
                                </div>
                            </li>

                            <li className="justify-xs-md">
                                <strong className="primary">
                                    Người dạy
                            </strong>
                                <div className="text-muted">
                                    <a href="#">Nguyen Cong Hung</a>
                                </div>
                            </li>

                            <li className="justify-xs-md">
                                <strong className="primary">
                                    Người học
                            </strong>
                                <div className="text-muted">
                                    <a href="#">Nguyen Hung</a>
                                </div>
                            </li>
                        </ul>
                    </section>
                </div>
            </aside>
        );
    }
    renderContractBeforeAccept(){
        return (
            <aside className="sidebar-extra col-lg-3">
                <div className="sidebar m-0-top p-0-top">
                    <section className="air-card-divider-sm">

                        <h4>Thông tin đánh giá</h4>

                        <div className="m-md-bottom">
                            <span className="text-success text-primary glyphicon air-icon-verified eoPaymentVerified m-0-left m-xs-right no-close-lg ng-scope">
                            </span>
                            <strong>
                                Nếu bạn muốn xem thông tin người học
                            </strong>
                            <em>
                                Hãy nhấp chọn link bên dưới
                            </em>
                        </div>
                        <ul className="list-unstyled m-0-bottom">
                            <li className="justify-xs-md">
                                <strong className="primary">
                                    Người học
                            </strong>
                                <div className="text-muted">
                                    <a href="#">Nguyen Hung</a>
                                </div>
                            </li>
                        </ul>
                    </section>
                </div>
            </aside>
        );
    }
    renderReview() {
        return (
            <client-work-history className="ng-isolate-scope">
                <header className="p-lg-bottom">
                    <h2 className="justify m-0-top-bottom">
                        <span className="primary ng-binding">Đánh giá</span>
                    </h2>
                </header>
                {this.state.contract.danhGia.map((e, i) => {
                    return (
                        <section className="">
                            <div className="row m-md-bottom ng-scope">
                                <div className="header col-xs-12 m-xs-bottom">
                                    <h4 className="m-0-bottom">
                                        <span className="ng-scope">
                                            <strong className="ng-binding ng-scope">Điểm đánh giá: {e.diemDanhGia}</strong>
                                        </span>
                                    </h4>
                                    <div className="m-xs-top ng-scope">
                                        <span className="ng-scope">
                                            <span className="work-rating vertical-align-middle ng-pristine ng-untouched ng-valid ng-isolate-scope ng-not-empty">
                                            </span>
                                            <div className="ng-isolate-scope">
                                                {e.moTa}
                                            </div>
                                        </span>
                                    </div>
                                </div>
                                <div className="stats col-xs-12 m-xs-bottom">
                                    <span className="ng-binding"> {e.thoiGian}</span>
                                </div>
                                <div className="m-xs-top">
                                    <span className="ng-scope">
                                        <strong className="ng-binding">
                                            {e.by.fullName}
                                        </strong>
                                    </span>
                                </div>
                            </div>
                        </section>);
                })}

            </client-work-history>
        );
    }
    renderAccept() {
        return (
            <div className="modal-footer">
                <div className="btn-row">
                    <Button type="button" className="btn pull-left btn-primary" onClick={this.handleDesicionContractAcception(-1)}>Từ chối</Button>
                    <Button type="button" className="btn pull-right btn-primary" onClick={this.handleDesicionContractAcception(1)}>Chấp thuận</Button>
                </div>
            </div>
        );
    }
    render() {
        var flat = this.props.flat;
        return (
            <div id="layout" className="layout">
                <div className="layout-page-content">
                    <div className="d-block jd-container standalone container ng-isolate-scope">
                        <div className="d-block">
                            <h1 className="d-none d-lg-block ng-scope">Thông tin hợp đồng</h1>
                            <div className="jd-card air-card p-0-top-bottom m-0-top-bottom ng-scope">
                                <div className="row">
                                    {this.renderContract()}
                                    {flat === 1 ? this.renderContractEvaluation(): ""}
                                    {flat === 1 ?this.renderContract() : this.renderContractBeforeAccept()}
                                </div>
                            </div>
                            <div className="work-history air-card m-0-bottom p-0-top-bottom ng-scope">
                                {flat === 1 ? this.renderReview() : this.renderAccept()}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}
export default ContractDetail;