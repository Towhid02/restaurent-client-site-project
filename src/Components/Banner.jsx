import { Link } from "react-router-dom";



const Banner = () => {
    return (
        <div>
          <div className="hero md:min-h-min bg-bannerBg bg-center bg-no-repeat bg-cover rounded-3xl" >
  <div className="hero-overlay bg-opacity-40"></div>
  <div className=" w-full absolute top-0 bg-opacity-60 z-10">
    
  </div>
  <div className=" text-black my-40">
    <div className="max-w-md text-center " data-aos="fade-up">
      <h1 className="mb-5 text-7xl text-white font-galada font-bold">Welcome</h1>
      <p className="mb-5 font-grand text-white text-xl px-4 md:text-3xl">Experience the Authentic Flavors of Bangladesh!
Indulge in a Culinary Journey to the Heart of Bengal
at our restaurant. Discover the Rich Spices, Aromas, and Delights of Our Time-Honored Cuisine. Join Us for an Unforgettable Dining Experience!</p>
      <button type="button" className="  text-black bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-bold rounded-lg text-2xl px-5 py-2.5 text-center me-2 mb-2 font-itim ">
        <Link to={'/menu'}>Explore All Foods </Link></button>
    </div>
  </div>
</div>  
        </div>
    );
};

export default Banner;