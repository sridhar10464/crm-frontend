import React, {useState} from 'react'
import { Card } from "antd";
import { Login } from '../../components/login/Login';
import "../entry/Entry.style.css";
import { ResetPassword } from '../../components/ResetPassword/ResetPassword';


export const Entry = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [formLoad, setFormLoad] = useState("login");

    const handleOnChange = (e) => {
        const { name, value } = e.target;

        switch (name) {
            case "email":
                setEmail(value)
                break
            case "password":
                setPassword(value)
                break
            default:
                break
        }
    }

    const handleOnSubmit = e => {
        e.preventDefault()

        if (!email || !password) {
           return alert("Fill up all the form!")
        } 

        console.log(email, password);
    }

    const handleOnResetSubmit = e => {
        e.preventDefault()

        if (!email) {
           return alert("Please enter the email!")
        } 

        console.log(email);
    }

    const formSwitcher = (formType) => {
        setFormLoad(formType);
    }

  return (
    <div className='entry-page bg-info'>
        <Card className="form-box"> 
              {formLoad === "login" && 
              <Login
                  handleOnChange={handleOnChange} 
                  handleOnSubmit={handleOnSubmit}
                  formSwitcher={formSwitcher}
                  email={email}
                  password={password}
              />
              }

              {formLoad === "reset" && 
              <ResetPassword
                  handleOnChange={handleOnChange} 
                  handleOnResetSubmit={handleOnResetSubmit}
                  formSwitcher={formSwitcher}
                  email={email}
              />
              }
        </Card>
    </div>
  )
}
