import { PrismicRichText } from "@prismicio/react";

export default function Index({ slice }) {
    return (
      <section>
        <PrismicRichText field={slice.primary.text} />
      </section>
    )
  }