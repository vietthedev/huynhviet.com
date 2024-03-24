import { JSX } from "preact";

interface ContainerProps extends JSX.HTMLAttributes<HTMLDivElement> {
  title?: string;
}

const Container = (props: ContainerProps) => {
  const { children, title } = props;

  return (
    <>
      {title && <h1 class="text-4xl md:text-5xl mb-8 font-bold">{title}</h1>}
      {children}
    </>
  );
};

export default Container;
