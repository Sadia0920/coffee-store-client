import React from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

export default function AddCoffee() {

    const handleAddCoffee = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const newCoffee = {name,chef,supplier,taste,category,details,photo}
        console.log(newCoffee)

        fetch('http://localhost:3000/coffee', {
            method : 'POST',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'Success',
                    text: 'Coffee Successfully Added',
                    icon: 'success',
                    confirmButtonText: 'Done'
                  })
                  form.reset()
            }
        })
    
    }
  return (
    <div className='w-10/12 mx-auto py-10'>
        <div className='flex gap-2'>
        <Link to='/'><i className="fa-solid fa-arrow-left text-xl"></i></Link>
        <p className='mb-8 text-xl font-bold text-[#374151]'>Back to home</p>
        </div>
        <div className='bg-[#F4F3F0] p-10'>
            <h2 className='text-center text-4xl font-bold text-[#374151]'>Add New Coffee</h2>
            <p className='text-center text-[#1B1A1AB3] w-9/12 mx-auto mt-8'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
        <form onSubmit={handleAddCoffee}>
        <div className='md:flex justify-between items-center gap-5 mt-6'>
            <div className='md:w-1/2'>
                <label className="form-control">
                <div className="label">
                <span className="label-text font-bold">Name</span>
                </div>
                <input type="text" placeholder="Enter Coffee Name" name='name' className="input input-bordered w-full" />
                </label>
            </div>
            <div className='md:w-1/2'>
                <label className="form-control">
                <div className="label">
                <span className="label-text font-bold">Chef</span>
                </div>
                <input type="text" placeholder="Enter Coffee Chef" name='chef' className="input input-bordered w-full" />
                </label>
            </div>
        </div>
        <div className='md:flex justify-between items-center gap-5 mt-6'>
            <div className='md:w-1/2'>
                <label className="form-control">
                <div className="label">
                <span className="label-text font-bold">Supplier</span>
                </div>
                <input type="text" placeholder="Enter Coffee Supplier" name='supplier' className="input input-bordered w-full" />
                </label>
            </div>
            <div className='md:w-1/2'>
                <label className="form-control">
                <div className="label">
                <span className="label-text font-bold">Taste</span>
                </div>
                <input type="text" placeholder="Enter Coffee Taste" name='taste' className="input input-bordered w-full" />
                </label>
            </div>
        </div>
        <div className='md:flex justify-between items-center gap-5 mt-6'>
            <div className='md:w-1/2'>
                <label className="form-control">
                <div className="label">
                <span className="label-text font-bold">Category</span>
                </div>
                <input type="text" placeholder="Enter Coffee Category" name='category' className="input input-bordered w-full" />
                </label>
            </div>
            <div className='md:w-1/2'>
                <label className="form-control">
                <div className="label">
                <span className="label-text font-bold">Details</span>
                </div>
                <input type="text" placeholder="Enter Coffee Details" name='details' className="input input-bordered w-full" />
                </label>
            </div>
        </div>
        <div className='mt-6'>
            <div className='md:w-full'>
                <label className="form-control">
                <div className="label">
                <span className="label-text font-bold">Photo</span>
                </div>
                <input type="text" placeholder="Enter Photo URL" name='photo' className="input input-bordered w-full" />
                </label>
            </div>
        </div>
        <div className='mt-6'>
            <input type="submit" value="Add Coffee" className="btn w-full font-bold border-[#331A15] text-[#331A15] bg-[#E3B577]" />
        </div>
        </form>
        </div>
    </div>
  )
}
