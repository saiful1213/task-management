import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { AiFillDelete } from "react-icons/ai";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

const MyTask = () => {
   const axiosPublic = useAxiosPublic();

   const { data, isLoading, refetch } = useQuery({
      queryKey: ['todo'],
      queryFn: async () => {
         const { data } = await axiosPublic.get('/todo')
         return data;
      }
   })

   if (isLoading) return <p>Loading....</p>

   const handleDelete = id => {
      Swal.fire({
         title: "Are you sure?",
         text: "You won't be able to revert this!",
         icon: "warning",
         showCancelButton: true,
         confirmButtonColor: "#3085d6",
         cancelButtonColor: "#d33",
         confirmButtonText: "Yes, delete it!"
      }).then((result) => {
         if (result.isConfirmed) {
            axiosPublic.delete(`/todo/${id}`)
               .then(res => {
                  if (res.data.deletedCount > 0) {
                     toast.success('successfully deleted the task')
                     refetch()
                  }
               })
         }
      });
   }


   return (
      <div className="mt-8">
         <h1 className="text-4xl font-bold text-center">All of My Tasks</h1>

         <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-12 px-4">
            <div>
               <h1 className="text-2xl font-bold text-center">Todo</h1>
               {
                  data.map(todo => {
                     const { _id, title, deadline, category, description } = todo;
                     return (
                        <div key={_id} className="border m-5 bg-pink-200 py-4 px-3 rounded-lg">

                           <div className="flex justify-between items-center">
                              <h1 className="text-2xl font-bold">{title}</h1>
                              <button onClick={() => handleDelete(_id)} className="rounded-lg p-2 bg-red-500"><AiFillDelete className="text-white text-xl" /></button>
                           </div>

                           <p className="my-2">Deadline: <span className="font-medium">{deadline}</span></p>

                           <div className="flex items-center justify-between">
                              <p className="my-2">Priority: <span className="px-2 rounded-lg py-1 text-white bg-pink-600">{category}</span></p>
                              <Link to={`/dashboard/myTask/${_id}`}><button className="rounded-lg p-2 bg-green-500"><FaEdit className="text-white text-xl" /> </button></Link>
                           </div>

                           <p>{description}</p>
                        </div>
                     )
                  })
               }
            </div>
            <div>
               <h1 className="text-2xl font-bold">Ongoing</h1>
            </div>
            <div>
               <h1 className="text-2xl font-bold">Completed</h1>
            </div>
         </div>
      </div>
   );
};

export default MyTask;