import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'


const Update = () => {

   const navigate=useNavigate();
   const location=  useLocation();
   const {item}=location.state || {}; 
   
   const [pat,setPat]=useState(item || {});

   const handleForm=(e)=>{
    const {name,value}=e.target;
    if(name==="parcha"){
      setPat({...pat,parcha:e.target.files[0]})
    }else{
      setPat({...pat,[name]:value});
    }
   }

   const handleSubmit= async (e)=>{
    e.preventDefault();

    const formData=new FormData();
    Object.keys(pat).forEach((key)=>{
      if(key ==='parcha' && pat[key] && !(pat[key] instanceof File)) return;
      formData.append(key,pat[key]);
    })

    await axios.put(`http://localhost:3000/healthy/${pat._id}`, formData)
    .then((response)=>{
      console.log("Data Updated Successfully", response.data);
      navigate('/show');
    })
    .catch((error)=>{
      console.log(error);
    })
   }

   




  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white p-6">
      <div className="bg-white/80 backdrop-blur-md shadow-2xl rounded-2xl p-8 w-full max-w-2xl border border-blue-100">
        {/* Header */}
        <h1 className="text-3xl font-bold text-blue-900 text-center mb-6">
          AIIMS Delhi - Patient Update
        </h1>
        <p className="text-center text-blue-700 mb-8 text-sm">
          Please update in the patient's details accurately
        </p>
      
        {/* Form */}
        <form onSubmit={handleSubmit} encType="multipart/form-data" method="put" className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-blue-800 font-medium mb-1">Name</label>
            <input
              type="text"
              value={pat.name}
              onChange={handleForm}
              placeholder="Enter full name"
              name="name"
              className="w-full p-3 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-400 focus:outline-none bg-blue-50/50"
            />
          </div>

          {/* Age */}
          <div>
            <label className="block text-blue-800 font-medium mb-1">Age</label>
            <input
              type="number"
              value={pat.age}
              onChange={handleForm}
              placeholder="Enter age"
              name="age"
              className="w-full p-3 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-400 focus:outline-none bg-blue-50/50"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-blue-800 font-medium mb-1">Email</label>
            <input
              type="email"
              value={pat.email}
              onChange={handleForm}
              placeholder="Enter email"
              name="email"
              className="w-full p-3 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-400 focus:outline-none bg-blue-50/50"
            />
          </div>

          {/* Disease */}
          <div>
            <label className="block text-blue-800 font-medium mb-1">Disease</label>
            <input
              type="text"
              value={pat.disease}
              onChange={handleForm}
              placeholder="Enter disease name"
              name="disease"
              className="w-full p-3 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-400 focus:outline-none bg-blue-50/50"
            />
          </div>

          {/* Status */}
          <div>
            <label className="block text-blue-800 font-medium mb-1">Status</label>
            <select
              name="stat"
              value={pat.stat}
              onChange={handleForm}
              className="w-full p-3 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-400 focus:outline-none bg-blue-50/50"
            >
              <option value="">Select Status</option>
              <option value="admitted">Admitted</option>
              <option value="discharged">Discharged</option>
              <option value="under-treatment">Under Treatment</option>
            </select>
          </div>

          {/* Address */}
          <div>
            <label className="block text-blue-800 font-medium mb-1">Address</label>
            <textarea
              placeholder="Enter full address"
              value={pat.address}
              onChange={handleForm}
              name="address"
              rows="3"
              className="w-full p-3 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-400 focus:outline-none bg-blue-50/50"
            ></textarea>
          </div>

          {/* Report or Prescriptions */}
          <div>
            <label className="block text-blue-800 font-medium mb-1">Valid Prescription</label>
            <input
              type="file"
              onChange={handleForm}
              name="parcha"
              className="w-full p-3 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-400 focus:outline-none bg-blue-50/50 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-blue-800 file:bg-blue-100 hover:file:bg-blue-200"
            />
          </div>


          {/* Submit */}
          <div className="flex justify-center">
            <button
              type="submit"
              
              className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow-md hover:bg-blue-700 transition-all duration-300"
            >
              Update Patient
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Update
