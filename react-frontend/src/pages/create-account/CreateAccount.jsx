import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import MotionWrapScale from "../../components/motionWrap/MotionWrapScale";
import environment from "../../environment/environment";

function CreateAccount() {
  const [formValues, setformValues] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    phone: "",
    nid: "",
  });
  const photoRender = useRef();
  const photoInput = useRef();
  const handlePhotoChange = (e) => {
    const file = e.target.files[0];

    // Showing the file to the placeholder
    const reader = new FileReader();
    reader.onload = function (e) {
      photoRender.current.src = e.target.result;
    };
    reader.readAsDataURL(file);
  };

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setformValues({
      ...formValues,
      [name]: value,
    });
  };

  const formData = new FormData();
  const submitForm = (e) => {
    e.preventDefault();
    Object.keys(formValues).forEach((key) => {
      formData.append(key, formValues[key]);
    });
    // Appending the image file
    const file = photoInput.current.files[0];
    formData.append("photo", file);

    console.log(formData);
    // Calling the api
    fetch(environment.apiUrl + "users/createAccount.php", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Netowrk respose was not ok");
        }
        return response.text();
      })
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className="bg-blue-300">
      <div className="container">
        <form onSubmit={submitForm}>
          <section id="web-job-category" className="">
            <MotionWrapScale>
              <div className=" py-12 rounded-md  flex justify-center items-center text-gray-800">
                <div className=" bg-blue-100 rounded-lg py-10 px-16 space-y-10 shadow-xl w-full">
                  <h3 className="text-2xl text-center font-bold">Create Account</h3>

                  <div className="flex gap-12">
                    <div className="flex flex-col space-y-6 w-1/2">
                      <div className="space-y-2">
                        <h4 className="text-md">Name</h4>
                        <input className="w-full h-10 rounded-md px-4 border border-green-900 bg-white" type="text" placeholder="Enter Your Name" onChange={handleInput} name="name" value={formValues.name} />
                      </div>

                      <div className="space-y-2">
                        <h4 className="text-md">Email</h4>
                        <input className="w-full h-10 rounded-md px-4 border border-green-900 bg-white" type="text" placeholder="Enter Your Email" onChange={handleInput} name="email" value={formValues.email} />
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-md">Choose Username</h4>
                        <input className="w-full h-10 rounded-md px-4 border border-green-900 bg-white" type="text" placeholder="Create username" onChange={handleInput} name="username" value={formValues.username} />
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-md">Enter Password</h4>
                        <input className="w-full h-10 rounded-md px-4 border border-green-900 bg-white" type="text" placeholder="Create password" onChange={handleInput} name="password" value={formValues.password} />
                      </div>
                    </div>
                    <div className="flex flex-col space-y-6 w-1/2">
                      <div className="space-y-2">
                        <h4 className="text-md">Confirm Password</h4>
                        <input className="w-full h-10 rounded-md px-4 border border-green-900 bg-white" type="text" placeholder="Confirm password" />
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-md">Enter Phone Number</h4>
                        <input className="w-full h-10 rounded-md px-4 border border-green-900 bg-white" type="text" placeholder="Enter Phone Number" onChange={handleInput} name="phone" value={formValues.phone} />
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-md">Enter NID Number</h4>
                        <input className="w-full h-10 rounded-md px-4 border border-green-900 bg-white" type="text" placeholder="Enter NID Number" onChange={handleInput} name="nid" value={formValues.nid} />
                      </div>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="text-lg flex flex-col gap-2">
                      <label>
                        Upload Your Photo <i className="fa-solid fa-image-portrait"></i>
                      </label>

                      <input className="mr-6" type="file" onChange={handlePhotoChange} ref={photoInput} />
                    </div>
                    <div>
                      <img className="w-32 h-32 object-cover  bg-gray-300" src="img/avatar.webp" alt="" ref={photoRender} />
                    </div>
                  </div>

                  <div className="">
                    <Button type="submit" className="bg-blue-500 px-6 py-2 rounded-full text-white mx-auto block">
                      Create Account
                    </Button>
                  </div>

                  <div className="flex justify-between items-center">
                    <h3 className="text-gray-600">Already Have Account?</h3>

                    <Link to="/create-account" className="bg-orange-600 text-white px-8 py-3 rounded-full">
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