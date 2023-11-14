import { useLoaderData } from "react-router-dom";
import DinnerItem from "./DinnerItem";


const Dinner = () => {
    const dinner = useLoaderData()
    return (
        <div>
             <div className=" grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 py-10">
           {
               dinner.map(dinner=> 
               <DinnerItem
               key={dinner._id}
               dinner={dinner}
               // allMenu={allMenu}
               // setAllMenu={setAllMenu}
               ></DinnerItem>
               )}
       </div>
        </div>
    );
};

export default Dinner;