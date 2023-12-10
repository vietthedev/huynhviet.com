import Container from "@/components/Container.tsx";
import { Head } from "$fresh/runtime.ts";
import { PageProps } from "$fresh/server.ts";
import Metadata from "@/components/Metadata.tsx";
import Link from "@/components/Link.tsx";

const About = (props: PageProps) => {
  const { url } = props;

  return (
    <>
      <Head>
        <Metadata
          canonical={url.origin}
          description="A software engineer based in Ho Chi Minh City"
          og={{
            title: "Việt Huỳnh - About",
            description: "A software engineer based in Ho Chi Minh City",
            type: "profile",
            profile: {
              first_name: "Việt",
              last_name: "Huỳnh",
              gender: "male",
            },
            url: url.origin,
            image: {
              url: `${url.origin}/profile-picture.webp`,
              width: "800",
              height: "800",
              type: "image/webp",
            },
          }}
          title="Việt Huỳnh - About"
        />
      </Head>
      <Container>
        <article class="prose dark:prose-invert max-w-full">
          <h1>More about me</h1>
          <p>
            Before I got into software development, I was excited about many
            things around a computer in my high school, from hardware to
            software. Remember the days when forum was still popular? That was
            when I liked fiddling around with XAMPP and vBulletin and similar
            forum software. I even wrote{" "}
            <Link href="https://nsis.sourceforge.io/Main_Page" target="_blank">
              NSIS
            </Link>{" "}
            scripts to create alternative update installers, which were less in
            size compared to the one from the publisher thanks to delta patching
            for{" "}
            <Link
              href="https://en.wikipedia.org/wiki/Audition_Online"
              target="_blank"
            >
              Audition Online
            </Link>, my favourite game at the time.
          </p>
          <p>
            I decided to pursue Software Engineering in university afterward. I
            thought I would go with PHP but I ended up going the Microsoft way:
            C# and .NET Framework because those were what I was most familiar
            with after graduation.
          </p>
          <p>
            So I began my career at{" "}
            <Link href="https://www.nashtechglobal.com/" target="_blank">
              NashTech
            </Link>{" "}
            (formerly Harvey Nash) in 2015. I was a full-stack engineer and
            worked mostly with ASP.NET MVC, Entity Framework and jQuery. I was
            still a newbie at the time so I learned many things such as software
            development process, software development principles and practices.
          </p>
          <p>
            After working for a while, I became interested in the JavaScript
            ecosystem. I took the Software Engineer role at{" "}
            <Link href="https://www.knorex.com/" target="_blank">KNOREX</Link>
            {" "}
            in 2018 and started with AngularJS and Node.js. That was also the
            first time I worked with a template engine, Handlebars.
          </p>
          <p>
            During the time I was working at the company, a super popular
            frontend library came to my attention. Yes! You guessed it right. It
            was React. I then made the decision to leave KNOREX and joined{" "}
            <Link href="https://www.manabie.com/" target="_blank">
              Manabie
            </Link>{" "}
            in 2021. Here is where I began to work as a front-end engineer. The
            technical stack at the company was almost new to me, from
            TypeScript, React, GraphQL, gRPC to unit testing. I could learn a
            lot and even had the opportunity to get involved in CI/CD with
            GitHub Actions and test automation with Cypress and Playwright. The
            opportunity to learn was not the only good thing I got there, I also
            had cool teammates who were always willing to support me.
          </p>
          <p>
            It went well until something happened on my side and I left the
            company and came to{" "}
            <Link href="https://www.ninjavan.co/" target="_blank">
              Ninja Van
            </Link>{" "}
            in 2022. There I had the chance to work with Next.js, a React
            framework I had not worked with before. I was the first to get the
            migration to TypeScript started and inspired team members to follow.
            Moreover, I contributed a lot of complex unit tests to the team's
            codebase, which could serve as examples for others.
          </p>
          <p>
            Now let's leave those programming things aside. I am not such a
            nerdy techie who is all into technologies. I am an ordinary person
            and have hobbies just like everyone else. To entertain myself, I
            usually listen to music, watch movies and hang out with friends. I
            would go around the city to explore coffee shops and cocktail bars
            when I need to calm my mind. I may take photos during the time since
            I have an interest in phone photography. I own a Nokia 808 PureView,
            a Pixel 4 XL and an iPhone 14 Pro Max currently but I mostly use the
            Pixel because it has a great modded camera app that allows me to
            tune the settings. You can see my photos on{" "}
            <Link href="https://flic.kr/ps/ApMou" target="_blank">Flickr</Link>
            {" "}
            or{" "}
            <Link href="https://instagr.am/hlqviet/" target="_blank">
              Instagram
            </Link>. I like singing too so you may see me singing at a coffee
            shop if I am in a good mood and, well, have the desire. So that is
            pretty much about me.
          </p>
          <p>
            Here are my presences on social networks if you want to connect with
            me:
          </p>
          <ul>
            <li>
              Facebook:{" "}
              <Link
                href="https://fb.com/hlqviet/"
                target="_blank"
                title="Facebook"
              >
                fb.com/hlqviet
              </Link>
            </li>
            <li>
              Instagram:{" "}
              <Link
                href="https://instagr.am/hlqviet/"
                target="_blank"
                title="Instagram"
              >
                instagr.am/hlqviet
              </Link>
            </li>
            <li>
              GameVN:{" "}
              <Link
                href="http://gvn.co/members/slaxh.420842/"
                target="_blank"
                title="GameVN"
              >
                gvn.co/members/slaxh.420842
              </Link>
            </li>
            <li>
              VOZ:{" "}
              <Link
                href="https://voz.vn/u/salad.47367/"
                target="_blank"
                title="VOZ"
              >
                voz.vn/u/salad.47367
              </Link>
            </li>
          </ul>
        </article>
      </Container>
    </>
  );
};

export default About;
