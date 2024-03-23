/* eslint-disable react/prop-types */
const JobApplied = ({ job }) => {
  return (
    <div>
      <div className="md:flex justify-between items-center mb-4 p-5 border">
        <div className="flex items-center gap-8">
          <img className="w-[200px] h-[100px] p-4" src={job.logo} alt="" />
          <div className="space-y-3">
            <h1 className="text-[#474747] text-2xl font-bold">
              {job.job_title}
            </h1>
            <p className="text-[#757575] font-semibold text-2xl">
              {job.company_name}
            </p>
            <div>
              <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]">
                {job.remote_or_onsite}
              </button>
              <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]">
                {job.job_type}
              </button>
            </div>
          </div>
        </div>
        <button className="btn bg-[#7E90FE] text-xl font-bold  text-white">
          View Details
        </button>
      </div>
    </div>
  );
};

export default JobApplied;
