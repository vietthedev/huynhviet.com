import { PageProps } from "$fresh/server.ts";
import Footer from "@/components/Footer.tsx";
import Header from "@/components/Header.tsx";

const Layout = (props: PageProps) => {
  const { Component } = props;

  return (
    <>
      <Header />
      <main>
        <Component />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
