import React from 'react'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function CoffeeCard({coffee,coffees,setCoffees}) {
  const {_id,name,supplier,chef,details,taste,category,photo}=coffee
  const handleDelete = (_id) => {
    console.log(_id)
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
        fetch(`http://localhost:3000/coffee/${_id}`,{
          method : "DELETE"
        })
        .then(res=>res.json())
        .then(data => {
          console.log(data);
          if(data.deletedCount > 0){
            Swal.fire({
            title: "Deleted!",
            text: "Coffee has been deleted.",
            icon: "success"
        });
        const remaining = coffees.filter(cof => cof._id !== _id)
        setCoffees(remaining)
          }
        })
      }
    });
  }
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl">
  <figure className='h-60 w-44 mx-auto'>
    <img
      src={photo}
      alt="Coffee"
      className='w-full'
      />
  </figure>
  <div className=" flex justify-center items-center gap-12 p-5">
   <div>
   <h2 className="text-lg font-semibold">Name: <span className='text-gray-500'>{name}</span></h2>
    <h2 className="text-lg my-4 font-semibold">Chef Name: <span className='text-gray-500'>{chef}</span></h2>
    <h2 className="text-lg font-semibold">Category: <span className='text-gray-500'>{category}</span></h2>
   </div>
    <div className="card-actions flex-col justify-end">
      <Link to={`/details/${_id}`}><button className="btn bg-orange-200"><i className="fa-regular fa-eye"></i></button></Link>
      <Link to={`/updateCoffee/${_id}`} ><button className="btn bg-green-200"><i className="fa-regular fa-pen-to-square"></i></button></Link>
      <button onClick={()=>handleDelete(_id)} className="btn bg-red-200"><i className="fa-regular fa-trash-can"></i></button>
    </div>
  </div>
</div>
    </div>
  )
}
