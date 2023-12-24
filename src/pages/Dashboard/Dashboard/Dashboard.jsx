import { Link, Outlet, useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import { toast } from "react-toastify";
import { FaCirclePlus } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { FaTasks } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { CgLogOut } from "react-icons/cg";

const Dashboard = () => {
   const { handleLogOut } = useAuth();
   const navigate = useNavigate();

   const signOut = () => {
      handleLogOut()
      toast.success('Logout Success');
      navigate('/')
   }

   return (
      <div>
         <div className="lg:flex lg:gap-10 ">
            <div className="flex lg:flex-col justify-between lg:w-[300px] gap-1 lg:sticky top-0 lg:h-full bg-green-100 lg:min-h-screen p-4">

               <ul className="gap-1 flex lg:flex-col">
                  <li className="font-semibold w-full">
                     <Link to="/dashboard/userHome"><button className="w-full btn btn-secondary"><CgProfile className="text-xl"/>User Profile</button></Link>
                  </li>
                  <li className="font-semibold w-full">
                     <Link to="/dashboard/addTask"><button className="w-full btn btn-secondary"><FaCirclePlus className="text-xl" />Add Task</button></Link>
                  </li>
                  <li className="font-semibold w-full">
                     <Link to="/dashboard/myTask"><button className="w-full btn btn-secondary"><FaTasks className="text-xl" />My Tasks</button></Link>
                  </li>
               </ul>


               {/* shared links */}
               <div className="hidden md:flex lg:flex-col gap-1">
                  <Link to='/'><button className="w-full btn btn-secondary mb-2"><FaHome className="text-xl"/>Home</button></Link>
                  <button className="lg:w-full btn btn-secondary mb-2" onClick={signOut}><CgLogOut className="text-xl"/>Logout</button>
               </div>
            </div>
            <div className="flex-1">
               <Outlet></Outlet>
            </div>
         </div>
      </div>
   );
};

export default Dashboard;