import Accommodation from "./Accommodation";
import Banner from "./Banner";
import Services from "./Services";

export default function Home() {
  return (
    <>
      <div id="body" className="bg-white">
        <Banner />
        <Services />
        <Accommodation />
      </div>
    </>
  );
}
