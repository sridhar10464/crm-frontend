import React from 'react';
import { Table } from 'react-bootstrap';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';


export const TicketTable = ({tickets}) => {
  return (
    <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Subjects</th>
            <th>Status</th>
            <th>Opened Date</th>
          </tr>
        </thead>
        <tbody>
          {tickets.length ? (tickets.map ((row) => (
            <tr key={row.id}>
            <th>{row.id}</th>
            <th>
            <Link to={`/token/${row.id}`}>{row.subject}</Link>
            </th>
            <th>{row.status}</th>
            <th>{row.addedAt}</th>
          </tr>
          )) 
          ) : (
          <tr>
            <td colSpan="4" className="text-center">
                No Token to show
            </td>
          </tr>
          )}
        </tbody>
    </Table>
  )
}

TicketTable.propTypes = {
  tickets: PropTypes.array.isRequired,
}
