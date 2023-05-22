import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { TicketTable } from '../../components/ticket-table/TicketTable'
import tickets from "../../assets/data/dummy-tickets.json";

export const Dashboard = () => {
  return (
    <Container>
        <Row>
            <Col className='text-center mt-5 mb-2'>
                <Button 
                variant="info" 
                style={{fontSize: "2rem", padding: "10px 30px"}}
                >
                Add New Token
                </Button>
            </Col>
        </Row>
        <Row>
            <Col className='text-center mt-5 mb-2'>
                <div>Total Tokens: 50</div>
                <div>Pending Tokens: 5</div>
            </Col>
        </Row>
        <Row>
            <Col className='mt-2'>Recently Added Tokens</Col>
        </Row>
        <hr />
        
        <Row>
            <Col className='recent-ticket'>
                <TicketTable tickets={tickets} />
            </Col>
        </Row>
    </Container>
  )
}
