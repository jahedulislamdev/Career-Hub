import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    return (
        <div className=" flex justify-center items-center h-dvh bg-black text-gray-300">
            <div className="">
                {
                    err.status === 404 &&
                    <p className="text-center text-lg md:text-2xl text-orange-700 p-5"><span className=" border-e pe-3 text-white">404</span> This page could not be found.</p>
                }
            </div>
        </div>
    );
};

export default Error;