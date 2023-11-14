import lunch from "../../public/assets/lunch.png"
import breakfast from "../../public/assets/breakfast.png"
import dinner from "../../public/assets/dinner.png"
import { Link } from "react-router-dom";

const FoodItems = () => {
    return (
        <div className=" bg-foodBg">
            <div className="py-10">
                <h1 className=" text-4xl font-galada ">Discover Food Menu</h1>
            </div>
            <div className="  grid grid-cols-3 gap-10 py-10 px-5">
            <div className="card  shadow-xl">
            <figure className="">
            <img src={breakfast} className="rounded-xl"/>
            </figure>
            <div className="card-body items-center text-center">
            <h2 className="card-title font-itim btn"> <Link to={'/breakfast'}>BREAKFAST</Link></h2>
            </div>
            </div>
            <div className="card  shadow-xl" >
            <figure className="">
            <img src={lunch} className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
            <h2 className="card-title font-itim btn"> <Link to={'/lunch'}>LUNCH</Link> </h2>
            </div>
            </div>
            <div className="card  shadow-xl">
            <figure className="">
            <img src={dinner} className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
            <h2 className="card-title font-itim btn "><Link to={'/dinner'}>DINNER</Link></h2>
            </div>
            </div>
            </div>
        </div>
    );
};

export default FoodItems;