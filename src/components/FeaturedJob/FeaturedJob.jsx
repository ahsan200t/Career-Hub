import { useEffect } from "react";
import { useState } from "react";
import Job from "../Job/Job";

const FeaturedJob = () => {
  const [jobs, setJobs] = useState([]);
  const [dataLength, setDataLength] =useState(4);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div>
      <div className="text-center my-10">
        <h1 className="text-5xl font-bold mb-3">Featured Job</h1>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future.
        </p>
      </div>
      <div className="md:grid grid-cols-2 gap-6">
        {jobs.slice(0, dataLength).map((job) => (
          <Job key={jobs.id} job={job}></Job>
        ))}
      </div>
      <div className="text-center mt-5">
        <div className={dataLength === jobs.length ? 'hidden' : ''}>
        <button onClick={()=> setDataLength(jobs.length)}  className="btn bg-[#7E90FE] text-white font-extrabold text-xl">See All Jobs</button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedJob;
