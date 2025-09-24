export default {
  name: "banner",
  type: "document",
  title: "Banner",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "description",
      type: "text",
      title: "Description",
      description:
        "Add a description for the banner. This will be displayed on the website.",
    },
    {
      name: "enabled",
      type: "boolean",
      title: "Enable Banner",
      description: "Check this box to display the banner on the website.",
    },
  ],
};
