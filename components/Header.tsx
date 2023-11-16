import { PageProps } from "$fresh/server.ts";
import Link from "@/components/Link.tsx";

const menus = [
  { href: "/", name: "Home" },
  { href: "/blog", name: "Blog" },
];

const Header = (props: Pick<PageProps, "url">) => {
  const { url: { pathname } } = props;

  return (
    <header class="border-b border-gray-300">
      <nav class="py-6 px-8 flex flex-col md:flex-row gap-4">
        <div class="flex items-center flex-1">
          <a class="text-3xl font-bold" href="/">Việt Huỳnh</a>
        </div>
        <ul class="flex items-center gap-6">
          {menus.map((menu) => (
            <li key={menu.name}>
              <Link
                href={menu.href}
                class={"py-1" +
                  (pathname === menu.href ? " font-bold" : "")}
              >
                {menu.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
