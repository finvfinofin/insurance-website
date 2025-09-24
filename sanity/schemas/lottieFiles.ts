// eslint-disable-next-line import/no-anonymous-default-export

import { DocumentIcon } from "@sanity/icons";
import { Rule } from "sanity";

export default {
  name: "lottieFiles",
  type: "document",
  title: "Lottie Files",
  icon: DocumentIcon,
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      default: "",
    },
    {
      name: "file_list",
      title: "File List",
      type: "array",
      of: [
        {
          name: "item",
          title: "Item",
          type: "object",
          fields: [
            {
              name: "fileName",
              title: "File Name",
              type: "string", // Change to string if you want custom input
              validation: (Rule: Rule) => Rule.required(),
            },
            {
              name: "jsonFile",
              type: "file",
              title: "Json File",
              options: {
                accept: ".json", // Restrict file upload to JSON files only
              },
              description: "Upload a JSON file",
            },
          ],
        },
      ],
    },
  ],
};
