export const configuration = () => ({
  app: {
    port: parseInt(process.env.PORT ?? "4000", 10),
    allowedOrigins: process.env.ALLOWED_ORIGINS ?? ""
  },
  auth: {
    jwtSecret: process.env.JWT_SECRET || "change-me",
    jwtExpiresIn: process.env.JWT_EXPIRES_IN || "15m"
  },
  database: {
    url: process.env.DATABASE_URL || "",
    logging: process.env.DB_LOGGING === "true"
  },
  search: {
    node: process.env.ELASTIC_NODE || "",
    apiKey: process.env.ELASTIC_API_KEY || ""
  },
  storage: {
    bucket: process.env.S3_BUCKET || "",
    region: process.env.AWS_REGION || ""
  }
});

