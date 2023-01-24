import { A } from "solid-start";
import { Motion } from "@motionone/solid";
function Navbar() {
  return (
    <header>
      <nav class="flex justify-between items-center  py-5 font-montserrat">
        <Motion.div
          initial={{ opacity: 0 }}
          animate={{ x: [-100, 5, 0], opacity: [0, 1] }}
          transition={{ duration: 1, easing: "ease" }}
        >
          <A
            href="/"
            class="text-3xl  text-slate-200 tracking-widest font-bold "
          >
            {`</>`}
          </A>
        </Motion.div>

        <Motion.ul
          initial={{ opacity: 0 }}
          animate={{ x: [100, -5, 0], opacity: [0, 1] }}
          transition={{ duration: 1, easing: "ease" }}
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
