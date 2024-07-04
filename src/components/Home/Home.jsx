import { NavLink, useLoaderData } from "react-router-dom"
import user from '../../assets/images/user.png'
import Jobs from "../JobCatagory/Jobs";
import accountent from '../../assets/icons/accounts.png'
import marketing from '../../assets/icons/marketing.png'
import creative from '../../assets/icons/creative.png'
import chip from '../../assets/icons/chip.png'
import { createContext } from "react";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
export const Imgprovider = createContext();
export const JobDataprovide = createContext();
const Home = () => {
    const JobData = useLoaderData();
    return (
        <div className="container mx-auto ">
            <div className="flex-row md:flex justify-around items-center py-5 px-2">
                <div>
                    <h1 className="capitalize text-3xl md:text-6xl font-bold hidden md:block">One step <p className="my-2">closer to your</p><p className="text-indigo-500">dream job</p> </h1>
                    <h1 className="capitalize text-3xl md:text-6xl font-bold md:hidden"><p className="mb-3">One step closer to</p>  your <span className="text-indigo-500">dream job</span></h1>
                    <p className="my-3 opacity-60 hidden md:block">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <NavLink to={'/all_jobs'}><button className=" mt-4 bg-gradient-to-r from-[#7E90FE] to-[#5a1ffc] text-white px-4 py-2 rounded">Get Start</button></NavLink>
                </div>
                <div>
                    <img src={user} alt="" className="drop-shadow md:drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] w-2/3 mx-auto md:w-full" />
                </div>
            </div>
            <div className="mt-12 px-4">
                <Imgprovider.Provider value={[accountent, marketing, creative, chip]}>
                    <Jobs></Jobs>
                </Imgprovider.Provider>
            </div>
            <div>
                <JobDataprovide.Provider value={JobData}>
                    <FeaturedJobs></FeaturedJobs>
                </JobDataprovide.Provider>
            </div>
            <div className="text-center">
                <NavLink to={'/all_jobs'}><button className=" my-4 bg-gradient-to-r from-[#7E90FE] to-[#5a1ffc] text-white px-4 py-2 rounded">Show All Jobs</button></NavLink>
            </div>
        </div>
    );
};

export default Home;