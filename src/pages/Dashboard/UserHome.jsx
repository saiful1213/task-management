import useAuth from '../../Hooks/useAuth';

const UserHome = () => {
   const { user } = useAuth();

   return (
      <div className="my-10">
         <div className="md:w-1/2 p-4 mx-auto bg-green-300 text-center rounded-xl overflow-hidden">
            <img src={user?.photoURL} className="rounded-lg mx-auto h-80 w-full object-cover hover:scale-105 duration-1000" />
            <h1 className="text-2xl font-semibold my-3">Name: {user?.displayName}</h1>
            <p className="text-xl">Email: {user?.email}</p>
         </div>
      </div>
   );
};

export default UserHome;