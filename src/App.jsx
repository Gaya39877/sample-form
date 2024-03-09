import {useState} from "react";
import './App.css';
import FormInput from './Component/FormInput';

const App =() => { 
  const [values, setValues] = useState({
    username:"",
    email:"",
    firstname:"",
    lastname:"",
    birthdate:"",
    password:"",
    confirm_password:""
  });
  

  const inputs =[
    {
      id:1,
      name:"username",
      type:"text",
      placeholder:"Username",
      errorMessage:"should be 4-16 characters and should not include any special character!",
      label:"Username",
      pattern:"^[A-Za-z0-9]{4,16}$",
      required:true,
    },
    {
      id:2,
      name:"email",
      type:"email",
      placeholder:"Email",
      errorMessage:"should be valid email address",
      label:"Email",
      required:true,
    },
    {
      id:3,
      name:"firstname",
      type:"text",
      placeholder:"Firstname",
      errorMessage:"don't use special characters",
      label:"Firstname",
      pattern:"^[A-Za-z]{4,16}$",
      required:true,
    },
    {
      id:4,
      name:"lastname",
      type:"text",
      placeholder:"Lastname",
      errorMessage:"don't use special characters",
      label:"Lastname",
      pattern:"^[A-Za-z]{4,16}$",
      required:true,
    },
    {
      id:5,
      name:"birthdate",
      type:"date",
      placeholder:"BirthDate",
      label:"BirthDate"
    },
    {
      id:6,
      name:"password",
      type:"password",
      placeholder:"Password",
      errorMessage:"should be at leat one lowercase,one uppercase, between 8-16 characters, at least one character and number",
      label:"Password",
      pattern:`^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$`,
      required:true,
    },
    {
      id:7,
      name:"confirm_password",
      type:"password",
      placeholder:"Confirm Password",
      errorMessage:"should enter matching password",
      label:"Confirm Password",
      pattern:values.password,
      required:true,

    }
  ]
  
  
  const handleSubmit = (e)=>{
    e.preventDefault();
  };

  const onChange = (e)=>{
    setValues({...values, [e.target.name]: e.target.value});
  }

  console.log(values);

  return (
  <div className='app'>
    <form onSubmit={ handleSubmit}>
      <h1>Register</h1>
      {inputs.map((input) => (
        <FormInput 
          key={input.id} 
          {...input} 
          value={values[input.name]} 
          onChange={onChange}
        />
      ))}
      <button>Submit</button>
  
    </form>
  </div>
);}
 


export default App;
