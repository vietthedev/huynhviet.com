import { ComponentChildren } from "preact";

interface HamburgerProps {
  children: ComponentChildren;
}

const Hamburger = (props: HamburgerProps) => {
  const { children } = props;

  return (
    <label
      class="lg:hidden relative z-40 cursor-pointer px-3 py-6 [&_svg]:z-50 [&_svg]:relative"
      for="mobile-menu"
    >
      <input class="peer hidden" type="checkbox" id="mobile-menu" />
      <svg
        class="peer-checked:hidden fill-none stroke-current stroke-[1.2px]"
        width="21"
        height="14"
        viewBox="0 0 21 14"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="0.25"
          y1="1.4"
          x2="20.25"
          y2="1.4"
        >
        </line>
        <line
          x1="0.25"
          y1="7.4"
          x2="20.25"
          y2="7.4"
        >
        </line>
        <line
          x1="0.25"
          y1="13.4"
          x2="10.25"
          y2="13.4"
        >
        </line>
      </svg>
      <svg
        class="h-6 w-6 hidden peer-checked:block fill-none stroke-current stroke-2"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6 18L18 6M6 6l12 12"
        >
        </path>
      </svg>
      <div class="fixed inset-0 z-40 hidden h-full w-full bg-black/50 backdrop-blur-sm peer-checked:block">
        &nbsp;
      </div>
      <div class="fixed top-0 left-0 z-40 h-full w-full -translate-x-full overflow-y-auto overscroll-y-none transition duration-500 motion-reduce:transition-none peer-checked:translate-x-0">
        <div class="float-left min-h-full w-[85%] bg-gray-100 px-6 pt-12 shadow-2xl">
          {children}
        </div>
      </div>
    </label>
  );
};

export default Hamburger;
