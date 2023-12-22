import bannerImg from "../../../assets/bannerImg.webp"

const Banner = () => {
   return (
      <div className="flex h-[80vh] mt-6  gap-6"> 
         <div className="w-1/2 flex items-center">
            <img src={bannerImg} alt="bannerImg" className="h-[60vh] rounded-lg"/>
         </div>
         <div className="w-1/2 flex justify-center flex-col">
            <h1 className="text-5xl font-bold">Unleash the Potential of Your Team with TaskForge</h1>
            <p className="mt-4">Transform teamwork into triumph! TaskForge is the ultimate task management solution that empowers teams to collaborate seamlessly. Enhance communication, track progress, and achieve collective success with our powerful features.</p>
         </div>
      </div>
   );
};

export default Banner;