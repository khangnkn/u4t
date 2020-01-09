import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import UserService from '../actions/UserService';

const ContractManagement = (props) => {
  const handleControllerSelectContractManagement = (value) => {
    props.handleControllerSelectContractManagement(value);
  };
  const componentDidMount = () => {
    const userCookie = JSON.parse(localStorage.getItem('user'));
    UserService.loadAllContract(userCookie.id).then((data) => {
      props.handleLoadListContractManagement(data.list);
    });
  };
  const itemContract = (e, i) => {
    const m = moment();
    const sd = m(e.start_date, 'MM/DD/YYYY');
    const ed = m(e.end_date, 'MM/DD/YYYY');
    return (
      <li className="ng-scope" key={i}>
        <div className="ng-scope">
          <div className="row ng-scope">
            <div className="col-sm-12">
              <div className="row">
                <div className="col-sm-8">
                  <h4 className="m-0-top m-xs-bottom">
                    <a href="" className="ng-binding ng-scope">e.title</a>
                  </h4>
                  <ul className="list-inline m-0-left">
                    <li className="m-xs-bottom p-0-left">
                      <small className="text-muted ng-binding">
                        {sd}
                        {' '}
-
                        {' '}
                        {ed}
                      </small>
                    </li>
                  </ul>
                  <div className="">
                    <em className="break ng-binding ng-scope">{e.description}</em>
                  </div>
                </div>
                <div className="col-sm-4 text-right cfe-assignment-stats">
                  <div className="d-none d-sm-block">
                    <div className="m-xs-bottom ng-scope">
                      <strong className="ng-binding">
$
                        {e.price}
                      </strong>
                      <strong className="ng-binding">
Tổng: $
                        {e.total}
                      </strong>
                    </div>
                    <div className="m-xs-bottom ng-scope">
                      <div className="ng-binding ng-scope">Đang thực hiện</div>
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
  };
  const listContract = (list) => (
    <ul className="list-unstyled ng-scope">
      {list.map((e, i) => {
        if (e.state === props.selected || props.selected === -1) return itemContract(e, i, props.selected);
        return '';
      })}
    </ul>
  );
  const management = () => {
    const sl = props.contractManagement.selected;
    let tt;
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
        <div dclass="ng-scope">
          <div className="ng-scope">
            <div className="m-0-right ng-scope">
              <div className="ng-scope ng-isolate-scope">
                <div className="p-0-top-bottom m-0-right m-0-left-right-md m-0-left-right-xl air-card">
                  <header className="ng-scope">
                    <div className="d-flex vertical-align-middle justify-content-space-between align-items-start">
                      <h2 className="cfe-assignments-title m-0-top-bottom">{tt}</h2>
                    </div>
                  </header>
                  <div className="in" aria-expanded="true" aria-hidden="false" style="height: auto;">
                    <section className="p-lg-top responsive assigment-list-content ng-scope">
                      <div className="m-sm-bottom ng-scope">
                        <div className="ng-scope">
                          {tt === 3 ? statisticsTable() : listContract()}
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
    );
  };
  const controller = () => {
    const role = 0;
    const xTKBtn = <Button class="btn btn-primary" style="width: 200px;" type="button" onClick={handleControllerSelectContractManagement(3)}>Xem thống kê</Button>;
    return (
      <div className="col-lg-3 cfe-sidebar d-none d-lg-block ng-scope">
        <div className="air-card">
          <Button class="btn btn-primary" style="width: 200px;" type="button" onClick={handleControllerSelectContractManagement(-1)}>Tất cả</Button>
          <Button class="btn btn-primary" style="width: 200px;" type="button" onClick={handleControllerSelectContractManagement(0)}>Đang yêu cầu</Button>
          <Button class="btn btn-primary" style="width: 200px;" type="button" onClick={handleControllerSelectContractManagement(1)}>Đang thực hiện</Button>
          <Button class="btn btn-primary" style="width: 200px;" type="button" onClick={handleControllerSelectContractManagement(2)}>Đã hoàn tất</Button>
          {role === 0 ? '' : xTKBtn}
        </div>
      </div>
    );
  };

  return (
    <div id="layout" className="layout">
      <div className="layout-page-content">
        <div className="container p-lg-bottom p-0-top-bottom-xs p-0-top-bottom-sm">
          <div className="ng-scope">
            <div>
              <div className="ng-scope ng-isolate-scope">
                <div className="fe-ui-application responsive">
                  <div className="fe-ui-application cfe-ui-application">
                    <div className="row eo-block-none o-profile">
                      {management()}
                      {controller()}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { contractManagement } = state;
  return { contractManagement };
};
const mapDispatchToProps = (dispatch, props) => ({
  handleControllerSelectContractManagement: (value) => {
    actions.handleControllerSelectContractManagement(value);
  },
  handleLoadListContractManagement: (list) => {
    actions.handleLoadListContractManagement(list);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ContractManagement);
