import Image from "next/image";
import React from "react";
import styled from "styled-components";
import Loader from "../../assets/loader.svg";

export const Load = styled.div`
  width: 100%;
  height: 100%;
  background: #241d24;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
  * {
    overflow: hidden;
  }
`;

export default function Loading() {
  return (
    <Load>
      <Image src={Loader} alt="" width={100} height={100} />
    </Load>
  );
}
