export default function Banner() {
  return (
    <div className="relative w-full h-96 z-0 bg-[url('./src/assets/img/hostel-banner.jpg')] bg-cover bg-center">
      <div className="h-full flex flex-col justify-center items-center">
        <h3 className="text-5xl text-white font-bold">
          <i className="fa-solid fa-hotel"></i> Super Hostel BD
        </h3>
        <button className="text-xl bg-orange-500 text-white px-6 py-2 rounded-full mt-4">
          Book Now <i className="fa-solid fa-person-walking-luggage"></i>
        </button>
      </div>
      <div className="bg-black absolute left-0 right-0 bottom-0 top-0 opacity-50 -z-10"></div>
    </div>
  );
}
