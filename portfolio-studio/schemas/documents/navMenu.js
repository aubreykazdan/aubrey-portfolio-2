export default {
  name: "navMenu",
  title: "Nav Menu",
  type: "document",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      description: "Select type of menu",
      options: {
        list: ["Main", "FAQ"],
      },
    },
    {
      name: "items",
      type: "array",
      title: "Navigation items",
      of: [{ type: "cta" }],
    },
  ],
  preview: {
    select: {
      title: "title",
    },
  },
};
