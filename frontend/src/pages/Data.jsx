import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const Data = () => {

   
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/healthy')
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleD=async (id)=>{
    await axios.delete(`http://localhost:3000/healthy/${id}`)
    setData(prevData => prevData.filter(item => item._id !== id));
  }

  const [term,setTerm]=useState("");
  
  const handleSearch = (e)=>{
    setTerm(e.target.value)
  }

  const handleSubmit = async (e)=>{
    e.preventDefault();
    const res= await axios.get(`http://localhost:3000/healthy/search?email=${term}`)
    setData(res.data);

  }
  

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-white">
      {/* Header */}
      <header className="bg-blue-100 shadow-md p-4 flex flex-col md:flex-row items-center justify-between gap-4">
      {/* Title Section */}
      <div className="text-center md:text-left">
        <h1 className="text-2xl font-bold text-blue-800">Patient Records</h1>
        <p className="text-blue-600">
          Easily view patient details and medical documents
        </p>
      </div>

      {/* Search Form */}
      <form
        onSubmit={handleSubmit}
        className="flex items-center w-full md:w-1/2 lg:w-1/3 bg-white border border-blue-300 rounded-lg overflow-hidden shadow-sm"
      >
        <input
          type="text"
          onChange={handleSearch}
          name='search'
          placeholder="Search by email..."
          className="flex-grow p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 hover:bg-blue-700 transition-all flex items-center justify-center"
        >
          Search
        </button>
      </form>
    </header>


      {/* Content */}
      <main className="flex-1 p-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((item) => (
          <div
            key={item._id}
            className="bg-white shadow-lg rounded-2xl p-5 transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 border border-blue-100"
          >
            <h2 className="text-xl font-semibold text-blue-800">{item.name}</h2>
            <p className="text-gray-600">Age: {item.age}</p>
            <p className="text-gray-600">Email: {item.email}</p>
            <p className="text-gray-600">Disease: {item.disease}</p>
            <p className="text-gray-600">Status: {item.stat}</p>
            <p className="text-gray-600">Address: {item.address}</p>

            {item.parcha && (
              <div className="mt-4 overflow-hidden rounded-lg border border-blue-200">
                <img
                  src={`http://localhost:3000/images/${item.parcha.stored}`}
                  alt="Medical Document"
                  className="w-1/2 h-[50%] object-fill transition-transform duration-300 hover:scale-110"
                />
              </div>
            )}

             <div className="mt-4 flex gap-3">
              <button
                onClick={() => handleD(item._id)}
                className="flex-1 bg-red-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-red-600 hover:shadow-lg transition duration-200"
              >
                Delete
              </button>
              <Link
                state={{item}}
                to={`/update`}
                className="flex-1 bg-blue-500 text-white text-center py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 hover:shadow-lg transition duration-200"
              >
                Update
              </Link>
            </div>
          

            

          </div>
        ))}
      </main>

    
    </div>
  );
};

export default Data;

