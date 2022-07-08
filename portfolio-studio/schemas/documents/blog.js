export default {
  name: "blog",
  type: "document",
  title: "Blog",
  initialValue: {
    subtitle: "Blog Section",
  },
  fields: [
    {
      name: "subtitle",
      type: "localeString",
      title: "Subtitle",
      hidden: true,
    },
    {
      name: "title",
      type: "localeString",
      title: "Title",
    },
    {
      name: "posts",
      type: "array",
      title: "Posts",
      of: [
        {
          type: "reference",
          title: "Blog Posts",
          to: [{ type: "post" }],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "heading",
      subtitle: "title",
    },
  },
};
