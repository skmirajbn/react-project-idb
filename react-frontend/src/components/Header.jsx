import { Link, NavLink } from "react-router-dom";
import MotionWrapScale from "./motionWrap/MotionWrapScale";

export default function Header() {
  const active = "text-cyan-600 font-bold inline-block bg-white px-4 leading-8 rounded-full";
  return (
    <div className="bg-[#279EFF] text-white py-4">
      <div className="container flex justify-between items-center">
        <div className="flex items-center">
          <i className="fa-solid fa-hotel text-3xl mr-3"></i>
          Super Hostel BD
        </div>
        <div className="space-x-4">
          <NavLink to="" className={({ isActive }) => (isActive ? active : null)}>
            Home
          </NavLink>
          <NavLink to="about" className={({ isActive }) => (isActive ? active : null)}>
            About Us
          </NavLink>
          <NavLink to="social" className={({ isActive }) => (isActive ? active : null)}>
            Social
          </NavLink>
          <NavLink to="blog" className={({ isActive }) => (isActive ? active : null)}>
            Blog
          </NavLink>
          <NavLink to="contact" className={({ isActive }) => (isActive ? active : null)}>
            Contact
          </NavLink>
          <NavLink to="team" className={({ isActive }) => (isActive ? active : null)}>
            Our Team
          </NavLink>
          <NavLink to="login" className={({ isActive }) => (isActive ? active : null)}>
            Login
          </NavLink>
          <div className="inline-block">
            <MotionWrapScale>
              <NavLink className="bg-orange-500 py-2 px-6 rounded-full" to="#">
                Book a Seat
              </NavLink>
            </MotionWrapScale>
          </div>
        </div>
        <div className="space-x-4 flex justify-center items-center">
          {/* Search */}
          <div className="relative">
            <input className="px-3 py-1 w-52 text-black rounded-md" type="text" placeholder="Search..." />
            <i className="fa-solid fa-magnifying-glass absolute right-3 text-black top-1/2 -translate-y-1/2"></i>
          </div>
          <Link to="#">
            <i className="fa-brands fa-google"></i>
          </Link>
          <Link to="#">
            <i className="fa-brands fa-facebook"></i>
          </Link>
          <Link to="#">
            <i className="fa-brands fa-youtube"></i>
          </Link>
          <Link to="#">
            <i className="fa-brands fa-linkedin-in"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}
