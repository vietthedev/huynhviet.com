import { LayoutProps } from "$fresh/server.ts";
import Footer from "../components/Footer.tsx";
import Header from "../components/Header.tsx";

const Layout = (props: LayoutProps) => {
  const { Component, url } = props;

  return (
    <>
      <Header url={url} />
      <main>
        <Component />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
