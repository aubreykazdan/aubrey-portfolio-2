// deskStructure.js
import S from "@sanity/desk-tool/structure-builder";
import React from "react";

export default () =>
  S.list()
    .title("Base")
    .items([
      S.listItem()
        .title("General Settings")
        .child(
          S.editor().schemaType("siteSettings").documentId("siteSettings")
        ),

      S.divider(),

      S.listItem()
        .title("Socials")
        .child(S.documentTypeList("socials").title("Socials")),

      S.divider(),

      S.listItem()
        .title("Pages")
        .child(S.documentTypeList("page").title("Pages")),

      ...S.documentTypeListItems().filter(
        (listItem) =>
          ![
            "siteSettings",
            "page",
            "cta",
            "socials",
            "project",
            "navMenu",
            "blog",
            "post",
          ].includes(listItem.getId())
      ),
    ]);
