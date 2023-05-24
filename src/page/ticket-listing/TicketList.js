import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { PageBreadcrumb } from '../../components/breadcrumb/Breadcrumb';
import { SearchForm } from '../../components/search-form/SearchForm';
import { TicketTable } from "../../components/ticket-table/TicketTable";
import tickets from "../../assets/data/dummy-tickets.json";
import { Link } from 'react-router-dom';

export const TicketList = () => {
    const [str, setStr] = useState("");
    const [dispTicket, setDispTicket] = useState([]);

    useEffect(() => {}, [str, dispTicket]);
    
    const handleOnChange = (e)=> {
        const { value } = e.target;
        setStr(value)
        searchTicket(value);
    }

    const searchTicket = sttr => {
        const displayTickets = tickets.filter(row =>
            row.subject.toLowerCase().includes(sttr.toLowerCase())
        );
        
        setDispTicket(displayTickets);
    }
  return (
    <Container>
        <Row>
            <Col>
                <PageBreadcrumb page="Token List" />
            </Col>
        </Row>
        <Row className="mt-4">
            <Col>
            <Link to="/add-token">
                <Button variant="info">Add New Token</Button>
            </Link>    
            </Col>
            <Col className='text-right'>
                <SearchForm handleOnChange={handleOnChange} str={str} />
            </Col>
        </Row>
        <hr />
        <Row>
            <Col>
                  <TicketTable tickets={tickets} />
            </Col>
        </Row>
    </Container>
  )
}
