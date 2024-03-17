import Link from "@/components/Link.tsx";
import List from "@/components/List.tsx";
import Hamburger from "@/components/Hamburger.tsx";
import { NAV_ITEMS } from "@/lib/constants.ts";

const Header = () => {
  return (
    <header class="border-b">
      <nav class="py-6 px-4 lg:px-32 flex items-center md:flex-row gap-4">
        <Link class="order-2 md:order-1" href="/">
          <h1 class="text-4xl font-bold">Việt Huỳnh</h1>
        </Link>
        <Hamburger>
          <Link class="order-2 md:order-1" href="/">
            <h1 class="mb-6 text-2xl font-bold">Việt Huỳnh</h1>
          </Link>
          <List class="list-none">
            {NAV_ITEMS.map((item) => (
              <List.Item key={item.name}>
                <Link
                  href={item.href}
                  class={`py-1 aria-[current='page']:active-link ${
                    item.exact ? "" : "aria-[current='true']:active-link"
                  }`}
                >
                  {item.name}
                </Link>
              </List.Item>
            ))}
          </List>
        </Hamburger>
        <List class="hidden md:flex md:flex-1 md:justify-end items-center gap-6 list-none order-2">
          {NAV_ITEMS.map((item) => (
            <List.Item key={item.name} class="!ml-0 !mt-0">
              <Link
                href={item.href}
                class={`py-1 aria-[current='page']:active-link ${
                  item.exact ? "" : "aria-[current='true']:active-link"
                }`}
              >
                {item.name}
              </Link>
            </List.Item>
          ))}
        </List>
      </nav>
    </header>
  );
};

export default Header;
