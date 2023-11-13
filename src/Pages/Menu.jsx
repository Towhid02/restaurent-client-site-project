/* eslint-disable no-undef */

import { useLoaderData } from "react-router-dom";
import MenuCard from "../Components/MenuCard";
import Navbar from "../Components/Navbar";

import Footer from "../Components/Footer";


const Menu = () => {
    const menu = useLoaderData()
    // const [allMenu, setAllMenu] = useState(loadedMenu)
    return (
        <div className="bg-menuBg relative  rounded-3xl">
      
            <div>
            <Navbar></Navbar>
            </div>
        <div className=" grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 py-10">
           
            
           

            {
                menu.map(menu=> 
                <MenuCard 
                key={menu._id}
                menu={menu}
                // allMenu={allMenu}
                // setAllMenu={setAllMenu}
                ></MenuCard>)
            }
        
        </div>
        <Footer></Footer>
        </div>
    );
};

export default Menu;