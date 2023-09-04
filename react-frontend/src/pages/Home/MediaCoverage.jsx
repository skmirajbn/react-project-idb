import Heading from "../../components/Heading";

function MediaCoverage() {
  return (
    <div className="container">
      <div className="py-20 space-y-10">
        <Heading>On Top Media Coverage</Heading>
        <div>
          {/* Single Coverage Media */}
          <div>
            <img className="w-28 h-28 object-contain border-2 border-black  rounded-full" src="/img/media-coverage/prothom-alo.webp" alt="" />
            <h3 className="text-center">Prothom Alo</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MediaCoverage;
