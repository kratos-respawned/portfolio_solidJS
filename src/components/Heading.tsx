import { Motion as motion } from "@motionone/solid";
import { JSXElement, onMount } from "solid-js";
import { animate, scroll } from "motion";
import React from "./icons/React";
function Heading({ text, icon }: { text: string; icon?: JSXElement }) {
  onMount(() => {
    const icon = document.getElementById(text);
    if (!icon) return;
    scroll(animate(icon, { opacity: [1, 0], scale: [1, 2] }), {
      target: icon,
      offset: ["end start", "start end"],
    });
  });
  return (
    <h2 class="text-pWhite  relative text-6xl py-0 mb-7 text-center font-semibold tracking-wider isolate">
      {text}
      <motion.div
        style={{
          translate: "-50% -50%",
        }}
        id={text}
        class=" w-44 h-44 text-[#ffffff33] absolute top-1/2 left-1/2  -z-10 "
      >
        {icon || <React />}
      </motion.div>
    </h2>
  );
}

export default Heading;
