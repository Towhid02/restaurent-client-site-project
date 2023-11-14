import { useLoaderData } from "react-router-dom";
import BreakfastItem from "./BreakfastItem";


const Breakfast = () => {
    const breakfast = useLoaderData()
    return (
        <div>
             <div className=" grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 px-5 py-10">
           {
               breakfast.map(breakfast=> 
               <BreakfastItem
               key={breakfast._id}
               breakfast={breakfast}
               // allMenu={allMenu}
               // setAllMenu={setAllMenu}
               ></BreakfastItem>
               )}
       </div>
        </div>
    );
};

export default Breakfast;