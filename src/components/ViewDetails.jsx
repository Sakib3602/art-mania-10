import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
  const data = useLoaderData();
  const {
    item_name,
    subcategory_name,
    short_description,
    image_url,
    price,
    rating,
    customization,
    processing_time,
    stockStatus,
  } = data;
  console.log(data);
  return (
    <div>
      <div className="w-[95%] h-[960px] md:h-[900px] lg:w-[80%] lg:h-[800px] p-4 shadow-md  border-[3px] mt-10 border-black border-solid rounded-lg m-auto">
        
        <div className="space-y-4">
          <div className="space-y-2">
            <img
              src={image_url}
              alt=""
              className="block object-cover object-center w-full rounded-md h-[388px] bg-gray-500"
            />
            <div className="flex items-center text-xs">
              <span className="text-[20px]">Category : {subcategory_name}</span>
            </div>
          </div>
          <div className="space-y-2">
            <a rel="noopener noreferrer" href="#" className="block">
              <h3 className="text-5xl font-semibold text-violet-800">
                {item_name}
              </h3>
            </a>
            <p className="leading-snug text-2xl text-gray-800">
              {short_description}
            </p>
            <p className="leading-snug text-2xl text-gray-800">
              Process Time : {processing_time}
            </p>
            <p className="leading-snug text-2xl text-gray-800">
              Rating : {rating}
            </p>
            <p className="leading-snug text-2xl text-gray-800">
              Customable : {customization}
            </p>
            <p className="leading-snug text-2xl text-gray-800">
              Available : {stockStatus}
            </p>
            <p className="leading-snug text-2xl text-gray-800">
             Price : ${price}
            </p>
            <a
        
        className="relative inline-block px-4 py-2 font-medium group items-end"
      >
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
  );
};

export default ViewDetails;
