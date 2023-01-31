import * as prismicH from "@prismicio/helpers";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import styled from "styled-components";

const Img = styled.div`
  width: 100%;
  padding: 1rem 0;
  img {
    width: 100%;
    height: 100%;
    border-radius: 3px;
  }
`;

const Image = ({ slice }) => {
  const image = slice.primary.image;

  return (
    <Img>
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
    </Img>
  );
};

export default Image;
