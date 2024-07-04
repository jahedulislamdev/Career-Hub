import { createContext } from "react";
import Job from "./Job";

export const Nameprovider = createContext('');
const Jobs = () => {
   const Names = ["Accountent & Finance", "Marketing & Sales", "Creative Design", "Engeniering Job"];
   const AbilabelJobs = ["200+ jobs Abilable", "500+ jobs Abilable", "99+ jobs Abilable", " 50 jobs Abilable"]
   return (
      <div>
         <div className="text-center">
            <h1 className="text-3xl font-bold mb-3">Job catagory List</h1>
            <p className="opacity-60">Explore thousands of job opportunities with all the information you need. Its your future</p>
         </div>
         <div>
            <Nameprovider.Provider value={[Names, AbilabelJobs]}>
               <Job ></Job>
            </Nameprovider.Provider>
         </div>
      </div>
   );
};

export default Jobs;