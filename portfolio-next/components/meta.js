import Head from "next/head";

export default function Meta({ page, title, twitter }) {
  const { description, ogImage } = page;
  return (
    <Head>
      <meta charSet="utf-8" />
      <link rel="shortcut icon" href="/favicon.ico" />
      {/* <meta name="description" content={description.en} key="ogdesc" /> */}
      <meta property="og:title" content={title} key="ogtitle" />
      {/* <meta property="og:image" content={ogImage.asset.url} key="ogimage" /> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitter} />
      <title>{title}</title>
    </Head>
  );
}
