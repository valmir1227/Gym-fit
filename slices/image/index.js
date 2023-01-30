import * as prismicH from "@prismicio/helpers";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import styled from "styled-components";

const Section = styled.section`

img {
  width: 700px;
  height: 400px;
}
`

const Image = ({ slice }) => {
  const image = slice.primary.image;

  return (
    <Section>
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
    </Section>
  );
};

export default Image;
