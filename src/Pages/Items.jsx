/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import FoodCard from "../Components/FoodCard";
import { useParams } from "react-router-dom";


const Items = () => {
  const [foods, setFoods] = useState([]);
  const [input, setInput] = useState("");
  const params = useParams();

  useEffect(() => {
    const fetchFood
     = async () => {
      try {
        const response = await fetch(`http://localhost:5000/category/${params.category}/`);
        const result = await response.json();
        setFoods(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchFood
    ();
  }, [params]);

  console.log(foods);

  const handleSearch = (value) => {
    setInput(value);

    fetch("http://localhost:5000/menu")
      .then((res) => res.json())
      .then((json) => {
        const results = json.filter((menu) =>
          menu.name.toLowerCase().includes(value.toLowerCase())
        );
        console.log(results);
        setFoods(results);
      });
  };

  return (
    <div>
         <div className="bg-headerBg w-full h-96 rounded-2xl">
          <div>
            <h1 className="card card-title text-2xl text-white px-20">
              In our kitchen, we believe in magic — the kind that happens when
              ingredients are crafted with love.
            </h1>
            <div className="flex justify-center">
              <input
                type="text"
                placeholder="Search here"
                value={input}
                onChange={(e) => handleSearch(e.target.value)}
                className="rounded-full glass input w-full max-w-xs text-white"
              />
            </div>
          </div>
        </div>
      <div className=" bg-cardBg  bg-contain grid grid-col-2 lg:grid-cols-3 gap-10 text-center p-10">
       
        {foods.map((food) => (
          <FoodCard key={food._id} food={food}></FoodCard>
        ))}
      </div>
    </div>
  );
};

export default Items;
