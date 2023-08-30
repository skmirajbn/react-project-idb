import Accommodation from "./Accommodation";
import Banner from "./Banner";
import OurBranches from "./OurBranches";
import Services from "./Services";

export default function Home() {
  return (
    <>
      <div id="body" className="bg-white">
        <Banner />
        <Services />
        <Accommodation />
        <OurBranches />
      </div>
    </>
  );
}
