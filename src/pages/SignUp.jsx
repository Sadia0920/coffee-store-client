import React, { useContext } from 'react'
import { AuthContext } from '../providers/AuthProvider';
import Swal from 'sweetalert2';

export default function SignUp() {

  const {createUser} = useContext(AuthContext)

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    
    createUser(email,password)
    .then(result =>{
      const createdAt = result?.user?.metadata?.creationTime;
      const newUser ={name,email,createdAt}

      // MongoDB
      fetch(`https://coffee-store-server-omega-gilt.vercel.app/users`,{
        method : 'POST',
        headers : {
          'content-type' : 'application/json'
        },
        body : JSON.stringify(newUser)
      })
      .then(res=>res.json())
      .then(data=>{
        if(data.insertedId){
          Swal.fire({
              title: 'Success',
              text: 'Successfully SignUp',
              icon: 'success',
              confirmButtonText: 'Done'
            })
            form.reset()
      }
      })
    })
    .catch(error =>{
    })
  }
  return (
    <div>
      <div className="hero bg-base-200 ">
  <div className="hero-content flex-col w-5/12 mx-auto">
    <div className="text-center py-6">
      <h1 className="text-3xl font-bold">Sign Up now!</h1>
    </div>
    <div className="card bg-base-100 w-full  shadow-2xl">
      <form onSubmit={handleSignUp} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" name='name' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" name='password' className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Sign Up</button>
        </div>
      </form>
    </div>
  </div>
</div>
    </div>
  )
}

