import Banner from "../components/sections/Banner";
import Services from "../components/sections/Services";

export default function Home() {
  return (
    <>
      <div id="body" className="bg-white h-[200vh]">
        <Banner />
        <Services />
      </div>
    </>
  );
}
