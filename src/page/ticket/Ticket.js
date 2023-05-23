import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { PageBreadcrumb } from '../../components/breadcrumb/Breadcrumb';
import tickets from "../../assets/data/dummy-tickets.json";
import { MessageHistory } from '../../components/message-history/MessageHistory';
import { UpdateToken } from '../../components/update-token/UpdateToken';

const ticket = tickets[0]
export const Ticket = () => {
  const [message, setMessage] = useState("");
  useEffect(() => {
    
  }, [message])

  const handleOnChange = (e) => {
    setMessage(e.target.value);
  };

  const handleOnSubmit = () => {
    alert("Form submited")
  }
  return (
    <Container>
        <Row>
            <Col>
                <PageBreadcrumb page="Ticket" />
            </Col>
        </Row>
        <Row>
            <Col className="text-weight-bolder text-secondary">
                <div className="subject">Subject:{ticket.subject}</div>
                <div className="date">Token opened:{ticket.addedAt}</div>
                <div className="status">Status:{ticket.status}</div>
            </Col>
            
            <Col className='text-right'>
              <Button variant="outline-info">Close Token</Button>
            </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <MessageHistory msg={ticket.history} />
          </Col>
        </Row>
        <hr />
        
        <Row className="mt-4">
          <Col>
          <UpdateToken
            msg={message}
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
          />
          </Col>
        </Row>
    </Container>
  )
}
