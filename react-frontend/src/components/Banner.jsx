import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import dataJson from "./../assets/animations/ioLsJWnw2s.json";

export default function Banner() {
  const [refButton, inView] = useInView();
  const [tikicon, isTikView] = useInView();
  const lottieRef = useRef();
  useEffect(() => {
    console.log("rendered");
    if (isTikView) {
      lottieRef.current.playSegments([0, 25], true);
    }
  }, [isTikView]);
  const hidden = { opacity: 0, y: -20 };
  const visible = { opacity: 1, y: 0 };
  const transition = { delay: ".2", type: "spring", stiffness: 60, damping: 7 };

  return (
    <div className="relative w-full h-[70vh] z-0 bg-[url('./src/assets/img/hostel-banner.jpg')] bg-cover bg-center">
      <div className="h-full flex flex-col justify-center items-center">
        <motion.h3 animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }} initial={{ opacity: 0, y: -100 }} transition={transition} className="text-5xl text-white font-bold">
          <i className="fa-solid fa-hotel"></i> Super Hostel BD
        </motion.h3>

        <motion.button ref={refButton} animate={inView ? visible : hidden} initial={hidden} transition={transition} className="text-xl bg-orange-500 text-white px-6 py-2 rounded-full mt-4">
          Book Now <i className="fa-solid fa-person-walking-luggage"></i>
        </motion.button>
        <motion.div className="-mt-3" ref={tikicon} animate={isTikView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} initial={{ opacity: 0, y: 50 }} transition={transition}>
          <Lottie lottieRef={lottieRef} className="w-32" animationData={dataJson} loop={false} />
        </motion.div>
      </div>
      <div className="bg-black absolute left-0 right-0 bottom-0 top-0 opacity-50 -z-10"></div>
    </div>
  );
}
