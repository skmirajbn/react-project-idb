import Heading from "../../components/Heading";

function ContactSectin() {
  return (
    <div className="container">
      <div className="py-20 space-y-10">
        <Heading>Contact Information</Heading>
        <div className="flex">
          <div className="w-1/2 space-y-6">
            <h3 className="text-center text-xl font-bold text-gray-700">Send Message</h3>
            <form className="flex flex-col space-y-4">
              <input className="bg-white border-2 border-black rounded-md px-4 py-2" type="text" placeholder="Name" />
              <input className="bg-white border-2 border-black rounded-md px-4 py-2" type="text" placeholder="Mobile Number" />
              <input className="bg-white border-2 border-black rounded-md px-4 py-2" type="text" placeholder="Email ID" />
              <textarea className="bg-white border-2 border-black rounded-md px-4 py-2" name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
              <div className="mx-auto">
                <button className="bg-blue-600 text-white py-2 rounded-md px-6" type="submit">
                  Send <i className="fa-solid fa-paper-plane pl-2"></i>
                </button>
              </div>
            </form>
          </div>
          <div className="w-1/2">
            <h3 className="text-center text-xl font-bold text-gray-700">Contact Information</h3>
            <div className="bg-gray-700"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSectin;
