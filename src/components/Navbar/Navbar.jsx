import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="container mx-auto ">
            <nav>
                <div className="navbar rounded">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-indigo-100 rounded z-[1] mt-2 w-52 p-2 shadow">
                                <li><NavLink to={"/"}><li>Home</li></NavLink></li>
                                <li><NavLink to={'/applied_jobs'}><li >Applied Jobs</li></NavLink></li>
                                <li><NavLink to={'/all_jobs'}>All Jobs</NavLink></li>
                                <li><Link to={'/login'}>Log In</Link></li>
                            </ul>
                        </div>
                        <NavLink to={'/'}><a className="font-bold md:text-2xl">Career Hub</a></NavLink>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <NavLink to={"/"}><li className="mx-5"><a className="md:text-lg">Home</a></li></NavLink>
                            <NavLink to={'/applied_jobs'}><li className="mx-5"><a className="md:text-lg">Applied Jobs</a></li></NavLink>
                            <NavLink to={'/all_jobs'}><li className="mx-5"><a className="md:text-lg">All Jobs</a></li></NavLink>
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <NavLink to={'/all_jobs'}><button className=" my-4 bg-gradient-to-r from-[#7E90FE] to-[#5a1ffc] text-white px-4 py-2 rounded">Start Apply</button></NavLink>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;