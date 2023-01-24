// import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { Motion as motion } from "@motionone/solid";
import Github from "./icons/Github";
function Herosection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  const lower = {
    y: [-20, 0],
    opacity: [0, 1],
  };
  const upper = {
    y: [20, 0],
    opacity: [0, 1],
  };
  const icon = {
    scale: [0.5, 1],
    opacity: [0, 1],
  };
  return (
    <main class="border-b-[#ffffff55] border-b grid place-items-center  font-montserrat w-full text-center   h-full mt-5 py-7   text-white">
      <article>
        <motion.h1
          animate={lower}
          transition={{
            duration: 0.2,
            easing: "ease",
            delay: 0.1,
          }}
          class=" violetGrad redBack text-5xl  font-bold tracking-widest "
        >
          Gaurav Bhandari
        </motion.h1>
        <motion.h2
          animate={lower}
          transition={{
            duration: 0.2,
            easing: "ease",
            delay: 0.3,
          }}
          class="text-2xl py-4 "
        >
          Full Stack Developer
        </motion.h2>
        <motion.p
          animate={upper}
          transition={{
            duration: 0.2,
            easing: "ease",
            delay: 0.5,
          }}
          class="max-w-4xl text-base py-4 leading-7 tracking-wide sm:hidden"
        >
          I am a Next.js focused full-stack web developer with experience in
          building high-performance web applications, website design and
          development. My goal is to deliver high-quality, visually stunning and
          performant projects that exceed expectations. Browse my work and feel
          free to contact me for any questions or project collaboration
          opportunities.
        </motion.p>
        <motion.p
          animate={upper}
          transition={{
            duration: 0.2,
            easing: "ease",
            delay: 0.5,
          }}
          class="hidden sm:block max-w-4xl mx-auto text-base py-4 leading-8 tracking-wide"
        >
          I'm a full stack developer with almost 2 years of experience in the
          field. I specialize in building responsive, user-friendly websites and
          web applications. My expertise lies in frameworks such as
          <span class="violetGrad mx-1 px-1 font-medium tracking-widest">
            Next.js
          </span>
          React,
          <span class="violetGrad mx-1 px-1 font-medium tracking-widest">
            Express.js
          </span>
          ,
          <span class="violetGrad mx-1 px-1 font-medium tracking-widest">
            MongoDB
          </span>
          and SQL databases like MySQL. I love to design visually stunning
          websites and web application using
          <span class="violetGrad mx-1 px-1 font-medium tracking-widest">
            Tailwind
          </span>
          ,
          <span class="violetGrad mx-1 px-1 font-medium tracking-widest">
            Framer Motion
          </span>
          and others. I'm passionate about creating visually stunning and
          intuitive user interfaces, and I'm always striving to learn and stay
          up-to-date with the latest web development technologies and trends.
        </motion.p>
        <motion.div class="text-4xl flex justify-center gap-x-4 mb-5 ">
          <Github />
          {/* <AiFillGithub class="hover:brightness-75 cursor-pointer" /> */}
          {/* <AiFillInstagram class="hover:brightness-75 cursor-pointer" /> */}
          {/* <AiFillLinkedin class="hover:brightness-75 cursor-pointer" /> */}
        </motion.div>
        <motion.div
          animate={icon}
          transition={{
            duration: 0.2,
            easing: "ease",
            delay: 0.7,
          }}
          class="violetGrad w-48 h-48 rounded-full mx-auto grid place-items-center "
        >
          Image Coming soon
        </motion.div>
      </article>
    </main>
  );
}

export default Herosection;
