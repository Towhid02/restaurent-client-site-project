

import { useState } from 'react';
import Navbar from './Navbar';


const Header = () => {

    const [input, setInput] = useState("")

    const fetchData = (value) => {
        fetch("http://localhost:5000/menu")
        .then((res) => res.json())
        .then(json => {
            const results = json.filter((menu) => {
                return (
                    value && 
                    menu &&
                    menu.name &&
                    menu.name.toLowerCase().includes(value)
                );
            });
            console.log(results);
        })
    }
   

    const handleSearch = (value) => {
        setInput(value)
        fetchData(value)

    }


    return (
        <div className='  bg-headerBg  w-full h-96 rounded-2xl'>
            <Navbar></Navbar>
            <div>
            <h1 className='card card-title text-2xl text-white px-20'>In our kitchen, we believe in magic — the kind that happens when ingredients are crafted with love.</h1>
            <div className='flex justify-center '>
            <input type="text"
            placeholder="Search here" 
            value={input} 
            onChange={(e) => handleSearch(e.target.value) }
            className=" rounded-l-full input w-full max-w-xs" />
            
            </div>
            </div>
        </div>
    );
};

export default Header;