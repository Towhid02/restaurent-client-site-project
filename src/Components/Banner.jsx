import { Link } from "react-router-dom";
import Navbar from "./Navbar";


const Banner = () => {
    return (
        <div>
          <div className="hero md:min-h-min bg-bannerBg bg-center bg-no-repeat bg-cover relative" >
  <div className="hero-overlay bg-opacity-20"></div>
  <div className=" w-full absolute top-0 bg-opacity-60 z-10">
    <Navbar></Navbar>
  </div>
  <div className=" text-black my-40">
    <div className="max-w-md text-center ">
      <h1 className="mb-5 text-7xl font-galada font-bold">Welcome</h1>
      <p className="mb-5 font-grand text-3xl">Experience the Authentic Flavors of Bangladesh!
Indulge in a Culinary Journey to the Heart of Bengal
at our restaurant. Discover the Rich Spices, Aromas, and Delights of Our Time-Honored Cuisine. Join Us for an Unforgettable Dining Experience!</p>
      <button className="btn btn-primary font-itim text-3xl"><Link to={'/menu'}>Menu</Link></button>
    </div>
  </div>
</div>  
        </div>
    );
};

export default Banner;