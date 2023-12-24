import { useForm } from "react-hook-form";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddTask = () => {
   const navigate = useNavigate();
   const axiosPublic = useAxiosPublic();
   const { register, handleSubmit, reset } = useForm();


   const onSubmit = data => {
      axiosPublic.post('/todo', data)
         .then(res => {
            console.log(res.data)
            if (res.data.insertedId) {
               toast.success('your task added successfully')
               reset();
               navigate('/dashboard/myTask')
            }
         })
   };


   return (
      <div className="mt-8">
         <h1 className="text-4xl font-bold text-center">Add Your Task</h1>


         <form onSubmit={handleSubmit(onSubmit)} className="mt-12 mx-4 md:w-1/2 md:mx-auto">

            <div className="form-control">
               <label className="label">
                  <span className="label-text">Title</span>
               </label>
               <input {...register("title")} type="text" placeholder="title" className="input input-bordered" required />
            </div>

            <div className="form-control">
               <label className="label">
                  <span className="label-text">Deadline</span>
               </label>
               <input {...register("deadline")} type="date" className="input input-bordered" required />
            </div>

            <div className="form-control">
               <label className="label">
                  <span className="label-text">Priority</span>
               </label>
               <select {...register("category", { required: true })} className="border border-gray-300 p-2 rounded-md">
                  <option value="low">Low</option>
                  <option value="moderate">Moderate</option>
                  <option value="high">High</option>
               </select>
            </div>

            <div className="form-control">
               <label className="label">
                  <span className="label-text">Description</span>
               </label>
               <textarea {...register("description")} className="input input-bordered" />
            </div>

            <input type="submit" className="btn w-full btn-secondary mt-4" />

         </form>
      </div>
   );
};

export default AddTask;