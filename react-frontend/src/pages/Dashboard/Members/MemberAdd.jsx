function MemberAdd() {
  return (
    <div className="text-gray-700 gap-y-3">
      <form className="space-y-4">
        <div className="flex flex-col">
          <label className="text-lg">Name :</label>
          <input className="border-2 border-blue-200 py-1 px-2 rounded-md" type="text" placeholder="Enter Your Name" name="name" />
        </div>
        <div className="flex flex-col">
          <label className="text-lg">Email :</label>
          <input className="border-2 border-blue-200 py-1 px-2 rounded-md" type="text" placeholder="Enter Your Email" name="email" />
        </div>
        <div className="flex flex-col">
          <label className="text-lg">Username :</label>
          <input className="border-2 border-blue-200 py-1 px-2 rounded-md" type="text" placeholder="Enter Username" name="username" />
        </div>
        <div className="flex flex-col">
          <label className="text-lg">Password :</label>
          <input className="border-2 border-blue-200 py-1 px-2 rounded-md" type="text" placeholder="Enter Password" name="password" />
        </div>
        <div className="flex flex-col">
          <label className="text-lg">Role :</label>
          <select name="role">
            <option disabled selected value="0">
              Select Role
            </option>
            <option value="1">Admin</option>
            <option value="2">Admin</option>
            <option value="3">Admin</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label className="text-lg">Image :</label>
          <input className="py-1 px-2 rounded-md" type="file" name="image" />
        </div>
        <h2 className="text-center text-2xl text-green-700"> </h2>
        <h2 className="text-center text-2xl text-green-700"></h2>
        <button className="block mx-auto bg-cyan-700 text-white py-2 px-4 rounded-md">
          <i className="fa-solid fa-plus"></i> Add User
        </button>
      </form>
    </div>
  );
}

export default MemberAdd;
