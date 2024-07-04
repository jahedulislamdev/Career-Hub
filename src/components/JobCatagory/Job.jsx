import { useContext } from "react";
import { Nameprovider } from "./Jobs";
import { Imgprovider } from "../Home/Home";


const Job = () => {
   const [accountent, marketing, creative, chip] = useContext(Imgprovider);
   const [Names, AbilabelJobs] = useContext(Nameprovider);
   return (
      <div className="flex-row md:flex mt-16 justify-between ">
         <div className="mb-8 bg-purple-50 p-8 rounded text-center shadow">
            <div className="flex justify-center mb-4">
               <img src={accountent} className="drop-shadow-lg" />
            </div>
            <h1 className="font-bold">{Names[0]}</h1>
            <p className="opacitiy-60 capitalize">{AbilabelJobs[0]}</p>
         </div>
         <div className="mb-8  bg-purple-50 p-8 rounded text-center shadow">
            <div className="flex justify-center mb-5">
               <img src={marketing} className="drop-shadow-lg" />
            </div>
            <h1 className="font-bold">{Names[1]}</h1>
            <p className="opacitiy-60 capitalize">{AbilabelJobs[1]}</p>
         </div>
         <div className="mb-8  bg-purple-50 p-8 rounded text-center shadow">
            <div className="flex justify-center mb-5">
               <img src={creative} className="drop-shadow-lg" />
            </div>
            <h1 className="font-bold">{Names[2]}</h1>
            <p className="opacitiy-60 capitalize">{AbilabelJobs[2]}</p>
         </div>
         <div className="mb-8  bg-purple-50 p-8 rounded text-center shadow">
            <div className="flex justify-center mb-5">
               <img src={chip} className="drop-shadow-lg" />
            </div>
            <h1 className="font-bold">{Names[3]}</h1>
            <p className="opacitiy-60 capitalize">{AbilabelJobs[3]}</p>
         </div>
      </div>
   );
};

export default Job;