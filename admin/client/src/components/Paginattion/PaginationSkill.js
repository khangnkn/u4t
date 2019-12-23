import React, { useState } from 'react';
import { connect } from 'react-redux'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

class PaginationSkill extends React.Component {
  constructor() {
    super();
  }

  handleClick(e, index) {
    try {
      e.preventDefault();
      let _payload = {
        page: index,
        limit: this.props.limit
      };
    } catch (e) {

    }
    finally {

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
    });

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
  const { skill } = state;
  return {
    page: skill.page,
    totalPages: skill.totalPages,
    limit: skill.limit,
  }
}

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(PaginationSkill);
