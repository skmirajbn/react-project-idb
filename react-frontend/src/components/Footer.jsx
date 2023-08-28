import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="bg-[#279EFF] py-6 text-white">
      <div className="flex container justify-between">
        <div className="flex flex-col">
          <h3 className="text-xl font-bold pb-4 uppercase">About Us</h3>
          <Link to="#">Super Hostel BD</Link> flex-col
          <Link to="#">Terms & Condition</Link>
          <Link to="#">Partners</Link>
          <Link to="#">Privacy Policy</Link>
          <Link to="#">Feedback</Link>
          <Link to="#">Contact</Link>
        </div>
        <div className="flex flex-col">
          <h3 className="text-xl font-bold pb-4 uppercase">Members</h3>
          <Link to="#">Create Account</Link>
          <Link to="#">Super Hostel Bd Panel</Link>
          <Link to="#">Test</Link>
          <Link to="#">FAQ</Link>
          <Link to="#">Instructions</Link>
          <Link to="#">Career</Link>
        </div>
        <div className="flex flex-col">
          <h3 className="text-xl font-bold pb-4 uppercase">Sponser</h3>
          <Link to="#">Create Account</Link>
          <Link to="#">Products</Link>
          <Link to="#">Assets</Link>
          <Link to="#">FAQ</Link>
          <Link to="#">Instructions</Link>
          <Link to="#">Policy</Link>
        </div>
        <div className="flex flex-col">
          <h3 className="text-xl font-bold pb-4 uppercase">Tools and Social</h3>
          <Link to="#">Our Android Apps</Link>
          <Link to="#">Our iOS App</Link>
          <Link to="#">Facebook</Link>
          <Link to="#">Instagram</Link>
          <Link to="#">Google</Link>
          <Link to="#">Youtube</Link>
          <Link to="#">Linkedin</Link>
        </div>
      </div>
    </div>
  );
}
