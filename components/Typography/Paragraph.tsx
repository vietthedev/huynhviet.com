import { JSX } from "preact/jsx-runtime";

const Paragraph = (props: JSX.HTMLAttributes<HTMLParagraphElement>) => {
  return <p {...props} class={`my-4 ${props.class ?? ""}`} />;
};

export default Paragraph;
