import { Head } from "$fresh/runtime.ts";
import { PageProps } from "$fresh/server.ts";
import IconBrandLinkedin from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/brand-linkedin.tsx";
import IconMail from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/mail.tsx";
import Card from "@/components/Card.tsx";
import Tag from "@/components/Tag.tsx";
import Link from "@/components/Link.tsx";
import Metadata from "@/components/Metadata.tsx";
import Title from "@/components/Typography/Title.tsx";
import Paragraph from "@/components/Typography/Paragraph.tsx";
import List from "@/components/List.tsx";
import Text from "@/components/Typography/Text.tsx";
import Subtitle from "@/components/Typography/Subtitle.tsx";

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

const Home = (props: PageProps) => {
  const { url } = props;

  return (
    <>
      <Head>
        <Metadata
          canonical={url.origin}
          description="A software engineer based in Ho Chi Minh City"
          og={{
            title: "Việt Huỳnh - Portfolio",
            description: "A software engineer based in Ho Chi Minh City",
            type: "profile",
            profile: {
              first_name: "Việt",
              last_name: "Huỳnh",
              gender: "male",
            },
            url: url.origin,
            image: `${url.origin}/profile-picture.webp`,
          }}
          title="Việt Huỳnh - Portfolio"
        />
      </Head>
      <div class="px-4 py-8 max-w-4xl mx-auto flex flex-wrap justify-center">
        <Title>About Me</Title>
        <section class="mb-8 w-full flex flex-col md:flex-row justify-center items-center md:gap-4">
          <div class="max-w-[20rem]">
            <picture>
              <source
                media="(max-width: 499px)"
                srcset="/profile-picture-400.avif"
                type="image/avif"
              />
              <source
                media="(min-width: 500px)"
                srcset="/profile-picture-800.avif"
                type="image/avif"
              />
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
            <Paragraph>
              Hi. My name is Việt Huỳnh (Viet Huynh). I am a software engineer
              based in Ho Chi Minh City, Vietnam.
            </Paragraph>
            <Paragraph>
              I have been working on web applications since 2015. Today I mainly
              use JavaScript/TypeScript, React and Node.js with a variety of
              other tools, libraries and frameworks.
            </Paragraph>
            <Paragraph>
              Besides software development, I also have interests in other techy
              stuff such as video encoding, audio equipments and motorbike
              retrofitting. And I do play video games, too.
            </Paragraph>
          </div>
        </section>

        <Title>Skills</Title>
        <section class="mb-8 w-full flex flex-wrap md:flex-row justify-center gap-2">
          {skills.map((skill) => <Tag key={skill}>{skill}</Tag>)}
        </section>

        <Title>Projects</Title>
        <section class="mb-8 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map(({ name, description, stack, role, url }) => (
            <Link
              key={name}
              class="hover:!no-underline"
              title={name}
              href={url}
              target="_blank"
            >
              <Card>
                <Subtitle>{name}</Subtitle>
                <Paragraph>{description}</Paragraph>
                <div class="flex flex-wrap gap-2">
                  {stack.map((item) => <Tag key={item}>{item}</Tag>)}
                </div>
                <div class="mt-4 text-right text-sm">{role}</div>
              </Card>
            </Link>
          ))}
        </section>

        <Title>Contact</Title>
        <section class="w-full flex flex-col md:flex-row justify-center">
          <List class="list-none">
            <List.Item>
              <Link
                class="flex gap-2"
                title="Email"
                href="mailto:viet.huynhlamquoc@outlook.com"
              >
                <IconMail /> viet.huynhlamquoc@outlook.com
              </Link>
            </List.Item>
            <List.Item>
              <Link
                class="flex gap-2"
                title="LinkedIn"
                href="https://www.linkedin.com/in/viet-huynh"
                target="_blank"
              >
                <IconBrandLinkedin /> linkedin.com/in/viet-huynh
              </Link>
            </List.Item>
            <List.Item>
              <Link
                class="flex gap-2"
                title="In-person"
                href="https://maps.app.goo.gl/oZtQosTgCoWMhuuH7"
                target="_blank"
              >
                <Text>🧑‍🤝‍🧑</Text>
                <Text>Ho Chi Minh City, Vietnam</Text>
              </Link>
            </List.Item>
          </List>
        </section>
      </div>
    </>
  );
};

export default Home;
