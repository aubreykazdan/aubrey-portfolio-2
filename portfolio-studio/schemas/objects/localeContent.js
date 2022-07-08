const supportedLanguages = [
  { id: "fr", title: "French", isDefault: true },
  { id: "en", title: "English" },
];

const baseLanguage = supportedLanguages.find((l) => l.isDefault);

export default {
  title: "Localized Content",
  name: "localeContent",
  type: "object",
  fieldsets: [
    {
      title: "Title",
      name: "title",
      type: "string",
      initialValue: { title: "Locale Content" },
    },
    {
      title: "Translations",
      name: "translations",
      options: { collapsible: true },
    },
  ],
  fields: supportedLanguages.map((lang) => ({
    title: lang.title,
    name: lang.id,
    type: "array",
    of: [{ type: "block" }],
    fieldset: lang.isDefault ? null : "translations",
  })),
};
