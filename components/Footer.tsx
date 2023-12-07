import IconBrandGithub from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/brand-github.tsx";
import IconBrandLinkedin from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/brand-linkedin.tsx";
import { VNode } from "preact";
import Link from "@/components/Link.tsx";
import Title from "@/components/Typography/Title.tsx";
import List from "@/components/List.tsx";
import Text from "@/components/Typography/Text.tsx";
import { NAV_ITEMS } from "@/lib/constants.ts";

const menus: {
  title: string;
  children: { name: string; href: string; icon?: VNode; title?: string }[];
}[] = [
  {
    title: "Navigation",
    children: NAV_ITEMS,
  },
  {
    title: "Links",
    children: [
      {
        name: "hlqviet",
        href: "https://github.com/hlqviet",
        icon: <IconBrandGithub />,
        title: "GitHub",
      },
      {
        name: "viet-huynh",
        href: "https://www.linkedin.com/in/viet-huynh",
        icon: <IconBrandLinkedin />,
        title: "LinkedIn",
      },
    ],
  },
];

const Footer = () => {
  return (
    <footer class="border-t border-gray-300 dark:border-gray-600 px-8 md:px-32 py-8">
      <div class="flex flex-col md:flex-row gap-8 md:gap-60">
        {menus.map((item) => (
          <div key={item.title}>
            <Title>{item.title}</Title>
            <List class="list-none">
              {item.children.map((child) => (
                <List.Item class="first:!mt-0 !ml-0" key={child.name}>
                  <Link
                    href={child.href}
                    title={child.title}
                    target="_blank"
                  >
                    {child.icon
                      ? (
                        <Text class="flex items-center gap-2">
                          {child.icon}
                          {child.name}
                        </Text>
                      )
                      : child.name}
                  </Link>
                </List.Item>
              ))}
            </List>
          </div>
        ))}
      </div>
      <div class="mt-4 flex flex-col items-end md:flex-row md:justify-between md:items-center gap-3 text-gray-600 dark:text-gray-300">
        <Link href="https://fresh.deno.dev" target="_blank">
          <picture>
            <source
              srcset="https://fresh.deno.dev/fresh-badge-dark.svg"
              media="(prefers-color-scheme: dark)"
            />
            <img
              width="197"
              height="37"
              src="https://fresh.deno.dev/fresh-badge.svg"
              alt="Made with Fresh"
            />
          </picture>
        </Link>
        <Text>&copy; Việt Huỳnh {new Date().getFullYear()}</Text>
      </div>
    </footer>
  );
};

export default Footer;
