export default {
  name: "page",
  type: "document",
  title: "Page Builder",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description:
        "Use this title to describe what kind of page you are making (home, about, contact, etc.)",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: (doc, options) => options.parent.title,
      },
    },
    {
      name: "pageBuilder",
      type: "array",
      title: "Page builder",
      of: [
        { type: "project" },
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
    },
  },
};
