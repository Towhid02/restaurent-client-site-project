/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const FoodCard = ({food}) => {
    const { _id, name, category, origin, price, image }= food;
    return (
        <div>
            <div className="  card glass shadow-xl">
  <figure>
    <img src={image} className="rounded-xl w-full h-40 md:h-60 " />
  </figure>
  <div className="card-body items-center text-center text-black">
    <h2 className="card-title text-xl md:text-2xl font-mooli"> {name}</h2>
    <h2 className=" font-mooli  "> Category: {category}</h2>
    <h2 className=" font-mooli font-semibold">Origin:  {origin}</h2>
    <h2 className="md:card-title font-itim">Price: {price} TK </h2>
    
    <div className="card-actions">
    <button type="button" className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 font-itim mb-2"><Link to={`/details/${_id}`}>DETAILS</Link></button>
    </div>
  </div>
</div>
        </div>
    );
};

export default FoodCard;