import { useParams } from "react-router-dom";

/* eslint-disable react/no-unescaped-entities */
function BookSeatForm() {
  let { id } = useParams();
  console.log(id);
  return (
    <form>
      <h3 className="text-4xl">The params is : {id}</h3>
      {/* User info For signup */}
      <div>
        <div>
          <label htmlFor="">Name</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">Phone</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">National ID</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">Person/Person's</label>
          <input type="number" />
        </div>
      </div>
      {/* Booking */}
      <div>
        <div>
          <label htmlFor="">Pakage</label>
          <select name="" id="">
            <option value="">Select Pakage</option>
            <option value="">3 days</option>
            <option value="">7 days</option>
            <option value="">30 days</option>
          </select>
        </div>
        <div>
          <label htmlFor="">Branch</label>
          <select name="" id="">
            <option value="">Select Branch</option>
            <option value="">Dhanmondi</option>
            <option value="">Motijheel</option>
            <option value="">Uttara</option>
          </select>
        </div>
        <div>
          <label htmlFor="">Room</label>
          <select name="" id="">
            <option value="">Select availabe Room</option>
            <option value="">3A</option>
            <option value="">4A</option>
            <option value="">5A</option>
          </select>
        </div>
        <div>
          <label htmlFor="">Bed</label>
          <select name="" id="">
            <option value="">Select availabe Bed</option>
            <option value="">Bed-2</option>
            <option value="">Bed-3</option>
            <option value="">Bed-4</option>
          </select>
        </div>
      </div>
    </form>
  );
}

export default BookSeatForm;
