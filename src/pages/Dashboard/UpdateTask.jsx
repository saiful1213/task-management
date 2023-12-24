import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const UpdateTask = () => {
   const axiosPublic = useAxiosPublic();
   const { id } = useParams();
   const navigate = useNavigate();
   const { register, handleSubmit } = useForm();

   const { data, isLoading } = useQuery({
      queryKey: ['updateTask'],
      queryFn: async () => {
         const { data } = await axiosPublic.get(`/todo/update/${id}`);
         return data
      }
   })

   if (isLoading) return <p>Loading....</p>

   const onSubmit = data => {
      axiosPublic.patch(`/todo/taskUpdate/${id}`, data)
         .then(res => {
            if (res.data.modifiedCount > 0) {
               toast.success('your task updated successfully')
               navigate('/dashboard/myTask')
            }
         })
   };

   // console.log(data)
   return (
      <div className="mt-8">
         <h1 className="text-4xl font-bold text-center">Update the Task</h1>
         <form onSubmit={handleSubmit(onSubmit)} className="mt-12 w-1/2 mx-auto">

            <div className="form-control">
               <label className="label">
                  <span className="label-text">Title</span>
               </label>
               <input {...register("title")} defaultValue={data?.title} type="text" placeholder="title" className="input input-bordered" required />
            </div>

            <div className="form-control">
               <label className="label">
                  <span className="label-text">Deadline</span>
               </label>
               <input {...register("deadline")} defaultValue={data?.deadline} type="date" className="input input-bordered" required />
            </div>

            <div className="form-control">
               <label className="label">
                  <span className="label-text">Priority</span>
               </label>
               <select {...register("category", { required: true })} defaultValue={data?.category} className="border border-gray-300 p-2 rounded-md">
                  <option value="low">Low</option>
                  <option value="moderate">Moderate</option>
                  <option value="high">High</option>
               </select>
            </div>

            <div className="form-control">
               <label className="label">
                  <span className="label-text">Description</span>
               </label>
               <textarea {...register("description")} defaultValue={data?.description} className="input input-bordered" />
            </div>

            <input type="submit" className="btn w-full btn-secondary mt-4" />

         </form>
      </div>
   );
};

export default UpdateTask;