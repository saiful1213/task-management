import { Link, Outlet, useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import { toast } from "react-toastify";

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
                     <Link to="/dashboard/userHome"><button className="w-full btn btn-secondary">User Profile</button></Link>
                  </li>
                  <li className="font-semibold w-full">
                     <Link to="/dashboard/addTask"><button className="w-full btn btn-secondary">Add Task</button></Link>
                  </li>
               </ul>


               {/* shared links */}
               <div className="flex lg:flex-col gap-1">
                  <Link to='/'><button className="w-full btn btn-secondary mb-2">Home</button></Link>
                  <button className="w-full btn btn-secondary mb-2" onClick={signOut}>Logout</button>
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