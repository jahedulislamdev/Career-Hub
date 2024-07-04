import { useEffect, useState } from "react";
import { getAppliedJobsID } from "../Utility/Utility";
import { NavLink, useLoaderData } from "react-router-dom";


const AppliedJobs = () => {
   const jobs = useLoaderData();
   const [myJobs, setMyJobs] = useState([])
   useEffect(() => {
      const storedJobs = getAppliedJobsID();
      //1. first mathod
      // if (jobs) {
      //    const jobApplied = jobs.filter((job) => storedJobs.includes(job.id));
      //    console.log(jobs, storedJobs, jobApplied)
      // }
      //2. second mathod
      const jobApplied = [];
      for (const id of storedJobs) {
         const myJob = jobs.find(job => job.id === id)
         // console.log(myJob)
         if (myJob) {
            jobApplied.push(myJob)
         }
         setMyJobs(jobApplied);
      }
      console.log(myJobs)
   }, [])

   return (
      <div className="container mx-auto mb-16 md:w-2/3 px-2">
         <div className="bg-purple-100 rounded mb-8">
            <div className="flex justify-end">
               <img src="https://i.postimg.cc/nVvnWV6M/bg2.png" className="w-1/12" />
            </div>
            <p className="font-bold text-center text-2xl">You have Aplied {myJobs.length} Job </p>
            <div className="flex justify-start">
               <img src="https://i.postimg.cc/pXRPMbHC/bg1.png" className="w-1/12" />
            </div>
         </div>
         {
            myJobs.map(job =>
               <div key={job.id}>
                  <div className="mb-5 p-3 bg-purple-50 shadow grid md:grid-cols-5 items-center">
                     <img src={job.companyLogo} className="w-5/12  md:w-1/2 mb-3 md:col-span-2" />
                     <div className="md:col-span-3 md:flex justify-between items-center">
                        <div>
                           <p className="font-bold">{job.jobtitle}</p>
                           <p className="">{job.companyName}</p>
                           <div className="flex gap-x-4">
                              <p className="md:text-md font-light text-sm">{job.companyLocation}</p>
                              <p className="md:text-md font-light text-sm">$ {job.salaryRange}</p>
                           </div>
                        </div>
                        <div>
                           <NavLink to={`/featured-job/${job.id}`}><button className=" my-4 bg-gradient-to-r from-[#7E90FE] to-[#5a1ffc] text-white px-4 py-2 rounded">View Details</button></NavLink>
                        </div>
                     </div>
                  </div>
               </div>
            )
         }
      </div>
   );
};

export default AppliedJobs;