import React, { FC } from "react";
import { Footer } from "../components/common/Footer";
import { Header } from "../components/common/Header";



interface Props {}

export const Home: FC<Props> = (props: Props) => {

  return (
    <>
      <Header />
      <section>
        <img
          src="https://assets.hypefactors.com/stories/scaled/large/HYeRy9xZVCkDJRKXopAZxxpNZL2juKP1Cxi1xxm8.png"
          alt=""
        />
      </section>
      <Footer />
    </>
  );
};
