import user from '../../assets/image/user.png'
const Banner = () => {
    return (
        <div>
           <div className="md:flex items-center justify-center mb-20">
            <div className='space-y-6'>
                <h1 className='text-7xl font-extrabold'>One Step <br /> Closer To Your <br /> <span className='text-[#7E90FE]'>Dream Job</span></h1>
                <p className='text-[#757575] font-medium'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className="btn bg-[#7E90FE] text-xl font-bold text-white">Get Started</button>
            </div>
            <div>
                <img src={user} alt="" />
            </div>

           </div>
        </div>
    );
};

export default Banner;