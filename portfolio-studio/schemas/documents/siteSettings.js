export default {
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  __experimental_actions: ["create", "update", "delete", "publish"],
  initialValue: {
    subtitle: "Meta Settings",
  },
  fields: [
    {
      name: "subtitle",
      title: "Subtitle",
      type: "string",
      hidden: true,
    },
    {
      name: "title",
      title: "Website Title",
      type: "string",
    },
    {
      name: "ogImage",
      title: "OG Image",
      type: "image",
    },
    {
      name: "description",
      title: "Meta Description",
      type: "localeString",
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "url",
    },
  },
};
