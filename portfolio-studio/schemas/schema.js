import createSchema from "part:@sanity/base/schema-creator";

import schemaTypes from "all:part:@sanity/base/schema-type";

import page from "./documents/page";
import siteSettings from "./documents/siteSettings";
import project from "./documents/project";
import socials from "./documents/socials";
import navMenu from "./documents/navMenu";
import cta from "./objects/cta";
import blog from "./documents/blog";
import post from "./documents/post";
import blockContent from "./arrays/blockContent";
import localeString from "./objects/localeString";
import localeContent from "./objects/localeContent";
import contentBlock from "./objects/contentBlock";
import svgUploadPreview from "sanity-plugin-inline-svg";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    page,
    project,
    siteSettings,
    socials,
    navMenu,
    cta,
    blog,
    post,
    blockContent,
    localeString,
    localeContent,
    contentBlock,
    svgUploadPreview,
  ]),
});
