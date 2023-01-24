import { Motion as motion } from "@motionone/solid";
import { animate, scroll } from "motion";
import { onMount, JSXElement } from "solid-js";
import Heading from "./Heading";
import React from "./icons/React";
function Skills() {
  onMount(() => {
    const rotatingIcon = document.getElementById("rotatingReactIcon");
    const container = document.getElementById("reactIconContainer");
    if (!rotatingIcon || !container) return;
    scroll(
      animate(rotatingIcon, {
        rotate: [0, 720],
        scale: [1, 1.01, 1],
      })
    );
  });

  return (
    <section
      id="about"
      class=" text-white font-montserrat my-7 border-b-[#ffffff51] border-b py-10 px-5"
    >
      <Heading text="Skills" icon={<React />} />
      <section class=" grid lg:grid-cols-2 px-4 gap-x-4">
        <motion.ul class="skills space-y-4 sm:space-y-2 leading-6 sm:leading-8 py-4 ">
          <MotionList>
            <p>
              Proficient in
              <span class="violetGrad mx-1 px-1 font-medium tracking-wider">
                Next.js
              </span>
              ,
              <span class="violetGrad mx-1 px-1 font-medium tracking-wider">
                React
              </span>
              , Javascript/Typescript and its ecosystem
            </p>
          </MotionList>
          <MotionList>
            <p>
              Experience in building efficient user interface using popular
              front-end libraries and frameworks such as
              <span class="violetGrad mx-1 px-1 font-medium tracking-wider">
                Tailwind CSS
              </span>
              ,
              <span class="violetGrad mx-1 px-1 font-medium tracking-wider">
                Framer Motion
              </span>
              , etc
            </p>
          </MotionList>
          <MotionList>
            <p>
              Familiarity with Git, npm, yarn Understanding of browser
              capabilities and
              <span class="violetGrad mx-1 px-1 font-medium tracking-wider">
                cross browser compatibility
              </span>
              .
            </p>
          </MotionList>
          <MotionList>
            <p>
              Expertise in creating efficient and secure APIs using{" "}
              <span class="violetGrad mx-1 px-1 font-medium tracking-wider">
                Node.js{" "}
              </span>
              and{" "}
              <span class="violetGrad mx-1 px-1 font-medium tracking-wider">
                Express.js
              </span>
            </p>
          </MotionList>
          <MotionList>
            <p>
              Proficient in working with
              <span class="violetGrad mx-1 px-1 font-medium tracking-wider">
                MongoDB
              </span>
              and SQL databases like
              <span class="violetGrad mx-1 px-1 font-medium tracking-wider">
                MySQL
              </span>
            </p>
          </MotionList>
          <MotionList>
            <p>
              In-depth knowledge of web development best practices, such as
              <span class="violetGrad mx-1 px-1 font-medium tracking-wider">
                web accessibility
              </span>
              and
              <span class="violetGrad mx-1 px-1 font-medium tracking-wider">
                SEO
              </span>
              .
            </p>
          </MotionList>
          <MotionList>
            <p>
              Strong
              <span class="violetGrad mx-1 px-1 font-medium tracking-wider">
                debugging skills
              </span>
              and ability to troubleshoot and fix issues in a timely manner.
            </p>
          </MotionList>
          <MotionList>
            <p>
              Focus on performance optimization to make sure the application
              loads
              <span class="violetGrad mx-1 px-1 font-medium tracking-wider">
                blazingly fast
              </span>
              and reduce the load on server.
            </p>
          </MotionList>
        </motion.ul>
        <div id="reactIconContainer" class=" hidden lg:grid place-items-center">
          <motion.div id="rotatingReactIcon" class="w-96 h-96 text-pWhite">
            <React />
          </motion.div>
        </div>
      </section>
    </section>
  );
}

export default Skills;

const MotionList = ({ children }: { children: JSXElement }) => {
  return (
    <motion.li
      initial={{
        x: -100,
        opacity: 0,
      }}
      inView={{
        x: 0,
        opacity: 1,
        transition: {
          duration: 0.4,
        },
      }}
      inViewOptions={{
        amount: 0.5,
      }}
      onViewEnter={() => {
        stop();
      }}
    >
      {children}
    </motion.li>
  );
};
