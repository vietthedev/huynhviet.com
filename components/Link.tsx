import { JSX } from "preact/jsx-runtime";

const Link = (props: JSX.HTMLAttributes<HTMLAnchorElement>) => {
  return (
    <a
      {...props}
      class={`hover:text-gray-900 dark:hover:text-gray-100 hover:underline ${
        props.class ?? ""
      }`}
    />
  );
};

export default Link;
