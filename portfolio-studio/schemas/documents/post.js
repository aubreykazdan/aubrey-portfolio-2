export default {
  name: "post",
  type: "document",
  title: "Post",
  initialValue: {
    subtitle: "Blog Post",
  },
  fields: [
    {
      name: "subtitle",
      type: "string",
      title: "Subtitle",
      hidden: true,
    },
    {
      name: "image",
      type: "image",
      title: "Image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "alt",
      type: "localeString",
      title: "Alternative text",
      description:
        "Use this to describe your image for users with accessibility needs",
      // validation: (Rule) => Rule.required(),
    },
    {
      name: "title",
      type: "localeString",
      title: "Title",
    },
    {
      name: "excerpt",
      type: "localeString",
      title: "Excerpt",
    },
    {
      name: "content",
      title: "Content",
      type: "localeContent",
    },
  ],

  preview: {
    select: {
      title: "title.en",
      subtitle: "subtitle",
      media: "image",
    },
  },
};
