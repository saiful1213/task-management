import { Link } from "react-router-dom";
import errorImg from "../assets/errorImg.jpg"

const Error = () => {
   return (
      <div className="flex items-center h-screen gap-12">
         <img src={errorImg} alt="errorImg" />
         <Link to={-1}><button className="btn btn-error">Go Back</button></Link>
      </div>
   );
};

export default Error;