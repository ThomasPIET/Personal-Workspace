import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const ToolCard = (props) => {
  const cardRef = useRef(null);
  const [constraints, setConstraints] = useState({
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  });

  useEffect(() => {
    if (cardRef.current) {
      const width = cardRef.current.offsetWidth;
      const height = cardRef.current.offsetHeight;

      setConstraints({
        left: -window.innerWidth / 2 + width / 2,
        right: window.innerWidth / 2 - width / 2,
        top: -window.innerHeight / 2 + height / 2,
        bottom: window.innerHeight / 2 - height / 2,
      });
    }
  }, []);

  return (
    <section>
      <motion.div
        ref={cardRef}
        drag
        dragConstraints={constraints}
        whileTap={{ cursor: "grabbing" }}
      >
        <div class=" max-w-sm sh bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div class="p-5">
            <a>
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order. Here are the biggest
              enterprise technology acquisitions of 2021 so far, in reverse
              chronological order. Here are the biggest enterprise technology
              acquisitions of 2021 so far, in reverse chronological order. Here
              are the biggest enterprise technology acquisitions of 2021 so far,
              in reverse chronological order. Here are the biggest enterprise
              technology acquisitions of 2021 so far, in reverse chronological
              order. Here are the biggest enterprise technology acquisitions of
              2021 so far, in reverse chronological order. Here are the biggest
              enterprise technology acquisitions of 2021 so far, in reverse
              chronological order.
            </p>

            {props.children}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ToolCard;
