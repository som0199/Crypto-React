import { Button, Card, CardContent, Container, LinearProgress, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { loginUser } from '../store/autherisation/authSlice'


const Login = () => {

  const {user,isLoading,isError, message} = useSelector(state=>state.auth)
  const navigate = useNavigate();
  useEffect(()=>{
    if(user){
      navigate("/")
    }
    if(isError || message){
      toast.error(message)
    }
  },[user,isError,message])
  
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email : "",
    password : "",
  })
  const {email,password} = formData;

  const handleChange = (e) =>{
    setFormData({
      ...formData,
      [e.target.name] : e.target.value,
    })
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    dispatch(loginUser(formData))
  }


  if(isLoading){
    return(
      <Container sx={{padding: "30px 0px"}}>
        <LinearProgress color="success" />
      </Container>
    )
  }

  return (
    <>
    <Card>
        <CardContent>
          <Typography variant="h5" align="center">
            Login Here
          </Typography>
          <br />
          <form onSubmit={handleSubmit}>
            
            <TextField
              sx={{ margin: "6px 0px" }}
              variant="standard"
              type="email"
              label="Enter Email"
              name='email'
              onChange={handleChange}
              value ={email}
              fullWidth
              required
            />
            <TextField
              sx={{ margin: "6px 0px" }}
              variant="standard"
              label="Enter Password"
              name='password'
              onChange={handleChange}
              value={password}
              type="password"
              fullWidth
              required
            />
            <Button
              sx={{ margin: "15px 0px" }}
              type="submit"
              variant="contained"
              color="success"
              fullWidth
            >
              Login
            </Button>
          </form>
        </CardContent>
      </Card>
    </>
  )
}

export default Login