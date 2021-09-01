import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import ViewContainer from "./ViewContainer";

export default function Layout() {
  return (
    <>
      <Header />
      <ViewContainer />
      <Footer />
    </>
  );
}
