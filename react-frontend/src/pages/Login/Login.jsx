import { Link } from "react-router-dom";
import Button from "./../../components/Button";
import MotionWrapScale from "./../../components/motionWrap/MotionWrapScale";
export default function Login() {
  return (
    <div className="bg-blue-300">
      <div className="container">
        <form>
          <section id="web-job-category" className="">
            <MotionWrapScale>
              <div className=" py-6 px-12 rounded-md  h-[82vh] flex justify-center items-center">
                <div className="h-[420px] w-96 bg-green-100 rounded-lg py-10 px-10 space-y-6 shadow-xl">
                  <h3 className="text-2xl text-center font-bold">Sign In</h3>

                  <div className="space-y-2">
                    <h4 className="text-md">Username</h4>
                    <input className="w-full h-10 rounded-md px-4 border border-green-900" type="text" placeholder="Enter Your Username" />
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-md">Password</h4>
                    <input className="w-full h-10 rounded-md px-4 border border-green-900" type="text" placeholder="Enter Your Password" />
                  </div>

                  <div className="">
                    <Button className="mx-auto block">
                      <Link to="/dashboard" className="bg-blue-500 px-6 py-1 rounded-full text-white">
                        Login
                      </Link>
                    </Button>
                  </div>

                  <div className="flex justify-between items-center">
                    <h3 className="text-gray-600">Forgot Password?</h3>

                    <a className="bg-orange-600 text-white px-4 py-1 rounded-full">Create Account</a>
                  </div>
                </div>
              </div>
            </MotionWrapScale>
          </section>
        </form>
      </div>
    </div>
  );
}
