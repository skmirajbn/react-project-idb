import { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import FadeIn from "./motionWrap/FadeIn";
import MotionWrapScale from "./motionWrap/MotionWrapScale";

function Header() {
  useEffect(() => {}, []);
  console.log("header rended");

  const transition = {
    transitionTimingFunction: "transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);",
    transitionDuration: "200ms",
  };
  const active = "text-cyan-600 font-bold inline-block bg-white px-4 leading-8 rounded-full";
  return (
    <div className="bg-[#279EFF] text-white py-4">
      <FadeIn>
        <div className="container flex justify-between items-center">
          <div className="flex items-center">
            <Link to="">
              <i className="fa-solid fa-hotel text-3xl mr-3"></i>
            </Link>
            <Link to="">Super Hostel BD</Link>
          </div>
          <div className="space-x-4">
            <NavLink to="" className={({ isActive }) => (isActive ? active : null)} style={transition}>
              Home
            </NavLink>
            <NavLink to="about" className={({ isActive }) => (isActive ? active : null)} style={transition}>
              About Us
            </NavLink>
            <NavLink to="social" className={({ isActive }) => (isActive ? active : null)} style={transition}>
              Social
            </NavLink>
            <NavLink to="blog" className={({ isActive }) => (isActive ? active : null)} style={transition}>
              Blog
            </NavLink>
            <NavLink to="contact" className={({ isActive }) => (isActive ? active : null)} style={transition}>
              Contact
            </NavLink>
            <NavLink to="team" className={({ isActive }) => (isActive ? active : null)} style={transition}>
              Our Team
            </NavLink>
            <NavLink to="login" className={({ isActive }) => (isActive ? active : null)} style={transition}>
              Login
            </NavLink>
            <div className="inline-block">
              <MotionWrapScale>
                <NavLink className="bg-orange-500 py-[6px] px-6 rounded-full" to="#">
                  Book a Seat
                </NavLink>
              </MotionWrapScale>
            </div>
          </div>
          <div className="space-x-4 flex justify-center items-center">
            {/* Search */}
            <div className="relative">
              <input className="px-3 py-1 w-52 text-black rounded-md bg-white" type="text" placeholder="Search..." />
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
      </FadeIn>
    </div>
  );
}

export default Header;
