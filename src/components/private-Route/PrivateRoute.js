import React, { useEffect } from 'react'
import { Route } from 'react-router-dom';
import { DefaultLayout } from '../../Layout/DefaultLayout';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { loginSuccess } from '../login/LoginSlice';
import { fetchNewAccessJWT } from '../../api/userApi';

export const PrivateRoute = ({children, ...rest}) => {
  const dispatch = useDispatch();

  const { isAuth } = useSelector((state) => state.login);

  useEffect(() => {
    const updateAccessJWT = async () => {
      const result = await fetchNewAccessJWT();
      result && dispatch(loginSuccess());
    }
    // updateAccessJWT();
    sessionStorage.getItem("accessJWT") && dispatch(loginSuccess())
   }, [dispatch]);

  return (
    
        <Route 
            {...rest}
            render={() =>
            isAuth ? (<DefaultLayout>{children}</DefaultLayout>) : (<Redirect to="/" />)} />
    
  )
}
