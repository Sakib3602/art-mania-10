import { Link } from "react-router-dom";

const HomeCardSection = ({ cardData1 }) => {
  console.log(cardData1._id);

  const { item_name, subcategory_name, image_url, rating, price , _id} = cardData1;





  

  return (
    <div className="border-[3px] border-black border-solid mt-10 p-5 rounded-md">
      <img src={image_url} className="w-full h-[300px] rounded-md" alt="" />

      <h1 className="text-[29px] font-[600]">{item_name}</h1>
      <h1 className="text-[22px] font-[500]">Category : {subcategory_name}</h1>
      <h1 className="text-[20px] font-[300]">Rating: {rating}</h1>
      <h1 className="text-[25px] font-[400] flex-1">${price}</h1>
      <Link to={`/viewDetails/${_id}`}>
      <a
        
        className="relative inline-block px-4 py-2 font-medium group items-end"
      >
        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
        <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
        <span className="relative text-black group-hover:text-white">
          View Details
        </span>
      </a>
      </Link>
    </div>
  );
};

export default HomeCardSection;
