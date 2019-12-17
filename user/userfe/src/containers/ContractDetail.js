import React from 'react'

class ContractDetail extends React.Component {

    renderContract() {
        return (
            <div className="content col-lg-9">
                <header>
                    <h2 className="m-0-bottom" data-ng-non-bindable="">Web developer/ designer needed
                </h2>
                </header>
                <section className="air-card-divider-sm">
                    <div className="job-description break">
                        I am need of a web developer to assist me with intergrating a search
                        listing
                        This job was posted from a mobile device, so please pardon any typos or
                        any missing details.
                </div>
                </section>
                <section className="air-card-divider-sm">
                    <ul className="job-features p-0">
                        <li>
                            <i className="glyphicon air-icon-clock-hourly jobdetails-tier-level-icon"></i>
                            <strong>Mức lương/Giờ</strong>
                            <small className="text-muted">15</small>
                        </li>
                        <li>
                            <i className="glyphicon air-icon-calendar-under1month-alt jobdetails-tier-level-icon"></i>
                            <strong>
                                <span className="d-none d-lg-inline">Thời gian</span>
                            </strong>
                            <small className="text-muted">
                                <span className="d-none d-lg-inline">Jan 2018 - May 2019</span>
                            </small>
                        </li>

                        <li>
                            <i className="jobdetails-tier-level-icon">$</i>
                            <strong>
                                <span className="d-none d-lg-inline">Tổng tiền</span>
                                <span className="d-lg-none">$</span>
                            </strong>
                            <small className="text-muted">
                                <span className="d-none d-lg-inline">
                                    900 000
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
                                <a className="o-tag m-0-left m-0-top m-xs-bottom"
                                    href="">CSS</a>

                                <a className="o-tag m-0-left m-0-top m-xs-bottom"
                                    href="">HTML</a>

                            </div>

                        </div>
                    </div>
                </section>
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
                                <div className="stars" style={{visibility: 'visible'}}>
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
                                    <a href="">Nguyen Cong Hung</a>
                                </div>
                            </li>

                            <li className="justify-xs-md">
                                <strong className="primary">
                                    Người học
                            </strong>
                                <div className="text-muted">
                                    <a href="">Nguyen Hung</a>
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
                <section className="">
                    <div className="row m-md-bottom ng-scope">
                        <div className="header col-xs-12 m-xs-bottom">
                            <h4 className="m-0-bottom">
                                <span className="ng-scope">
                                    <strong className="ng-binding ng-scope">Điểm đánh giá: 4</strong>
                                </span>
                            </h4>
                            <div className="m-xs-top ng-scope">
                                <span className="ng-scope">
                                    <span className="work-rating vertical-align-middle ng-pristine ng-untouched ng-valid ng-isolate-scope ng-not-empty">
                                    </span>
                                    <div className="ng-isolate-scope">
                                        Keana is great to work
                                        with. Extremely communiKeana is great to work with.
                                            Extremely communicative &amp; swift in making payments.
                                        Looking to work with her again :)
                                    </div>
                                </span>
                            </div>
                        </div>
                        <div className="stats col-xs-12 m-xs-bottom">
                            <span className="ng-binding"> 23h40 17/03/2019</span>
                        </div>
                        <div className="m-xs-top">
                            <span className="ng-scope">
                                <strong className="ng-binding">
                                    Nguyen Hung
                                </strong>
                            </span>
                        </div>
                    </div>
                </section>
            </client-work-history>
        );
    }
    render() {
        return (
            <div id="layout" className="layout">
                <div className="layout-page-content">
                    <div className="d-block jd-container standalone container ng-isolate-scope">
                        <div className="d-block">
                            <h1 className="d-none d-lg-block ng-scope">Thông tin hợp đồng</h1>
                            <div className="jd-card air-card p-0-top-bottom m-0-top-bottom ng-scope">
                                <div className="row">
                                    {this.renderContract()}
                                    {this.renderContractEvaluation()}
                                </div>
                            </div>
                            <div className="work-history air-card m-0-bottom p-0-top-bottom ng-scope">
                                {this.renderReview()}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}
export default ContractDetail;