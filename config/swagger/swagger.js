import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Inventario de productos y pedidos API",
      version: "1.0.0",
      description: "API para el manejo de productos y usuarios",
    },
    servers: [
      {
        url: "https://marketplace-back-end-4sb8.onrender.com/api/v1",
      },
    ],
  },
  apis: ["config/routes/docs/*.js"],
};

const specs = swaggerJsdoc(options);

export default (app) => {
  app.use(
    "/api/v1/docs", // url donde estaran disponibles los docs
    swaggerUi.serve,
    swaggerUi.setup(specs, {
      explorer: true,
      customCssUrl:
        "https://cdn.jsdelivr.net/npm/swagger-ui-themes@3.0.0/themes/3.x/theme-material.css",
    })
  );
};

// theme-flattop.css;
// theme-monokai.css
// theme-material.css
// theme-muted.css
// theme-outline.css
