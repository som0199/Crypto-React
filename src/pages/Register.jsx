import { Button, Card, CardContent, Container, LinearProgress, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { registerUser } from '../store/autherisation/authSlice';

const Register = () => {
  const navigate = useNavigate();
  const dispatch =  useDispatch(); 

  const {user,isLoading,isError,message} = useSelector(state=>state.auth)
    
  useEffect(()=>{
      if(user){
        navigate("/")
      }
      if(isError || message){
        toast.error(message)
      }
    },[user,isError,message])


    const [formData, setFormData] = useState({
        name : "",
        email: "",
        password: "",
        confPass : "",
    })

    const {name, email, password, confPass} = formData;

    const handleChange = (e) =>{
        setFormData({
            ...formData,
        [e.target.name] : e.target.value,
        })
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(registerUser(formData))
       
    }
    
    if(isLoading){
      return(
        <Container sx={{padding: "30px 0px"}}>
          <LinearProgress color="warning" />
        </Container>
      )
    }

  return (
    <>
    <Card>
        <CardContent>
          <Typography variant="h5" align="center">
            Register Here
          </Typography>
          <br />
          <form onSubmit={handleSubmit}>
            <TextField
              sx={{ margin: "8px 0px" }}
              variant="standard"
              label="Enter the Name"
              name="name"
              onChange={handleChange}
              value={name}
              fullWidth
              required
            />
            <TextField
              sx={{ margin: "8px 0px" }}
              variant="standard"
              label="Enter Email"
              name="email"
              onChange={handleChange}
              value={email}
              type="email"
              fullWidth
              required
            />
            <TextField
              sx={{ margin: "8px 0px" }}
              variant="standard"
              label="Enter Password"
              name="password"
              onChange={handleChange}
              value={password}
              type="password"
              fullWidth
              required
            />
            <TextField
              sx={{ margin: "8px 0px" }}
              variant="standard"
              label="Confirm Password"
              name="confPass"
              onChange={handleChange}
              value={confPass}
              type="password"
              fullWidth
              required
            />
            <Button
              sx={{ margin: "10px 0px" }}
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
            >
              Register
            </Button>
          </form>
        </CardContent>
      </Card>
    </>
  )
}

export default Register