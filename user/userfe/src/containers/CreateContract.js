import React from 'react';

class CreateContract extends React.Component {
    constructor(props) {
        super(props);
        this.renderContractDetails = this.renderContractDetails.bind(this);
        this.renderWorkDescription = this.renderWorkDescription.bind(this);
        this.renderContractFooter = this.renderContractFooter.bind(this);
        this.renderWarning = this.renderWarning.bind(this);
    }
    renderContractDetails() {
        return (
            <div className="form ng-valid ng-valid-format ng-valid-min ng-valid-max ng-valid-date ng-valid-date-range ng-valid-hr-constraintinteger ng-valid-hr-constraintmin ng-valid-hr-constraintmax ng-dirty ng-valid-number ng-valid-hr-constraintrequired ng-valid-hr-constraintfloat">
                <div className="air-card m-0-top m-0-right-md m-0-right-xl p-0-top-bottom">
                    <header>
                        <h2 className="m-0-bottom">
                            <img alt="avatar"
                                className="avatar avatar-60 m-0-top-bottom m-0-left m-sm-right d-none d-lg-inline"
                                src="./Contract_files/c1PoXrydUGYA9LO6ofPHVhDT-C1Jbbt7cP0neDqE2SWOYzmrC4knZuD69ImVgyUNfu" />
                            <span className="vertical-align-middle">
                                Abhinav Sogga, Matrix Infologics® Pvt. Ltd.
                        </span>
                        </h2>
                    </header>
                    <section>
                        <div className="form-group m-0-bottom">
                            <label className="control-label" for="title">Contract Title</label>
                            <div className="width-lg">
                                <input type="text" id="title" name="title"
                                    className="form-control ng-pristine ng-valid ng-not-empty ng-touched" />
                            </div>
                        </div>
                    </section>
                </div>
                <div className="air-card m-0-top m-0-right-md m-0-right-xl p-0-top-bottom">
                    <header className="d-flex align-items-center flex-justify-content-between">
                        <h2 className="m-0-bottom">
                            Terms
                    </h2>
                    </header>

                    <section>
                        <div>
                            <div className="form-group" data-ng-show="flagIndex.hourly"
                                id="rowHourlyRate" >
                                <label className="control-label">Hourly Rate</label>
                                <div className="d-xs-block d-sm-inline-block ng-hide">
                                </div>
                                <div className="d-flex align-items-center">
                                    <div className="has-feedback">
                                        <input
                                            className="form-control text-right p-sm-right width-xs ng-valid ng-not-empty ng-dirty ng-valid-number ng-valid-hr-constraintrequired ng-valid-hr-constraintfloat ng-valid-hr-constraintmin ng-valid-hr-constraintmax ng-touched"
                                            id="hourlyRate" type="number" name="hourlyRate"
                                            placeholder="0.00" />
                                        <span
                                            className="glyphicon glyphicon-md air-icon-payment text-primary form-control-feedback"
                                            aria-hidden="true">
                                        </span>
                                    </div>
                                    <span className="m-sm-left">/hr</span>

                                </div>
                                <div className="clearfix">
                                    <div className="text-muted p-sm-top">
                                        Abhinav Sogga's profile rate is $15.00 /hr
                                </div>
                                </div>
                            </div>
                            <div className="form-group" id="rowWeeklyLimit">
                                <label for="hourlyWeeklyLimit">Weekly Limit</label>
                                <div className="row">
                                    <weekly-limit name="weekly-limit"
                                        className="ng-pristine ng-untouched ng-valid col-lg-4 col-md-5 col-sm-5 col-xs-12 py-0 ng-not-empty ng-valid-hr-constraintinteger ng-valid-hr-constraintmin ng-valid-hr-constraintmax"
                                        >
                                        <input
                                            className="qa-wm-contract-proposal-form-limit-custom ng-pristine ng-untouched ng-valid width-sm form-control ng-empty ng-hide"
                                            placeholder="Enter the weekly limit"
                                            id="weekly-limit-custom" />
                                    </weekly-limit>
                                    <div className="display-inline-block text-muted col-lg-8 col-md-7 col-sm-7 col-xs-12 pl-15 pl-sm-0">
                                        <div className="pl-0 pl-sm-10 py-0 py-sm-10 pt-10">
                                            <span
                                                className="d-none d-md-inline pl-md-20">=</span>
                                            <span>$250.00 max/week</span>
                                        </div>
                                    </div>
                                    <div className="form-group row full-width m-0-left">
                                        <label className="control-label border-0-bottom">
                                            <span className="nowrap">Start Date</span>
                                            <wm-utc-label data-is-air-2="true"><span
                                                className="nowrap">
                                                <span className="text-muted">UTC</span>
                                            </span>
                                            </wm-utc-label>
                                        </label>
                                        <hr-datepicker
                                            data-timezone="UTC"
                                            className="ng-pristine ng-untouched ng-valid ng-empty col-lg-4 col-md-5 col-sm-5 col-xs-12 p-0 ng-valid-date-range">
                                            <div className="eo-datepicker-emulated input-group">
                                                <input
                                                    className="add-border-radius form-control ng-valid-date"
                                                    id="hourlyStartDate" type="text" />
                                                <span className="input-group-btn"><button
                                                    className="btn btn-default" type="button"
                                                ><span
                                                    aria-hidden="true"
                                                    className="glyphicon air-icon-calendar-under1month"></span></button></span>
                                            </div>
                                        </hr-datepicker>
                                    </div>
                                    <div className="form-group row full-width m-0-left">
                                        <label className="control-label border-0-bottom"
                                            for="hourlyStartDate">
                                            <span className="nowrap">Start Date</span>
                                            <wm-utc-label data-is-air-2="true"><span
                                                className="nowrap">
                                                <span className="text-muted"
                                                    data-ng-if="data.label">UTC</span>
                                            </span>
                                            </wm-utc-label>
                                        </label>
                                        <hr-datepicker
                                            data-timezone="UTC"
                                            className="ng-pristine ng-untouched ng-valid ng-empty col-lg-4 col-md-5 col-sm-5 col-xs-12 p-0 ng-valid-date-range">
                                            <div className="eo-datepicker-emulated input-group">
                                                <input
                                                    className="add-border-radius form-control ng-valid-date"
                                                    id="hourlyStartDate" type="text" />
                                                <span className="input-group-btn"><button
                                                    className="btn btn-default" type="button"
                                                ><span
                                                    aria-hidden="true"
                                                    className="glyphicon air-icon-calendar-under1month"></span></button></span>
                                            </div>
                                        </hr-datepicker>
                                    </div>
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
                                Work Description
                        </h2>
                        </header>
                        <section>
                            <div data-ng-show="flagIndex.hourly" id="rowHourlyInstruction"
                                className="" >
                                <div>
                                    <textarea
                                        className="form-control ng-pristine ng-untouched ng-valid ng-not-empty"
                                        autocomplete="off"
                                        placeholder="Get started on the right foot by setting clear expectations"
                                        rows="8"></textarea>
                                    <hr-error>
                                        <span
                                            className="form-message  form-error form-error-bottom hidden">
                                            <span></span>
                                        </span>
                                    </hr-error>
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
                            <input type="button" value="Hire Abhinav Sogga"
                                className="btn btn-primary" />
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
                <strong>How do hourly contracts work?</strong>
                <p>
                    Before work begins, you and your freelancer agree to a certain hourly
                    rate and weekly limit (if appropriate).
                As your freelancer works, the captures snapshots of their screen
        every 10 minutes, helping to verify that
        work has been completed as invoiced.
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
                                        Hire
                                </h1>
                                    <div className="hr-form-container row">
                                        <div className="col-md-9 p-0-top">
                                            {this.renderContractDetails()}
                                            {this.renderWorkDescription()}
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

export default CreateContract;