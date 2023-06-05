import React, {useState} from 'react'
import { Card } from "antd";

import "../entry/Entry.style.css";
import { ResetPassword } from '../../components/ResetPassword/ResetPassword';
import { useSelector } from 'react-redux';
import UpdatePasswordForm from '../../components/ResetPassword/UpdatePasswordForm';


export const PasswordOtpForm = () => {
  const { showUpdatePassForm } = useSelector(state => state.password);
    
  return (
    <div className='entry-page bg-info'>
      <Card className="form-box"> 
          {showUpdatePassForm ? <UpdatePasswordForm /> : <ResetPassword />} 
      </Card>
      <div className='text-center'>
        <a href="/">Login now</a>
      </div>      
    </div>
  )
}
