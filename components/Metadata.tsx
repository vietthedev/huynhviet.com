import { VNode } from "preact";

type OpenGraphMetadata = { [key: string]: string | OpenGraphMetadata };

interface MetadataProps {
  description: string;
  og: OpenGraphMetadata;
  title: string;
  url: URL;
}

const generateOpenGraphMeta = (openGraphMetadata: OpenGraphMetadata) => {
  const elements: VNode<HTMLMetaElement>[] = [];
  const stack: { prefix: string; metadata: OpenGraphMetadata }[] = [{
    prefix: "og",
    metadata: openGraphMetadata,
  }];

  while (stack.length > 0) {
    const { prefix, metadata } = stack.pop()!;

    for (const [key, value] of Object.entries(metadata)) {
      const newPrefix = `${prefix}:${key}`;

      if (typeof value === "string") {
        elements.push(
          <meta property={newPrefix} content={value} />,
        );

        continue;
      }

      stack.push({ prefix: newPrefix, metadata: value });
    }
  }

  return elements;
};

const Metadata = (props: MetadataProps) => {
  const { description, og, title, url } = props;

  return (
    <>
      <link rel="canonical" href={url.origin + url.pathname} />
      <meta
        name="description"
        content={description}
      />
      {generateOpenGraphMeta(og)}
      <title>{title}</title>
    </>
  );
};

export default Metadata;
