import { Motion as motion } from "@motionone/solid";
import { A } from "solid-start";
import Heading from "./Heading";
import Code from "./icons/Code";
import Github from "./icons/Github";
import Rocket from "./icons/Rocket";
function Projects() {
  return (
    <section
      id="work"
      class="text-pWhite font-montserrat my-7 border-b-[#ffffff51] border-b py-10 sm:px-5"
    >
      <Heading text="Projects" icon={<Code />} />
      <ProjectCard
        title="Hackoverflow Society"
        secondaryText="Website"
        accentColor="purple"
        githubLink="https://github.com/kratos-respawned/hsReborn"
        deploymentLink="https://hs-reborn-kratos1710.vercel.app/"
        imgLink="/hs.webp"
      />
      <ProjectCard
        title="RedWalls"
        secondaryText="Wallpaper App"
        accentColor="red"
        githubLink="https://github.com/kratos-respawned/redWalls-2_0"
        deploymentLink="http://13.233.85.70/"
        imgLink="/redWallsHome.webp"
      />

      <ProjectCard
        title="Athena"
        secondaryText="Telegram Bot"
        accentColor="blue"
        githubLink="https://github.com/kratos-respawned/Telegram-Bot"
        imgLink="/telegramBot.webp"
      />
      <ProjectCard
        title="Arcane"
        secondaryText="Chat room"
        accentColor="arc"
        githubLink="https://github.com/kratos-respawned/messenger"
        imgLink="/arcane.webp"
      />
      <div class="text-right text-sm sm:text-xl font-medium">
        and many
        <A
          href="https://github.com/kratos-respawned"
          target="_blank"
          rel="noopener"
          class="text-base sm:text-2xl violetGrad mx-1 px-1 font-semibold"
        >
          more...
        </A>
      </div>
    </section>
  );
}

export default Projects;

const ProjectCard = ({
  title,
  imgLink,
  secondaryText,
  githubLink,
  deploymentLink,
  accentColor,
}: {
  title?: string;
  imgLink: string;
  secondaryText?: string;
  githubLink?: string;
  deploymentLink?: string;
  accentColor?: string;
}) => {
  return (
    <motion.section class={`mt-16 sm:mt-24  ${accentColor}`}>
      <h3 class="my-7 text-2xl sm:text-4xl font-semibold tracking-wider ">
        {title}
        <span
          class={` projectText text-xl sm:text-3xl  px-1 mx-1 tracking-wider`}
        >
          - {secondaryText}
        </span>
      </h3>
      <div class="relative  w-full group aspect-video overflow-clip isolate">
        <img
          src={imgLink}
          width={1920}
          height={1080}
          class={`object-cover aspect-video  projectBorder`}
          alt="Redwalls"
        />
        {(githubLink || deploymentLink) && (
          <div class="flex items-center justify-center flex-col gap-10 absolute top-0 left-0 w-full h-full opacity-0 pointer-events-none  group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity  z-10 bg-black bg-opacity-60 duration-700">
            {githubLink && (
              <A
                href={githubLink}
                class={`flex items-center justify-between  text-sm sm:text-3xl  gap-x-2 sm:gap-x-4 transition-colors projectHover`}
              >
                <span class="text-sm sm:text-5xl text-pWhite  ">
                  <Github />
                </span>
                Github
              </A>
            )}
            {deploymentLink && (
              <A
                href={deploymentLink}
                class="flex  items-center justify-between   text-sm sm:text-3xl  gap-x-2 sm:gap-x-4 transition-colors projectHover"
              >
                <span class="text-sm sm:text-5xl text-pWhite  ">
                  <Rocket />
                </span>
                Deployment
              </A>
            )}
          </div>
        )}
      </div>
      <button class="relative rounded-lg mx-auto block px-2 sm:px-4  py-1 overflow-clip  sm:py-2 text-sm  sm:text-xl  font-medium text-white projectButton my-4">
        Know more
        <span class="text-white overflow-clip absolute py-1 sm:py-2 ">
          Know more
        </span>
      </button>
    </motion.section>
  );
};
