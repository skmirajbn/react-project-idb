import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// eslint-disable-next-line react/prop-types
export default function MotionWrapDown({ children }) {
  const [headingRef, inHeadingView] = useInView();
  const transition = { type: "spring", stiffness: 200, damping: 15 };
  const initial = { y: -50, opacity: 0 };
  const animate = { y: 0, opacity: 1 };
  console.log("motion down");
  return (
    <motion.div initial={initial} animate={inHeadingView ? animate : initial} transition={transition} ref={headingRef}>
      {children}
    </motion.div>
  );
}
