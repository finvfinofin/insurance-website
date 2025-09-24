import { DocumentIcon } from "@sanity/icons";

export default {
  name: "policies",
  type: "document",
  title: "Policies",
  icon: DocumentIcon,
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      default: "",
    },
    {
      name: "slug",
      type: "slug",
      options: { source: "title" },
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};
