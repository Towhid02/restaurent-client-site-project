/* eslint-disable no-undef */

import { useLoaderData } from "react-router-dom";
import MenuCard from "../Components/MenuCard";
import Navbar from "../Components/Navbar";

import Footer from "../Components/Footer";
import { useState } from "react";


const Menu = () => {
    const loadedMenu = useLoaderData()
    const [isShow, setShowAll] = useState(false)
    const [menus, setMenus] = useState(loadedMenu)
    // const [allMenu, setAllMenu] = useState(loadedMenu)
    return (
        <div>
        <Navbar></Navbar>
        <div className="bg-menuBg relative  rounded-3xl">
      
           
            
        <div className=" grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 py-10">
           
            
           

            {
                 isShow ?loadedMenu.map(menu=>(
                <MenuCard 
                key={menu._id}
                menu={menu}
                menus={menus}
                setMenus={setMenus}
                ></MenuCard>))
                : loadedMenu.slice(0,6).map(menu=>(
                    <MenuCard 
                    key={menu._id}
                    menu={menu}
                    menus={menus}
                    setMenus={setMenus}
                    ></MenuCard>))
            }
        
        </div>
        <div>
      {
                loadedMenu.length > 6 &&  <button onClick={()=> setShowAll(!isShow)} className=" btn  text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 rounded-full dark:focus:ring-cyan-800 font-medium  text-sm px-5 py-2.5 text-center me-2 mb-2">{isShow ? "Show Less" : "Show More"}</button>
            }
      </div>
      </div>
        <Footer></Footer>
        </div>
    );
};

export default Menu;