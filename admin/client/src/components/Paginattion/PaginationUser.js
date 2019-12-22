import React from 'react';
import {Pagination, PaginationItem, PaginationLink} from 'reactstrap';
import {connect} from 'react-redux'
import {getUserList} from "../../actions/user.actions";

class PaginationUser extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick(e, index) {
        try {
            e.preventDefault();
            let _payload = {
                role: this.props.role,
                page: index,
                limit: this.props.limit
            };
            this.props.getUserList(_payload);
        } catch (e) {

        }
    }

    render() {
        const paginate = {
            page: this.props.page,
            totalPages: this.props.totalPages
        };

        let items = [...Array(paginate.totalPages)].map((page, i) => {
                return (
                    <PaginationItem active={i === paginate.page - 1} key={i}>
                        <PaginationLink onClick={e => this.handleClick(e, i + 1)} href="#">
                            {i + 1}
                        </PaginationLink>
                    </PaginationItem>)
            }
        );

        return (
            <div className="pagination-wrapper">
                <Pagination aria-label="Page navigation example">
                    <PaginationItem disabled={paginate.page <= 1}>
                        <PaginationLink
                            onClick={e => this.handleClick(e, paginate.page - 1)}
                            previous
                            href="#"
                        />
                    </PaginationItem>

                    {items}

                    <PaginationItem disabled={paginate.page >= paginate.totalPages}>
                        <PaginationLink
                            onClick={e => this.handleClick(e, paginate.page + 1)}
                            next
                            href="#"
                        />
                    </PaginationItem>
                </Pagination>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const {user} = state;
    let pagination = {};
    switch (user.role) {
        case '0':
            pagination = {
                ...{}, ...{
                    role: user.role,
                    page: user.paginationStudent.page,
                    totalPages: user.paginationStudent.totalPages,
                    limit: user.paginationStudent.limit,
                }
            };
            break;
        case '1':
            pagination = {
                ...{}, ...{
                    role: user.role,
                    page: user.paginationTeacher.page,
                    totalPages: user.paginationTeacher.totalPages,
                    limit: user.paginationTeacher.limit,
                }
            };
            break;
        case '2':
            pagination = {
                ...{}, ...{
                    role: user.role,
                    page: user.paginationAdmin.page,
                    totalPages: user.paginationAdmin.totalPages,
                    limit: user.paginationAdmin.limit,
                }
            };
            break;
        case '3':
            pagination = {
                ...{}, ...{
                    role: user.role,
                    page: user.paginationRoot.page,
                    totalPages: user.paginationRoot.totalPages,
                    limit: user.paginationRoot.limit,
                }
            };
            break;
    }
    return pagination;
}

const mapDispatchToProps = {
    getUserList
};


export default connect(mapStateToProps, mapDispatchToProps)(PaginationUser);
