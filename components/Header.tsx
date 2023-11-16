import { PageProps } from "$fresh/server.ts";

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
              <a
                href={menu.href}
                class={"text-gray-500 hover:text-gray-700 hover:underline py-1 border-gray-500" +
                  (pathname === menu.href ? " font-bold" : "")}
              >
                {menu.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
