import { JSX } from "preact/jsx-runtime";

const Container = (props: JSX.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      {...props}
      class={`px-4 py-8 max-w-4xl mx-auto ${props.class ?? ""}`}
    />
  );
};

export default Container;
