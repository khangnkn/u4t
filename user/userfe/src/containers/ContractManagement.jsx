import { Button } from 'react-bootstrap';
import * as actions from '../actions/index';
import UserService from '../actions/UserService';
import { connect } from 'react-redux';
import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
class ContractManagement extends React.Component {
    constructor(props) {
        super(props);
        this.handleControllerSelectContractManagement = this.handleControllerSelectContractManagement.bind(this);

        this.itemContract = this.itemContract.bind(this);
        this.listContract = this.listContract.bind(this);
        this.management = this.management.bind(this);
        this.controller = this.controller.bind(this);
    }
    handleControllerSelectContractManagement = (value) => {
        this.props.handleControllerSelectContractManagement(value);
    }
    componentDidMount = () => {
        UserService.loadAllContract().then(data => {
            this.props.handleLoadListContractManagement(data.data);
        })
    }
    itemContract = (e, i) => {
        // var m = moment();
        // var sd = m(e.start_date, "MM/DD/YYYY");
        // var ed = m(e.end_date, "MM/DD/YYYY");
        var _sd = new Date(e.start_date);
        var sd = _sd ? _sd.toLocaleString({ timeZone: 'UTC' }) : '----';
        var _ed = new Date(e.end_date);
        var ed = _ed ? _ed.toLocaleString({ timeZone: 'UTC' }) : '----';
        var state;
        if (e.state === 0) {
            state = 'Đang chờ chấp nhận';
        } else if (e.state === 1) {
            state = 'Đang thực hiện';
        } else if (e.state === 2) {
            state = 'Đã hoàn tất';
        }
        return (
            <li className="ng-scope" key={i}>
                <div className="ng-scope">
                    <div className="row ng-scope">
                        <div className="col-sm-12">
                            <div className="row">
                                <div className="col-sm-8">
                                    <h4 className="m-0-top m-xs-bottom">
                                        <a href="" className="ng-binding ng-scope">{e.title}</a>
                                    </h4>
                                    <ul className="list-inline m-0-left">
                                        <li className="m-xs-bottom p-0-left">
                                            <small className="text-muted ng-binding">{sd} - {ed}</small>
                                        </li>
                                    </ul>
                                    <div className="">
                                        <em className="break ng-binding ng-scope">{e.description}</em>
                                    </div>
                                </div>
                                <div className="col-sm-4 text-right cfe-assignment-stats">
                                    <div className="d-none d-sm-block">
                                        <div className="m-xs-bottom ng-scope">
                                            <strong className="ng-binding">${e.price}</strong>
                                            <strong className="ng-binding">Tổng: ${e.total}</strong>
                                        </div>
                                        <div className="m-xs-bottom ng-scope">
                                            <div className="ng-binding ng-scope">{state}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="cfe-assignment-hr m-xs-top m-0-bottom ng-scope" />
            </li>
        );
    }
    listContract = (list) => {
        return (
            <ul className="list-unstyled ng-scope">
                {list.map((e, i) => {
                    if (e.state === this.props.contractManagement.selected || this.props.contractManagement.selected === -1)
                        return this.itemContract(e, i, this.props.contractManagement.selected);
                })}
            </ul>
        );
    }
    management = () => {
        var sl = this.props.contractManagement.selected;
        var tt;
        if (sl === -1) {
            tt = 'Tất cả hợp đồng';
        } else if (sl === 0) {
            tt = 'Danh sách yêu cầu';
        } else if (sl === 1) {
            tt = 'Danh sách hợp đồng đang thực hiện';
        } else if (sl === 2) {
            tt = 'Danh sách hợp đồng đã hoàn thành';
        } else {
            tt = 'Thống kê sơ lược';
        }
        return (
            <div className="cfe-main p-0-left-right-xs col-xs-12 col-lg-9">
                <div className="ng-scope">
                    <div className="ng-scope">
                        <div className="m-0-right ng-scope">
                            <div className="ng-scope ng-isolate-scope">
                                <div className="p-0-top-bottom m-0-right m-0-left-right-md m-0-left-right-xl air-card">
                                    <header className="ng-scope">
                                        <div className="d-flex vertical-align-middle justify-content-space-between align-items-start">
                                            <h2 className="cfe-assignments-title m-0-top-bottom">{tt}</h2>
                                        </div>
                                    </header>
                                    <div className="in" aria-expanded="true" aria-hidden="false" style={{ height: 'auto' }}>
                                        <section className="p-lg-top responsive assigment-list-content ng-scope">
                                            <div className="m-sm-bottom ng-scope">
                                                <div className="ng-scope">
                                                    {tt === 3 ? null : this.listContract(this.props.contractManagement.list)}
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
    controller = () => {
        var role = 0;
        var xTKBtn = <Button className="btn btn-primary" style="width: 200px;" type="button" onClick={this.handleControllerSelectContractManagement(3)}>Xem thống kê</Button>;
        return (
            <div className="col-lg-3 cfe-sidebar d-none d-lg-block ng-scope">
                <div className="air-card" >
                    <Button className="btn btn-primary" style={{ width: '200px' }} type="button" onClick={this.handleControllerSelectContractManagement(-1)}>Tất cả</Button>
                    <Button className="btn btn-primary" style={{ width: '200px' }} type="button" onClick={this.handleControllerSelectContractManagement(0)}>Đang yêu cầu</Button>
                    <Button className="btn btn-primary" style={{ width: '200px' }} type="button" onClick={this.handleControllerSelectContractManagement(1)}>Đang thực hiện</Button>
                    <Button className="btn btn-primary" style={{ width: '200px' }} type="button" onClick={this.handleControllerSelectContractManagement(2)}>Đã hoàn tất</Button>
                    {role === 0 ? "" : xTKBtn}
                </div>
            </div>
        );
    }
    render() {
        return (
            <div>
                <NavBar />
                <div className="off-canvas-content navbar-fixed-subnav">
                    <div id="layout" className="layout" >
                        <div className="layout-page-content contract-layout">
                            <div className="container p-lg-bottom p-0-top-bottom-xs p-0-top-bottom-sm">
                                <div className="ng-scope">
                                    <div>
                                        <div className="ng-scope ng-isolate-scope">
                                            <div className="fe-ui-application responsive">
                                                <div className="fe-ui-application cfe-ui-application">
                                                    <div className="row eo-block-none o-profile">
                                                        {this.management()}
                                                        {this.controller()}
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
                <Footer />
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    const { contractManagement } = state;
    return { contractManagement };
}
const mapDispatchToProps = (dispatch, props) => ({
    handleControllerSelectContractManagement: (value) => {
        actions.handleControllerSelectContractManagement(value);
    },
    handleLoadListContractManagement: (list) => {
        actions.handleLoadListContractManagement(list);
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(ContractManagement);