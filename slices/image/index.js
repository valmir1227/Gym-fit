import * as prismicH from "@prismicio/helpers";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

const Image = ({ slice }) => {
  const image = slice.primary.image;

  return (
    <section>
      <figure>
        {prismicH.isFilled.image(image) && (
          <div>
            <PrismicNextImage field={image} />
          </div>
        )}
        {prismicH.isFilled.richText(slice.primary.caption) && (
          <figcaption>
            <PrismicRichText field={slice.primary.caption} />
          </figcaption>
        )}
      </figure>
    </section>
  );
};

export default Image;
