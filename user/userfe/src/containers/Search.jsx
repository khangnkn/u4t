import React from 'react';
import '../public/stylesheets/air2.css';
import '../public/stylesheets/air2_1.css';
import '../public/stylesheets/footer.css';
import { connect } from 'react-redux';
import queryString from 'query-string';
import SearchItem from '../components/SearchItem';
import NavBar from './NavBar';
import Footer from './Footer';
import * as actions from '../actions/index';
import { Dropdown, Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { helperService } from '../actions/HelperService';
import configHelper from '../helpers/ConfigHelper';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearchData = this.handleSearchData.bind(this);
    this.handeSearchSubmit = this.handeSearchSubmit.bind(this);
    this.renderResultItem = this.renderResultItem.bind(this);
    this.renderSearchHeader = this.renderSearchHeader.bind(this);
    this.renderResult = this.renderResult.bind(this);
    this.renderResultFooter = this.renderResultFooter.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
    this.state = {
      skills:[],
      levels: [],
      cities: []
    }
  }
  componentDidMount() {
    // const search = queryString.parse(window.location.search);
    // console.log(this.props.search);
    // this.props.handleSearchData('keyword',search);
    helperService.loadSkills().then((_skills) => {
      this.setState({skills: _skills});
      // state.skills = _skills;
    });
    helperService.loadLevels().then((_levels) => {
      // state.levels = _levels;
      this.setState({levels: _levels});
    });
    helperService.loadCities().then((_cities) => {
      // state.levels = _levels;
      this.setState({cities : _cities});
    });
  }

  handlePageChange(event){
    event.preventDefault();
    var {name,value} = event.target;
    console.log(value);
    this.props.handlePageChange(parseInt(value)-1);
  }

  handleSearchData(event) {
    event.preventDefault()
    const { name, value } = event.target;
    this.props.handleSearchData(name, value);
  }

  handeSearchSubmit(event) {
    event.preventDefault();
    const {
      keyword, city, skill, price,
    } = this.props.search;
    this.props.handleSearch(keyword, city, skill, price);
  }

  renderResultItem(item,_i) {
    return (
      <section className="air-card-hover air-card-hover-escape air-card-hover_tile ng-scope" key={_i}>
        <div className="ng-scope ng-isolate-scope">
          <div className="ng-scope">
            <article className="row ng-scope">
              <div className="col-md-2">
                <div className="row">
                  <div className="col-md-12">
                    <div style={{ position: 'relative' }} className="ng-isolate-scope">
                      <div>
                        <a href="/o/profiles/users/_~011e44ef04ca098710?s=1110580755107926016">
                          <img alt="avatar" className="avatar vertical-align-middle m-0 avatar-lg" src={item.avatar ? configHelper.baseUrl + '/' + item.avatar : '../public/images/user.png'} />
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
                      <a className="freelancer-tile-name" title={item.fullname ? item.fullname : ''} href="#">
                        <span className="ng-binding ng-scope">{item.fullname ? item.fullname : ''}</span>
                      </a>
                    </h4>
                    <div className="m-0-top-bottom ng-isolate-scope">
                      <div>
                        <div className="ng-scope">
                          <h4 className="m-0 freelancer-tile-title ellipsis ng-binding ng-scope">
                            {item.data.title ? item.data.title : ''}
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row m-sm-top m-0-bottom">
                  <div className="col-md-3 p-0-right">
                    <div className="ng-isolate-scope">
                      <span style={{ marginRight: '6px' }}>
                        <i className="fas fa-dollar-sign" />
                      </span>
                      <strong className="ng-binding">{item.data.price ? item.data.price : ''}</strong>
                      <span className="ext-muted ng-scope">
                        <span className="d-none d-lg-inline-block ng-binding">/giờ</span>
                      </span>
                    </div>
                  </div>
                  <div className="col-md-3 p-0-right">
                    <div className="ng-scope ng-isolate-scope">
                      <span style={{ marginRight: '6px' }}>
                        <i className="fas fa-bars" />
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
                        <i className="fas fa-feather-alt" />
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
                                          100%
                                          <span className="progress-bar-text">Hợp đồng thành công</span>
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
                          <i className="fas fa-map-marker-alt" />
                        </span>
                        <strong className="ng-binding">{item.city ? item.city.name : ''}</strong>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row ng-scope">
                  <div className="col-md-12">
                    <div className="ng-isolate-scope">
                      <div className="text-muted p-sm-top ng-binding ng-scope">
                        <span aria-hidden="true" className="glyphicon m-0-left m-xs-right">
                          <i className="fas fa-graduation-cap" />
                        </span>
                        Trình độ: {item.data.level ? item.data.level.name : ''}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row m-sm-top m-0-bottom ng-scope">
                  <div className="col-md-12">
                    <div className="ng-isolate-scope">
                      <p className="p-0-left m-0 freelancer-tile-description ng-binding ng-scope">
                        {item.data.intro ? item.data.intro : ''}
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
                      {item.data.skills ? item.data.skills.map((e, i) => {
                        return (
                          <li className="ng-scope" key={i}>
                            <span className="m-0-top m-sm-bottom ng-scope o-tag-skill">
                              <span className="ng-isolate-scope">
                                <span className="ng-binding ng-scope">{e.name}</span>
                              </span>
                            </span>
                          </li>
                        );
                      }) : null}
                    </ul>
                  </div>
                  <a className="btn btn-link m-0-bottom m-0-left-right p-0 ng-binding ng-scope" href="/o/profiles/users/_~011e44ef04ca098710?s=1110580755107926016">Thông tin chi tiết</a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    );
  }

  renderResult(){
    var result = this.props.search.result;
    var size = this.props.search.size,page = this.props.search.page;
    return (
      <div>
        {result.map((e,i)=> {
          
          if (i >= size*page && i <= size*(page+1)- 1)
          {
            return this.renderResultItem(e,i); 
          }   
        })}
      </div>
    );
  }

  renderSearchHeader() {
    return (
      <header>
        <div data-ng-show="isFacetConfigLoaded" className="">
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
                              <form
                                action=""
                                className="form facet-input-search-component ng-pristine ng-valid ng-valid-maxlength"
                              >
                                <Form.Control
                                  onChange={this.handleSearchData}
                                  name="keyword"
                                  value = {this.props.search.keyword}
                                  className="form-control  ng-not-empty enabled"
                                  aria-label="Freelancer Search"
                                  placeholder="Search"
                                />

                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 d-none d-lg-block p-xs-left">
                    <div className="tools">
                      <div className="">
                        <div className="">
                          <div className="m-0 p-sm-left-right filters-toggle-button">
                            <Button type="submit" onClick={this.handeSearchSubmit}>Search</Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row freelancer-search-form">
              <div className="col-lg-4">
                <div className="row">
                  <Form.Label className="col">Kỹ năng: </Form.Label>
                  <Form.Control as="select" name="skill" className="col" value={this.props.search.skill} onChange={this.handleSearchData} style={{height: '40px'}}>
                   {this.state.skills.map((e, i) => (<option value={e._id} key={i}>{e.name}</option>))}
                  </Form.Control>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="row">
                  <Form.Label className="col">Thành phố: </Form.Label>
                  <Form.Control as="select" className="col" name='city' value={this.props.search.city} onChange={this.handleSearchData} style={{height: '40px'}}>
                    {this.state.cities.map((e, i) => (<option value={e._id} key={i}>{e.name}</option>))}
                  </Form.Control>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="row">
                  <Form.Label className="col">Giá tiền: </Form.Label>
                  <Form.Control className="col" value={this.props.search.price} onChange={this.handleSearchData} type="text" name="price" style={{height: '40px'}}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }

  renderResultFooter() {
    var totalPage = Math.floor(this.props.search.result.length/this.props.search.size);
    var pages = new Array(totalPage);
    for (var i=0;i<totalPage;i++) pages.push(i);
    return (
      <footer className="ng-scope">
        <div className="row">
          <div className="col-xs-12">
            <div>
              <section className="freelancer-search-pagination p-0-top-bottom clearfix">
                <div data-ng-if="paging.originTotal" className="ng-scope">
                  <ul className="d-flex m-0-top m-xs-bottom pagina tion ng-pristine ng-untouched ng-valid ng-isolate-scope ng-not-empty pagination">
                    {pages.map((e,i)=>{
                      if (e === this.props.search.page - 1 || e === this.props.search.page + 1 || e === this.props.search.page)
                        return(
                          <li className="pagination-page d-none d-sm-inline ng-scope" key={i}>
                            <Form.Control className="ng-binding" type="button" value={e+1} onClick={this.handlePageChange} name="page"></Form.Control>
                            {/* <a href="#" value={e} className="ng-binding" onClick={this.handlePageChange}>{e+1}</a> */}
                          </li>
                        );
                    })}
                    
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
        <NavBar />
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
                  <div className="row ng-scope">
                    <div className="col-xs-12 ng-isolate-scope">
                      {/* <SearchItem /> */}
                      {this.props.search.result ? this.renderResult() : ""}
                      {this.props.search.result.length > 0 ? this.renderResultFooter():null}
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const MapStatetoProps = (state) => {
  const { search } = state;
  return {search};
};

const MapDispatchToProps = (dispatch, props) => ({
  handleSearchData: (name, value) => {
    dispatch(actions.handleSearchData(name, value));
  },
  handleSearch: (keyword, skill, city, price) => {
    dispatch(actions.handleSearch(keyword, skill, city, price));
  },
  handlePageChange: (page) => {
    dispatch(actions.handlePageChange(page))
  }
});

export default connect(MapStatetoProps, MapDispatchToProps)(Search);
