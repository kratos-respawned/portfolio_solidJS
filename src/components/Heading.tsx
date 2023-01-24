import { Motion as motion } from "@motionone/solid";
import { onMount } from "solid-js";
import { animate, scroll } from "motion";
import React from "./icons/React";
function Heading({ text }: { text: string }) {
  onMount(() => {
    scroll(animate("#icon", { opacity: [0, 1], scale: [2, 1] }));
  });
  return (
    <h2 class="text-pWhite  relative text-6xl py-0 mb-7 text-center font-semibold tracking-wider isolate">
      {text}
      <motion.div
        style={{
          translate: "-50% -50%",
        }}
        id="icon"
        class=" w-44 h-44 text-[#ffffff33] absolute top-1/2 left-1/2  -z-10 "
      >
        <React />
      </motion.div>
    </h2>
  );
}

export default Heading;
