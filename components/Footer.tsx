import IconBrandGithub from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/brand-github.tsx";
import IconBrandLinkedin from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/brand-linkedin.tsx";
import { VNode } from "preact";
import Link from "@/components/Link.tsx";

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
    <footer class="border-t border-gray-300 px-8 py-8 text-sm">
      <div class="flex flex-col md:flex-row md:justify-center gap-8 md:gap-60">
        {menus.map((item) => (
          <div class="mb-4" key={item.title}>
            <h2 class="text-xl md:text-2xl font-bold">{item.title}</h2>
            <ul class="mt-2">
              {item.children.map((child) => (
                <li class="mt-2" key={child.name}>
                  <Link
                    href={child.href}
                    title={child.title}
                    target="_blank"
                  >
                    {child.icon
                      ? <span class="flex">{child.icon}{child.name}</span>
                      : child.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div class="text-right text-gray-500 text-xs">
        &copy; Việt Huỳnh {new Date().getFullYear()}
      </div>
    </footer>
  );
};

export default Footer;
