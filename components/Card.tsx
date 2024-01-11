import { ComponentChildren } from "preact";

interface CardProps {
  children: ComponentChildren;
  class?: string;
}

const Card = (props: CardProps) => {
  const { children } = props;

  return (
    <div
      class={`p-4 rounded-lg bg-gray-100 dark:bg-gray-800 hover:shadow-md transition motion-reduce:transition-none ${
        props.class ?? ""
      }`}
    >
      {children}
    </div>
  );
};

export default Card;
