import { JSX } from "preact/jsx-runtime";

const Title = (props: JSX.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h2
      {...props}
      class={`text-xl md:text-2xl mb-6 font-bold ${props.class ?? ""}`}
    />
  );
};

export default Title;
