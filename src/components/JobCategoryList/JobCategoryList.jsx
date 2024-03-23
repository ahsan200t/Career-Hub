import JobCategory from "../JobCategory/JobCategory";

/* eslint-disable react/prop-types */
const JobCategoryList = ({jobCategory}) => {

  return (
    <div>
      <h1 className="text-5xl text-center font-bold mb-4">
        Job Category List
      </h1>
      <p className="text-center mb-8">Explore thousands of job opportunities with all the information you need. Its your future</p>
      <div className="md:flex gap-6">
        {
                jobCategory.map(job=><JobCategory key={job.id} job={job}></JobCategory>)
             }
      </div>
    </div>
  );
};

export default JobCategoryList;
