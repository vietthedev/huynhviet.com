import { JSX } from "preact/jsx-runtime";

const Subtitle = (props: JSX.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h3 {...props} class={`text-lg mb-3 font-medium ${props.class ?? ""}`} />
  );
};

export default Subtitle;
