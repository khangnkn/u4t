import React from 'react';
import './../public/stylesheets/air2.css';
import './../public/stylesheets/air2_1.css';
import './../public/stylesheets/footer.css';
// import './../public/stylesheets/visitor_search.css';
// import './../public/stylesheets/air2-ng-homepage.css';
class Search extends React.Component {
    constructor(props) {
        super(props);
    }
    renderNav() {
        return (

            <nav className="navbar navbar-fixed-top" aria-label="Navigation bar">
                <div className="container-visitor">
                    <div className="navbar-header" style={{ marginRight: '10px' }}><a
                        className="nv-brand" href="/" > U4T </a>
                    </div>
                    <div className="navbar-collapse d-none d-lg-flex ">
                        <div className="navbar-form">
                            <div className="hydrated">
                                <div className="hydrated">
                                    <form method="GET" action="/search/profiles/" role="search"
                                        className="ng-pristine ng-valid">
                                        <div className="input-group input-group-search-dropdown input-group-navbar">
                                            <div className="input-group-btn">
                                                <button className="btn p-0-left-right" type="submit" tabindex="0">
                                                    <span className="glyphicon m-sm-left m-0-right" aria-hidden="true"><i className="fas fa-search"></i></span>
                                                    <span className="sr-only">Submit
                                                    search</span>
                                                </button>
                                            </div>
                                                <input className="form-control" type="search" name="q" tabindex="0"
                                                    placeholder="Tìm kiếm người dạy" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <ul className="navbar-nav navbar-lg navbar-subnav navbar-right">
                            <li role="none"><a href="/login"> Log In</a></li>
                            <li role="none"><a href="/register"> Sign up</a></li>

                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
    renderFooter() {
        return (
            <footer id="myFooter">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3">
                            <h5>Home</h5>
                        </div>
                        <div className="col-sm-3">
                            <h5>Sign In</h5>
                        </div>
                        <div className="col-sm-3">
                            <h5>Sign Up</h5>
                        </div>
                        <div className="col-sm-3 info">
                            <h5>Information</h5>
                            <p> Đây là trang web dành cho freelancer</p>
                        </div>
                    </div>
                </div>
                <div className="second-bar">
                    <div className="container">
                        <h2 className="logo"><a href="/"> U4T </a></h2>
                        <div className="social-icons">
                            {/* <a href="#" className="twitter"><i className="fa fa-twitter"></i></a>
                    <a href="#" className="facebook"><i className="fa fa-facebook"></i></a>
                    <a href="#" className="google"><i className="fa fa-google-plus"></i></a> */}
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
    renderResultItem() {
        return (
            <section className="air-card-hover air-card-hover-escape air-card-hover_tile ng-scope" >
                <div className="ng-scope ng-isolate-scope">
                    <div className="ng-scope">
                        <article className="row ng-scope">
                            <div className="col-md-2">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div style={{ position: 'relative' }} className="ng-isolate-scope">
                                            <div>
                                                <a href="/o/profiles/users/_~011e44ef04ca098710?s=1110580755107926016">
                                                    <img className="avatar vertical-align-middle m-0 avatar-lg" src="https://www.upwork.com/profile-portraits/c1CSMIPS6fYhw9kHpJ-x-Ay3e1MQG7CtSsGlkETdMXBpTFO6iHTMe7WaBwH8QAi5ut" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-10 p-0-left">
                                <div className="d-flex flex-grow-1">
                                    <div className="flex-grow-1 overflow-hidden">
                                        <h4 className="m-0-top-bottom display-inline-block ng-isolate-scope">
                                            <a className="freelancer-tile-name" title="Jamie R." href="/">
                                                <span className="ng-binding ng-scope">Jamie R.</span>
                                            </a>
                                        </h4>
                                        <div className="m-0-top-bottom ng-isolate-scope">
                                            <div>
                                                <div className="ng-scope">
                                                    <h4 className="m-0 freelancer-tile-title ellipsis ng-binding ng-scope">
                                                        Senior Full Stack Software Developer (Java, C and C++)
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row m-sm-top m-0-bottom">
                                    <div className="col-md-3 p-0-right">
                                        <div className="ng-isolate-scope">
                                            <span style={{marginRight: '6px'}}>
                                                <i className="fas fa-dollar-sign"></i>  
                                            </span>
                                            <strong className="ng-binding">50.00</strong>
                                            <span className="ext-muted ng-scope">
                                            <span className="d-none d-lg-inline-block ng-binding">/giờ</span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-md-3 p-0-right">
                                        <div className="ng-scope ng-isolate-scope">
                                            <span style={{marginRight: '6px'}}>
                                                <i className="fas fa-bars"></i>
                                            </span>
                                            <span className="d-none d-lg-inline">
                                                <strong className="ng-binding">$300k+</strong>
                                                <span className="text-muted m-xs-left"> earned</span>
                                            </span>

                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="row m-xs-bottom ng-scope">
                                            <div className="col-md-1 m-xs-right p-0-left">
                                                <i className="fas fa-feather-alt"></i>
                                            </div>
                                            <div className="col-md-10 p-0 ng-scope">
                                                <div className="clearfix ng-isolate-scope">
                                                    <div className="d-none d-lg-block">
                                                        <div className="p-0 ng-scope col-md-12">
                                                            <div>
                                                                <div className="overflow-hidden">
                                                                    <span className="ng-isolate-scope">
                                                                        <div className="progress-sm">
                                                                            <div className="progress-bar progress-bar-complimentary" style={{ width: '100%' }}>
                                                                                <span className="ng-binding">
                                                                                    100% <span className="progress-bar-text">Hợp đồng thành công</span>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 p-0-right">
                                        <div className="ng-scope ng-isolate-scope">
                                            <div className="d-flex freelancer-tile-location ng-scope">
                                                <span style={{ marginRight: '6px' }}>
                                                    <i className="fas fa-map-marker-alt"></i>
                                                </span>
                                                <strong className="ng-binding">Ho Chi Minh</strong>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row ng-scope">
                                    <div className="col-md-12">
                                        <div className="ng-isolate-scope">
                                            <div className="text-muted p-sm-top ng-binding ng-scope">
                                                <span aria-hidden="true" className="glyphicon m-0-left m-xs-right">
                                                    <i className="fas fa-graduation-cap"></i>
                                                </span>
                                                Trình độ: Thạc sĩ
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row m-sm-top m-0-bottom ng-scope">
                                    <div className="col-md-12">
                                        <div className="ng-isolate-scope">
                                            <p className="p-0-left m-0 freelancer-tile-description ng-binding ng-scope">
                                                I gained a degree a in Computer Science B.Sc from the
                                                university of Manchester and was one of the top of my class
                                                in all of the programming courses (Java, C, C+ ...
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="ng-scope">
                                    <div className="ng-scope ng-isolate-scope">
                                        <strong className="ng-binding">
                                            Kỹ năng:
                                            </strong>
                                        <ul style={{ listStyleType: 'none', marginTop: '10px' }} className="d-flex">
                                            <li className="ng-scope">
                                                <span className="m-0-top m-sm-bottom ng-scope o-tag-skill">
                                                    <span className="ng-isolate-scope">
                                                        <span className="ng-binding ng-scope">MySQL Administration</span>
                                                    </span>
                                                </span>
                                            </li>
                                            <li className="ng-scope">
                                                <span className="m-0-top m-sm-bottom ng-scope o-tag-skill">
                                                    <span className="ng-isolate-scope">
                                                        <span className="ng-binding ng-scope">MySQL Administration</span>
                                                    </span>
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                    <a className="btn btn-link m-0-bottom m-0-left-right p-0 ng-binding ng-scope" href="/o/profiles/users/_~011e44ef04ca098710?s=1110580755107926016">Thông tin chi tiết</a>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </section >
        );
    }
    renderSearchHeader() {
        return (
            <header>
                <div data-ng-show="isFacetConfigLoaded" className="" >
                    <div id="main-search" className="ng-isolate-scope">
                        <div className="freelancer-search-filters-block ng-isolate-scope">
                            <div className="ng-isolate-scope" style={{ marginLeft: '150px' }}>
                                <div className="row freelancer-search-form">
                                    <div className="col-md-12 col-lg-8">
                                        <div className="query-input-components-wrapper">
                                            <div className="query-input-components-container">
                                                <div className="query-input-component">
                                                    <div className="input-group input-group-search">
                                                        <div className="ng-isolate-scope">
                                                            <form action=""
                                                                className="form facet-input-search-component ng-pristine ng-valid ng-valid-maxlength">
                                                                <input className="form-control  ng-not-empty enabled"
                                                                    type="search" aria-label="Freelancer Search"
                                                                    placeholder="Search" />
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 d-none d-lg-block p-xs-left">
                                        <div className="tools">
                                            <div className="filters-button">
                                                <div className="btn-group">
                                                    <div className="btn btn-default m-0 p-sm-left-right filters-toggle-button">
                                                        <span className="glyphicon air-icon-color-settings m-0-left"></span>Filters
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
            </header>
        );
    }
    renderResultFooter() {
        return (
            <footer className="ng-scope">
                <div className="row">
                    <div className="col-xs-12">
                        <div>
                            <section className="freelancer-search-pagination p-0-top-bottom clearfix">
                                <div data-ng-if="paging.originTotal" className="ng-scope">
                                    <ul className="m-0-top m-xs-bottom pagination ng-pristine ng-untouched ng-valid ng-isolate-scope ng-not-empty pagination">
                                        <li className="pagination-prev ng-scope disabled">
                                            <a href="">
                                                <span aria-hidden="true" className="glyphicon air-icon-arrow-prev m-0-left"></span>
                                                <span className="d-none d-sm-inline ng-binding">Previous</span>
                                            </a>
                                        </li>
                                        <li className="pagination-page d-none d-sm-inline ng-scope active">
                                            <a href="" className="ng-binding">1</a></li>
                                        <li className="pagination-page d-none d-sm-inline ng-scope">
                                            <a href="" className="ng-binding">2</a></li>
                                    </ul>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
    render() {
        return (
            <div className="off-canvas-content navbar-fixed-subnav">
                {/* {this.renderNav()} */}
                <div id="layout">
                    <div id="main" role="main">
                        <div className="container responsive-container ng-scope">
                            <div className="oSearchHeader row m-lg-top ">
                                <div className="col-xs-12 col-sm-12 col-md-9 ">
                                    <h1 className="ellipsis m-0-top-bottom search-header-title" title="Tìm kiếm người dạy">
                                        Tìm kiếm người dạy
                                    </h1>
                                </div>
                            </div>
                            <div scroll-to-top="" className="air-card p-0-top-bottom ng-isolate-scope" id="oContractorSearch">
                                {this.renderSearchHeader()}
                                <section id="oContractorResults" className="p-0-top-bottom ng-scope">
                                    <div className="row ng-scope" >
                                        <div className="col-xs-12 ng-isolate-scope">
                                            {this.renderResultItem()}
                                            {this.renderResultItem()}
                                            {this.renderResultItem()}
                                            {this.renderResultFooter()}
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
                {/* {this.renderFooter()} */}
            </div>
        );
    }
}

export default Search;