import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { toast } from "react-toastify";

const Navbar = () => {
   const { user, handleLogOut } = useAuth();
   const navigate = useNavigate();

   const signOut = () => {
      handleLogOut()
      toast.success('Logout Success');
      navigate('/')
   }

   const navItems = <>
      <li><NavLink to="/" className={({ isActive }) => isActive ? "bg-red-300" : ""}>Home</NavLink></li>
      <li><NavLink to="dashboard" className={({ isActive }) => isActive ? "bg-red-300" : ""}>Dashboard</NavLink></li>
      <li><NavLink to="/register" className={({ isActive }) => isActive ? "bg-red-300" : ""}>Sign Up</NavLink></li>
   </>

   return (
      <div className="bg-red-200">
         <div className="navbar max-w-7xl mx-auto">
            <div className="navbar-start">
               <div className="dropdown">
                  <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                  </div>
                  <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                     {navItems}
                  </ul>
               </div>
               <a className="btn btn-ghost text-xl">TaskForge</a>
            </div>
            <div className="navbar-center hidden lg:flex">
               <ul className="menu menu-horizontal px-1">
                  {navItems}
               </ul>
            </div>
            <div className="navbar-end">
               {
                  user?.email ? <>
                     <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="m-1">
                           <div className="avatar">
                              <div className="w-12 rounded-full">
                                 <img src={user.photoURL} />
                              </div>
                           </div>
                        </div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                           <li className="my-2"><a className="text-xl">{user.displayName}</a></li>
                           <li><button className="btn btn-warning font-bold text-xl" onClick={signOut}>Log Out</button></li>
                        </ul>
                     </div>
                  </> : <Link to="/login" className="btn btn-secondary">Login</Link>
               }

            </div>
         </div>
      </div>
   );
};

export default Navbar;