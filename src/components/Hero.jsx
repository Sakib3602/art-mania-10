const Hero = () => {
  return (
    <div>
      <section>
        <div className="border-black border-[3px] mt-5 border-solid">
          <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-900">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-gray-900">
              Unraveling Creativity in Textiles Art.
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-gray-900">
              Dive into the vibrant world of textile arts, where tradition meets
              innovation in a tapestry of color, texture, and technique.
            </p>
            <div className="flex flex-wrap justify-center">
            

              <button
                type="button"
                className="px-8 py-3 m-2 text-lg font-semibold rounded bg-gray-800 text-gray-50"
              >
                Get started
              </button>
              <button
                type="button"
                className="px-8 py-3 m-2 text-lg border rounded border-gray-700 text-gray-900"
              >
                Learn more
              </button>
            </div>
          </div>
        </div>
        <img
          src="https://i.ibb.co/3mc2stK/bernd-dittrich-k-rgdyy-TDhw-unsplash.jpg"
          alt=""
          className="w-[80%]  mx-auto mb-12 -mt-20 bg-gray-500 rounded-lg shadow-md lg:-mt-40"
        />
      </section>
    </div>
  );
};

export default Hero;
