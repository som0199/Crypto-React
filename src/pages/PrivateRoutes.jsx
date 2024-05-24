import React from 'react'
import useAuthStatus from '../hooks/useAuthStatus';
import { CircularProgress, Container } from '@mui/material';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoutes = () => {
    const {loggedIn, checkStatus} = useAuthStatus();

    if(checkStatus){
        return(
        <Container sx={{padding: "50px 0px"}} align="center">
            <CircularProgress color="secondary" />
        </Container>
        )
    }
    
return loggedIn ? <Outlet /> : <Navigate to={"/login"}/> ;
}

export default PrivateRoutes