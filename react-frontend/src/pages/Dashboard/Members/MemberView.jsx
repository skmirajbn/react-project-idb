function MemberView() {
  return (
    <div className="space-y-4 bg-white my-6 py-6 px-12 rounded-md shadow-lg">
      <div className="flex justify-between">
        <h2 className="text-lg font-bold text-blue-950">
          <i className="fa-solid fa-users"></i> সকল ইউজার
        </h2>
        <h2 className="text-xl text-green-600">Loading..</h2>
      </div>

      <div className="text-gray-700 gap-y-3 overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-slate-400">
          <thead className="bg-gray-200">
            <tr>
              <th className="border border-slate-300">আইডি</th>
              <th className="border border-slate-300">নাম</th>
              <th className="border border-slate-300">ইউজারনেম</th>
              <th className="border border-slate-300">ইমেইল</th>
              <th className="border border-slate-300">রোল</th>
              <th className="border border-slate-300">ছবি</th>
              <th className="border border-slate-300">একশন</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-300">45</td>
              <td className="border border-slate-300">Rakibul Islam</td>
              <td className="border border-slate-300">rakib</td>
              <td className="border border-slate-300">rakib@gmail.com</td>
              <td className="border border-slate-300">Admin</td>
              <td className="border border-slate-300 py-6">Image</td>
              <td className="border border-slate-300">
                <a>
                  <i className="fa-solid fa-pen-to-square pr-2 text-green-600"></i>
                </a>{" "}
                | <i className="fa-solid fa-trash pl-2 text-red-600"></i>
              </td>
            </tr>
            <tr>
              <td className="border border-slate-300">45</td>
              <td className="border border-slate-300">Rakibul Islam</td>
              <td className="border border-slate-300">rakib</td>
              <td className="border border-slate-300">rakib@gmail.com</td>
              <td className="border border-slate-300">Admin</td>
              <td className="border border-slate-300 py-6">Image</td>
              <td className="border border-slate-300">
                <a>
                  <i className="fa-solid fa-pen-to-square pr-2 text-green-600"></i>
                </a>{" "}
                | <i className="fa-solid fa-trash pl-2 text-red-600"></i>
              </td>
            </tr>
            <tr>
              <td className="border border-slate-300">45</td>
              <td className="border border-slate-300">Rakibul Islam</td>
              <td className="border border-slate-300">rakib</td>
              <td className="border border-slate-300">rakib@gmail.com</td>
              <td className="border border-slate-300">Admin</td>
              <td className="border border-slate-300 py-6">Image</td>
              <td className="border border-slate-300">
                <a>
                  <i className="fa-solid fa-pen-to-square pr-2 text-green-600"></i>
                </a>{" "}
                | <i className="fa-solid fa-trash pl-2 text-red-600"></i>
              </td>
            </tr>
            <tr>
              <td className="border border-slate-300">45</td>
              <td className="border border-slate-300">Rakibul Islam</td>
              <td className="border border-slate-300">rakib</td>
              <td className="border border-slate-300">rakib@gmail.com</td>
              <td className="border border-slate-300">Admin</td>
              <td className="border border-slate-300 py-6">Image</td>
              <td className="border border-slate-300">
                <a>
                  <i className="fa-solid fa-pen-to-square pr-2 text-green-600"></i>
                </a>{" "}
                | <i className="fa-solid fa-trash pl-2 text-red-600"></i>
              </td>
            </tr>
            <tr>
              <td className="border border-slate-300">45</td>
              <td className="border border-slate-300">Rakibul Islam</td>
              <td className="border border-slate-300">rakib</td>
              <td className="border border-slate-300">rakib@gmail.com</td>
              <td className="border border-slate-300">Admin</td>
              <td className="border border-slate-300 py-6">Image</td>
              <td className="border border-slate-300">
                <a>
                  <i className="fa-solid fa-pen-to-square pr-2 text-green-600"></i>
                </a>{" "}
                | <i className="fa-solid fa-trash pl-2 text-red-600"></i>
              </td>
            </tr>
            <tr>
              <td className="border border-slate-300">45</td>
              <td className="border border-slate-300">Rakibul Islam</td>
              <td className="border border-slate-300">rakib</td>
              <td className="border border-slate-300">rakib@gmail.com</td>
              <td className="border border-slate-300">Admin</td>
              <td className="border border-slate-300 py-6">Image</td>
              <td className="border border-slate-300">
                <a>
                  <i className="fa-solid fa-pen-to-square pr-2 text-green-600"></i>
                </a>{" "}
                | <i className="fa-solid fa-trash pl-2 text-red-600"></i>
              </td>
            </tr>
            <tr>
              <td className="border border-slate-300">45</td>
              <td className="border border-slate-300">Rakibul Islam</td>
              <td className="border border-slate-300">rakib</td>
              <td className="border border-slate-300">rakib@gmail.com</td>
              <td className="border border-slate-300">Admin</td>
              <td className="border border-slate-300 py-6">Image</td>
              <td className="border border-slate-300">
                <a>
                  <i className="fa-solid fa-pen-to-square pr-2 text-green-600"></i>
                </a>{" "}
                | <i className="fa-solid fa-trash pl-2 text-red-600"></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MemberView;
