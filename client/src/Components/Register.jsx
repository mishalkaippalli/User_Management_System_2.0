import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
   return (
    <div className='container flex items-center justify-content-center'>
      <h2
        className='text-center text-white p-2 m-2'
        style={{backgroundColor: "blue"}}
        >
          Add new user
      </h2>

      <form className = 'p-2 m-2'>
        <div class = 'form-group m-3'>
           <label for="name">Name</label>
           <input
           type = 'text'
           class = 'form-control'
           id = 'name'
           placeholder='Enter Name'
           />
        </div>
        <div class = 'form-group  m-3'>
          <label for='name'>Email</label>
          <input
          type='email'
          class='form-control'
          id = 'email'
          placeholder='enter email'
          />
        </div>

        <label for = "gender">Gender</label>
        <div class= 'form-group'>
          <div class='form-check form-check-inline m-3'>
             <input
               class="form-check-input"
               type='radio'
               id='gender'
               value='Male'
             />
             <label class='form-check-label' for = 'gender'>Male</label>
          </div>
          <div class='form-check-label form-check-inline'>
            <input
              class='form-check-input'
              type="radio"
              id="Female"
              value="female"
            />
            <label class="form-check-label">Female</label>
          </div>
        </div>
        <div class="form-group">
          <label>City</label>
          <select className='form-select m-2'>
            <option value='Edapal' selected>
               Edapal
            </option>
            <option>Calicut</option>
            <option>Thrissur</option>
          </select>
        </div>
        <div class = 'form-group m-3'>
          <label>Profile</label>
          <input 
            type="file"
            class="form-control"
            id='exxampleinputemail'
            aria-describedby='emailHelp'
            placeholder='Enter Name'
          />
        </div>

        <button type='submit' class="btn btn-primary">
          Submit
        </button>
        <Link to = {"/"}>
          <button className="btn btn-danger m-3">Cancel</button>
        </Link>  
      </form>
    </div>
  )
}

export default Register
