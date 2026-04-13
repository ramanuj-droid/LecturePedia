import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "LecturePedia API",
      version: "1.0.0",
      description: "Auth API documentation (cookie-based auth)",
    },
    servers: [
      {
        url: "https://lecturepedia-7jll.onrender.com/api",
      },
    ],

    components: {
      securitySchemes: {
        cookieAuth: {
          type: "apiKey",
          in: "cookie",
          name: "token",
        },
      },

      schemas: {
        User: {
          type: "object",
          properties: {
            _id: { type: "string" },
            name: { type: "string" },
            department: { type: "string" },
            email: { type: "string" },
            activeSession: {
              type: "object",
              properties: {
                token: { type: "string" },
                deviceId: { type: "string" },
                loginTime: {
                  type: "string",
                  format: "date-time",
                },
              },
            },
            createdAt: {
              type: "string",
              format: "date-time",
            },
            updatedAt: {
              type: "string",
              format: "date-time",
            },
          },
        },

        RegisterInput: {
          type: "object",
          required: ["name", "email", "password"],
          properties: {
            name: { type: "string" },
            department: { type: "string" },
            email: { type: "string" },
            password: { type: "string" },
          },
        },

        LoginInput: {
          type: "object",
          required: ["email", "password"],
          properties: {
            email: { type: "string" },
            password: { type: "string" },
          },
        },

        SuccessResponse: {
          type: "object",
          properties: {
            success: { type: "boolean" },
            message: { type: "string" },
          },
        },
      },
    },

    paths: {
      "/auth/register": {
        post: {
          summary: "Register a new user",
          tags: ["Auth"],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/RegisterInput",
                },
              },
            },
          },
          responses: {
            201: {
              description: "User registered",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      success: { type: "boolean" },
                      message: { type: "string" },
                      user: {
                        $ref: "#/components/schemas/User",
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },

      "/auth/login": {
        post: {
          summary: "Login user (sets HTTP-only cookie)",
          tags: ["Auth"],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/LoginInput",
                },
              },
            },
          },
          responses: {
            200: {
              description: "Login successful",
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/components/schemas/SuccessResponse",
                  },
                },
              },
            },
          },
        },
      },

      "/auth/logout": {
        post: {
          summary: "Logout user",
          tags: ["Auth"],
          security: [{ cookieAuth: [] }],
          responses: {
            200: {
              description: "Logout successful",
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/components/schemas/SuccessResponse",
                  },
                },
              },
            },
          },
        },
      },

      "/auth/me": {
        get: {
          summary: "Get current logged-in user",
          tags: ["Auth"],
          security: [{ cookieAuth: [] }],
          responses: {
            200: {
              description: "Current user",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      success: { type: "boolean" },
                      user: {
                        $ref: "#/components/schemas/User",
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },

  apis: [],
};

const swaggerSpec = swaggerJsdoc(options);
export default swaggerSpec;