import { ComponentChildren } from "preact";

interface TagProps {
  children: ComponentChildren;
}

const Tag = (props: TagProps) => {
  const { children } = props;

  return (
    <div class="p-2 text-sm dark:text-white bg-gray-300 dark:bg-gray-600 hover:bg-gray-200 dark:hover:bg-gray-500 rounded-lg cursor-pointer">
      {children}
    </div>
  );
};

export default Tag;
