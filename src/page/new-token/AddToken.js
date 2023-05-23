import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { PageBreadcrumb } from '../../components/breadcrumb/Breadcrumb'
import { AddTokenForm } from '../../components/Add-token-form/AddTokenForm'

// const initialFormData = {
//     subject: "",
//     issueDate: "",
//     details: "",
// };

export const AddToken = () => {
    // const [formData, setFormData] = useState(initialFormData)

    // const handleOnChange = (e) => {
    //     const { name, value } = e.target;

    //     setFormData({
    //         ...initialFormData,
    //         [name]: value,
    //     });
    //     console.log(name, value);
    // }

    // const handleOnSubmit = e => {
    //     e.preventDefault()

    //     console.log("Form submit request received");
    // }

  return (
    <Container>
        <Row>
            <Col>
                <PageBreadcrumb page="New Token" />
            </Col>
        </Row>
        
        <Row>
            <Col>
                <AddTokenForm 
                    // handleOnSubmit={handleOnSubmit}
                    // handleOnChange={handleOnChange}
                    // formData={formData}
                />
            </Col>
        </Row>
    </Container>
  )
}
