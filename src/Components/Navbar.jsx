
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider";
import logo from "../../public/assets/Screenshot 2023-11-08 115643.png"


const Navbar = () => {

  const {user, logOut} = useContext(AuthContext)
    const Links = <>
         <li><Link to={"/"}>Home</Link></li>
         <li ><Link to={"/menu"}>All Food</Link></li>
         
         <li ><Link to={"/blog"}>Blog</Link></li>
         <li ><Link to={"/signUp"}>Sign Up</Link></li>
    </>
    return (
        <div className=" bg-navBg  bg-cover bg-opacity-30 w-full  border-2 rounded-3xl m-2 py-2 " >
         
            <div className="navbar navbar-expand-lg navbar-dark shadow-5-strong rounded-lg">
              
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-50 text-xl font-mooli rounded-box w-52 ">
       {Links}
      </ul>
    </div>
    <img className=" w-24 md:w-52 rounded-full"  src={logo} alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-black  font-mooli text-base font-semibold">
      {Links}
    </ul>
  </div>
  <div className="navbar-end">
    <div>
       <button data-toggle-theme="dark,light" data-act-class="ACTIVECLASS"></button>
    </div>
 
  {
                !user ?  <li className="btn text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-3xl text-sm px-5 py-2.5 text-center me-2 mb-2"><Link to={'/signIn'}>Sign In</Link></li> 
                :  <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-8 md:w-12 rounded-full">
                    <img src={user?.photoURL ? user?.photoURL : "../../public/assets/avater.avif"} />
                  </div>
                </label>
                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                <li><Link to={"/addOrder"}>Orders</Link></li>
                  <li><Link to={"/addFood"}>Add Food</Link></li>
                  <li><a   onClick={()=>logOut()}>Logout</a></li>
                </ul>
              </div>
              }
  </div>
</div>
        </div>
    );
};

export default Navbar;