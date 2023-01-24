import { A } from "solid-start";
import Github from "./icons/Github";

// import { FiGithub } from "react-icons/fi";
function Footer() {
  return (
    <footer class="font-montserrat tracking-wider text-pWhite text-center mt-2 mb-2 text-sm">
      <div>
        Designed and Developed with <span>❤️</span>
      </div>
      <div>
        by
        <span class="violetGrad mx-1 px-1  font-medium">Gaurav</span>
      </div>
      <A
        href="https://github.com/kratos-respawned/solid_portfolio"
        target="_blank"
        rel="noopener"
        class="my-1 text-lg  block w-min mx-auto  animate-pulse "
      >
        <Github />
      </A>
    </footer>
  );
}

export default Footer;
