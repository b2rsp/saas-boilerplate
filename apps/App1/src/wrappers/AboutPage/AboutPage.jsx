import React from "react";
import { AboutPageMetadata } from "./AboutPage.metadata";
import { AboutPageView } from "./AboutPage.view";

export function AboutPage(props) {
  return (
    <div>
      <AboutPageMetadata />
      <AboutPageView {...props} />
    </div>
  );
}
