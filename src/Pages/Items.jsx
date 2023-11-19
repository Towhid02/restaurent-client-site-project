/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";
import FoodCard from "../Components/FoodCard";

import Header from "../Components/Header";
import { useState } from "react";


const Items = () => {
    const [results, setResults] = useState([])
    const foods = useLoaderData()
    console.log(foods);
    return (
        <div>
            <Header setResults={setResults}></Header>
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