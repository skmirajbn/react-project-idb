import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="bg-[#279EFF] text-white py-4">
      <div className="container flex justify-between items-center">
        <div>
          <i className="fa-solid fa-hotel text-3xl"></i>
          Super Hostel BD
        </div>
        <div className="space-x-4">
          <Link to="#">Home</Link>
          <Link to="#">About Us</Link>
          <Link to="#">Social</Link>
          <Link to="#">Blog</Link>
          <Link to="#">Contact</Link>
          <Link className="bg-orange-500 py-2 px-6 rounded-full" to="#">
            Book a Seat
          </Link>
        </div>
        <div className="space-x-4 flex justify-center items-center">
          {/* Search */}
          <div className="relative">
            <input className="px-3 py-1 text-black rounded-md" type="text" placeholder="Search..." />
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
