import React, { FC } from "react";
import { Footer } from "../components/common/Footer";
import { Header } from "../components/common/Header";

interface Props {}

export const ProductDetails: FC<Props> = (props: Props) => {
  return (
    <>
      <Header />
 
      <Footer />
    </>
  );
};
