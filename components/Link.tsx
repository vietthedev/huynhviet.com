import { JSX } from "preact/jsx-runtime";

const Link = (props: JSX.HTMLAttributes<HTMLAnchorElement>) => {
  return (
    <a
      {...props}
      class={`text-gray-600 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-200 hover:underline ${
        props.class ?? ""
      }`}
    />
  );
};

export default Link;
