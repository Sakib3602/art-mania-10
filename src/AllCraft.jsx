import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthProvaider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AllCraft = () => {
  const [data1, setData1] = useState([]);

  // const [loading,setLoading] = useState(true)
  
  const { person } = useContext(AuthContext);
  console.log(person.email, "email");
  useEffect(() => {
    fetch(`http://localhost:9000/addItemValue/${person.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData1(data);
        
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [person?.email]);
  console.log(data1)
  

  function handleDelete(e) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:9000/deletedRoute/${e}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            const remaning = data1.filter(d => d._id !== data._id)
            setData1(remaning)
           

            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          })
          .catch((error) => {
            Swal.fire({
              title: "Error!",
              text: "An error occurred while deleting the file.",
              icon: "error",
            });
          });
      }
    });
  }

  return (
    <div className="w-[95%] mt-10 md:w-[95%] lg:w-[90%] m-auto grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* loading */}
        
       {/* {
        loading &&  <div
        className="w-32 aspect-square rounded-full relative flex justify-center  animate-[spin_3s_linear_infinite] z-40 bg-[conic-gradient(white_0deg,white_300deg,transparent_270deg,transparent_360deg)] before:animate-[spin_2s_linear_infinite] before:absolute before:w-[60%] before:aspect-square before:rounded-full before:z-[80] before:bg-[conic-gradient(white_0deg,white_270deg,transparent_180deg,transparent_360deg)] after:absolute after:w-3/4 after:aspect-square after:rounded-full after:z-[60] after:animate-[spin_3s_linear_infinite] after:bg-[conic-gradient(#065f46_0deg,#065f46_180deg,transparent_180deg,transparent_360deg)] items-center"
      >
        <span
          className="absolute w-[85%] aspect-square rounded-full z-[60] animate-[spin_5s_linear_infinite] bg-[conic-gradient(#34d399_0deg,#34d399_180deg,transparent_180deg,transparent_360deg)]"
        >
        </span>
      </div>
       } */}














        {/* loading */}
















      {data1.map((e) => (
        <div
          key={e._id}
          className="card w-full p-1 glass border-[3px] border-black border-solid"
        >
          <figure>
            <img
              src={e.photo}
              alt="car!"
              className="border-[3px]  border-black border-solid p-2 rounded-lg"
            />
          </figure>
          <div className="card-body border-[3px] border-black border-solid mt-2 rounded-lg">
            <h2 className="card-title text-5xl">{e.itemName}</h2>
            <h2 className="card-title">Ratings : {e.ratings}</h2>
            <p>In Stock : {e.stock}</p>
            <p>Process Time : {e.process} Hours</p>
            <p className="text-blue-800">Price : ${e.price} Hours</p>
            <div className="card-actions justify-end">
              <Link to={`/update/${e._id}`}>
                <button className="btn btn-outline">Update</button>
              </Link>
              <button
                onClick={() => handleDelete(person?.email)}
                className="btn  btn-outline "
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllCraft;
