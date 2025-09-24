export default {
  name: "footer",
  type: "document",
  title: "Footer",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "content",
      title: "Content",
      type: "object",
      fields: [
        {
          name: "name",
          title: "Name",
          type: "string",
        },
        {
          name: "image",
          title: "Image",
          type: "image",
          options: {
            hotspot: true, // If you want to enable hotspot for cropping
          },
        },
        {
          name: "description",
          title: "Description",
          type: "text",
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
              name: "name",
              title: "Name",
              type: "string",
            },
            {
              name: "position",
              title: "Position",
              type: "string",
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
                      name: "label",
                      title: "Label",
                      type: "string",
                    },
                    {
                      name: "link",
                      title: "Link",
                      type: "string",
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
      type: "array",
      of: [
        {
          name: "item",
          title: "Item",
          type: "object",
          fields: [
            {
              name: "imageLink",
              title: "Image Link",
              type: "image", // The type for file uploads
              options: {
                // Display original filename and other details
                storeOriginalFilename: true,
              },
            },
            {
              name: "fileLink",
              title: "File Link",
              type: "file", // The type for file uploads
              options: {
                // Display original filename and other details
                storeOriginalFilename: true,
              },
            },
          ],
        },
      ],
    },
  ],
};
