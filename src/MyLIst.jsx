import { Link, useLoaderData } from "react-router-dom";


const MyLIst = () => {

    const data = useLoaderData()
    
    // console.log(data)
    return (
        <div className="w-[80%] md:w-[95%] m-auto mt-10">
            <h1 className="text-[43px] text-center">MY ART & CRAFT</h1>
            <div className="w-[94%] md:w-[60%] lg:w-[60%] m-auto text-center">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis expedita optio porro at, temporibus labore ea error similique eos sint!</p>
            </div>



            {/* table */}
            <div className="overflow-x-auto">
  <table className="table lg:p-10  lg:border-[15px] border-black border-solid">
    {/* head */}
    <thead>
      <tr>
       
        <th className="text-[29px] text-b">Name</th>
        <th className="text-[29px] text-b">Subcategory</th>
        <th className="text-[29px] text-b">Email</th>
        <th className="text-[29px] text-b">Price</th>
        <th></th>
      </tr>
    </thead>
   {
    data.map((e,i)=> 
    <tbody key={i}>
    {/* row 1 */}
    <tr className=" border-[2px] border-black border-solid hover:bg-white">
      
      <td>
        <div className="flex items-center gap-3">
          
          <div>
            <div className="font-bold">{e.itemName}</div>
            
          </div>
        </div>
      </td>
      <td>
        {e.subcategory}
        
      </td>
      <td>
       {e.email}
        
      </td>
      <td>{e.price}</td>
      <th>
        <Link to={`/myList/${e._id}`}><button className="btn btn-outline btn-xl">Details</button></Link>
      </th>
    </tr>
  </tbody>

)
   }
    {/* foot */}
   
    
  </table>
</div>
            {/* table */}
        </div>
    );
};

export default MyLIst;