import { Link, useLoaderData } from "react-router-dom";

const TableView = () => {
  const data = useLoaderData();

  const {
    customization,
    email,
    itemName,
    price,
    photo,
    process,
    ratings,
    stock,
    subcategory,
    username,
    _id
  } = data;

  return (
    <div>
         <h1 className="text-[43px] text-center">Your Added ART & CRAFT</h1>
            <div className="w-[94%] md:w-[60%] lg:w-[60%] m-auto text-center">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis expedita optio porro at, temporibus labore ea error similique eos sint!</p>
            </div>
      <div className="w-[95%] h-[960px] md:h-[900px] lg:w-[80%] lg:h-[800px] p-4 shadow-md  border-[3px] mt-10 border-black border-solid rounded-lg m-auto ">
        
        <div className="space-y-4">
          <div className="space-y-2">
            <img
              src={photo}
              alt=""
              className="block object-cover object-center w-full rounded-md h-[388px] bg-gray-500"
            />
            <div className="flex items-center text-xs">
              <span className="text-[20px]">Category : {subcategory}</span>
            </div>
          </div>
          <div className="space-y-2">
            <a rel="noopener noreferrer" href="#" className="block">
              <h3 className="text-5xl font-semibold text-violet-800">
                {itemName}
              </h3>
            </a>
            {/* <p className="leading-snug text-2xl text-gray-800">
              {short_description}
            </p> */}
            <p className="leading-snug text-2xl text-gray-800">
              Process Time : {process}
            </p>
            <p className="leading-snug text-2xl text-gray-800">
              Rating : {ratings}
            </p>
            <p className="leading-snug text-2xl text-gray-800">
              Customable : {customization}
            </p>
            <p className="leading-snug text-2xl text-gray-800">
              Available : {stock}
            </p>
            <p className="leading-snug text-2xl text-gray-800">
              Price : ${price}
            </p>
            <div className="space-x-5">
             <Link to={`/update/${_id}`}>
             <a className="relative inline-block px-4 py-2 font-medium group items-end">
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                <span className="relative text-black group-hover:text-white">
                  UpDate
                </span>
              </a>
             
             </Link>
              <a className="relative inline-block px-4 py-2 font-medium group items-end">
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                <span className="relative text-black group-hover:text-white">
                  Buy Now
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableView;
