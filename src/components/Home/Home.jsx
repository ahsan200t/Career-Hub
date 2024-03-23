import { useSearchParams } from "react-router-dom";
import Banner from "../Banner/Banner";
import FeaturedJob from "../FeaturedJob/FeaturedJob";
import JobCategoryList from "../JobCategoryList/JobCategoryList";
import { useEffect, useState } from "react";

const Home = () => {

    const [jobCategory, setJobCategory] = useState([]);

    useEffect(() => {
      fetch("./categories.json")
        .then((res) => res.json())
        .then((data) => setJobCategory(data));
    }, []);
    
    return (
        <div>
            <Banner></Banner>
            <div>
            <JobCategoryList jobCategory={jobCategory}></JobCategoryList>
            </div>
             <FeaturedJob></FeaturedJob>             
        </div>
    );
};

export default Home;