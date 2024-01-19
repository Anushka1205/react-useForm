import { useState } from 'react'
import './App.css'
import { useForm } from 'react-hook-form'

function App() {

  const{register, handleSubmit, formState: {errors}}=useForm();
  const[submitted,setSubmit]=useState();
  const[feild,setField]=useState();

  console.log(errors);

  const submitData=(data)=>{
    setField(data);
    setSubmit(true)
  }

  return (
    <>
      <div className='style'>
        <form action="" onSubmit={handleSubmit(submitData)}>

          {submitted==true?<h3>Registration Successfull!!</h3>:null}

          <input 
            id='first-name' type="text" className="feild-input" placeholder='Enter First name' 
            {...register("firstName",{required:"Enter your First Name"})}
          />
          <p>{errors.firstName?.message}</p>

          <input 
            id='last-name' type="text" className="feild-input" placeholder='Enter Last Name' 
            {...register("lastName",{required:{value:true,message:"Enter your Last Name"}})}
          />
          <p>{errors.lastName?.message}</p>

          <input 
            id='email' type="text" className="feild-input" placeholder='Enter E-mail' 
            {...register("email",{required:{value:true,message:"Enter your E-mail"}, pattern:{value:/^\S+@\S+$/i,message:"Invalid email"}})}
          />
          <p>{errors.email?.message}</p>

          <input 
            id='phone' type="password" className="feild-input" placeholder='Enter Password' 
            {...register("Password",{required:{value:true,message:"Enter your Phone Number"},
            minLength:{value:4,message:"Password must be more than 4 characters."},
            maxLength:{value:20,message:"Password can't be more that 20 characters."}})}
          />
          <p>{errors.Password?.message}</p>

          <input id='button' type="submit" value="Register"/>
        </form>
      </div>
    </>
  )
}

export default App
