import Link from "@/components/Link.tsx";
import List from "@/components/List.tsx";
import Hamburger from "@/components/Hamburger.tsx";
import { NAV_ITEMS } from "@/lib/constants.ts";

const Header = () => {
  return (
    <header class="border-b">
      <nav class="py-6 px-4 lg:px-32 flex items-center md:flex-row gap-4">
        <Hamburger>
          <List class="list-none">
            {NAV_ITEMS.map((item) => (
              <List.Item key={item.name}>
                <Link
                  href={item.href}
                  class="py-1 aria-[current='page']:font-semibold aria-[current='page']:text-sky-600 dark:aria-[current='page']:text-sky-500"
                >
                  {item.name}
                </Link>
              </List.Item>
            ))}
          </List>
        </Hamburger>
        <List class="hidden md:flex md:flex-1 md:justify-end items-center gap-6 list-none">
          {NAV_ITEMS.map((item) => (
            <List.Item key={item.name} class="!ml-0 !mt-0">
              <Link
                href={item.href}
                class="py-1 aria-[current='page']:font-semibold aria-[current='page']:text-sky-500 dark:aria-[current='page']:text-sky-400"
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
