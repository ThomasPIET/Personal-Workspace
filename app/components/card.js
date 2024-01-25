import { motion } from "framer-motion";

const ToolCard = (props) => {
  return (
    <motion.div drag whileTap={{ cursor: "grabbing" }}>
      <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div class="p-5">
          <a>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order. Here are the biggest enterprise
            technology acquisitions of 2021 so far, in reverse chronological
            order. Here are the biggest enterprise technology acquisitions of
            2021 so far, in reverse chronological order. Here are the biggest
            enterprise technology acquisitions of 2021 so far, in reverse
            chronological order. Here are the biggest enterprise technology
            acquisitions of 2021 so far, in reverse chronological order. Here
            are the biggest enterprise technology acquisitions of 2021 so far,
            in reverse chronological order. Here are the biggest enterprise
            technology acquisitions of 2021 so far, in reverse chronological
            order.
          </p>

          {props.children}
        </div>
      </div>
    </motion.div>
  );
};

export default ToolCard;