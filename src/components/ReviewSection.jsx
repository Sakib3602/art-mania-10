const ReviewSection = () => {
  return (
    <div className="mt-10">
        <h1  className="text-[33px] lg:text-[44px] md:text-[44px] text-center">Our Client Reviews.</h1>
        <div className="w-[95%] text-center m-auto lg:w-[60%] md:w-[60%]">
            <p>Explore our review section to discover honest feedback and valuable insights directly from our engaged and knowledgeable community members</p>
        </div>
     <div className=" mt-10 grid grid-cols-1 lg:grid-cols-3 ">
    

      {/* card 2 */}
      <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 bg-[#640D6B] border-[3px]  text-gray-100">
        <div className="flex justify-between p-4">
          <div className="flex space-x-4">
            <div>
              <img
                src="https://images.unsplash.com/photo-1543132220-e7fef0b974e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fGZvcm1hbCUyMG1lcmFkb25hfGVufDB8fDB8fHww"
                alt=""
                className="object-cover w-12 h-12 rounded-full bg-gray-500"
              />
            </div>
            <div>
              <h4 className="font-bold">Maradona</h4>
              <span className="text-xs text-gray-400">2 days ago</span>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-yellow-500">
            <svg
              xmlns="https://images.unsplash.com/photo-1592197976613-c697bb06d8e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzd8fGZvcm1hbCUyMG1lcmFkb25hfGVufDB8fDB8fHww"
              viewBox="0 0 512 512"
              className="w-5 h-5 fill-current"
            >
              <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
            </svg>
            <span className="text-xl font-bold">5.0</span>
          </div>
        </div>
        <div className="p-4 space-y-2 text-sm text-gray-400">
          <p>
          This website is a crafter's dream come true! It offers an incredible selection of high-quality materials and tools for every type of project imaginable. <br /> The detailed product descriptions and vibrant photos make shopping a breeze. What sets it apart, though, is the supportive community and plethora of creative ideas shared in the blog. Whether you're looking to pick up a new hobby or advance your existing skills, this site is a fantastic resource. I always leave feeling inspired and excited to create
          </p>
          
        </div>
      </div>
      {/* scsvsvc */}
      <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 bg-[#640D6B] border-[3px]  text-gray-100">
        <div className="flex justify-between p-4">
          <div className="flex space-x-4">
            <div>
              <img
                src="https://images.unsplash.com/photo-1667062672868-f1e128d4782e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGZvcm1hbCUyMG1lcmFkb25hfGVufDB8fDB8fHww"
                alt=""
                className="object-cover w-12 h-12 rounded-full bg-gray-500"
              />
            </div>
            <div>
              <h4 className="font-bold">Messi</h4>
              <span className="text-xs text-gray-400">2 days ago</span>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-yellow-500">
            <svg
              xmlns="https://images.unsplash.com/photo-1592197976613-c697bb06d8e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzd8fGZvcm1hbCUyMG1lcmFkb25hfGVufDB8fDB8fHww"
              viewBox="0 0 512 512"
              className="w-5 h-5 fill-current"
            >
              <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
            </svg>
            <span className="text-xl font-bold">4.0</span>
          </div>
        </div>
        <div className="p-4 space-y-2 text-sm text-gray-400">
          <p>
          I absolutely adore this website! It’s a treasure trove of unique and inspiring art and craft supplies that ignite creativity. <br /> The tutorials are clear and helpful, making every project accessible, whether you're a beginner or a seasoned crafter. Plus, their customer service is outstanding—friendly, responsive, and genuinely passionate about helping artists thrive. Highly recommended for anyone looking to enhance their craft or discover new artistic passions.
          </p>
          
        </div>
      </div>

      {/* another */}
      <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 bg-[#640D6B] border-[3px]  text-gray-100">
        <div className="flex justify-between p-4">
          <div className="flex space-x-4">
            <div>
              <img
                src="https://images.unsplash.com/photo-1542375344054-b1f28d71d914?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIwfHxmb3JtYWwlMjBtZXJhZG9uYXxlbnwwfHwwfHx8MA%3D%3D"
                alt=""
                className="object-cover w-12 h-12 rounded-full bg-gray-500"
              />
            </div>
            <div>
              <h4 className="font-bold">Luka Modric</h4>
              <span className="text-xs text-gray-400">2 days ago</span>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-yellow-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-5 h-5 fill-current"
            >
              <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
            </svg>
            <span className="text-xl font-bold">4.9</span>
          </div>
        </div>
        <div className="p-4 space-y-2 text-sm text-gray-400">
          <p>
          Fantastic find for any art enthusiast! This website is not only filled with a wide array of top-notch craft supplies but also brimming with inspiration. <br /> The step-by-step guides and expert tips have helped me elevate my projects to new heights. The interface is user-friendly, making it easy to locate exactly what I need, and their commitment to quality is evident in every product. It's my go-to resource for all my creative needs!
          </p>
          
        </div>
      </div>
     </div>
    </div>
  );
};

export default ReviewSection;
