import Accommodation from "./Accommodation";
import Banner from "./Banner";
import BedsWeProvide from "./BedsWeProvide";
import MediaCoverage from "./MediaCoverage";
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
        <BedsWeProvide />
        <MediaCoverage />
      </div>
    </>
  );
}
