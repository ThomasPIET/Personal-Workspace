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
        dragMomentum={false}
        whileTap={{ cursor: "grabbing" }}
      >
        <div className=" max-w-sm sh bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="p-5">{props.children}</div>
        </div>
      </motion.div>
    </section>
  );
};

export default ToolCard;
