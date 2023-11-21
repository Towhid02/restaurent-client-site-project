/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import FoodCard from "../Components/FoodCard";
import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";


const Items = () => {
  const [foods, setFoods] = useState([]);
  const [isShow, setShowAll] = useState(false)
  const [input, setInput] = useState("");
  const params = useParams();

  useEffect(() => {
    const fetchFood
     = async () => {
      try {
        const response = await fetch(`https://y-orcin-nu.vercel.app/category/${params.category}/`);
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

    fetch("https://y-orcin-nu.vercel.app/menu")
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
      <Navbar></Navbar>
         <div className="bg-headerBg bg-cover w-full h-96 rounded-2xl">
          <div className="card">
            <h1 className="card card-title text-lg md:text-2xl lg:text-3xl text-white px-8 md:px-24">
              In our kitchen, we believe in magic the kind that happens when ingredients are crafted with love.
            </h1>
            <div className=" justify-center">
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
      
      <div className=" bg-cardBg ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
        {
        isShow ?foods.map((food) => (
          <FoodCard key={food._id} food={food}></FoodCard>
        ))
        :foods.slice(0,6).map((food) => (
          <FoodCard  key={food._id} food={food}></FoodCard>))
        }
        </div>
        <div>
      {
                foods.length > 6 &&  <button onClick={()=> setShowAll(!isShow)} className=" btn  text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 rounded-full dark:focus:ring-cyan-800 font-medium  text-sm px-5 py-2.5 text-center me-2 mb-2">{isShow ? "Show Less" : "Show More"}</button>
            }
      </div>
      </div>
     
      <Footer></Footer>
    </div>
  );
};

export default Items;
