import { AppProps } from "$fresh/server.ts";
import { Partial } from "$fresh/runtime.ts";
import nightwind from "nightwind/helper.js";

const App = (props: AppProps) => {
  const { Component } = props;

  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="stylesheet" href="/styles.css" />
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script dangerouslySetInnerHTML={{ __html: nightwind.init() }} />
      </head>
      <body
        class="min-h-screen grid grid-rows-[auto_1fr_auto] bg-gray-100 text-gray-700 transition motion-reduce:transition-none nightwind"
        f-client-nav
      >
        <Partial name="body">
          <Component />
        </Partial>
      </body>
    </html>
  );
};

export default App;
