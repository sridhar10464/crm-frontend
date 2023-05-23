import React, {useEffect, useState} from 'react';
// import { PropTypes } from 'prop-types';
import { Card } from 'antd';
import { Button, Col, Form, Row } from 'react-bootstrap';
import "../Add-token-form/AddTokenFormStyle.css";
import { shortText } from '../../utils/validation';

const initialFormData = {
  subject: "",
  issueDate: "",
  details: "",
};

const initialFormError = {
  subject: false,
  issueDate: false,
  details: false,
};

export const AddTokenForm = () => {
  const [formData, setFormData] = useState(initialFormData)
  const [formDataError, setFormDataError] = useState(initialFormError)
  useEffect(() => {}, [formData, formDataError])

    const handleOnChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });
        // console.log(name, value);
    }

    const handleOnSubmit = async (e) => {
      e.preventDefault()

      setFormDataError(initialFormError);
      
      const isSubjectValid = await shortText(formData.subject);

      setFormDataError({
        ...initialFormError,
        subject: !isSubjectValid,
      });

        console.log("Form submit request received", formData);
    }

  return (
  <Card className='mt-3 add-new-ticket bg-light'>
  <h1 className='text-info text-center'>Add New Token</h1>
  <hr />
    <Form autoComplete="off" onSubmit={handleOnSubmit}>
                <Form.Group as={Row}>
                    <Form.Label column sm={3}>Subject</Form.Label>
                    <Col sm={9}>
                    <Form.Control
                        name='subject'
                        value={formData.subject}
                        maxLength="100"
                        onChange={handleOnChange}
                        placeholder='Enter Subject'
                        required
                    />
                    <Form.Text className="text-danger">
                      {formDataError.subject && "Subject is required!"}
                    </Form.Text>
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label column sm={3}>Issue Found</Form.Label>
                    <Col sm={9}>
                    <Form.Control
                        type='date'
                        name='issueDate'
                        value={formData.issueDate}
                        onChange={handleOnChange}
                        required
                    />
                    </Col>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        as="textarea"
                        name='details'
                        rows="5"
                        value={formData.details}
                        onChange={handleOnChange}
                        required
                    />
                </Form.Group>    
                    <Button type="submit" variant="info" block="true">
                    Open Token
                    </Button>
                
              </Form>
  </Card>
  )
}

// AddTokenForm.propTypes = {
//   handleOnSubmit: PropTypes.func.isRequired,
//   handleOnChange: PropTypes.func.isRequired,
//   formData: PropTypes.object.isRequired,
  // formSwitcher: PropTypes.func.isRequired,
  // email: PropTypes.string.isRequired,
  // password: PropTypes.string.isRequired,
// }