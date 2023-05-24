import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import { DefaultLayout } from '../../Layout/DefaultLayout';

const isAuth = true;
export const PrivateRoute = ({children, ...rest}) => {
  return (
    <Routes>
        <Route 
            {...rest}
            render={() =>
            isAuth ? <DefaultLayout>{children}</DefaultLayout> : <Link to="/" />} />
    </Routes>
  )
}
