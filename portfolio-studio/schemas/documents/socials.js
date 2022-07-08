export default {
  name: "socials",
  title: "Socials",
  type: "document",
  // __experimental_actions: ["create", "update", /*'delete',*/ "publish"],
  initialValue: {
    title: "Social Links",
  },
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      hidden: true,
    },
    {
      name: "twitter",
      title: "Twitter URL",
      type: "url",
      placeholder: "https://www.twitter.com/",
    },
    {
      name: "facebook",
      title: "Facebook URL",
      type: "url",
      placeholder: "https://www.facebook.com/",
    },
    {
      name: "youtube",
      title: "YouTube URL",
      type: "url",
      placeholder: "https://www.youtube.com",
    },
  ],
  preview: {
    select: {
      title: "title",
    },
  },
};
