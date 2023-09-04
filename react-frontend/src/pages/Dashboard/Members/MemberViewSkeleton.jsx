/* eslint-disable react/prop-types */
function MemberViewSkeleton({ count }) {
  let skeletonItems = [];
  for (let i = 0; i < count; i++) {
    skeletonItems.push = (
      <tr>
        <td className="text-center py-4">
          <div className="bg-slate-700 w-full h-full contents">
            <div className="bg-slate-700 animate-pulse h-6 block rounded-lg mx-5"></div>
          </div>
        </td>
        <td className="text-center py-4">
          <div className="bg-slate-700 animate-pulse h-6 block rounded-lg mx-5"></div>
        </td>
        <td className="text-center py-4">
          <div className="bg-slate-700 animate-pulse h-6 block rounded-lg mx-5"></div>
        </td>
        <td className="text-center py-4">
          <div className="bg-slate-700 animate-pulse h-6 block rounded-lg mx-5"></div>
        </td>
        <td className="text-center py-4">
          <div className="bg-slate-700 animate-pulse h-6 block rounded-lg mx-5"></div>
        </td>
        <td className="text-center py-4">
          <div className="bg-slate-700 animate-pulse h-12 w-12 block rounded-full"></div>
        </td>
        <td className="text-center py-4">
          <div className="bg-slate-700 animate-pulse h-6 block rounded-lg mx-5"></div>
        </td>
      </tr>
    );
  }
  console.log(skeletonItems);

  return <>{skeletonItems.map((item) => item)}</>;
}

export default MemberViewSkeleton;
