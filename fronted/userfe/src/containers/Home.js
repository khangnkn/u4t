import React from 'react';
import './../public/stylesheets/air2-ng-cat.css';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.renderBanner = this.renderBanner.bind(this);
        this.renderOverview = this.renderOverview.bind(this);
        this.renderTopTeacher = this.renderTopTeacher.bind(this);
        this.renderSeach = this.renderSeach.bind(this);
        this.renderTinyInfor = this.renderTinyInfor.bind(this);
    }
    renderBanner() {
        return (
            <section class="developers vs-bg-gray-lightest hero-with-image-section">
                <div class="container-visitor ">
                    <div class="row">
                        <div class="col-md-8 col-xs-12 col-sm-12 col-lg-7">
                            <h1 class="display-3 m-lg-bottom">Tìm kiếm các cơ hội việc làm và khóa học tốt tại Uber for Teacher</h1>
                            <a class="btn btn-primary m-md-bottom m-0-bottom-md m-0-bottom-xl m-0-right-xs btn-block-sm"
                                href="/register"> Đăng ký ngay
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    renderOverview() {
        return (
            <section class="hiring-use-cases-section vs-bg-gray-lightest">
                <div class="container-visitor p-lg-top-bottom p-0-bottom-xs">
                    <div class="row">
                        <div class="title col-md-12 col-xl-3">
                            <h2 class="d-none d-xl-block m-0"> Tìm kiếm các cơ hội việc làm và khóa học tốt: </h2>
                        </div>
                        <div class="item col-md-4 col-xl-3">
                            <div
                                class="use-case p-lg-left p-xs-top-bottom p-0-top-bottom-xs m-md-bottom m-0-bottom-md m-0-bottom-xl">
                                <h4 class="m-sm-bottom"> Đăng tải dễ dàng </h4>
                                <p class="m-0"> Chúng tối đưa hồ sơ của bạn đến người học dễ dàng </p>
                            </div>
                        </div>
                        <div class="item col-md-4 col-xl-3">
                            <div
                                class="use-case p-lg-left p-xs-top-bottom p-0-top-bottom-xs m-md-bottom m-0-bottom-md m-0-bottom-xl">
                                <h4 class="m-sm-bottom"> Tìm kiếm dễ dàng </h4>
                                <p class="m-0"> Người học có thể tìm kiếm người dạy phù hợp dựa theo tùy chọn
                    </p>
                            </div>
                        </div>
                        <div
                            class="item col-md-4 col-xl-3 m-xlg-bottom m-0-bottom-md m-0-bottom-xl">
                            <div class="use-case p-lg-left p-xs-top-bottom p-0-top-bottom-xs">
                                <h4 class="m-sm-bottom"> Quản lý dễ dàng </h4>
                                <p class="m-0"> U4T hỗ trợ quản lý thống kê lịch sử hợp đồng
                    </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    renderTopTeacher() {
        return (
            <section class="fl-carousel-section  ng-scope">
                <h2 class="display-1 m-xlg-top m-lg-bottom m-0-bottom text-center">Danh sách người dạy tiêu biểu</h2>
                <div class="d-none d-xl-block p-md-bottom"></div>
                <div class="vs-tab-content-container">
                    <div class="vs-tab-content">
                        <div class="container-visitor">
                            <div class="d-none d-xl-block carousel-comp carousel ng-isolate-scope">
                                <div class="carousel-inner">
                                    <div class="item text-center ng-scope ng-isolate-scope active">
                                        <div class="d-flex p-xs-left-right p-sm-bottom row ng-scope">
                                            <div class="fl-tile col-xl-3 col-md-5 col-sm-12 p-xs-top" >
                                                <div class="vs-shadow-dark p-md-top p-lg-bottom p-sm-left-right text-left ng-scope">
                                                    <div class="d-flex">
                                                        <div class="text-center">
                                                            <img
                                                                src="home_files/c13ch2ekA9aD8Ev0mEOVMLLeWScGchH4kpTBqiq3paHhjcfPHZKRWORic1a.webp"
                                                                class="avatar d-block avatar-md m-0" />
                                                            <p class="m-md-top text-center m-0-bottom">
                                                                <strong class="font-14"> $45</strong>
                                                                <small>/hr</small>
                                                            </p>
                                                        </div>
                                                        <div class="p-sm-left tile-text-part">
                                                            <p class="d-block ellipsis fl-name">
                                                                <small>
                                                                    <strong> Remon R. </strong>
                                                                </small>
                                                            </p>
                                                            <p class="m-sm-bottom tile-title vs-full-word-cut-text">
                                                                Arabic Copywriter /English to Arabic translator/ Php &amp; Wordpress dev
                                                            </p>
                                                            <span class="d-block badge badge-top-rated top-rated-badge-height">
                                                                <span aria-hidden="true" class="glyphicon air-icon-top-rated">
                                                                </span>
                                                                Top rated
                                                            </span>
                                                            <small class="d-block m-xs-top vs-color-gray ellipsis p-xs-top p-0-top-xs">Assuit,Egypt</small>
                                                        </div>
                                                    </div>
                                                    <hr class="m-sm-top-bottom" />
                                                    <div class="skills-list-container m-xs-bottom m-0-bottom-xs" >
                                                        <span class="vs-full-word-cut-text o-tag-skill m-xs-right pull-left m-xs-bottom vs-o-tag-no-hover d-block vs-color-text">TranslationEnglish Arabic</span>
                                                        <span class="vs-full-word-cut-text o-tag-skill m-xs-right pull-left m-xs-bottom vs-o-tag-no-hover d-block vs-color-text">ArticleWriting</span>
                                                        <span class="vs-full-word-cut-text o-tag-skill m-xs-right pull-left m-xs-bottom vs-o-tag-no-hover d-block vs-color-text">C#</span>
                                                    </div>
                                                    <a href="https://www.upwork.com/o/profiles/users/_~01212238f24ffbaf66/" class="btn btn-primary btn-sm btn-block-sm m-0-bottom m-md-top tile-cta-button">Thông tin chi tiết</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    renderSeach() {
        return (
            <section class="p-xxxlg-bottom">
                <div class="container-visitor ng-scope">
                    <div class="row">
                        <h2 data-qa="title" class="title display-1 col-md-12 text-center m-xlg-top m-xlg-bottom">Tìm kiếm người dạy phù hợp với yêu cầu của bạn</h2>
                    </div>
                    <div class="ng-dirty ng-valid-rest ng-valid">
                        <div class="row">
                            <div class="col-xs-12 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2 col-xl-6 col-xl-offset-3 ng-scope">
                                <div class="text-center m-lg-top">
                                    <div class="text-center m-lg-top">
                                        <div>
                                            <button type="submit"
                                                class="btn-block-sm btn-primary btn-submit btn m-0 btn m-0">Tìm kiếm ngay</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    renderTinyInfor() {
        return (
            <section class="payroll-footer-link-section vs-bg-midnight-blue">
                <div class="container-visitor">
                    <div class="row">
                        <div class="col-xs-12">
                            <div class="text-center p-md-top-bottom payroll-link">
                                <small class="vs-color-gray-light"> 
                                    Website Uber For Teacher đươc xây dựng để đem đến cho người dạy và người học những trải nghiệm tuyệt vời
                                </small>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    render(){
        return(
            <div id="layout">
                {this.renderBanner()}
                {this.renderOverview()}
                {this.renderTopTeacher()}
                {this.renderSeach()}
                {this.renderTinyInfor()}
            </div>
        );
    }
}

export default Home;