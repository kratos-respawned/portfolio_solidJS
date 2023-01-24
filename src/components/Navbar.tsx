import { A } from "solid-start";
import { Motion } from "@motionone/solid";
import { spring } from "motion";
function Navbar() {
  return (
    <header>
      <nav class="flex justify-between items-center  py-5 font-montserrat">
        <Motion.div
          animate={{ x: [-100, 5, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5, easing: "ease" }}
        >
          <A
            href="/"
            class="text-3xl  text-slate-200 tracking-widest font-bold "
          >
            {`</>`}
          </A>
        </Motion.div>

        <Motion.ul
          animate={{ x: [100, -5, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5, easing: "ease" }}
          class="navlink flex justify-between gap-x-4  text-base text-pWhite "
        >
          <li>
            <A href="#about">About</A>
          </li>
          <li>
            <a href="#work">Work</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </Motion.ul>
      </nav>
    </header>
  );
}

export default Navbar;
