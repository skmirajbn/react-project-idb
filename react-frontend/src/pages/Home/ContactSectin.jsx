import Heading from "../../components/Heading";

function ContactSectin() {
  return (
    <div className="container">
      <div className="py-20 space-y-10">
        <Heading>Contact Information</Heading>
        <div className="flex">
          <div>
            <h3>Send Message</h3>
            <form className="flex flex-col">
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Mobile Number" />
              <input type="text" placeholder="Email ID" />
              <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
            </form>
          </div>
          <div>contact</div>
        </div>
      </div>
    </div>
  );
}

export default ContactSectin;
