import { PageProps } from "$fresh/server.ts";
import Link from "@/components/Link.tsx";
import List from "@/components/List.tsx";

const menus = [
  { href: "/", name: "Home" },
  { href: "/blog", name: "Blog" },
];

const Header = (props: Pick<PageProps, "url">) => {
  const { url: { pathname } } = props;

  return (
    <header class="border-b border-gray-300">
      <nav class="py-6 px-8 md:px-32 flex flex-col md:flex-row gap-4">
        <div class="flex items-center flex-1">
          <Link class="text-3xl font-bold hover:!no-underline" href="/">
            Việt Huỳnh
          </Link>
        </div>
        <List class="flex items-center gap-6 list-none">
          {menus.map((menu) => (
            <List.Item key={menu.name} class="ml-0 mt-0">
              <Link
                href={menu.href}
                class={"py-1" +
                  (pathname === menu.href ? " font-bold" : "")}
              >
                {menu.name}
              </Link>
            </List.Item>
          ))}
        </List>
      </nav>
    </header>
  );
};

export default Header;
