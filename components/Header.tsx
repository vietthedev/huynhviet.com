import Link from "@/components/Link.tsx";
import List from "@/components/List.tsx";
import Hamburger from "@/components/Hamburger.tsx";
import Title from "@/components/Typography/Title.tsx";

const menus = [
  { href: "/", name: "Home" },
  { href: "/blog", name: "Blog" },
];

const Header = () => {
  return (
    <header class="border-b border-gray-300">
      <nav class="py-6 px-8 md:px-32 flex items-center md:flex-row gap-4">
        <div class="flex items-center flex-1">
          <Link class="text-3xl font-bold hover:!no-underline" href="/">
            Việt Huỳnh
          </Link>
        </div>
        <List class="hidden lg:flex items-center gap-6 list-none">
          {menus.map((menu) => (
            <List.Item key={menu.name} class="!ml-0 !mt-0">
              <Link
                href={menu.href}
                class="py-1 data-[current]:font-bold"
              >
                {menu.name}
              </Link>
            </List.Item>
          ))}
        </List>

        <Hamburger>
          <Link class="text-3xl font-bold hover:!no-underline" href="/">
            <Title>
              Việt Huỳnh
            </Title>
          </Link>
          <List class="list-none">
            {menus.map((menu) => (
              <List.Item key={menu.name}>
                <Link
                  href={menu.href}
                  class="py-1 data-[current]:font-bold"
                >
                  {menu.name}
                </Link>
              </List.Item>
            ))}
          </List>
        </Hamburger>
      </nav>
    </header>
  );
};

export default Header;
