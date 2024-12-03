import React, { useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import Swal from 'sweetalert2';

export default function Users() {
  const loadedUsers = useLoaderData();
  const [users,setUsers]= useState(loadedUsers);

  const handleDeleteUser = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://coffee-store-server-omega-gilt.vercel.app/users/${_id}`,{
          method : "DELETE"
        })
        .then(res=>res.json())
        .then(data => {
          console.log(data);
          if(data.deletedCount > 0){
            Swal.fire({
            title: "Deleted!",
            text: "User has been deleted.",
            icon: "success"
        });
        const remaining = users.filter(user => user._id !== _id)
        setUsers(remaining)
          }
        })
      }
    });
  }
  return (
    <div>
      <h1>users:{loadedUsers.length}</h1>
      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Creation Time</th>
        <th>Last Login Time</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     {
      users.map(user =>  <tr key={user._id}>
        <th>1</th>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.createdAt}</td>
        <td>{user.lastSignInTime}</td>
        <td>
          <button className='btn mr-2'><i className="fa-regular fa-pen-to-square"></i></button>
          <button onClick={()=>handleDeleteUser(user._id)} className='btn'><i className="fa-regular fa-trash-can"></i></button>
        </td>
      </tr>)
     }
      
    </tbody>
  </table>
</div>
    </div>
  )
}
