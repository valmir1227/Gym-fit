import React from "react";
import { PrismicRichText } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.ContentSlice} ContentSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ContentSlice>} ContentProps
 * @param { ContentProps }
 */
const Content = ({ slice }) => (
  <section>
    {slice?.items?.map((item, i) => (
      <PrismicRichText field={item.text} />
    ))}
    <style jsx>{`
      section {
        max-width: 600px;
        margin: 4em auto;
        text-align: center;
        background: black;
      }
      .title {
        color: #8592e0;
      }
    `}</style>
  </section>
);

export default Content;
