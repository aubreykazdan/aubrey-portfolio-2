export default {
  name: "contentBlock",
  title: "Content Block",
  type: "object",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "localeString",
    },
    {
      name: "subtitle",
      type: "localeString",
      title: "Subtitle",
    },
    {
      title: "Content",
      name: "content",
      type: "localeContent",
    },
    {
      name: "cta",
      title: "Call to Action",
      type: "cta",
    },
  ],
  preview: {
    select: {
      title: "title.fr",
      subtitle: "subtitle.fr",
    },
  },
};
