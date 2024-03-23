import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveJobApplication } from "../../utility/localStorage";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const job = jobs.find((job) => job.id == id);

  const handleApplyJob = () => {
   saveJobApplication(id);
    toast('Congrats!!!You Have Applied Successfully.')
  };

  return (
    <div>
      <div className="flex justify-center items-center text-4xl font-extrabold p-40 mb-10 bg-gray-100">
        <h1>Job Details</h1>
      </div>
      <div className="grid gap-4 md:grid-cols-5">
        <div className="md:col-span-3">
          <p className="mb-6 text-[#757575]">
            <span className="font-extrabold text-[#1A1919]">
              Job description:
            </span>
            {job.job_description}
          </p>
          <p className="mb-6 text-[#757575]">
            <span className="font-extrabold text-[#1A1919]">
              Job Responsibility:
            </span>
            {job.job_responsibility}
          </p>
          <div className="mb-6">
            <h1 className="font-extrabold text-[#1A1919] mb-3">
              Educational Requirements:
            </h1>
            <p className="text-[#757575]">{job.educational_requirements}</p>
          </div>
          <div>
            <h1 className="font-extrabold text-[#1A1919] mb-3">Experience:</h1>
            <p className="text-[#757575]">{job.experiences}</p>
          </div>
        </div>
        <div className="col-span-2 bg-slate-200 p-8 rounded-lg">
          <h1 className="text-xl font-extrabold">Job Details</h1>
          <div className="divider"></div>

          <div className="flex gap-2 mb-3">
            <p className="text-[#7E90FE]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </p>
            <h2 className="text-[#757575]">
              <span className="font-extrabold">Salary: </span>
              {job.salary} (Per Month){" "}
            </h2>
          </div>
          <div className="flex gap-2">
            <p className="text-[#7E90FE]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                />
              </svg>
            </p>
            <h1 className="text-[#757575]">
              <span className="font-extrabold">Job Title: </span>
              {job.job_title}
            </h1>
          </div>
          <h1 className="text-xl font-extrabold mt-5">Contact Information</h1>
          <div className="divider"></div>
          <div className="flex gap-2 items-center mb-3">
            <p className="text-[#7E90FE]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>
            </p>
            <p className="text-xl text-[#757575]">
              <span className="font-bold">Phone: </span>
              {job.contact_information.phone}
            </p>
          </div>
          <div className="flex items-center gap-2 mb-3">
            <p className="text-[#7E90FE]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
            </p>
            <h1 className="text-[#757575] text-xl">
              <span className="font-bold">Email: </span>
              {job.contact_information.email}
            </h1>
          </div>
          <div className="flex gap-2 mb-3">
            <p className="text-[#7E90FE]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
            </p>
            <h1 className="text-xl text-[#757575]">
              <span className="font-bold">Address: </span>
              {job.contact_information.address}
            </h1>
          </div>
          <div>
            <button
              onClick={handleApplyJob}
              className="btn w-full bg-[#7E90FE] text-white font-bold text-xl"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
      <div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default JobDetails;
