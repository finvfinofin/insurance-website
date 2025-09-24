import { DocumentIcon } from "@sanity/icons";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: "page",
  type: "document",
  title: "Pages",
  icon: DocumentIcon,
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      default: "",
    },
    {
      name: "section",
      title: "Section",
      type: "array",
      of: [
        {
          name: "items",
          title: "Items",
          type: "object",
          fields: [
            {
              name: "title",
              type: "string",
              title: "Title",
              default: "",
            },
            {
              name: "cssClass",
              type: "string",
              title: "Section Css Class",
              default: "",
            },
            {
              name: "section",
              type: "number",
              title: "Section Order",
              default: "",
            },
            {
              name: "isSlide",
              type: "boolean",
              title: "Is Slide",
              default: false,
            },
            {
              name: "mobileSlideImage",
              type: "file",
              title: "Mobile Slide Image",
              default: "",
            },
            {
              name: "align",
              type: "string",
              title: "Align",
              default: "",
            },
            {
              name: "isParallax",
              type: "boolean",
              title: "Is Parallax",
              default: false,
            },
            {
              name: "header",
              type: "text",
              title: "Header",
              default: "",
            },
            {
              name: "name",
              type: "text",
              title: "Name",
              default: "",
            },
            {
              name: "name_mobile",
              type: "text",
              title: "Name Mobile",
              default: "",
            },
            {
              name: "flipText",
              type: "array",
              title: "Flip Text",
              of: [
                {
                  name: "listitem",
                  title: "List Items",
                  type: "text",
                },
              ],
            },
            {
              name: "description",
              type: "text",
              title: "Description",
              default: "",
            },
            {
              name: "description2",
              type: "text",
              title: "Description 2",
              default: "",
            },
            {
              name: "bgvidfile",
              title: "Background Video File",
              type: "file", // The type for file uploads
              options: {
                // Display original filename and other details
                storeOriginalFilename: true,
              },
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
              name: "rightanimationfile",
              title: "Right Animation File(Json)",
              type: "file", // The type for file uploads
              options: {
                // Display original filename and other details
                storeOriginalFilename: true,
              },
            },
            {
              name: "headingimgfile",
              title: "Heading Image File",
              type: "file", // The type for file uploads
              options: {
                // Display original filename and other details
                storeOriginalFilename: true,
              },
            },
            {
              name: "bulletedList",
              title: "Bulleted List",
              type: "array",
              of: [
                {
                  name: "listitem",
                  title: "List Items",
                  type: "object",
                  fields: [
                    {
                      name: "bullet",
                      title: "Bullet Icon",
                      type: "file", // The type for file uploads
                      options: {
                        // Display original filename and other details
                        storeOriginalFilename: true,
                      },
                    },
                    {
                      name: "title",
                      title: "Text Content",
                      type: "string",
                    },
                  ],
                },
              ],
            },
            {
              name: "subheading",
              title: "Sub Heading (bottom)",
              type: "object",
              fields: [
                {
                  name: "bullet",
                  title: "Text Image",
                  type: "file", // The type for file uploads
                  options: {
                    // Display original filename and other details
                    storeOriginalFilename: true,
                  },
                },
                {
                  name: "heading",
                  title: "Text Content - (Line 1)",
                  type: "string",
                },
                {
                  name: "heading2",
                  title: "Text Content - (Line 2)",
                  type: "string",
                },
              ],
            },
            {
              name: "button",
              type: "object",
              title: "Button",
              fields: [
                {
                  name: "label",
                  type: "string",
                  title: "Label",
                  default: "",
                },
                {
                  name: "link",
                  type: "string",
                  title: "Link",
                  default: "",
                },
                {
                  name: "type",
                  type: "string",
                  title: "Type",
                  default: "rounded",
                },
              ],
            },
            {
              name: "htmlContent",
              type: "array",
              title: "Html Content",
              of: [{ type: "block" }],
              default: "",
            },
            {
              name: "data",
              title: "Data",
              type: "array",
              of: [
                {
                  name: "dataArray",
                  title: "dataArray",
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
  ],
};
