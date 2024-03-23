/* eslint-disable react/prop-types */
const JobCategory = ({job}) => {
    const {availability, logo, category_name
    }=job;
    console.log(logo)
    return (
        <div>
            <div className="bg-gray-100 p-10 rounded-lg">
                <img className="w-10 h-10 mb-12" src={logo} alt="" />
                <h1 className="text-xl font-bold mb-2">{category_name}</h1>
                <p className="font-medium text-[#A3A3A3]">{availability}</p>

            </div>
        </div>
    );
};

export default JobCategory;