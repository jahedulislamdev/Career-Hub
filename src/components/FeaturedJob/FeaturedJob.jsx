import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
const FeaturedJob = ({ jobData }) => {
   const { companyName, id, companyLogo, companyLocation, salaryRange, jobtitle } = jobData;
   return (
      <div className="container mx-auto bg-purple-50 rounded p-4 h-[310px] shadow">
         <div className="">
            <img src={companyLogo} alt="comohanylogo" className="w-[120px] mx-auto inline-block mb-4" />
            <p>{jobtitle}</p>
            <p>{companyName}</p>
            <div className="mt-4">
               <button className="btn btn-ghost border border-purple-600 me-2">Remote</button>
               <button className="btn btn-ghost border border-purple-600">Fulltime</button>
            </div>
            <div className="flex gap-x-3 md:gap-x-8 mt-3 font-light text-sm ">
               <p className="flex justify-between">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 me-1">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                     <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                  {companyLocation}
               </p>
               <p className="flex me-1 font-light">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 me-1">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  Salary : {salaryRange}
               </p>
            </div>
            <NavLink to={`/featured-job/${id}`}><button className=" my-4 bg-gradient-to-r from-[#7E90FE] to-[#5a1ffc] text-white px-4 py-2 rounded">View Details</button></NavLink>
         </div>
      </div>
   );
};
FeaturedJob.propTypes = {
   jobData: PropTypes.object
}
export default FeaturedJob;