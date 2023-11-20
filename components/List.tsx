import { JSX } from "preact/jsx-runtime";

const List = (props: JSX.HTMLAttributes<HTMLUListElement>) => {
  return <ul {...props} class={`list-disc ${props.class ?? ""}`} />;
};

const Item = (props: JSX.HTMLAttributes<HTMLLIElement>) => {
  return <li {...props} class={`ml-3 mt-2.5 ${props.class ?? ""}`} />;
};

List.Item = Item;

export default List;
