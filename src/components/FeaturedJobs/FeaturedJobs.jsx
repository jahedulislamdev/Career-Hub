import FeaturedJob from "../FeaturedJob/FeaturedJob";
import { useLoaderData } from "react-router-dom";
const FeaturedJobs = () => {
   const JobDetails = useLoaderData();
   return (
      <div className="px-4 my-16 ">
         <div className="text-center">
            <h1 className=" text-xl font-bold md:text-3xl mb-2">Featured Jobs</h1>
            <p className="opacity-55">Explore thousands of job opportunities with all the information you need. Its your future</p>
         </div>
         <div className="mt-16 grid md:grid-cols-2 gap-4 justify-between items-center">
            {
               JobDetails.map((job) => <FeaturedJob key={job.id} jobData={job}></FeaturedJob>)
            }
         </div>
      </div>
   );
};

export default FeaturedJobs;