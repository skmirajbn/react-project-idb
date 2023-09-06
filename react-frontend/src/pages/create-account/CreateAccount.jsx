import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import MotionWrapScale from "../../components/motionWrap/MotionWrapScale";

function CreateAccount() {
  const [formData, setFormData] = useState();

  const handleInput = () => {};

  return (
    <div className="bg-blue-300">
      <div className="container">
        <form>
          <section id="web-job-category" className="">
            <MotionWrapScale>
              <div className=" py-12 px-12 rounded-md   flex justify-center items-center text-gray-800">
                <div className=" bg-blue-100 rounded-lg py-10 px-10 space-y-6 shadow-xl">
                  <h3 className="text-2xl text-center font-bold ">Create Account</h3>

                  <div className="flex gap-6">
                    <div className="flex flex-col space-y-6">
                      <div className="space-y-2">
                        <h4 className="text-md">Name</h4>
                        <input className="w-full h-10 rounded-md px-4 border border-green-900 bg-white" type="text" placeholder="Enter Your Name" onChange={handleInput} />
                      </div>

                      <div className="space-y-2">
                        <h4 className="text-md">Email</h4>
                        <input className="w-full h-10 rounded-md px-4 border border-green-900 bg-white" type="text" placeholder="Enter Your Email" />
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-md">Choose Username</h4>
                        <input className="w-full h-10 rounded-md px-4 border border-green-900 bg-white" type="text" placeholder="Create username" />
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-md">Enter Password</h4>
                        <input className="w-full h-10 rounded-md px-4 border border-green-900 bg-white" type="text" placeholder="Create password" />
                      </div>
                    </div>
                    <div className="flex flex-col space-y-6">
                      <div className="space-y-2">
                        <h4 className="text-md">Confirm Password</h4>
                        <input className="w-full h-10 rounded-md px-4 border border-green-900 bg-white" type="text" placeholder="Confirm password" />
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-md">Enter Phone Number</h4>
                        <input className="w-full h-10 rounded-md px-4 border border-green-900 bg-white" type="text" placeholder="Enter Phone Number" />
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-md">Enter NID Number</h4>
                        <input className="w-full h-10 rounded-md px-4 border border-green-900 bg-white" type="text" placeholder="Enter NID Number" />
                      </div>
                    </div>
                  </div>

                  <div className="">
                    <Button className="mx-auto block">
                      <Link to="/dashboard" className="bg-blue-500 px-6 py-1 rounded-full text-white">
                        Login
                      </Link>
                    </Button>
                  </div>

                  <div className="flex justify-between items-center">
                    <h3 className="text-gray-600">Already Have Account?</h3>

                    <Link to="/create-account" className="bg-orange-600 text-white px-4 py-1 rounded-full">
                      Sign In
                    </Link>
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

export default CreateAccount;
