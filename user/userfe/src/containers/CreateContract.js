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
            <div class="form ng-valid ng-valid-format ng-valid-min ng-valid-max ng-valid-date ng-valid-date-range ng-valid-hr-constraintinteger ng-valid-hr-constraintmin ng-valid-hr-constraintmax ng-dirty ng-valid-number ng-valid-hr-constraintrequired ng-valid-hr-constraintfloat">
                <div class="air-card m-0-top m-0-right-md m-0-right-xl p-0-top-bottom">
                    <header>
                        <h2 class="m-0-bottom">
                            <img
                                class="avatar avatar-60 m-0-top-bottom m-0-left m-sm-right d-none d-lg-inline"
                                src="./Contract_files/c1PoXrydUGYA9LO6ofPHVhDT-C1Jbbt7cP0neDqE2SWOYzmrC4knZuD69ImVgyUNfu" />
                            <span class="vertical-align-middle">
                                Abhinav Sogga, Matrix Infologics® Pvt. Ltd.
                        </span>
                        </h2>
                    </header>
                    <section>
                        <div class="form-group m-0-bottom">
                            <label class="control-label" for="title">Contract Title</label>
                            <div class="width-lg">
                                <input type="text" id="title" name="title"
                                    class="form-control ng-pristine ng-valid ng-not-empty ng-touched" />
                            </div>
                        </div>
                    </section>
                </div>
                <div class="air-card m-0-top m-0-right-md m-0-right-xl p-0-top-bottom">
                    <header class="d-flex align-items-center flex-justify-content-between">
                        <h2 class="m-0-bottom">
                            Terms
                    </h2>
                    </header>

                    <section>
                        <div>

                            <div class="form-group" data-ng-show="flagIndex.hourly"
                                id="rowHourlyRate" style="">
                                <label class="control-label">Hourly Rate</label>
                                <div class="d-xs-block d-sm-inline-block ng-hide"
                                    data-ng-show="!clickToShowIndex.hourlyRate" style="">
                                </div>
                                <div class="d-flex align-items-center">
                                    <div class="has-feedback">
                                        <input
                                            class="form-control text-right p-sm-right width-xs ng-valid ng-not-empty ng-dirty ng-valid-number ng-valid-hr-constraintrequired ng-valid-hr-constraintfloat ng-valid-hr-constraintmin ng-valid-hr-constraintmax ng-touched"
                                            id="hourlyRate" type="number" name="hourlyRate"
                                            placeholder="0.00" />
                                        <span
                                            class="glyphicon glyphicon-md air-icon-payment text-primary form-control-feedback"
                                            aria-hidden="true">
                                        </span>
                                    </div>
                                    <span class="m-sm-left">/hr</span>

                                </div>
                                <div class="clearfix">
                                    <div class="text-muted p-sm-top">
                                        Abhinav Sogga's profile rate is $15.00 /hr
                                </div>
                                </div>
                            </div>
                            <div class="form-group" id="rowWeeklyLimit">
                                <label for="hourlyWeeklyLimit">Weekly Limit</label>
                                <div class="row">
                                    <weekly-limit name="weekly-limit"
                                        class="ng-pristine ng-untouched ng-valid col-lg-4 col-md-5 col-sm-5 col-xs-12 py-0 ng-not-empty ng-valid-hr-constraintinteger ng-valid-hr-constraintmin ng-valid-hr-constraintmax"
                                        style="">
                                        <input
                                            class="qa-wm-contract-proposal-form-limit-custom ng-pristine ng-untouched ng-valid width-sm form-control ng-empty ng-hide"
                                            placeholder="Enter the weekly limit"
                                            id="weekly-limit-custom" />
                                    </weekly-limit>
                                    <div class="display-inline-block text-muted col-lg-8 col-md-7 col-sm-7 col-xs-12 pl-15 pl-sm-0">
                                        <div class="pl-0 pl-sm-10 py-0 py-sm-10 pt-10">
                                            <span
                                                class="d-none d-md-inline pl-md-20">=</span>
                                            <span>$250.00 max/week</span>
                                        </div>
                                    </div>
                                    <div class="form-group row full-width m-0-left">
                                        <label class="control-label border-0-bottom"
                                            for="hourlyStartDate">
                                            <span class="nowrap">Start Date</span>
                                            <wm-utc-label data-is-air-2="true"><span
                                                class="nowrap">
                                                <span class="text-muted"
                                                    data-ng-if="data.label">UTC</span>
                                            </span>
                                            </wm-utc-label>
                                        </label>
                                        <hr-datepicker
                                            data-timezone="UTC"
                                            class="ng-pristine ng-untouched ng-valid ng-empty col-lg-4 col-md-5 col-sm-5 col-xs-12 p-0 ng-valid-date-range">
                                            <div class="eo-datepicker-emulated input-group">
                                                <input
                                                    class="add-border-radius form-control ng-valid-date"
                                                    id="hourlyStartDate" type="text" />
                                                <span class="input-group-btn"><button
                                                    class="btn btn-default" type="button"
                                                ><span
                                                    aria-hidden="true"
                                                    class="glyphicon air-icon-calendar-under1month"></span></button></span>
                                            </div>
                                        </hr-datepicker>
                                    </div>
                                    <div class="form-group row full-width m-0-left">
                                        <label class="control-label border-0-bottom"
                                            for="hourlyStartDate">
                                            <span class="nowrap">Start Date</span>
                                            <wm-utc-label data-is-air-2="true"><span
                                                class="nowrap">
                                                <span class="text-muted"
                                                    data-ng-if="data.label">UTC</span>
                                            </span>
                                            </wm-utc-label>
                                        </label>
                                        <hr-datepicker
                                            data-timezone="UTC"
                                            class="ng-pristine ng-untouched ng-valid ng-empty col-lg-4 col-md-5 col-sm-5 col-xs-12 p-0 ng-valid-date-range">
                                            <div class="eo-datepicker-emulated input-group">
                                                <input
                                                    class="add-border-radius form-control ng-valid-date"
                                                    id="hourlyStartDate" type="text" />
                                                <span class="input-group-btn"><button
                                                    class="btn btn-default" type="button"
                                                ><span
                                                    aria-hidden="true"
                                                    class="glyphicon air-icon-calendar-under1month"></span></button></span>
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
                <div role="form" class="ng-pristine ng-valid ng-valid-uploading-file">
                    <div class="air-card m-0-top m-0-right-md m-0-right-xl p-0-top-bottom">
                        <header>
                            <h2 class="m-0-bottom">
                                Work Description
                        </h2>
                        </header>
                        <section>
                            <div data-ng-show="flagIndex.hourly" id="rowHourlyInstruction"
                                class="" style="">
                                <div>
                                    <textarea
                                        class="form-control ng-pristine ng-untouched ng-valid ng-not-empty"
                                        autocomplete="off"
                                        placeholder="Get started on the right foot by setting clear expectations"
                                        rows="8"></textarea>
                                    <hr-error>
                                        <span
                                            class="form-message  form-error form-error-bottom hidden">
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
            <div class="air-card m-0-top-bottom m-0-right-md m-0-right-xl">
                <div class="form ng-valid ng-dirty ng-valid-hr-constraintrequired ng-valid-parse"
                    role="form">
                    <div>
                        <div class="d-none d-lg-block">
                            <input type="button" value="Hire Abhinav Sogga"
                                class="btn btn-primary" />
                            <button class="btn btn-link m-lg-left">
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
                As your freelancer works, the <a
                        href="https://support.upwork.com/entries/23122141"
                        data-ng-click="eventLoggingHelper.goToWorkDiary()" target="_blank"
                        rel="noopener">Work Diary</a> captures snapshots of their screen
        every 10 minutes, helping to verify that
        work has been completed as invoiced.
            </p>
            </div>
        );
    }
    render() {
        return (
            <div id="layout" class="layout">
                <div class="layout-page-content">
                    <main class="container pt-md-30 pt-0 p-0-bottom-xs">
                        <div>
                            <div class="edit_offer_area">
                                <div>
                                    <h1 class="d-none-mobile-app m-lg-top-bottom">
                                        Hire
                                </h1>
                                    <div class="hr-form-container row">
                                        <div class="col-md-9 p-0-top">
                                            {this.renderContractDetails()}
                                            {this.renderWorkDescription()}
                                            {this.renderContractFooter()}
                                        </div>
                                        <div class="col-md-3 d-none d-md-block p-xs-top p-xs-left">
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