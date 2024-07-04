//get the stored item through jobId
const getAppliedJobsID = () => {
    const getJobId = localStorage.getItem("applidedJobs");
    if (getJobId) {
        return JSON.parse(getJobId); //my data was a string. and when I recived the data it must be an object
    }
    return [];
};
//save job application (save this is which not saved already)
const saveJobApplication = (id) => {
    const storedJobApplication = getAppliedJobsID(); //this is my stored job application (it's an array)
    const exists = storedJobApplication.find((jobId) => jobId === id); // is exits this id? which I want to store the localstorage ?
    if (!exists) {
        // if is not exists
        storedJobApplication.push(id); // push this id in localstorage array.
        localStorage.setItem(
            "applidedJobs",
            JSON.stringify(storedJobApplication),
        ); // then set the item(id) as a string
    }
};
export { getAppliedJobsID, saveJobApplication };
