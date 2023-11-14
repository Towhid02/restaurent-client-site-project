import { useLoaderData } from "react-router-dom";
import LunchItem from "./LunchItem";


const Lunch = () => {
    const lunch = useLoaderData()
    return (
        <div>
             <div className=" grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 px-5 py-10">
           {
               lunch.map(lunch=> 
               <LunchItem
               key={lunch._id}
               lunch={lunch}
               // allMenu={allMenu}
               // setAllMenu={setAllMenu}
               ></LunchItem>
               )}
       </div>
        </div>
    );
};

export default Lunch;