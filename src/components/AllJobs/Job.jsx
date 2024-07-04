import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
const Job = ({ JobDetails }) => {
   const { job_title, company_name, salary_range, work_type, experience, educational_qualification } = JobDetails;
   return (
      <div className='mb-5'>
         <div className='bg-purple-50 shadow border h-[300px] p-3 rounded'>
            <p className="mb-2"><span className="font-bold">Job Title :</span> {job_title}</p>
            <p className="mb-2"><span className="font-bold">Company Name :</span> {company_name}</p>
            <p className="mb-2"><span className="font-bold">Work Type :</span> {work_type}</p>
            <p className="mb-2"><span className="font-bold">Slary Range :</span> {salary_range}</p>
            <p className="mb-2"><span className="font-bold">Educational Requirments :</span> {educational_qualification}</p>
            <p className="mb-2"><span className="font-bold">Experience :</span> {experience}</p>
            <NavLink to={'/apply_job'}><button className=" my-4 bg-gradient-to-r from-[#7E90FE] to-[#5a1ffc] text-white px-6 py-2 rounded">Apply Now</button></NavLink>
         </div>
      </div>
   );
};
Job.propTypes = {
   JobDetails: PropTypes.object
}
export default Job;