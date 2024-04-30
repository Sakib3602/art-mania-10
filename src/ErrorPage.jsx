import Lottie from "lottie-react";
import error from './error.json'
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <div className="h-[40%] m-auto w-[40%]">
                <Lottie animationData={error}></Lottie>
                <h1>Something is Wrong. Please Try Again. Explore New Things!</h1>
                <Link to={'/'}> <button className="btn w-full btn-outline">Return To Home</button> </Link>
                
            </div>
        </div>
    );
};

export default ErrorPage;