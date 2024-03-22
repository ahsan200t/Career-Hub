import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen">
           <h1 className="text-3xl font-extrabold text-green-600">Opps!!!</h1>
           <Link to='/' className="text-3xl font-bold underline">Go Back to Home</Link> 

        </div>
    );
};

export default ErrorPage;