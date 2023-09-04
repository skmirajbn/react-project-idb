function MemberAdd() {
  return (
    <div className="text-gray-700 gap-y-3">
      <form className="space-y-4">
        <div className="flex flex-col">
          <label className="text-lg">নাম :</label>
          <input className="border-2 border-blue-200 py-1 px-2 rounded-md" type="text" placeholder="নাম প্রবেশ করুন" name="name" />
        </div>
        <div className="flex flex-col">
          <label className="text-lg">ইমেইল :</label>
          <input className="border-2 border-blue-200 py-1 px-2 rounded-md" type="text" placeholder="ইমেইল প্রবেশ করুন" name="email" />
        </div>
        <div className="flex flex-col">
          <label className="text-lg">ইউজারনেম :</label>
          <input className="border-2 border-blue-200 py-1 px-2 rounded-md" type="text" placeholder="ইউজারনেম প্রবেশ করুন" name="username" />
        </div>
        <div className="flex flex-col">
          <label className="text-lg">পাসওয়ার্ড :</label>
          <input className="border-2 border-blue-200 py-1 px-2 rounded-md" type="text" placeholder="পাসওয়ার্ড প্রবেশ করুন" name="password" />
        </div>
        <div className="flex flex-col">
          <label className="text-lg">রোল :</label>
          <select name="role">
            <option disabled selected value="0">
              রোল সিলেক্ট করুন
            </option>
            <option value="1">এডমিন</option>
            <option value="2">ক্যান্ডিডেট</option>
            <option value="3">চাকুরিদাতা</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label className="text-lg">ছবি :</label>
          <input className="py-1 px-2 rounded-md" type="file" name="image" />
        </div>
        <h2 className="text-center text-2xl text-green-700"> </h2>
        <h2 className="text-center text-2xl text-green-700"></h2>
        <button className="block mx-auto bg-cyan-700 text-white py-2 px-4 rounded-md">
          <i className="fa-solid fa-plus"></i> যোগ করুন
        </button>
      </form>
    </div>
  );
}

export default MemberAdd;
