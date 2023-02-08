import * as prismicH from "@prismicio/helpers";
import { PrismicRichText } from "@prismicio/react";

const Text = ({ slice }) => {
  return (
    <div>
      {prismicH.isFilled.richText(slice.primary.text) && (
        <div>
          <PrismicRichText field={slice.primary.text} />
          <br />
        </div>
      )}
    </div>
  );
};

export default Text;
