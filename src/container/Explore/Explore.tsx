import { useState } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";
import { AiFillPlayCircle } from "react-icons/ai";
import { Container } from "./styles";

export default function Explore() {
  const [isOpen, setOpen] = useState(false);
  return (
    <Container>
      <div>
        <h1>Explore GymFit</h1>

        <>
          <ModalVideo
            channel="youtube"
            autoplay
            isOpen={isOpen}
            videoId="4-zjQvTDnbw"
            onClose={() => setOpen(false)}
          />

          <AiFillPlayCircle size="100px" onClick={() => setOpen(true)} />
        </>

        <p>Watch Now</p>
      </div>
    </Container>
  );
}
