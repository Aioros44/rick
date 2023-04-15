import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form =() =>{

    const navigate = useNavigate();
const [form, setform] =useState({
email:'',
password: '',
    
})
const [errors, setErrors] = useState({
  email: '',
  password: ''  
})

const handleChange =(event) =>{

    const name = event.target.name
    const value = event.target.value
setform({
...form,
[name]: value

})
setErrors(validate())
}
const handleSubmit =(event) =>{
    event.preventDefault();
    navigate('/home'); 
}

const validate =() =>{
const error ={};
    if(!/\S+@\S+\.\S+/.test(form.email)){
error.email='no es un email valido'
    }
if(form.password.length>6){
    error.password = 'debe tener minimo 6 caracteres'
}
return error
}

    return(
<form onSubmit={handleSubmit}>
    <label htmlFor="email">Email</label>
    <input type="text" name='email' value={form.email} onChange={handleChange} />
    {errors.email && <span style={{color:'red'}}>{errors.email} </span>}
    <hr/>
    <label htmlFor="password">Password</label>
    <input type="text" name='password' value={form.password} onChange={handleChange}/>
   {errors.password && <span style={{color:'red'}}>{errors.password} </span>}
   <button >LOGIN</button>
</form>

    )
}

export default Form;