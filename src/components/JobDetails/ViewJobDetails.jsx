import { NavLink, useLoaderData, useParams } from "react-router-dom";
import { saveJobApplication } from "../Utility/Utility";
import 'react-toastify/dist/ReactToastify.css';
const ViewJobDetails = () => {
   const jobDetails = useLoaderData();
   const { id } = useParams();
   const findJobDetails = jobDetails.find((job) => job.id === parseInt(id));
   const { jobtitle, salaryRange, jobDescription, jobResponsibilities, educationalRequirements, experiences, contactInformation } = findJobDetails;
   const handleApplyJob = () => {
      saveJobApplication(parseInt(id));
   }
   return (
      <div className="container mx-auto">
         <div className="bg-purple-50 rounded mb-8">
            <div className="flex justify-end">
               <img src="https://i.postimg.cc/nVvnWV6M/bg2.png" className="w-1/12" />
            </div>
            <p className="text-center font-bold text-3xl">Job Details Id : {id}</p>
            <div className="flex justify-start">
               <img src="https://i.postimg.cc/pXRPMbHC/bg1.png" className="w-1/12" />
            </div>
         </div>
         <div className=" mb-5 grid md:grid-cols-3 gap-x-8 ">
            <div className="col-span-2 shadow p-3 rounded bg-purple-50">
               <p className="mb-5"> <span className="font-bold text-lg">Job Description : </span> {jobDescription}</p>
               <p className="mb-5"> <span className="font-bold text-lg">Job Responsibility : </span> {jobResponsibilities}</p>
               <p className="mb-5"> <span className="font-bold text-lg">Educatioal Requirments : </span> {educationalRequirements}</p>
               <p className="mb-5"> <span className="font-bold text-lg">Experience : </span> {experiences}</p>
            </div>
            <div className="col-span-1 shadow p-4 rounded bg-purple-50">
               <p className="font-bold text-xl">Job Details </p>
               <hr className=" mt-2 text-black" />
               <p className="flex mt-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 m-1 text-purple-500">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  <span className="font-bold me-1">Slaary: </span> {salaryRange} ( per Month )
               </p>
               <p className="flex mt-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 m-1 text-purple-500">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                  </svg>
                  <span className="font-bold me-1">Job title: </span> {jobtitle}
               </p>
               <p className="mt-5 font-bold">Contact Information</p>
               <hr className=" mt-2 " />
               <p className="flex mt-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 m-1 text-purple-500">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                  <span className="font-bold me-1">Phone Number: </span> <span className="font-sm">{contactInformation.phone}</span>
               </p>
               <p className="flex mt-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 m-1 text-purple-500">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                  <span className="font-bold me-1">Email: </span> {contactInformation.email}
               </p>
               <p className="flex mt-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 me-1 text-purple-500">
                     <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                  </svg>
                  <span className="font-bold me-1"> Address:</span> <span className="text-sm">{contactInformation.address}</span>
               </p>
               <NavLink to={''}><button onClick={handleApplyJob} className=" my-5 bg-gradient-to-r from-[#7E90FE] to-[#5a1ffc] text-white px-4 py-2 rounded w-full">Apply Now</button></NavLink>
            </div>
         </div>
      </div>
   );
};

export default ViewJobDetails;