import { JSX } from "preact/jsx-runtime";

const Link = (props: JSX.HTMLAttributes<HTMLAnchorElement>) => {
  return (
    <a
      {...props}
      class={`text-gray-500 hover:text-gray-700 hover:underline ${
        props.class ?? ""
      }`}
    />
  );
};

export default Link;
