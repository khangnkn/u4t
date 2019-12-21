import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import { userService } from './../actions/UserService';
class TeacherProfile extends React.Component {
    constructor(props) {
        super(props);
        this.renderDetail = this.renderDetail.bind(this);
        this.renderSkills = this.renderSkills.bind(this);
        this.renderHistory = this.renderHistory.bind(this);
        this.renderContact = this.renderContact.bind(this);
        this.state = {
            tutor: null
        }
    }
    componentDidMount(){
        var idTutor = this.props.match.params.id;
        userService.loadTutorInfor(idTutor).then(data => {
            this.setState({
                tutor: data
            })
        });
    }
    renderDetail(tutor) {
        return (
            <div className="ng-scope ng-isolate-scope">
                <div className="m-0 p-0">
                    <div className="fe-profile-header ng-scope">
                        <div
                            className="air-card m-0-left-right-md m-0-left-right-xl m-0-top-bottom m-0-right ng-scope">
                            <div className="row m-lg-bottom">
                                <div className="col-xs-12 col-sm-8 col-md-9 col-lg-10">
                                    <div className="media">
                                        <div className="m-sm-right">
                                            <div className="ng-isolate-scope">
                                                <div className="ng-isolate-scope">
                                                    <div
                                                        className="up-active-container ng-isolate-scope">
                                                        <img className="avatar avatar-md cfe-avatar m-0 ng-scope" alt='avatar'
                                                            src="Ma.%20Jericca%20C.%20-%20Web%20Research,%20Data%20Entry,%20Lead%20Generation%20Expert%20-%20Upwork%20Freelancer%20from%20Cagayan%20Valley,%20Philippines_files/c19yU5qVwk5YXuJpxLGqz4X570l626FIgippe_8k4aINo6fUU2W9-vTB3pS.jpeg" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="media-body">
                                            <h2 className="m-xs-bottom">
                                                <span itemprop="name" className="ng-binding">
                                                    {tutor.fullName}
                                                </span>
                                                <span
                                                    className="idv-verified badge badge-verified ng-scope">
                                                    <span aria-hidden="true"
                                                        className="glyphicon air-icon-verified"></span></span>
                                            </h2>
                                            <div className="div-local-time">
                                                <div className="ng-isolate-scope">
                                                    <span className="fe-map-trigger">
                                                        <div>
                                                            <div
                                                                className="ng-scope ng-isolate-scope">
                                                                <span aria-hidden="true"
                                                                    className="glyphicon air-icon-location m-0-left vertical-align-middle m-xs-right">
                                                                </span>
                                                                <span ng-className="labelClass"
                                                                    className="w-700">
                                                                    <span
                                                                        className="ng-binding ng-scope">
                                                                        <span
                                                                            className="text-capitalize ng-binding">{tutor.address}</span>,
                                                                </span>
                                                                    <span
                                                                        className="ng-binding ng-scope">{tutor.city.name}</span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="col-xs-12 col-sm-4 col-md-3 col-lg-2 p-0-left d-none d-sm-block">
                                    <div className="ng-isolate-scope">
                                        <div className="d-none d-sm-block">
                                            <div className="ng-scope">
                                                <div className="ng-isolate-scope">
                                                    <div className="progress-sm"
                                                        ng-className="{ 'hide-progress-bar': !showJSS }">
                                                        <div className="progress-bar progress-bar-complimentary"
                                                            style={{ width: '96%' }}>
                                                            <span className="ng-binding">{tutor.data.ratingAve}
                                                                <span
                                                                    className="progress-bar-text">Job
                                                                Success</span></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div className="m-xs-top ng-scope">
                                            <span className="badge badge-top-rated ng-scope">
                                                <span aria-hidden="true" className="glyphicon air-icon-top-rated"></span>
                                                Top rated
                                                </span>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                            <div className="overlay-container">
                                <div className="up-active-container">
                                    <h1>Profile</h1>
                                    <h3 className="m-0-top m-sm-bottom ng-scope">
                                        <span className="up-active-context up-active-context-title fe-job-title inline-block m-lg-right">
                                            <span className="ng-binding">{tutor.data.title}</span>

                                        </span>
                                    </h3>
                                </div>
                                <div className="up-active-container cfe-overview">
                                    <div words="80"
                                        className="d-none d-lg-block ng-isolate-scope"
                                        placeholder="">
                                        <div>
                                            <p
                                                className="break up-active-context m-0-bottom m-lg-right ng-isolate-scope">
                                                <span>{tutor.data.intro}
                                                </span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="m-lg-top cfe-aggregates">
                                <ul className="list-inline m-0-bottom">
                                    <li>
                                        <div className="up-active-container ng-scope">
                                            <div className="ng-scope">
                                                <h3 className="m-xs-bottom ng-scope">
                                                    <div
                                                        className="vertical-align-text-bottom ng-isolate-scope">
                                                        <span className="up-active-context">
                                                            <span className="ng-binding">
                                                                ${tutor.data.price}
                                                            </span>
                                                        </span>
                                                    </div>
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="text-muted ng-binding">Tiền lương trên giờ</div>
                                    </li>
                                    <li>
                                        <div className="up-active-container ng-scope">
                                            <div className="ng-scope">
                                                <h3 className="m-xs-bottom ng-scope">
                                                    <div
                                                        className="vertical-align-text-bottom ng-isolate-scope">
                                                        <span className="up-active-context">
                                                            <span className="ng-binding">
                                                                ${tutor.history.length}
                                                            </span>
                                                        </span>
                                                    </div>
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="text-muted ng-binding">Tổng số hợp đồng</div>
                                    </li>
                                    {/* <li className="ng-scope">
                                        <h3 className="m-xs-bottom">
                                            <span className="ng-binding">
                                                $70k+
                                        </span>
                                        </h3>
                                        <div className="text-muted ng-binding">
                                            Tổng kiếm
                                    </div>
                                    </li>
                                    <li className="ng-scope">
                                        <h3 className="m-xs-bottom ng-binding">
                                            29
                                    </h3>
                                        <div className="text-muted ng-binding">
                                            Jobs
                                    </div>
                                    </li>
                                    <li className="ng-scope">
                                        <h3 className="m-xs-bottom ng-binding">
                                            23,044
                                    </h3>
                                        <div className="text-muted ng-binding">Hours
                                        worked</div>
                                    </li> */}
                                </ul>
                            </div>
                            <hr className="m-0-bottom d-block d-lg-none" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    renderHistoryItem(contract,i) {
        return (
            <div key={i}>
                <div className="m-sm-bottom ng-scope">
                    <div className="ng-scope">
                        <div className="ng-scope">
                            <div className="ng-scope">
                                <ul className="list-unstyled ng-scope">
                                    <li className="ng-scope">
                                        <div className="ng-scope">
                                            <div className="row ng-scope">
                                                <div className="col-sm-12">
                                                    <div className="row">
                                                        <div
                                                            className="col-sm-6">
                                                            <h4
                                                                className="m-0-top m-xs-bottom">
                                                                <strong
                                                                    className="ng-binding ng-scope">
                                                                    {contract.title}
                                                                </strong>
                                                            </h4>
                                                            <ul
                                                                className="list-inline m-0-left">
                                                                <li
                                                                    className="m-xs-bottom p-0-left ng-scope">
                                                                    <div
                                                                        className="ng-pristine ng-untouched ng-valid ng-isolate-scope ng-not-empty">
                                                                        <div className="stars"
                                                                            style={{ visibility: 'visible' }}>
                                                                            <canvas
                                                                                className="star ng-scope"
                                                                                height="12"
                                                                                width="60"></canvas>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li
                                                                    className="m-xs-bottom p-0-left ng-scope">
                                                                    <strong
                                                                        className="ng-binding">5.00</strong>
                                                                </li>
                                                                <li
                                                                    className="m-xs-bottom p-0-left">
                                                                    <small
                                                                        className="text-muted ng-binding">Oct
                                                                        2019
                                                                        -
                                                                        Nov
                                                            2019</small>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div
                                                            className="col-sm-6 text-right cfe-assignment-stats">
                                                            <div
                                                                className="d-block d-sm-none text-left">
                                                                <div
                                                                    className="row">

                                                                    <div
                                                                        className="col-xs-4 m-xs-bottom ng-scope">
                                                                        <strong
                                                                            className="ng-binding">$54.67</strong>
                                                                    </div>
                                                                    <div
                                                                        className="col-xs-4 ng-scope">
                                                                        <small
                                                                            className="text-muted nowrap ng-binding">${contract.price}/giờ</small>
                                                                    </div>
                                                                    {/* <div
                                                                        className="col-xs-4 ng-scope">
                                                                        <small
                                                                            className="text-muted nowrap">
                                                                            <div
                                                                                className="ng-binding ng-scope">
                                                                                14
                                                                                hours
                                                                </div>
                                                                        </small>
                                                                    </div> */}
                                                                </div>
                                                            </div>
                                                            <div
                                                                className="d-none d-sm-block">
                                                                <div
                                                                    className="m-xs-bottom ng-scope">
                                                                    <strong
                                                                        className="ng-binding">$54.67</strong>
                                                                </div>
                                                                <div
                                                                    className="m-xs-bottom ng-scope">
                                                                    <small
                                                                        className="text-muted ng-binding">$4.00/hr</small>
                                                                </div>
                                                                <div
                                                                    className="m-xs-bottom ng-scope">
                                                                    <div
                                                                        className="ng-binding ng-scope">
                                                                        14
                                                                        hours
                                                        </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="ng-scope">
                                                            <em
                                                                className=" ng-binding ng-scope">Completed
                                                                the work
                                                                on
                                                                time,asked
                                                                clarification
                                                                questions,
                                                                and was
                                                                great to
                                                                work
                                                    with.</em>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <hr className="cfe-assignment-hr m-xs-top m-0-bottom ng-scope" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    renderHistory(history) {
        return (
            <div className="m-0-right ng-scope">
                <div className="ng-scope ng-isolate-scope">
                    <div
                        className="p-0-top-bottom m-0-right m-0-left-right-md m-0-left-right-xl air-card">
                        <header className="ng-scope">
                            <div
                                className="d-flex vertical-align-middle justify-content-space-between align-items-start">
                                <h2 className="cfe-assignments-title m-0-top-bottom">
                                    <span>
                                        Work history and feedback
                                </span>
                                </h2>
                            </div>
                        </header>
                        <div className="in" aria-expanded="true" aria-hidden="false"
                            style={{ height: 'auto' }}>
                            <section className="p-lg-top responsive assigment-list-content ng-scope">
                                {history.map((e,i)=>{
                                    return this.renderHistoryItem(e,i);
                                })}
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    renderSkills(skills) {
        return (
            <div className="ng-isolate-scop">
                <div className="ng-scope">
                    <div className="air-card m-0-left-right-md m-0-left-right-xl p-0-top-bottom">
                        <header className="d-flex vertical-align-middle justify-content-space-between align-items-start">
                            <h2 className="m-0-bottom">
                                Skills
                        </h2>
                        </header>
                        <div className="in" aria-expanded="true" aria-hidden="false" style={{ height: 'auto' }}>
                            <section>
                                <div>
                                    <div className="ng-scope ng-isolate-scope">
                                        <div className="o-profile-skills m-sm-top ng-scope">
                                            {skills.map((e, i) => {
                                                return (<a key={i} className="o-tag-skill ng-binding ng-scope" href="#" disable>{e.moTa}</a>)
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    renderContact(_id) {
        return (
            <section className="m-lg-bottom ng-scope">
                <div className="ng-scope">
                    <div className="d-none d-md-block ng-scope">
                        <section className="std-init-reg-form ">
                            <div className="ng-scope">
                                <div className="text-center">
                                    <h3 className="title ">
                                        Bạn muốn thuê người này.
                                </h3>
                                    <p className="subtitle ">
                                        Hãy bấm vào nút dưới đây để bắt đầu đề nghị hợp đồng
                                </p>
                                </div>
                                <div className="ng-pristine ng-valid ng-valid-email">
                                    <div className="ng-scope">
                                        {/* <div className="form-group m-0-bottom p-sm-bottom">
                                            <input type="text" className="form-control ng-pristine ng-valid ng-empty ng-touched" placeholder="First name" />
                                            <div className="ng-isolate-scope">
                                            </div>
                                        </div>
                                        <div className="form-group m-0-bottom p-sm-bottom">
                                            <input type="text" className="form-control ng-pristine ng-valid ng-empty ng-touched" placeholder="Last name" />
                                            <div className="ng-isolate-scope">
                                            </div>
                                        </div>
                                        <div className="form-group m-0-bottom p-sm-bottom">
                                            <input type="email" className="form-control ng-pristine ng-valid ng-empty ng-valid-email ng-touched" placeholder="Work email address" />
                                            <div className="ng-isolate-scope">
                                            </div>
                                        </div> */}
                                        <div> <a className="btn btn-primary m-0-top-bottom m-0-left-right" href={'/contract/create?tutor=' + _id} >Tạo hợp đồng</a></div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </section>
        );
    }
    render() {
        var tutor = this.state.tutor;
        return (
            <div>
                <NavBar />
                <div className="off-canvas-content navbar-fixed-subnav">
                    <div id='layout'>
                        <div className="container-visitor">
                            <div lass="ng-scope">
                                <div className="ng-scope ng-isolate-scope">
                                    <div className="fe-ui-application responsive">
                                        <div className="fe-ui-application cfe-ui-application">
                                            <div className="row eo-block-none o-profile">
                                                <div className="cfe-main p-0-left-right-xs col-xs-12 col-lg-9">
                                                    {this.renderDetail(tutor)}
                                                    {this.renderSkills(tutor.data.skills)}
                                                    {this.renderHistory(tutor.history)}
                                                </div>
                                                <div className="col-lg-3 cfe-sidebar d-none d-lg-block ng-scope">
                                                    {this.renderContact(tutor._id)}
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
}

export default TeacherProfile;