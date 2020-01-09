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
            <li class="ng-scope" key={i}>
                <div class="ng-scope">
                    <div class="row ng-scope">
                        <div class="col-sm-12">
                            <div class="row">
                                <div class="col-sm-8">
                                    <h4 class="m-0-top m-xs-bottom">
                                        <a href="" class="ng-binding ng-scope">e.title</a>
                                    </h4>
                                    <ul class="list-inline m-0-left">
                                        <li class="m-xs-bottom p-0-left">
                                            <small class="text-muted ng-binding">{sd} - {ed}</small>
                                        </li>
                                    </ul>
                                    <div class="">
                                        <em class="break ng-binding ng-scope">{e.description}</em>
                                    </div>
                                </div>
                                <div class="col-sm-4 text-right cfe-assignment-stats">
                                    <div class="d-none d-sm-block">
                                        <div class="m-xs-bottom ng-scope">
                                            <strong class="ng-binding">${e.price}</strong>
                                            <strong class="ng-binding">Tổng: ${e.total}</strong>
                                        </div>
                                        <div class="m-xs-bottom ng-scope">
                                            <div class="ng-binding ng-scope">{state}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr class="cfe-assignment-hr m-xs-top m-0-bottom ng-scope" />
            </li>
        );
    }
    listContract = (list) => {
        return (
            <ul class="list-unstyled ng-scope">
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
                                    <div class="in" aria-expanded="true" aria-hidden="false" style={{ height: 'auto' }}>
                                        <section class="p-lg-top responsive assigment-list-content ng-scope">
                                            <div class="m-sm-bottom ng-scope">
                                                <div class="ng-scope">
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
        var xTKBtn = <Button class="btn btn-primary" style="width: 200px;" type="button" onClick={this.handleControllerSelectContractManagement(3)}>Xem thống kê</Button>;
        return (
            <div class="col-lg-3 cfe-sidebar d-none d-lg-block ng-scope">
                <div class="air-card" >
                    <Button class="btn btn-primary" style={{ width: '200px' }} type="button" onClick={this.handleControllerSelectContractManagement(-1)}>Tất cả</Button>
                    <Button class="btn btn-primary" style={{ width: '200px' }} type="button" onClick={this.handleControllerSelectContractManagement(0)}>Đang yêu cầu</Button>
                    <Button class="btn btn-primary" style={{ width: '200px' }} type="button" onClick={this.handleControllerSelectContractManagement(1)}>Đang thực hiện</Button>
                    <Button class="btn btn-primary" style={{ width: '200px' }} type="button" onClick={this.handleControllerSelectContractManagement(2)}>Đã hoàn tất</Button>
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
                    <div id="layout" class="layout" >
                        <div class="layout-page-content contract-layout">
                            <div class="container p-lg-bottom p-0-top-bottom-xs p-0-top-bottom-sm">
                                <div class="ng-scope">
                                    <div>
                                        <div class="ng-scope ng-isolate-scope">
                                            <div class="fe-ui-application responsive">
                                                <div class="fe-ui-application cfe-ui-application">
                                                    <div class="row eo-block-none o-profile">
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