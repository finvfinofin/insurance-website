// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: "navBar",
  type: "document",
  title: "Nav Bar",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "cta",
      type: "object",
      title: "Call to Action",
      fields: [
        {
          name: "label",
          type: "string",
          title: "Label",
        },
        {
          name: "link",
          type: "string",
          title: "Link",
        },
      ],
    },
    {
      name: "items",
      type: "array",
      title: "Items",
      of: [
        {
          name: "item",
          type: "object",
          fields: [
            {
              name: "label",
              type: "string",
              title: "Label",
            },
            {
              name: "link",
              type: "string",
              title: "Link",
            },
            {
              name: "position",
              type: "number",
              title: "Position",
            },
            {
              name: "icon",
              type: "image",
              title: "Icon",
            },
          ],
        },
      ],
    },
    {
      name: "logo",
      type: "image",
      title: "Logo",
      options: {
        hotspot: true, // Optional, enables hotspot functionality
      },
    },
    {
      name: "dark_logo",
      type: "image",
      title: "Logo Dark",
      options: {
        hotspot: true, // Optional, enables hotspot functionality
      },
    },
  ],
};
