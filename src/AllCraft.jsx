import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthProvaider";
import { Link } from "react-router-dom";


const AllCraft = () => {
    const [data1,setData1] = useState([])
    const {person} = useContext(AuthContext)
    console.log(person.email,"email")
    useEffect(()=>{
        fetch(`http://localhost:9000/addItemValue/${person.email}`)
        .then(res => res.json())
        .then(data => {

            setData1(data)

        })
    },[person.email])
    console.log(data1)

  return (
    <div className="w-[95%] mt-10 md:w-[95%] lg:w-[90%] m-auto grid grid-cols-1 lg:grid-cols-3 gap-10">

      {
        data1.map(e => 
            <div key={e._id} className="card w-full p-1 glass border-[3px] border-black border-solid">
        <figure>
          <img
            src={e.photo}
            alt="car!"
            className="border-[3px]  border-black border-solid p-2 rounded-lg"
          />
        </figure>
        <div className="card-body border-[3px] border-black border-solid mt-2 rounded-lg" >
          <h2 className="card-title text-5xl">{e.itemName}</h2>
          <h2 className="card-title">Ratings : {e.ratings}</h2>
          <p>In Stock : {e.stock}</p>
          <p>Process Time : {e.process} Hours</p>
          <p className="text-blue-800">Price : ${e.price} Hours</p>
          <div className="card-actions justify-end">
            <Link to={`/update/${e._id}`}><button className="btn btn-outline">Update</button></Link>
            <button className="btn  btn-outline ">Delete</button>
          </div>
        </div>
      </div>
        
        )
      }
     
    </div>
  );
};

export default AllCraft;
