import { ComponentChildren } from "preact";

interface TagProps {
  children: ComponentChildren;
}

const Tag = (props: TagProps) => {
  const { children } = props;

  return (
    <div class="p-2 text-sm bg-gray-300 hover:bg-gray-400 rounded-lg cursor-pointer">
      {children}
    </div>
  );
};

export default Tag;
