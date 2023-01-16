import { PrismicRichText } from "@prismicio/react";

export const Text = (slice) => {
  return (
    <div>
      <PrismicRichText
        field={slice.primary.text}
        components={{
          paragraph: ({ children }) => <blockquote>{children}</blockquote>,
        }}
      />
    </div>
  );
};
