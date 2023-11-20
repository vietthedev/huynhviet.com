import IconBrandGithub from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/brand-github.tsx";
import IconBrandLinkedin from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/brand-linkedin.tsx";
import { VNode } from "preact";
import Link from "@/components/Link.tsx";
import Title from "@/components/Typography/Title.tsx";
import List from "@/components/List.tsx";
import Text from "@/components/Typography/Text.tsx";

const menus: {
  title: string;
  children: { name: string; href: string; icon?: VNode; title?: string }[];
}[] = [
  {
    title: "Navigation",
    children: [
      { name: "Home", href: "/" },
      { name: "Blog", href: "/blog" },
    ],
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
    <footer class="border-t border-gray-300 px-8 md:px-32 py-8 text-sm">
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
                        <Text class="flex items-center">
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
      <div class="mt-4 text-right text-gray-600 text-xs">
        &copy; Việt Huỳnh {new Date().getFullYear()}
      </div>
    </footer>
  );
};

export default Footer;
