import { Head } from "$fresh/runtime.ts";
import IconBrandLinkedin from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/brand-linkedin.tsx";
import IconMail from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/mail.tsx";
import { BASE_URL } from "@/utils/constants.ts";
import Card from "@/components/Card.tsx";
import Tag from "@/components/Tag.tsx";
import Link from "@/components/Link.tsx";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "Tailwind",
  "Material UI",
  "Ant Design",
  "Jest",
  "React Testing Library",
  "Cypress",
  "Playwright",
  "Rest API",
  "GraphQL",
  "gRPC",
  "Windows",
  "Linux",
  "Visual Studio Code",
  "GitHub Actions",
  "Git",
];

const projects = [
  {
    name: "huynhviet.com",
    description: "This personal website",
    stack: ["TypeScript", "Preact", "Tailwind", "Fresh", "Deno"],
    role: "Maintainer",
    url: "https://github.com/hlqviet/huynhviet.com",
  },
  {
    name: "Cloudflare Gateway Pihole Scripts",
    description:
      "Utilise Cloudflare Zero Trust Gateway as a DNS filtering solution",
    stack: ["JavaScript", "Node.js"],
    role: "Contributor",
    url: "https://github.com/mrrfv/cloudflare-gateway-pihole-scripts",
  },
  {
    name: "Next Portfolio",
    description: "The old portfolio",
    stack: ["TypeScript", "React", "Next.js", "Node.js"],
    role: "Maintainer",
    url: "https://github.com/hlqviet/next-portfolio",
  },
  {
    name: "VTV Giai Tri Grabber",
    description: "Get video URLs from the VTV Giai tri streaming service",
    stack: ["JavaScript", "React", "Node.js"],
    role: "Maintainer",
    url: "https://github.com/hlqviet/vtv-giai-tri-grabber",
  },
];

const Home = () => {
  return (
    <>
      <Head>
        <title>Việt Huỳnh - Portfolio</title>
        <meta
          name="description"
          content="A software engineer based in Ho Chi Minh City."
        />
        <meta property="og:title" content="Việt Huỳnh - Portfolio" />
        <meta
          property="og:description"
          content="A software engineer based in Ho Chi Minh City."
        />
        <meta property="og:type" content="profile" />
        <meta property="og:profile:first_name" content="Việt" />
        <meta property="og:profile:last_name" content="Huỳnh" />
        <meta property="og:profile:gender" content="male" />
        <meta
          property="og:url"
          content={BASE_URL}
        />
        <meta
          property="og:image"
          content={`${BASE_URL}/profile-picture.webp`}
        />
      </Head>
      <div class="px-4 py-8 max-w-4xl mx-auto flex flex-wrap justify-center prose">
        <h2>About Me</h2>
        <section class="w-full flex flex-col md:flex-row justify-center items-center md:gap-4">
          <div class="max-w-[20rem]">
            <picture>
              <source
                srcset="/profile-picture-400.avif"
                type="image/avif"
              />
              <source
                media="(min-width: 800px)"
                srcset="/profile-picture-800.avif"
                type="image/avif"
              />
              <source srcset="/profile-picture.webp 800w" type="image/webp" />
              <img
                class="rounded-full"
                alt="Việt Huỳnh's profile picture"
                src="/profile-picture.webp"
                width="800"
                height="800"
              />
            </picture>
          </div>
          <div>
            <p>
              Hi. My name is Việt Huỳnh (Viet Huynh). I am a software engineer
              based in Ho Chi Minh City, Vietnam.
            </p>
            <p>
              I have been working on web applications since 2015. Today I mainly
              use JavaScript/TypeScript, React and Node.js with a variety of
              other tools, libraries and frameworks.
            </p>
            <p>
              Besides software development, I also have interests in other techy
              stuff such as video encoding, audio equipments and motorbike
              retrofitting. And I do play video games, too.
            </p>
          </div>
        </section>

        <h2>Skills</h2>
        <section class="w-full flex flex-wrap md:flex-row justify-center gap-2">
          {skills.map((skill) => <Tag key={skill}>{skill}</Tag>)}
        </section>

        <h2>Projects</h2>
        <section class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map(({ name, description, stack, role, url }) => (
            <Link
              key={name}
              class="!no-underline aspect-square"
              title={name}
              href={url}
              target="_blank"
            >
              <Card>
                <h3 class="!mt-0">{name}</h3>
                <p>{description}</p>
                <div class="flex flex-wrap gap-2">
                  {stack.map((item) => <Tag key={item}>{item}</Tag>)}
                </div>
                <div class="mt-4 text-right text-sm">{role}</div>
              </Card>
            </Link>
          ))}
        </section>

        <h2>Contact</h2>
        <section class="w-full flex flex-col md:flex-row justify-center">
          <ul class="!m-0">
            <li class="!p-0">
              <Link
                class="flex gap-2 !no-underline hover:!underline"
                title="Email"
                href="mailto:viet.huynhlamquoc@outlook.com"
              >
                <IconMail /> viet.huynhlamquoc@outlook.com
              </Link>
            </li>
            <li class="!p-0">
              <Link
                class="flex gap-2 !no-underline hover:!underline"
                title="LinkedIn"
                href="https://www.linkedin.com/in/viet-huynh"
                target="_blank"
              >
                <IconBrandLinkedin /> linkedin.com/in/viet-huynh
              </Link>
            </li>
            <li class="!p-0">
              <Link
                class="flex gap-2 !no-underline hover:!underline"
                title="In-person"
                href="https://maps.app.goo.gl/oZtQosTgCoWMhuuH7"
                target="_blank"
              >
                <span>🧑‍🤝‍🧑</span>
                <span>Ho Chi Minh City, Vietnam</span>
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
};

export default Home;
