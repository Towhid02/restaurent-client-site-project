/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const CategoryCard = ({categories}) => {
   console.log(categories);
   const {category_title, image} = categories;
    return (
        <div>
        <div className="card w-full  bg-foodBg">
  <figure><img className=" w-60 h-40 rounded-xl" src={image} alt=""/></figure>
  <div className="card-body items-center text-center">
    <h2 className=" btn btn-outline  font-itim lg:text-2xl text-black"  ><Link to={`/category/${categories.category_title}`}>{category_title}</Link></h2>
  </div>
</div>
        </div>
    
    );
};

export default CategoryCard;