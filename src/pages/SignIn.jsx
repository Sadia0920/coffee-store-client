import React, { useContext } from 'react'
import { AuthContext } from '../providers/AuthProvider';
import Swal from 'sweetalert2';

export default function SignIn() {
  const {signInUser} = useContext(AuthContext)

  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email,password)
    .then(result => {
      console.log(result.user)

      //Update Last Sign In Time
      const lastSignInTime = result?.user?.metadata?.lastSignInTime;
      const loginInfo = {email,lastSignInTime}
      console.log(loginInfo)

      fetch(`https://coffee-store-server-omega-gilt.vercel.app/users`,{
        method : 'PATCH',
        headers : {
          'content-type' : 'application/json'
        },
        body : JSON.stringify(loginInfo)
      })
      .then(res=>res.json())
      .then(data => {
        console.log(data)
        if(data.modifiedCount>0){
          Swal.fire({
              title: 'Success',
              text: 'Sign In Successfully',
              icon: 'success',
              confirmButtonText: 'Done'
            })
            form.reset()
      }
      })
    })
    .catch(error => {
      console.log(error.message)
    })
  }
  return (
    <div>
      <div className="hero bg-base-200 ">
  <div className="hero-content flex-col w-5/12 mx-auto">
    <div className="text-center py-6">
      <h1 className="text-3xl font-bold">Sign In now!</h1>
    </div>
    <div className="card bg-base-100 w-full  shadow-2xl">
      <form onSubmit={handleSignIn} className="card-body">
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
          <input type="password" placeholder="password" name='password' className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Sign In</button>
        </div>
      </form>
    </div>
  </div>
</div>
    </div>
  )
}
