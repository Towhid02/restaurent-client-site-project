import { useLoaderData } from "react-router-dom";
import FoodCard from "../Components/FoodCard";
import Banner from "../Components/Banner";


const Items = () => {
    const foods = useLoaderData()
    console.log(foods);
    return (
        <div>
            <Banner></Banner>
            <div className=" grid grid-cols-3 gap-5 text-center my-10">
            {
                 foods.map(food => <FoodCard  key={food.id}
                 foods={food}
                 >
                 </FoodCard>)
           }
           </div>

        </div>
    );
};

export default Items;