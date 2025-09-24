import { DocumentIcon } from "@sanity/icons";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: "infoPages",
  type: "document",
  title: "Info Page",
  icon: DocumentIcon,
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      default: "",
    },
    {
      name: "banner",
      title: "Banner",
      type: "object",
      fields: [
        {
          name: "title",
          type: "string",
          default: "",
        },
        {
          name: "description",
          type: "text",
          default: "",
        },
        {
          name: "cssClass",
          type: "string",
          title: "Section Css Class",
          default: "",
        },
        {
          name: "bgimg",
          title: "Background Image File",
          type: "file", // The type for file uploads
          options: {
            // Display original filename and other details
            storeOriginalFilename: true,
          },
        },
      ],
    },
    {
      name: "brand",
      title: "Brand",
      type: "object",
      fields: [
        {
          name: "cssClass",
          type: "string",
          title: "Section Css Class",
          default: "",
        },
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
          name: "content",
          title: "Brand Vision Mission",
          type: "array",
          of: [
            {
              name: "item",
              title: "Item",
              type: "object",
              fields: [
                {
                  name: "brandImage",
                  title: "Brand Image",
                  type: "file", // The type for file uploads
                  options: {
                    // Display original filename and other details
                    storeOriginalFilename: true,
                  },
                },
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
              ],
            },
          ],
        },
      ],
    },
    {
      name: "values",
      title: "Our Values",
      type: "object",
      fields: [
        {
          name: "cssClass",
          type: "string",
          title: "Section Css Class",
          default: "",
        },
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
          name: "List",
          title: "Values",
          type: "array",
          of: [
            {
              name: "item",
              title: "Item",
              type: "object",
              fields: [
                {
                  name: "icon",
                  title: "Icon File",
                  type: "file", // The type for file uploads
                  options: {
                    // Display original filename and other details
                    storeOriginalFilename: true,
                  },
                },
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
              ],
            },
          ],
        },
      ],
    },
    {
      name: "team",
      title: "Our Team",
      type: "object",
      fields: [
        {
          name: "cssClass",
          type: "string",
          title: "Section Css Class",
          default: "",
        },
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
          name: "teamImg",
          title: "Team Img",
          type: "file", // The type for file uploads
          options: {
            // Display original filename and other details
            storeOriginalFilename: true,
          },
        },
      ],
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
              name: "bgimgfile",
              title: "Background Image File",
              type: "file", // The type for file uploads
              options: {
                // Display original filename and other details
                storeOriginalFilename: true,
              },
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
    {
      name: "partners_certifications",
      title: "Partners & Certifications",
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
      ],
    },
    {
      name: "finImg",
      title: "Powered by finvasia",
      type: "file", // The type for file uploads
      options: {
        // Display original filename and other details
        storeOriginalFilename: true,
      },
    },
  ],
};
