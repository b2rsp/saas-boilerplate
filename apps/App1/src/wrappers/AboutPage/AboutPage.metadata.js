import React from "react";
import Head from "next/head";
import { facebook } from "~/settings";

export function AboutPageMetadata(props) {
  const meta = {
    title: "About Us - Obby",
    desc:
      "Discover London's favourite courses, classes and workshops. Be it cooking, sushi-making, photography, pottery, baking, floristry or whatever else your heart desires.",
    image: "https://obby.co.uk/static/images/about/header.jpg"
  };
  const ldData = {
    "@context": "http://schema.org",
    "@type": "LocalBusiness",
    name: "Obby",
    description: "Discover London's favourite courses, classes and workshops.",
    image: "https://obby.co.uk/static/images/metadata_card.jpg",
    url: "https://obby.co.uk",
    address: {
      "@type": "PostalAddress",
      addressLocality: "London",
      postalCode: "W1U 6BP",
      streetAddress: "1 Bickenhall Mansions, Bickenhall Street"
    },
    logo: {
      "@type": "ImageObject",
      url: "https://obby.co.uk/static/images/metadata_card.jpg"
    }
  };
  return (
    <Head>
      <title>{meta.title}</title>
      <meta name="description" content={meta.desc} />
      <meta property="fb:app_id" content={facebook.appId} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.desc} />
      <meta property="og:url" content="https://obby.co.uk/about-us" />
      <meta property="og:image" content={meta.image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Obby" />
      <meta property="twitter:title" content={meta.title} />
      <meta property="twitter:description" content={meta.desc} />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:image" content={meta.image} />
      <meta property="twitter:image:alt" content={meta.title} />
      <link rel="canonical" href="https://obby.co.uk/about-us" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: `${JSON.stringify(ldData)}` }}
      />
    </Head>
  );
}
