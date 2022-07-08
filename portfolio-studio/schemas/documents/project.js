export default {
  name: "project",
  title: "Project",
  type: "document",
  initialValue: { subtitle: "Project" },
  fields: [
    {
      name: "subtitle",
      type: "string",
      hidden: true,
    },
    {
      name: "title",
      title: "Title",
      type: "localeString",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: (options) => options.title.en,
      },
    },
    {
      name: "date",
      title: "Date",
      type: "date",
    },
  ],
};
