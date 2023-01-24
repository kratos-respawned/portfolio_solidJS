import { Motion as motion } from "@motionone/solid";
import { JSXElement } from "solid-js";
import Heading from "./Heading";
import Chat from "./icons/Chat";
import Github from "./icons/Github";
import LinkedIn from "./icons/LinkedIn";
import Telegram from "./icons/Telegram";
function Contact() {
  return (
    <section
      id="contact"
      class="text-pWhite font-montserrat mt-7 border-b-[#ffffff51] border-b py-10 px-5"
    >
      <Heading text="Contact" icon={<Chat />} />
      <article class="mt-16 text-lg sm:text-2xl text-center my-7 space-y-4">
        <p>
          I have got just what you{" "}
          <span class="violetGrad px-1 font-medium">need.</span>
        </p>
        <p>
          Let's work <span class="violetGrad px-1 font-medium">together</span>{" "}
          to create something worth sharing.
        </p>
      </article>
      <section class="flex flex-wrap gap-y-4 items-center justify-center gap-x-4 my-12">
        <SocialButton icon={<Github />} text="Github" />
        <SocialButton icon={<LinkedIn />} text="LinkedIn" />
        <SocialButton icon={<Telegram />} text="Telegram" />
      </section>
      <form class="flex flex-col w-full max-w-lg mx-auto gap-y-2 sm:gap-y-4">
        <section class="grid grid-cols-2 gap-2 sm:gap-4">
          <input
            type="text"
            placeholder="Name"
            name="name"
            class="  py-3 px-3 focus:outline-none focus:border-0 text-white rounded text-xs sm:text-lg bg-[#2c1c4b] "
          />
          <input
            type="text"
            placeholder="Email"
            name="email"
            class="  py-3 px-3 focus:outline-none focus:border-0 text-white rounded text-xs sm:text-lg bg-[#2c1c4b]"
          />
        </section>
        <input
          type="text"
          placeholder="Subject"
          name="subject"
          class=" py-3 px-3 focus:outline-none focus:border-0 text-white rounded text-xs sm:text-lg bg-[#2c1c4b]"
        />
        <textarea
          name="Message"
          placeholder="Message"
          class=" h-36 py-2 px-3 focus:outline-none focus:border-0 text-white rounded text-xs sm:text-lg bg-[#2c1c4b]"
        ></textarea>
        <motion.button
          press={{
            scale: 0.9,
            backgroundColor: "#7f00ff",
          }}
          hover={{ scale: 1.1 }}
          onClick={(e) => {
            e.preventDefault();
          }}
          class="bg-[#7f00ff] hover:bg-[#9022ff] w-fit px-3 py-2 rounded-lg mx-auto  text-base sm:text-lg"
        >
          Submit
        </motion.button>
      </form>
    </section>
  );
}

export default Contact;
const SocialButton = ({
  icon,
  text,
  link,
}: {
  icon: JSXElement;
  text: string;
  link?: string;
}) => {
  const animate = {
    scale: 1.1,
    transition: {
      duration: 0.2,
    },
  };
  return (
    <motion.button
      press={{
        scale: 0.9,
      }}
      hover={animate}
      class="text-[#8f20ff]  border-[#8f20ff] hover:border-[#7f00ff] hover:text-pWhite hover:bg-[#7f00ff] transition-colors duration-300 border-2 rounded-lg p-1 px-2 flex gap-x-2 items-center justify-between tracking-wider"
    >
      <span class="text-4xl">{icon}</span>
      {text}
    </motion.button>
  );
};
