import { ComponentChildren } from "preact";

interface CardProps {
  children: ComponentChildren;
  class?: string;
}

const Card = (props: CardProps) => {
  const { children } = props;

  return (
    <div
      class={`p-4 rounded-lg bg-gray-200 dark:bg-gray-700 hover:shadow transition motion-reduce:transition-none ${
        props.class ?? ""
      }`}
    >
      {children}
    </div>
  );
};

export default Card;
