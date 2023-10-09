const ordersSchema = {
  version: 0,
  primaryKey: "id",
  type: "object",
  properties: {
    id: {
      type: "string",
      maxLength: 100, // <- the primary key must have set maxLength
    },
    products: {
      type: "array",
      items: {
        type: "object",
        properties: {
          name: {
            type: "string",
          },
          quantity: {
            type: "string",
          },
          unitPrice: {
            type: "string",
          },
          total: {
            type: "string",
          },
          id: {
            type: "string",
          },
        },
      },
    },
    subtotal: {
      type: "string",
    },
    tax: {
      type: "string",
    },
    discount: {
      type: "string",
    },
    amountDue: {
      type: "string",
    },
    total: {
      type: "string",
    },
    created_at: {
      type: "date-time",
    },
  },
  required: ["id", "products", "total"],
};
