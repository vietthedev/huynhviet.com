import { JSX } from "preact/jsx-runtime";

const Text = (props: JSX.HTMLAttributes<HTMLSpanElement>) => {
  return <span {...props} class={`${props.class ?? ""}`} />;
};

export default Text;
