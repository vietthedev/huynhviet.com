import Title from "@/components/Typography/Title.tsx";
import type { ComponentChildren } from "preact";
import { JSX } from "preact";

interface ContainerProps extends JSX.HTMLAttributes<HTMLDivElement> {
  title?: string;
}

const Container = (props: ContainerProps) => {
  const { children, title } = props;

  return (
    <div class={`px-4 py-8 max-w-4xl mx-auto ${props.class ?? ""}`}>
      {title && <Title class="!text-5xl !mb-12">{title}</Title>}
      <div>
        {children}
      </div>
    </div>
  );
};

export default Container;
