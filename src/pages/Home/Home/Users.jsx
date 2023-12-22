import developerImg from '../../../assets/developer.jpg'
import bankerImg from '../../../assets/banker.jpg'
import studentImg from '../../../assets/student.webp'

const Users = () => {
   return (
      <div className="my-28 mx-8">
         <h1 className="text-5xl font-bold text-center">Our Top Users</h1>
         <p className="mt-5 text-center w-full md:w-2/3 mx-auto">Witness the impact on education as developers, a dedicated student or educator, uses TaskForge to navigate academic challenges seamlessly. Organizing assignments, collaborating on group projects, and staying on top of deadlines has never been easier.</p>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-12'>
            {/* card1 */}
            <div className="card bg-base-100 shadow-2xl p-4">
               <figure><img src={developerImg} alt="developerImg" className='h-60'/></figure>
               <div>
                  <h1 className='text-3xl font-bold my-3'>Developer</h1>
                  <p className='my-3'>Developers thrive on efficiency, and that is exactly what our platform delivers. With dedicated features for code management, version control, and task assignment, TaskForge ensures that your development team remains focused on writing clean, high-quality code.</p>
               </div>
            </div>
            {/* card2 */}
            <div className="card bg-base-100 shadow-2xl p-4">
               <figure><img src={bankerImg} alt="bankerImg" className='h-60'/></figure>
               <div>
                  <h1 className='text-3xl font-bold my-3'>Banker</h1>
                  <p className='my-3'>Collaboration is at the heart of successful banking operations. Our platform facilitates real-time collaboration among financial teams, allowing seamless communication on tasks, projects, and client interactions. Whether you are in the office or working remotely, stay connected and make informed decisions together.</p>
               </div>
            </div>
            {/* card3 */}
            <div className="card bg-base-100 shadow-2xl p-4">
               <figure><img src={studentImg} alt="studentImg" className='h-60'/></figure>
               <div>
                  <h1 className='text-3xl font-bold my-3'>Student</h1>
                  <p className='my-3'>Monitor your academic progress in real-time. Whether it is tracking your task completion or evaluating your overall project progress, our platform provides insights that help you stay on top of your academic game.</p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Users;