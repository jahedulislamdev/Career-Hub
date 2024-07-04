import { useLoaderData } from "react-router-dom";
import Job from "./Job";

const AllJobs = () => {
   const allJobInfo = useLoaderData();
   return (
      <div className="container mx-auto">
         <p className="text-center md:text-3xl text-2xl font-bold mb-4 mt-4 bg-purple-100 py-5 rounded">Currently Abilable Jobs : {allJobInfo.length}</p>
         <div className="grid md:grid-cols-2 gap-5">
            {
               allJobInfo.map((job) => <Job key={job.id} JobDetails={job}></Job>)
            }
         </div>
      </div>
   );
};

export default AllJobs;