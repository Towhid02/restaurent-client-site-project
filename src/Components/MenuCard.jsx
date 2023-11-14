/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const MenuCard = ({menu}) => {

    const {_id, food_name, category, image, price    } = menu;
    return (
        <div>
        <div className="card glass shadow-xl">
        <figure><img className=" w-full h-60" src={image} /></figure>
        <div className="p-5">
        <h2 className=" text-black font-bold text-lg font-itim">{food_name}</h2>
        <h2 className="text-black font-bold text-xl font-itim">{category}</h2>
        <h2 className="text-black font-bold text-xl font-itim">Price: {price} Tk</h2>
        <div className="card-actions justify-center p-5">
        <button type="button" className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"><Link to={`/details/${_id}`}>DETAILS</Link></button>
        </div>
        </div>
        </div>
        </div>
        );
        };

export default MenuCard;