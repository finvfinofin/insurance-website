import { HomeIcon } from "@sanity/icons";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: "home",
  type: "document",
  title: "Home",
  icon: HomeIcon,
  fields: [
    // Section Name
    {
      name: "name",
      type: "text",
      title: "Name",
      default: "",
    },
    // Section Alignment: 'left | right | center'
    {
      name: "align",
      type: "string",
      title: "Align",
      default: "",
    },
    // Section Number
    {
      name: "section",
      type: "number",
      title: "Section",
      default: "",
    },
    // Backkground Video
    {
      name: "BackgroundURL",
      type: "fileType",
      title: "BackgroundURL",
      default: "",
    },
    // Backkground Style
    {
      name: "BackgroundStyle",
      type: "string",
      title: "BackgroundStyle",
      default: "",
    },
    // Page Header
    {
      name: "header",
      type: "text",
      title: "Header",
      default: "",
    },
    // Page Heading
    {
      name: "title",
      type: "string",
      title: "Title",
      default: "",
    },
    // Page Discription
    {
      name: "description",
      type: "text",
      title: "Description",
      default: "",
    },
    // Custom HTML
    {
      name: "htmlContent",
      type: "array",
      title: "Html Content",
      of: [{ type: "block" }],
      default: "",
    },
    // Page Button
    {
      name: "buttontext",
      type: "object",
      title: "button Text",
      fields: [
        {
          name: "label",
          type: "string",
          title: "Label",
          default: "",
        },
        {
          name: "link",
          type: "url",
          title: "Link",
          default: "",
        },
        // ----------------------------
        {
          name: "type",
          type: "string",
          title: "Type",
          default: `'normal' | 'rounded'`,
        },
      ],
    },
    // Section Right content
    {
      name: "file",
      type: "url",
      title: "Json File Link",
      default: "",
    },
    // Section Right content
    {
      name: "filetype",
      type: "string",
      title: "File Type",
      default: "",
    },
    {
      name: "list",
      title: "List",
      type: "array",
      of: [
        {
          name: "item",
          title: "Item",
          type: "object",
          fields: [
            {
              name: "title",
              title: "Title",
              type: "text",
              default: "",
            },
            {
              name: "description",
              title: "Description",
              type: "text",
              default: "",
            },
            {
              name: "data",
              title: "Data",
              type: "array",
              of: [
                {
                  name: "datum",
                  title: "Datum",
                  type: "object",
                  fields: [
                    {
                      name: "title",
                      title: "Title",
                      type: "string",
                      default: "",
                    },
                    {
                      name: "description",
                      title: "Description",
                      type: "text",
                      default: "",
                    },
                    {
                      name: "image",
                      type: "file",
                      title: "Image",
                      default: "",
                      options: {
                        hotspot: true, // If you want to enable hotspot for cropping
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
