import axios from "axios";

const auth_URL = '/api/user/'

const register = async(formData)=>{
    const response = await axios.post(auth_URL+'/register' , formData);
    localStorage.setItem('user', JSON.stringify(response.data))
    return response.data;

}
const login = async(formData)=>{
    const response = await axios.post(auth_URL+'/login' , formData);
    localStorage.setItem('user', JSON.stringify(response.data))
    return response.data;

}
const authData = {
    register,
    login,
}
export default authData;

