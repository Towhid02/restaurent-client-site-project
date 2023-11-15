/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const FoodCard = ({foods}) => {
    const { _id, name, category, origin, price, image }= foods;
    return (
        <div>
            <div className="card card-compact bg-base-100 glass shadow-xl">
  <figure className=" ">
    <img src={image}alt="Shoes" className="rounded-xl w-60 h-40 " />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-xl md:text-xl font-mooli"> {name}</h2>
   
    <h2 className=" font-mooli  "> Category: {category}</h2>
    <h2 className=" font-mooli font-semibold">Origin:  {origin}</h2>

    <h2 className="md:card-title font-itim">Price: {price} TK </h2>
    
    <div className="card-actions">
      <button className="btn btn-primary font-itim"><Link to={`/details/${_id}`}>DETAILS</Link></button>
    </div>
  </div>
</div>
        </div>
    );
};

export default FoodCard;