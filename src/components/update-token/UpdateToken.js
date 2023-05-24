import React from 'react';
import PropTypes from "prop-types";
import { Button, Form } from 'react-bootstrap'

export const UpdateToken = ({msg, handleOnChange, handleOnSubmit}) => {
  return (
    <Form onSubmit={handleOnSubmit}>
        <Form.Label>Reply: </Form.Label>
        <Form.Text className="ms-2">
            Please reply your message here or 
            update the status 
        </Form.Text>
        <Form.Control 
        value={msg}
        onChange={handleOnChange}
        as="textarea" 
        row="5"
        name="detail" />
        <div className='text-right mt-3 mb-3 ' >
        <Button variant="info" type="submit">
            Reply
        </Button>
        </div>
    </Form>
  )
}

UpdateToken.prototypes = {
    msg: PropTypes.string.isRequired,
    handleOnChange: PropTypes.func.isRequired,
    handleOnSubmit: PropTypes.func.isRequired

}