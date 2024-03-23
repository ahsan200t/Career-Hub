import { useEffect, useState } from "react";
import { getStoredJobApplication } from "../../utility/localStorage";
import JobApplied from "../JobApplied/JobApplied";
import { useLoaderData } from "react-router-dom";

const AppliedJobs = () => {
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);

  const handleJobsFilter = (filter) => {
    if(filter==='all'){
      setDisplayJobs(appliedJobs);
    }else if(filter==='remote'){
         const remoteJobs=appliedJobs.filter(job=>job.remote_or_onsite==='Remote');
         setDisplayJobs(remoteJobs);
    }else if(filter==='onsite'){
      const onsiteJobs=appliedJobs.filter(job=> job.remote_or_onsite==='Onsite');
      setDisplayJobs(onsiteJobs)
    }
  };

  const jobs = useLoaderData()
  useEffect(() => {
    const storedJobIds = getStoredJobApplication();
    if (jobs.length > 0) {
      const jobsApplied = [];
      for (const id of storedJobIds) {
        const job = jobs.find((job) => job.id == id);
        if (job) {
          console.log(job);
          jobsApplied.push(job);
        }
      }
      setAppliedJobs(jobsApplied);
      setDisplayJobs(jobsApplied);
    }
  }, [jobs]);
  return (
    <div>
      <div className="flex justify-center items-center text-4xl font-extrabold p-40 mb-20 bg-gray-100">
        <h1>Applied Jobs</h1>
      </div>
      <div className="flex justify-end mb-8">
        <details className="dropdown">
          <summary className="m-1 btn">Filter By</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box">
            <li onClick={()=>handleJobsFilter("all")}>
              <a>All</a>
            </li>
            <li onClick={()=>handleJobsFilter("remote")}>
              <a>Remote</a>
            </li>
            <li onClick={()=>handleJobsFilter("onsite")}>
              <a>Onsite</a>
            </li>
          </ul>
        </details>
      </div>
      {displayJobs.map((job) => (
        <JobApplied key={job.id} job={job}></JobApplied>
      ))}
      <div></div>
    </div>
  );
};

export default AppliedJobs;
